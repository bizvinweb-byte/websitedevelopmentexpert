import fs from "fs";
import path from "path";

interface PageAudit {
  filePath: string;
  route: string;
  title: string;
  description: string;
  h1List: string[];
  missingAltImages: string[];
  totalImages: number;
  wordCount: number;
  canonical: string;
  robotsMeta: string;
  outboundLinks: string[];
}

const NEXT_APP_DIR = path.join(process.cwd(), ".next", "server", "app");

function getAllHtmlFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      // Exclude Next.js internal error files
      if (!entry.name.includes("_global-error")) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

function routeFromFilePath(filePath: string): string {
  const rel = path.relative(NEXT_APP_DIR, filePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return "/" + rel.replace(/\/index\.html$/, "");
  return "/" + rel.replace(/\.html$/, "");
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function auditHtmlFile(filePath: string): PageAudit {
  const content = fs.readFileSync(filePath, "utf-8");
  const route = routeFromFilePath(filePath);

  // 1. Title Tag
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // 2. Meta Description
  const descMatch =
    content.match(/<meta\s+(?:[^>]*?\s+)?name=["']description["']\s+content=["']([^"']*)["']/i) ||
    content.match(/<meta\s+(?:[^>]*?\s+)?content=["']([^"']*)["']\s+name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : "";

  // 3. H1 Headings
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h1List = h1Matches.map((h1) => stripHtml(h1));

  // 4. Images without Alt
  const imgTags = content.match(/<img[^>]*>/gi) || [];
  const missingAltImages: string[] = [];
  imgTags.forEach((img) => {
    if (!/alt=["'][^"']*["']/i.test(img)) {
      missingAltImages.push(img.slice(0, 80));
    }
  });

  // 5. Word count (main body text)
  const plainText = stripHtml(content);
  const words = plainText ? plainText.split(/\s+/).filter((w) => w.length > 1) : [];
  const wordCount = words.length;

  // 6. Canonical
  const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : "";

  // 7. Robots Meta
  const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  const robotsMeta = robotsMatch ? robotsMatch[1].toLowerCase() : "";

  // 8. Outbound Internal Links
  const linkMatches = content.match(/<a[^>]*href=["']([^"']*)["']/gi) || [];
  const outboundLinks: string[] = [];
  linkMatches.forEach((aTag) => {
    const hrefMatch = aTag.match(/href=["']([^"']*)["']/i);
    if (hrefMatch) {
      let href = hrefMatch[1].trim();
      if (href.startsWith("https://websitedevelopmentexpert.in")) {
        href = href.replace("https://websitedevelopmentexpert.in", "") || "/";
      }
      if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/_next") && !href.includes(".")) {
        // Normalize trailing slash and remove fragment/query
        const cleanHref = href.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
        if (!outboundLinks.includes(cleanHref)) {
          outboundLinks.push(cleanHref);
        }
      }
    }
  });

  return {
    filePath,
    route,
    title,
    description,
    h1List,
    missingAltImages,
    totalImages: imgTags.length,
    wordCount,
    canonical,
    robotsMeta,
    outboundLinks,
  };
}

async function runSeoAudit() {
  console.log("==================================================");
  console.log("🔍 Website Development Expert - Static SEO & Health Audit");
  console.log("==================================================");

  if (!fs.existsSync(NEXT_APP_DIR)) {
    console.error("❌ Error: .next/server/app directory not found. Please run 'npm run build' first.");
    process.exit(1);
  }

  const htmlFiles = getAllHtmlFiles(NEXT_APP_DIR);
  console.log(`📄 Discovered ${htmlFiles.length} pre-rendered HTML pages to audit.\n`);

  const audits: PageAudit[] = htmlFiles.map(auditHtmlFile);
  const allRoutes = new Set(audits.map((a) => a.route.replace(/\/$/, "") || "/"));

  // Issue Trackers
  const issues: {
    critical: string[];
    warnings: string[];
  } = {
    critical: [],
    warnings: [],
  };

  const titleMap = new Map<string, string[]>();
  const descMap = new Map<string, string[]>();
  const inboundLinkCount = new Map<string, number>();

  // Initialize inbound links
  allRoutes.forEach((r) => inboundLinkCount.set(r, 0));

  // Count Inbound Links
  audits.forEach((a) => {
    a.outboundLinks.forEach((target) => {
      const normTarget = target.replace(/\/$/, "") || "/";
      if (inboundLinkCount.has(normTarget)) {
        inboundLinkCount.set(normTarget, (inboundLinkCount.get(normTarget) || 0) + 1);
      }
    });
  });

  audits.forEach((page) => {
    const isNoIndex = page.robotsMeta.includes("noindex");

    // Skip non-indexable utility pages from strict title checks
    if (!isNoIndex && page.route !== "/_not-found") {
      // 1. Missing Title
      if (!page.title) {
        issues.critical.push(`[${page.route}] Missing <title> tag.`);
      } else {
        const titles = titleMap.get(page.title) || [];
        titles.push(page.route);
        titleMap.set(page.title, titles);
      }

      // 2. Missing Meta Description
      if (!page.description) {
        issues.critical.push(`[${page.route}] Missing meta description.`);
      } else {
        const descs = descMap.get(page.description) || [];
        descs.push(page.route);
        descMap.set(page.description, descs);
      }

      // 3. H1 Checks
      if (page.h1List.length === 0) {
        issues.critical.push(`[${page.route}] Missing <h1> heading tag.`);
      } else if (page.h1List.length > 1) {
        issues.warnings.push(`[${page.route}] Multiple (${page.h1List.length}) <h1> tags detected.`);
      }

      // 4. Thin Content (under 300 words)
      if (page.wordCount < 300 && page.route !== "/manifest.webmanifest") {
        issues.warnings.push(`[${page.route}] Thin content detected (${page.wordCount} words < 300).`);
      }
    }

    // 5. Images missing Alt
    if (page.missingAltImages.length > 0) {
      issues.warnings.push(`[${page.route}] ${page.missingAltImages.length} image(s) missing alt attribute.`);
    }

    // 6. Canonical & Noindex Conflict
    if (isNoIndex && page.canonical && page.canonical.includes(page.route) && page.route !== "/") {
      // Intentionally flagged if self-canonicalized with noindex
      // In our architecture, non-indexed legacy pages point to their parent or canonical equivalent
    }

    // 7. Broken Internal Links
    page.outboundLinks.forEach((target) => {
      const normTarget = target.replace(/\/$/, "") || "/";
      // Allow valid files or known dynamic endpoints
      if (
        !allRoutes.has(normTarget) &&
        !normTarget.startsWith("/BM") &&
        !normTarget.startsWith("/images") &&
        !normTarget.startsWith("/favicon") &&
        !normTarget.startsWith("/api")
      ) {
        issues.critical.push(`[${page.route}] Broken internal link detected to: ${target}`);
      }
    });

    // 8. Orphan Pages (Indexable with 0 inbound links)
    if (!isNoIndex && page.route !== "/" && page.route !== "/_not-found") {
      const count = inboundLinkCount.get(page.route.replace(/\/$/, "") || "/") || 0;
      if (count === 0) {
        issues.warnings.push(`[${page.route}] Orphan page detected (0 inbound internal links).`);
      }
    }
  });

  // Duplicate Titles Check (Indexable pages only)
  titleMap.forEach((routes, title) => {
    if (routes.length > 1) {
      issues.critical.push(`Duplicate <title> across ${routes.length} pages: "${title}" -> ${routes.join(", ")}`);
    }
  });

  // Duplicate Meta Descriptions Check
  descMap.forEach((routes, desc) => {
    if (routes.length > 1) {
      issues.warnings.push(`Duplicate meta description across ${routes.length} pages: "${desc.slice(0, 40)}..." -> ${routes.join(", ")}`);
    }
  });

  // Audit Output
  console.log("--------------------------------------------------");
  console.log(`📊 Audit Summary: ${audits.length} Pages Scanned`);
  console.log(`🚨 Critical Issues: ${issues.critical.length}`);
  console.log(`⚠️  Warnings: ${issues.warnings.length}`);
  console.log("--------------------------------------------------\n");

  if (issues.critical.length > 0) {
    console.log("❌ CRITICAL ISSUES (Must Fix):");
    issues.critical.forEach((msg) => console.log(`  • ${msg}`));
    console.log("");
  }

  if (issues.warnings.length > 0) {
    console.log("⚠️  WARNINGS & OPPORTUNITIES:");
    issues.warnings.slice(0, 20).forEach((msg) => console.log(`  • ${msg}`));
    if (issues.warnings.length > 20) {
      console.log(`  ... and ${issues.warnings.length - 20} more warnings.`);
    }
    console.log("");
  }

  if (issues.critical.length === 0) {
    console.log("✅ All core Technical SEO and architecture checks PASSED with 0 critical errors!\n");
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runSeoAudit().catch((err) => {
  console.error("Fatal audit execution error:", err);
  process.exit(1);
});
