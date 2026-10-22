import { NextResponse } from "next/server";
import { saveEnquiry, getAllEnquiries } from "@/lib/enquiry-store";

// In-memory rate limiting map (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. Client IP detection for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please try again after 10 minutes or reach us directly on WhatsApp.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      name,
      phone,
      email,
      service,
      budgetRange,
      location,
      message,
      pageUrl,
      honeypot,
      website_hp,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
    } = body;

    // 2. Honeypot Anti-Spam Check: Bot filled hidden field
    if (honeypot || website_hp) {
      // Silently accept without saving to mislead automated spam scrapers
      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully.",
        enquiryId: "ENQ-OK",
      });
    }

    // 3. Strict Server-Side Validation
    const cleanName = String(name || "").trim();
    const cleanPhone = String(phone || "").trim().replace(/[^\d+]/g, "");
    const cleanEmail = String(email || "").trim();

    if (!cleanName || cleanName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Accept Indian 10-digit mobile or international E.164 formats
    const phoneDigits = cleanPhone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile or international phone number." },
        { status: 400 }
      );
    }

    if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 4. Save Enquiry Record with Budget & Attribution
    const saved = saveEnquiry({
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      service: service ? String(service).trim() : "Custom Web Application",
      budgetRange: budgetRange ? String(budgetRange).trim() : "Not Specified",
      location: location ? String(location).trim() : "",
      message: message ? String(message).trim() : "",
      pageUrl: pageUrl ? String(pageUrl).trim() : "",
      utmSource: utmSource ? String(utmSource).trim() : "",
      utmMedium: utmMedium ? String(utmMedium).trim() : "",
      utmCampaign: utmCampaign ? String(utmCampaign).trim() : "",
      utmTerm: utmTerm ? String(utmTerm).trim() : "",
      utmContent: utmContent ? String(utmContent).trim() : "",
    });

    // 5. Forward to Google Sheets Webhook or CRM if configured
    const sheetUrl = process.env.GOOGLE_SHEET_URL || "";
    if (sheetUrl && sheetUrl.startsWith("http")) {
      try {
        fetch(sheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saved),
          redirect: "follow",
        }).catch((err) => {
          console.error("Google Sheet webhook async error:", err);
        });
      } catch (err) {
        console.error("Failed to trigger Google Sheet webhook:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! Our senior architect will review your project and contact you.",
      enquiryId: saved.id,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error saving enquiry:", errorMsg);
    return NextResponse.json(
      { success: false, error: "Failed to submit enquiry. Please try again or message us on WhatsApp." },
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
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
