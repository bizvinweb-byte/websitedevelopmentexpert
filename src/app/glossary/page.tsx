import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { GLOSSARY_TERMS } from "@/lib/glossary-data";

export const metadata: Metadata = {
  title: "Web Engineering & Technical SEO Glossary | India Tech Terms",
  description:
    "Authoritative definitions for Core Web Vitals, headless commerce, Next.js SSR vs SSG, and Indian e-commerce web architecture. Built for engineering teams.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/glossary`,
  },
  openGraph: {
    title: "Web Engineering & Technical SEO Glossary | India Tech Terms",
    description:
      "Clear, unvarnished architectural definitions and practical guidance for Core Web Vitals, headless commerce, and Indian e-commerce web architecture.",
    url: `${siteConfig.siteUrl}/glossary`,
    type: "website",
  },
};

export default function GlossaryPage() {
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${siteConfig.siteUrl}/glossary#definedtermset`,
    name: "Web Engineering & Technical SEO Glossary for Indian Businesses",
    description:
      "Authoritative definitions and architectural guides for Core Web Vitals, Headless Commerce, Next.js, and Indian e-commerce technology.",
    url: `${siteConfig.siteUrl}/glossary`,
    hasDefinedTerm: GLOSSARY_TERMS.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.shortDefinition,
      termCode: t.slug,
      url: `${siteConfig.siteUrl}/glossary#${t.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={glossarySchema} />
      <GlossaryClient />
    </>
  );
}
