import type { MetadataRoute } from "next";
import { serviceLocations, siteConfig } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Root Homepage and Trust Pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.siteUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteConfig.siteUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.siteUrl}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // All 50+ Pan-India City & District SEO Landing Pages (Indexable only via Search)
  Object.values(serviceLocations).forEach((loc) => {
    routes.push({
      url: `${siteConfig.siteUrl}/services/${loc.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  return routes;
}
