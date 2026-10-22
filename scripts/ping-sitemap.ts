const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://websitedevelopmentexpert.in";

async function verifySitemapAndRobots() {
  console.log("==================================================");
  console.log("📡 Sitemap & Robots.txt Health Verification");
  console.log("==================================================");

  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  const robotsUrl = `${siteUrl}/robots.txt`;

  console.log(`Checking live sitemap: ${sitemapUrl}`);
  try {
    const sitemapRes = await fetch(sitemapUrl, {
      headers: { "User-Agent": "SitemapVerifier/1.0" },
      signal: AbortSignal.timeout(8000),
    });

    if (sitemapRes.ok) {
      const xml = await sitemapRes.text();
      const urlCount = (xml.match(/<loc>/g) || []).length;
      console.log(`✅ Sitemap is live (Status ${sitemapRes.status}). Contains ${urlCount} indexed URLs.`);
    } else {
      console.warn(`⚠️ Sitemap returned non-200 status: ${sitemapRes.status}`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`⚠️ Note: Live sitemap fetch could not reach production endpoint: ${msg}`);
  }

  console.log(`\nChecking live robots.txt: ${robotsUrl}`);
  try {
    const robotsRes = await fetch(robotsUrl, {
      headers: { "User-Agent": "SitemapVerifier/1.0" },
      signal: AbortSignal.timeout(8000),
    });

    if (robotsRes.ok) {
      const robotsTxt = await robotsRes.text();
      console.log(`✅ Robots.txt is live (Status ${robotsRes.status}).`);
      if (robotsTxt.includes("sitemap.xml")) {
        console.log(`✅ Sitemap reference found in robots.txt.`);
      } else {
        console.warn(`⚠️ Warning: No sitemap.xml directive found in robots.txt.`);
      }
    } else {
      console.warn(`⚠️ Robots.txt returned non-200 status: ${robotsRes.status}`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`⚠️ Note: Live robots.txt fetch could not reach production endpoint: ${msg}`);
  }

  console.log("\n📡 Pinging Search Engine Sitemap Endpoints:");

  // Bing Webmaster Sitemap Ping Endpoint
  const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  try {
    const bingRes = await fetch(bingPingUrl, { signal: AbortSignal.timeout(6000) });
    console.log(`• Bing Sitemap Ping: Status ${bingRes.status} ${bingRes.ok ? "(Success)" : ""}`);
  } catch {
    console.log("• Bing Sitemap Ping: Offline / Skipped (Submit directly via Bing Webmaster Tools UI)");
  }

  // Google Search Console Ping Notice
  console.log("• Google Search Console: Submit sitemap directly via GSC UI (Google deprecated /ping HTTP endpoint in Dec 2023)");

  console.log("\n==================================================");
  console.log("Verification finished.");
  console.log("==================================================");
}

verifySitemapAndRobots().catch(console.error);
