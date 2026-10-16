/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT - CLIENT ENQUIRY FORM TO GOOGLE SHEET CONNECTOR
 * ==============================================================================
 * 
 * STEP-BY-STEP SETUP GUIDE:
 * ------------------------------------------------------------------------------
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Rename sheet title to "WebDev Expert Leads" (or any name you like)
 * 3. In the top menu, click on: Extensions -> Apps Script
 * 4. Delete any existing code in the editor, and PASTE this ENTIRE code block.
 * 5. Click the "Save" icon (Floppy icon or Ctrl + S).
 * 6. Click the blue "Deploy" button (top right) -> Select "New deployment".
 * 7. Click the Gear icon (Select type) -> Choose "Web app".
 * 8. Set the following settings:
 *    - Description: "Website Enquiry Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone" (VERY IMPORTANT: must be Anyone so website can post data!)
 * 9. Click "Deploy" -> "Authorize access" -> Choose your Google Account -> Click "Advanced" -> "Go to Untitled project (unsafe)" -> Click "Allow".
 * 10. Copy the "Web App URL" (starts with https://script.google.com/macros/s/...)
 * 11. Add it to your project in `.env.local`:
 *     GOOGLE_SHEET_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
 * ==============================================================================
 */

const SHEET_NAME = "Enquiries";

function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    let data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const timestamp = data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const id = data.id || "ENQ-" + ("0000" + Math.floor(Math.random() * 9000 + 1000)).slice(-4);
    const name = data.name || "";
    const phone = data.phone || "";
    const email = data.email || "";
    const service = data.service || "Website Development";
    const location = data.location || "";
    const message = data.message || "";
    const pageUrl = data.pageUrl || "";

    // Append new row into the sheet
    sheet.appendRow([
      id,
      timestamp,
      name,
      phone,
      email,
      service,
      location,
      message,
      pageUrl
    ]);

    // Format new row
    const lastRow = sheet.getLastRow();
    const rowRange = sheet.getRange(lastRow, 1, 1, 9);
    rowRange.setVerticalAlignment("middle");
    rowRange.setFontFamily("Segoe UI");
    rowRange.setFontSize(10);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Enquiry saved to Google Sheet!", id: id })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "Google Apps Script Web App is running successfully!" })
  ).setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = [
      "ID",
      "Date & Time (IST)",
      "Full Name",
      "Phone Number",
      "Email Address",
      "Service Required",
      "City / Location",
      "Project Requirements",
      "Source Page URL"
    ];
    sheet.appendRow(headers);

    // Style the header row with orange brand theme
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#FF6B1E");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setFontSize(11);
    headerRange.setFontFamily("Segoe UI");
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");
    sheet.setRowHeight(1, 32);

    // Auto-fit column widths
    for (let i = 1; i <= headers.length; i++) {
      sheet.autoResizeColumn(i);
    }
    sheet.setFrozenRows(1);
  }

  return sheet;
}
