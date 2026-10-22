import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Globe2,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig, ncrCities, topRemoteCities, toSlug } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Areas We Serve Across India | Noida HQ Remote Delivery",
  description:
    "Explore areas served by Website Development Expert. Based in Sector 62, Noida, delivering custom Next.js and Shopify websites remotely across all Indian states.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/areas-we-serve`,
  },
  openGraph: {
    title: "Areas We Serve Across India | Noida HQ Remote Delivery",
    description:
      "All-India web development delivery coverage. Headquartered in Noida, serving businesses across Delhi NCR, Maharashtra, Karnataka, Telangana, Tamil Nadu, Gujarat, and nationwide.",
    url: `${siteConfig.siteUrl}/areas-we-serve`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Areas We Serve Across India - Website Development Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas We Serve Across India | Noida HQ Remote Delivery",
    description:
      "Headquartered in Noida Sector 62, delivering custom web applications and Shopify stores remotely across Indian commercial hubs.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function AreasWeServePage() {
  const pageUrl = `${siteConfig.siteUrl}/areas-we-serve`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Areas We Serve", url: "/areas-we-serve" },
  ];

  const stateGroups = [
    {
      state: "Delhi NCR (Local Service Corridor)",
      description: "Direct proximity to our Noida headquarters with in-person meeting availability.",
      cities: ncrCities,
    },
    {
      state: "Maharashtra",
      description: "Remote project delivery for financial, media, auto, and SaaS enterprises.",
      cities: topRemoteCities.filter((c) => c.state === "Maharashtra"),
    },
    {
      state: "Karnataka",
      description: "Next.js and headless commerce engineering for venture-backed startups and scaleups.",
      cities: topRemoteCities.filter((c) => c.state === "Karnataka"),
    },
    {
      state: "Telangana & Andhra Pradesh",
      description: "Software engineering for biopharma, HITEC City tech companies, and healthcare networks.",
      cities: topRemoteCities.filter((c) => c.state === "Telangana"),
    },
    {
      state: "Tamil Nadu",
      description: "Web development for automotive manufacturers, SaaS innovators, and export houses.",
      cities: topRemoteCities.filter((c) => c.state === "Tamil Nadu"),
    },
    {
      state: "Gujarat",
      description: "Commercial portals for textile export mills, chemicals, and GIFT City fintech.",
      cities: topRemoteCities.filter((c) => c.state === "Gujarat"),
    },
    {
      state: "Rajasthan",
      description: "E-commerce and luxury portals for jewelry exporters, handicrafts, and heritage hotels.",
      cities: topRemoteCities.filter((c) => c.state === "Rajasthan"),
    },
    {
      state: "West Bengal & East India",
      description: "Corporate portals for FMCG distributors, tea exporters, and Salt Lake IT firms.",
      cities: topRemoteCities.filter((c) => c.state === "West Bengal"),
    },
    {
      state: "Uttar Pradesh & Chandigarh Tri-City",
      description: "Web engineering for state administrative hubs, healthcare networks, and Tri-City IT parks.",
      cities: topRemoteCities.filter(
        (c) => c.state === "Uttar Pradesh" || c.state === "Chandigarh"
      ),
    },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Areas We Serve Across India | Noida HQ Remote Delivery",
    description:
      "Overview of India-wide remote website development delivery. Physical development headquarters located exclusively in Sector 62, Noida.",
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
                <Globe2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Pan-India Project Delivery • Engineered at Noida HQ</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Areas We Serve Across <span className="text-[#ff6b1e]">India</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                Based honestly at our single corporate development facility in Sector 62, Noida, we deliver high-performance custom web applications, Shopify stores, and enterprise portals to businesses in every Indian state through disciplined remote collaboration.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton className="px-8 py-3.5 text-sm font-bold">
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call: +91 99906 13140</span>
                </Link>
              </div>

              {/* Strict Office Transparency Notice */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/90 p-5 text-xs text-slate-600 max-w-2xl mx-auto text-left shadow-2xs">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#ff6b1e] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm">
                      Our Sole Physical Location: Sector 62, Noida
                    </strong>
                    <p className="mt-1 leading-relaxed text-slate-600">
                      We operate exclusively from 8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, UP 201309. We maintain <strong>NO branch offices or physical locations outside Noida</strong>. We serve our national clients through video calls, private WhatsApp channels, and shared staging links, with on-site visits arranged upon request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* State-Wise Hub Directory */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Regional Coverage
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Indexed Regional Hubs Across India
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Explore our primary indexed local hubs with specialized commercial coverage.
              </p>
            </div>

            <div className="space-y-8">
              {stateGroups.map((group) => (
                <div
                  key={group.state}
                  className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white shadow-xs"
                >
                  <div className="max-w-2xl">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#ff6b1e]" />
                      <span>{group.state}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {group.cities.map((loc) => {
                      const slug = toSlug(loc.city);
                      const isNoidaHQ = loc.city === "Noida";
                      return (
                        <Link
                          key={loc.city}
                          href={`/${slug}`}
                          className={`p-4 rounded-xl border transition shadow-2xs flex flex-col justify-between group ${
                            isNoidaHQ
                              ? "border-[#ff6b1e]/50 bg-[#fff5ee]/40 hover:bg-[#fff5ee]"
                              : "border-slate-200 bg-white hover:border-[#ff6b1e] hover:bg-slate-50/50"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors">
                                {loc.city}
                              </span>
                              {isNoidaHQ && (
                                <span className="text-[10px] font-bold text-white bg-[#ff6b1e] px-2 py-0.5 rounded-full">
                                  HQ
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-slate-500 block mt-1">
                              {loc.industryFocus.split(",")[0]}
                            </span>
                          </div>
                          <span className="mt-3 text-xs font-semibold text-[#ff6b1e] flex items-center gap-1">
                            <span>View Hub</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 py-12 sm:py-16 text-center border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Ready to Work with India&apos;s Dedicated Web Engineering Team?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Wherever your business is headquartered in India, we deliver transparent, milestone-driven web development with direct access to senior engineers at our Noida center.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton className="px-8 py-3.5 text-sm">
                  <span>Start Your Web Project</span>
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
      </article>
    </>
  );
}
