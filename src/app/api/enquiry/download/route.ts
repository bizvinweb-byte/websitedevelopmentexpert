import { NextResponse } from "next/server";
import { getAllEnquiries, generateCsvContent, generateExcelXmlContent } from "@/lib/enquiry-store";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get("format") || "excel";
    const records = getAllEnquiries();

    const timestamp = new Date().toISOString().slice(0, 10);

    if (format === "csv") {
      const csv = generateCsvContent(records);
      return new NextResponse(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="webdev-enquiries-${timestamp}.csv"`,
        },
      });
    }

    // Default to Excel SpreadsheetML format
    const excelXml = generateExcelXmlContent(records);
    return new NextResponse(excelXml, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.ms-excel; charset=utf-8",
        "Content-Disposition": `attachment; filename="webdev-enquiries-${timestamp}.xls"`,
      },
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Error generating download";
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
