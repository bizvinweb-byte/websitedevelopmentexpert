import { NextResponse } from "next/server";
import dns from "dns/promises";

// In-memory rate limiting map for SEO checker (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_CHECKS_PER_MINUTE = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_CHECKS_PER_MINUTE) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

/**
 * SSRF Protection: Checks if an IPv4 or IPv6 string is within private/internal ranges
 */
function isPrivateIp(ip: string): boolean {
  // IPv4 Loopback
  if (ip.startsWith("127.")) return true;
  // IPv4 Private Class A
  if (ip.startsWith("10.")) return true;
  // IPv4 Link-Local / Cloud Metadata (AWS 169.254.169.254)
  if (ip.startsWith("169.254.")) return true;
  // IPv4 Private Class C
  if (ip.startsWith("192.168.")) return true;
  // IPv4 Private Class B (172.16.0.0 – 172.31.255.255)
  if (ip.startsWith("172.")) {
    const parts = ip.split(".");
    const secondOctet = parseInt(parts[1], 10);
    if (secondOctet >= 16 && secondOctet <= 31) return true;
  }
  // Broadcast or 0.0.0.0
  if (ip === "0.0.0.0" || ip === "255.255.255.255") return true;

  // IPv6 checks
  if (ip === "::1" || ip === "::") return true;
  if (ip.startsWith("fe80:") || ip.startsWith("fc00:") || ip.startsWith("fd00:")) return true;

  return false;
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a minute before analyzing another URL.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    let rawUrl = String(body.url || "").trim();

    if (!rawUrl) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid website URL." },
        { status: 400 }
      );
    }

    if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
      rawUrl = "https://" + rawUrl;
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(rawUrl);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid URL format. Example: https://yourdomain.com" },
        { status: 400 }
      );
    }

    const hostname = parsedUrl.hostname.toLowerCase();

    // Prevent localhost or explicit loopback strings
    if (
      hostname === "localhost" ||
      hostname.endsWith(".localhost") ||
      hostname.endsWith(".local") ||
      hostname.endsWith(".internal")
    ) {
      return NextResponse.json(
        { success: false, error: "Security restriction: Local or internal domains cannot be scanned." },
        { status: 403 }
      );
    }

    // SSRF DNS Resolution check
    try {
      const addresses = await dns.lookup(hostname, { all: true });
      for (const addr of addresses) {
        if (isPrivateIp(addr.address)) {
          return NextResponse.json(
            { success: false, error: "Security restriction: Private IP addresses cannot be scanned." },
            { status: 403 }
          );
        }
      }
    } catch {
      return NextResponse.json(
        { success: false, error: "Unable to resolve domain. Please check if the domain exists and is live." },
        { status: 400 }
      );
    }

    // Fetch the target URL with 7s timeout
    let html = "";
    let statusCode = 200;
    try {
      const res = await fetch(parsedUrl.toString(), {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; WebsiteDevelopmentExpertBot/1.0; +https://websitedevelopmentexpert.in)",
          Accept: "text/html,application/xhtml+xml",
        },
        signal: AbortSignal.timeout(7000),
        redirect: "follow",
      });
      statusCode = res.status;
      html = await res.text();
    } catch (err: unknown) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Could not fetch the submitted website. The server may be blocking automated requests or timed out after 7 seconds.",
        },
        { status: 504 }
      );
    }

    // Check Robots.txt & Sitemap
    let robotsFound = false;
    let sitemapFound = false;

    try {
      const robotsUrl = `${parsedUrl.origin}/robots.txt`;
      const robotsRes = await fetch(robotsUrl, {
        method: "HEAD",
        signal: AbortSignal.timeout(3000),
      });
      robotsFound = robotsRes.ok;
    } catch {
      robotsFound = false;
    }

    try {
      const sitemapUrl = `${parsedUrl.origin}/sitemap.xml`;
      const sitemapRes = await fetch(sitemapUrl, {
        method: "HEAD",
        signal: AbortSignal.timeout(3000),
      });
      sitemapFound = sitemapRes.ok;
    } catch {
      sitemapFound = false;
    }

    // Parse On-Page SEO Elements
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    const titleText = titleMatch ? titleMatch[1].trim() : "";

    const metaDescMatch = html.match(
      /<meta\s+(?:[^>]*?\s+)?name=["']description["']\s+content=["']([^"']*)["']/i
    ) || html.match(
      /<meta\s+(?:[^>]*?\s+)?content=["']([^"']*)["']\s+name=["']description["']/i
    );
    const metaDescText = metaDescMatch ? metaDescMatch[1].trim() : "";

    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    const h1Count = h1Matches.length;

    const imgMatches = html.match(/<img[^>]*>/gi) || [];
    const totalImages = imgMatches.length;
    let missingAltImages = 0;
    imgMatches.forEach((imgTag) => {
      if (!/alt=["'][^"']*["']/i.test(imgTag)) {
        missingAltImages++;
      }
    });

    const isHttps = parsedUrl.protocol === "https:";
    const hasViewport = /<meta[^>]*name=["']viewport["'][^>]*>/i.test(html);
    const hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);

    // Calculate Score (0-100)
    let score = 100;
    const checks: {
      id: string;
      label: string;
      status: "pass" | "warn" | "fail";
      value: string;
      detail: string;
    }[] = [];

    // Title Check
    if (!titleText) {
      score -= 20;
      checks.push({
        id: "title",
        label: "Title Tag",
        status: "fail",
        value: "Missing",
        detail: "No <title> tag found. Title is critical for search engine rankings.",
      });
    } else if (titleText.length < 30 || titleText.length > 65) {
      score -= 8;
      checks.push({
        id: "title",
        label: "Title Tag",
        status: "warn",
        value: `${titleText.length} characters`,
        detail: `Current title is ${titleText.length} chars. Optimal length is between 50 and 60 characters.`,
      });
    } else {
      checks.push({
        id: "title",
        label: "Title Tag",
        status: "pass",
        value: `${titleText.length} characters (Optimal)`,
        detail: `"${titleText.slice(0, 45)}..."`,
      });
    }

    // Meta Description Check
    if (!metaDescText) {
      score -= 15;
      checks.push({
        id: "meta_desc",
        label: "Meta Description",
        status: "fail",
        value: "Missing",
        detail: "No meta description found. Google may show arbitrary text snippets.",
      });
    } else if (metaDescText.length < 100 || metaDescText.length > 165) {
      score -= 6;
      checks.push({
        id: "meta_desc",
        label: "Meta Description",
        status: "warn",
        value: `${metaDescText.length} characters`,
        detail: `Length is ${metaDescText.length} chars. Target 140 to 155 characters for optimal SERP display.`,
      });
    } else {
      checks.push({
        id: "meta_desc",
        label: "Meta Description",
        status: "pass",
        value: `${metaDescText.length} characters (Optimal)`,
        detail: `"${metaDescText.slice(0, 50)}..."`,
      });
    }

    // H1 Heading Check
    if (h1Count === 0) {
      score -= 15;
      checks.push({
        id: "h1",
        label: "H1 Heading",
        status: "fail",
        value: "0 Found",
        detail: "No <h1> element detected. Every page should have exactly one primary <h1>.",
      });
    } else if (h1Count > 1) {
      score -= 5;
      checks.push({
        id: "h1",
        label: "H1 Heading",
        status: "warn",
        value: `${h1Count} Found`,
        detail: "Multiple <h1> tags detected. Recommended practice is a single <h1> per page.",
      });
    } else {
      checks.push({
        id: "h1",
        label: "H1 Heading",
        status: "pass",
        value: "1 Found (Perfect)",
        detail: "Single semantic <h1> element properly implemented.",
      });
    }

    // Images & Alt Text Check
    if (totalImages > 0 && missingAltImages > 0) {
      score -= Math.min(15, missingAltImages * 3);
      checks.push({
        id: "img_alt",
        label: "Image Alt Tags",
        status: "warn",
        value: `${missingAltImages} of ${totalImages} missing alt`,
        detail: "Missing image alt tags hurt Google Image search indexation and web accessibility.",
      });
    } else {
      checks.push({
        id: "img_alt",
        label: "Image Alt Tags",
        status: "pass",
        value: `${totalImages} images checked`,
        detail: "All scanned images have alt attributes declared.",
      });
    }

    // HTTPS Security Check
    if (!isHttps) {
      score -= 15;
      checks.push({
        id: "https",
        label: "SSL / HTTPS",
        status: "fail",
        value: "Not Secure (HTTP)",
        detail: "Your site is loaded over unencrypted HTTP. Google penalizes non-HTTPS websites.",
      });
    } else {
      checks.push({
        id: "https",
        label: "SSL / HTTPS",
        status: "pass",
        value: "Secure (HTTPS)",
        detail: "Encrypted connection verified.",
      });
    }

    // Mobile Viewport Check
    if (!hasViewport) {
      score -= 15;
      checks.push({
        id: "viewport",
        label: "Mobile Viewport",
        status: "fail",
        value: "Missing",
        detail: "Missing <meta name='viewport'> tag. Page will not scale properly on smartphones.",
      });
    } else {
      checks.push({
        id: "viewport",
        label: "Mobile Viewport",
        status: "pass",
        value: "Configured",
        detail: "Mobile responsive viewport properly defined.",
      });
    }

    // Canonical Tag Check
    if (!hasCanonical) {
      score -= 5;
      checks.push({
        id: "canonical",
        label: "Canonical Tag",
        status: "warn",
        value: "Missing",
        detail: "Rel canonical tag helps prevent duplicate content indexing.",
      });
    } else {
      checks.push({
        id: "canonical",
        label: "Canonical Tag",
        status: "pass",
        value: "Implemented",
        detail: "Rel canonical tag verified.",
      });
    }

    // Robots.txt Check
    if (!robotsFound) {
      score -= 5;
      checks.push({
        id: "robots",
        label: "Robots.txt",
        status: "warn",
        value: "Not Found",
        detail: "No robots.txt found at root. Helps control search crawler access.",
      });
    } else {
      checks.push({
        id: "robots",
        label: "Robots.txt",
        status: "pass",
        value: "Live (200 OK)",
        detail: "Robots.txt is publicly accessible.",
      });
    }

    // Sitemap.xml Check
    if (!sitemapFound) {
      score -= 5;
      checks.push({
        id: "sitemap",
        label: "XML Sitemap",
        status: "warn",
        value: "Not Found at /sitemap.xml",
        detail: "Ensure your sitemap is submitted in Google Search Console.",
      });
    } else {
      checks.push({
        id: "sitemap",
        label: "XML Sitemap",
        status: "pass",
        value: "Live (200 OK)",
        detail: "XML Sitemap is accessible for search engines.",
      });
    }

    const finalScore = Math.max(10, Math.min(100, score));

    return NextResponse.json({
      success: true,
      url: parsedUrl.toString(),
      domain: hostname,
      score: finalScore,
      statusCode,
      checks,
      pageSpeedUrl: `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(
        parsedUrl.toString()
      )}`,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Error";
    return NextResponse.json(
      { success: false, error: `Audit failed: ${errorMsg}` },
      { status: 500 }
    );
  }
}
