import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "WebDev Expert",
    description:
      "Top Website Development Company in India. Custom Next.js, React, and Shopify Web Applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff6b1e",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/images/webdev-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
