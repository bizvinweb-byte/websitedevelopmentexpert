import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Cpu,
  Layers,
  HeartHandshake,
  MapPin,
  Clock,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "About Website Development Expert | A Venture of Brandmingo",
  description:
    "Learn about Website Development Expert, a venture of Brandmingo based in Sector 62, Noida. Engineering high-speed Next.js and Shopify websites across India.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: "About Website Development Expert | A Venture of Brandmingo",
    description:
      "Our story, engineering philosophy, and Noida headquarters. We build custom Next.js and Shopify websites for businesses across India.",
    url: `${siteConfig.siteUrl}/about`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "About Website Development Expert - Brandmingo Venture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Website Development Expert | A Venture of Brandmingo",
    description:
      "Noida-based web engineering firm. Learn about our Brandmingo roots, engineering philosophy, and pan-India remote service.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function AboutPage() {
  const pageUrl = `${siteConfig.siteUrl}/about`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "About Website Development Expert | A Venture of Brandmingo",
    description:
      "Learn about our engineering philosophy, Noida headquarters, and Brandmingo background. We build custom Next.js and Shopify websites for Indian businesses.",
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
  };

  return (
    <>
      <JsonLd data={webPageSchema} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>A Specialized Venture of Brandmingo</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                About <span className="text-[#ff6b1e]">Website Development Expert</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                Born out of Brandmingo&apos;s digital branding legacy, Website Development Expert is an engineering-first web development firm headquartered in Sector 62, Noida. We build modern, high-speed web applications and Shopify stores for businesses across India without agency fluff.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton className="px-8 py-3.5 text-sm font-bold">
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all"
                >
                  <Building2 className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Visit Our Noida Office</span>
                </Link>
              </div>

              {/* Physical Office Notice */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/90 p-5 text-xs text-slate-600 max-w-2xl mx-auto text-left shadow-2xs">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#ff6b1e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm">
                      Physical Headquarters: ITHUM Tower, Sector 62, Noida
                    </strong>
                    <p className="mt-1 leading-relaxed text-slate-600">
                      Our only physical development center is located in Sector 62, Noida. We maintain <strong>NO branch offices outside Noida</strong>. We serve clients across Delhi NCR in person and clients across all other Indian states through structured remote delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Who We Are & Brandmingo Heritage */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Our Origin Story
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Why Brandmingo Created a Specialized Web Engineering Venture
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  As Brandmingo worked with Indian brands on corporate identity and digital marketing, one persistent bottleneck surfaced repeatedly: clients were repeatedly let down by agencies delivering slow, vulnerable, template-cloned websites that failed to convert traffic or rank on search engines.
                </p>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  To solve this, Brandmingo spun off <strong>Website Development Expert</strong> as an independent, technically rigorous web development unit. Instead of generalist marketers writing code, our team consists of specialized TypeScript engineers, React developers, Liquid programmers, and technical SEO architects.
                </p>

                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                    <span>Specialized Next.js 16 App Router &amp; React 19 engineers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                    <span>Dedicated Shopify &amp; Shopify Plus custom theme specialists</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                    <span>Foundational Schema.org JSON-LD and Core Web Vitals optimization</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  Our Core Operational Principles
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block font-bold">1. Zero Artificial Claims</strong>
                    <p className="mt-1">
                      We never guarantee &apos;#1 rankings in 7 days&apos; or claim impossible &apos;100% bug-free guarantees.&apos; We deliver honest engineering, measurable performance benchmarks, and transparent communication.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block font-bold">2. Complete Code &amp; IP Ownership</strong>
                    <p className="mt-1">
                      You own 100% of your source code repository, Git commits, Figma designs, and cloud infrastructure. We never hold client assets hostage or charge recurring theme lock-in fees.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block font-bold">3. Fixed-Scope Milestones</strong>
                    <p className="mt-1">
                      No surprise invoices. Every project has a documented technical scope and fixed milestone payment schedule tied to actual staging deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Team & Location */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Where We Work
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Centrally Headquartered in Sector 62, Noida
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Our technology team operates directly from ITHUM Tower, Block A, Sector 62, Noida. Situated along the NH-24 corridor and directly adjacent to the Noida Electronic City Metro Station, we are easily accessible for clients across Delhi NCR.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Physical Office</h3>
                <p className="text-xs text-slate-600 mt-2">
                  8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, UP 201309
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Working Hours</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Monday to Saturday: 9:00 AM – 7:00 PM IST<br />
                  Closed Sundays &amp; National Holidays
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Direct Contact</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Phone: +91 99906 13140<br />
                  Email: contact@websitedevelopmentexpert.in
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs text-slate-500">
                [ADD REAL TEAM PHOTOGRAPHY &amp; OFFICE SHOTS IN PRODUCTION DEPLOYMENT]
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-[#fff5ee] p-8 sm:p-12 shadow-lg shadow-[#ff6b1e]/5">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Ready to Discuss Your Project with Our Team?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Whether you prefer to visit our Noida office in person or schedule an introductory Google Meet call, we would love to understand your goals.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton className="px-8 py-3.5 text-sm">
                  <span>Request Free Technical Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
                >
                  <Building2 className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Contact Office</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
