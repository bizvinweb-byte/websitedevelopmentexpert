import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  HelpCircle,
  Layers,
  Building2,
  ShieldCheck,
  User,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";
import { EnquiryButton } from "@/components/EnquiryModal";
import LeadContactForm from "@/components/LeadContactForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const pageUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: pageUrl,
      type: "article",
      locale: "en_IN",
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author.name],
      images: [
        {
          url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const pageUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: pageUrl },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.summary,
    inLanguage: "en-IN",
    mainEntityOfPage: pageUrl,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Website Development Expert",
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/images/brandmingo-logo.png`,
      },
    },
    image: `${siteConfig.siteUrl}/images/webdev-banner.png`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#ff6b1e] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Articles</span>
              </Link>
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-5 shadow-2xs">
                <span>{post.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <User className="w-3.5 h-3.5 text-[#ff6b1e]" />
                  {post.author.name}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Published: {post.publishDate}
                </span>
                <span>•</span>
                <span>Updated: {post.modifiedDate}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Body */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Table of Contents */}
          <nav className="mb-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#ff6b1e]" />
              <span>In This Guide</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {post.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-slate-600 hover:text-[#ff6b1e] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#ff6b1e] font-bold">›</span>
                    <span>{toc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Introduction */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base mb-10">
            <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed bg-[#fff5ee]/30 p-5 rounded-2xl border-l-4 border-[#ff6b1e]">
              {post.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 sm:space-y-16">
            {post.content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  {section.heading}
                </h2>

                <div className="text-slate-700 leading-relaxed text-xs sm:text-sm whitespace-pre-line space-y-3">
                  {section.content}
                </div>

                {/* Optional Table */}
                {section.table && (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                    <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          {section.table.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="px-4 py-3 font-bold text-slate-800 uppercase tracking-wider text-[11px]"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/50">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 py-3 text-slate-700 ${
                                  cIdx === 0 ? "font-bold text-slate-900" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Key Takeaways Box */}
                {section.keyTakeaways && (
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:p-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Key Architectural Takeaways</span>
                    </h3>
                    <ul className="space-y-2">
                      {section.keyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Server-Rendered FAQ Section */}
            <section id="faqs" className="scroll-mt-24 pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#ff6b1e]" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    open={idx === 0}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs open:border-[#ff6b1e]/40 transition-all"
                  >
                    <summary className="cursor-pointer text-sm font-bold text-slate-900 list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-[#ff6b1e] text-lg font-bold group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* E-E-A-T Author & Reviewer Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="h-14 w-14 rounded-full bg-[#ff6b1e]/15 border-2 border-[#ff6b1e] text-[#ff6b1e] flex items-center justify-center shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">{post.author.name}</h3>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Technical Reviewer Verified
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{post.author.role}</p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Engineered at Website Development Expert (ITHUM Tower, Sector 62, Noida). Written and reviewed in accordance with Google search quality rater guidelines and Indian DPDP Act standards.
                </p>
                <div className="mt-2.5 text-[11px] text-slate-400">
                  Published: {post.publishDate} • Last Technical Review: {post.modifiedDate}
                </div>
              </div>
            </div>

            {/* Inline Lead Capture Form */}
            <div className="my-8">
              <LeadContactForm
                defaultService={post.title}
                sourceContext={`Blog: ${post.slug}`}
                title="Have Questions About Implementing This Architecture?"
                subtitle="Discuss your specifications with our software engineering team in Sector 62, Noida or connect via video call."
              />
            </div>

            {/* Related Services Links */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-sm font-bold text-slate-900 mb-4">
                Explore Related Development Services &amp; Hubs
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {post.relatedServices.map((rel) => (
                  <Link
                    key={rel.url}
                    href={rel.url}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#ff6b1e] hover:border-[#ff6b1e] transition-colors shadow-2xs"
                  >
                    <span>{rel.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#ff6b1e]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-slate-50 py-12 sm:py-16 text-center border-t border-slate-100 mt-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Have Technical Questions About Your Web Stack?
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
              Connect directly with our engineering team at our Sector 62, Noida facility or request a virtual architectural consultation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <EnquiryButton className="px-8 py-3.5 text-sm" service={post.title}>
                <span>Schedule Engineering Review</span>
                <ArrowRight className="w-4 h-4" />
              </EnquiryButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
              >
                <Building2 className="w-4 h-4 text-[#ff6b1e]" />
                <span>Contact Noida HQ</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
