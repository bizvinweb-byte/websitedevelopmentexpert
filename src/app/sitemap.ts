import type { MetadataRoute } from "next";
import { siteConfig, indexedLocations, toSlug } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use stable real date corresponding to recent publication/audit
  const baseDate = new Date("2026-03-01T00:00:00.000Z");

  const coreRoutes = [
    "",
    "/website-development-company-in-india",
    "/services/shopify-development-company",
    "/services/nextjs-development-company",
    "/services/ecommerce-website-development",
    "/services/wordpress-website-development",
    "/services/custom-web-application-development",
    "/website-development-cost-in-india",
    "/areas-we-serve",
    "/about",
    "/contact",
    "/portfolio",
    "/portfolio/d2c-luxury-shopify-store",
    "/portfolio/nextjs-b2b-saas-platform",
    "/portfolio/industrial-export-portal",
    "/portfolio/healthcare-appointment-portal",
    "/blog",
    "/blog/website-development-cost-in-india",
    "/blog/shopify-vs-wordpress-vs-nextjs",
    "/blog/how-to-hire-website-development-company-remotely-in-india",
    "/blog/website-speed-and-core-web-vitals",
    "/blog/website-development-for-startups-in-india",
    "/tools/seo-checker",
    "/glossary",
    "/reviews",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = coreRoutes.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: baseDate,
  }));

  // Add only the 15 verified indexed city hubs (5 NCR + 10 Top Remote Cities)
  indexedLocations.forEach((loc) => {
    sitemapEntries.push({
      url: `${siteConfig.siteUrl}/${toSlug(loc.city)}`,
      lastModified: baseDate,
    });
  });

  return sitemapEntries;
}
