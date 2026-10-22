import type { Metadata } from "next";
import SeoCheckerClient from "./SeoCheckerClient";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Free Website SEO & Speed Checker India | Instant Technical Audit",
  description:
    "Test your website's technical SEO, meta tags, H1 structure, image alt coverage, and indexability in seconds. Free engineering audit tool by Website Development Expert.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/tools/seo-checker`,
  },
  openGraph: {
    title: "Free Website SEO & Speed Checker India | Instant Technical Audit",
    description:
      "Run an instant technical SEO and speed audit on your website. Check title tags, meta descriptions, H1 hierarchy, and image alt coverage.",
    url: `${siteConfig.siteUrl}/tools/seo-checker`,
    type: "website",
  },
};

export default function SeoCheckerPage() {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Website SEO and Speed Checker India",
    url: `${siteConfig.siteUrl}/tools/seo-checker`,
    applicationCategory: "SEO & Performance Tool",
    operatingSystem: "All Web Browsers",
    description:
      "Instant on-page SEO, technical meta tags, H1 structure, image alt tag coverage, and Core Web Vitals health analyzer for Indian websites.",
    provider: {
      "@type": "Organization",
      name: "Website Development Expert",
      url: siteConfig.siteUrl,
    },
  };

  return (
    <>
      <JsonLd data={toolSchema} />
      <SeoCheckerClient />
    </>
  );
}
