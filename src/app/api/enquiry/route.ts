import { NextResponse } from "next/server";
import { saveEnquiry, getAllEnquiries } from "@/lib/enquiry-store";
import { siteConfig } from "@/lib/seo-data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, location, message, pageUrl } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const saved = saveEnquiry({
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : "",
      service: service ? String(service).trim() : "Custom Web Application",
      location: location ? String(location).trim() : "",
      message: message ? String(message).trim() : "",
      pageUrl: pageUrl ? String(pageUrl).trim() : "",
    });

    // Forward to Google Sheets Webhook asynchronously if configured
    const sheetUrl = process.env.GOOGLE_SHEET_URL || siteConfig.googleSheetUrl || "";
    if (sheetUrl && sheetUrl.startsWith("http")) {
      try {
        fetch(sheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saved),
          redirect: "follow",
        }).catch((err) => {
          console.error("Google Sheet webhook error:", err);
        });
      } catch (err) {
        console.error("Failed to trigger Google Sheet webhook:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! Our expert will call you shortly.",
      enquiryId: saved.id,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error saving enquiry:", errorMsg);
    return NextResponse.json(
      { success: false, error: "Failed to save enquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const records = getAllEnquiries();
    return NextResponse.json({
      success: true,
      count: records.length,
      enquiries: records,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}
