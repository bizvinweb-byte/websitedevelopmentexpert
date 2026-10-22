import fs from "fs";
import path from "path";

export interface EnquiryRecord {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  budgetRange?: string;
  location?: string;
  message?: string;
  pageUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const JSON_FILE = path.join(DATA_DIR, "enquiries.json");
const CSV_FILE = path.join(DATA_DIR, "enquiries.csv");
const EXCEL_XML_FILE = path.join(DATA_DIR, "enquiries.xls");

function ensureDirectoryExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function getAllEnquiries(): EnquiryRecord[] {
  ensureDirectoryExists();
  if (!fs.existsSync(JSON_FILE)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(JSON_FILE, "utf-8");
    return JSON.parse(raw) as EnquiryRecord[];
  } catch {
    return [];
  }
}

function escapeXml(unsafe: string): string {
  return (unsafe || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeCsv(field: string): string {
  const str = field || "";
  if (str.includes(",") || str.includes('"') || str.includes("\n") || str.includes("\r")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function generateCsvContent(records: EnquiryRecord[]): string {
  // UTF-8 BOM for Microsoft Excel auto-encoding
  const bom = "\uFEFF";
  const header = [
    "ID",
    "Date & Time",
    "Full Name",
    "Phone Number",
    "Email",
    "Service",
    "City / Location",
    "Project Requirements",
    "Source Page",
  ]
    .map(escapeCsv)
    .join(",");

  const rows = records.map((r) =>
    [
      r.id,
      r.timestamp,
      r.name,
      r.phone,
      r.email || "",
      r.service,
      r.location || "",
      r.message || "",
      r.pageUrl || "",
    ]
      .map(escapeCsv)
      .join(",")
  );

  return bom + [header, ...rows].join("\r\n");
}

export function generateExcelXmlContent(records: EnquiryRecord[]): string {
  const rowsXml = records
    .map(
      (r) => `   <Row ss:StyleID="DataRow">
    <Cell><Data ss:Type="String">${escapeXml(r.id)}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.timestamp)}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.name)}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.phone)}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.email || "-")}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.service)}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.location || "-")}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.message || "-")}</Data></Cell>
    <Cell><Data ss:Type="String">${escapeXml(r.pageUrl || "-")}</Data></Cell>
   </Row>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Header">
   <Font ss:Bold="1" ss:Color="#FFFFFF" ss:FontName="Segoe UI" ss:Size="11"/>
   <Interior ss:Color="#FF6B1E" ss:Pattern="Solid"/>
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E55510"/>
   </Borders>
  </Style>
  <Style ss:ID="DataRow">
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Color="#1E293B"/>
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E2E8F0"/>
   </Borders>
  </Style>
 </Styles>
 <Worksheet ss:Name="Client Enquiries">
  <Table ss:DefaultRowHeight="24">
   <Column ss:Width="45"/>
   <Column ss:Width="150"/>
   <Column ss:Width="140"/>
   <Column ss:Width="120"/>
   <Column ss:Width="180"/>
   <Column ss:Width="170"/>
   <Column ss:Width="110"/>
   <Column ss:Width="260"/>
   <Column ss:Width="180"/>
   <Row ss:StyleID="Header" ss:Height="28">
    <Cell><Data ss:Type="String">ID</Data></Cell>
    <Cell><Data ss:Type="String">Date &amp; Time (IST)</Data></Cell>
    <Cell><Data ss:Type="String">Full Name</Data></Cell>
    <Cell><Data ss:Type="String">Phone Number</Data></Cell>
    <Cell><Data ss:Type="String">Email</Data></Cell>
    <Cell><Data ss:Type="String">Service Required</Data></Cell>
    <Cell><Data ss:Type="String">City / Location</Data></Cell>
    <Cell><Data ss:Type="String">Requirements / Details</Data></Cell>
    <Cell><Data ss:Type="String">Source Page</Data></Cell>
   </Row>
${rowsXml}
  </Table>
 </Worksheet>
</Workbook>`;
}

export function saveEnquiry(recordData: Omit<EnquiryRecord, "id" | "timestamp">): EnquiryRecord {
  ensureDirectoryExists();
  const records = getAllEnquiries();

  const id = `ENQ-${String(records.length + 1).padStart(4, "0")}`;
  const now = new Date();
  const timestamp = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const newRecord: EnquiryRecord = {
    id,
    timestamp,
    ...recordData,
  };

  records.unshift(newRecord); // newest first

  // 1. Write JSON
  fs.writeFileSync(JSON_FILE, JSON.stringify(records, null, 2), "utf-8");

  // 2. Write CSV with UTF-8 BOM (Excel compatible)
  const csvContent = generateCsvContent(records);
  fs.writeFileSync(CSV_FILE, csvContent, "utf-8");

  // 3. Write Excel XML format
  const excelContent = generateExcelXmlContent(records);
  fs.writeFileSync(EXCEL_XML_FILE, excelContent, "utf-8");

  return newRecord;
}
