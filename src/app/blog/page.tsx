import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Engineering & Web Development Blog | India Guides",
  description:
    "Expert technical guides on website development costs in India, Shopify vs Next.js comparisons, Core Web Vitals, and remote agency hiring strategies.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/blog`,
  },
  openGraph: {
    title: "Engineering & Web Development Blog | India Guides",
    description:
      "Deep technical guides on web architecture, development costs in India, platform comparisons, and modern SEO engineering.",
    url: `${siteConfig.siteUrl}/blog`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Website Development Expert Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & Web Development Blog | India Guides",
    description:
      "Practical technical guides on website costs, Next.js architecture, Shopify, and Core Web Vitals for Indian businesses.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function BlogIndexPage() {
  const pageUrl = `${siteConfig.siteUrl}/blog`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Engineering Blog", url: "/blog" },
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${pageUrl}#blog`,
    url: pageUrl,
    name: "Engineering & Web Development Blog | Website Development Expert",
    description:
      "Authoritative technical and architectural guides for businesses and software founders across India.",
    publisher: {
      "@type": "Organization",
      name: "Website Development Expert",
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/images/brandmingo-logo.png`,
      },
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.summary,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      datePublished: post.publishDate,
      dateModified: post.modifiedDate,
      author: {
        "@type": "Organization",
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <BookOpen className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Engineering Standards • Honest Business Insights</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Web Engineering &amp; <span className="text-[#ff6b1e]">Architecture Insights</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                Transparent technical guides, real cost breakdowns, and platform comparisons written by our engineering team at our Sector 62, Noida headquarters.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero marketing puffery • 100% human-written technical analysis</span>
              </div>
            </div>
          </div>
        </header>

        {/* Blog Post Grid */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs hover:border-[#ff6b1e]/50 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-bold text-[#ff6b1e] bg-[#fff5ee] px-3 py-1 rounded-full border border-[#ff6b1e]/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-2 line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#ff6b1e] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-400">
                      <span>Updated {post.modifiedDate}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 py-12 sm:py-16 text-center border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Need Architectural Guidance for Your Project?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Schedule a consultation with our senior engineering team in Sector 62, Noida or connect via video call to discuss your web application or storefront roadmap.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton className="px-8 py-3.5 text-sm">
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
                >
                  <Building2 className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Contact Noida Office</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
