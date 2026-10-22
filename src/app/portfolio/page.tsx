import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  ExternalLink,
  Code2,
  ShoppingBag,
  Cpu,
  Globe2,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Website Development Expert",
  description:
    "Explore case study architectures and web application deliverables by Website Development Expert. Engineered at our Sector 62, Noida headquarters.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/portfolio`,
  },
  openGraph: {
    title: "Portfolio & Case Studies | Website Development Expert",
    description:
      "Explore web application architectures, custom Shopify storefronts, and Next.js platforms built by our Noida engineering team.",
    url: `${siteConfig.siteUrl}/portfolio`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Website Development Expert Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Website Development Expert",
    description:
      "Engineered web applications, custom Shopify stores, and enterprise portals built for Indian businesses.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

const PORTFOLIO_PROJECTS = [
  {
    slug: "d2c-luxury-shopify-store",
    title: "High-Growth D2C Apparel & Lifestyle Storefront",
    category: "Shopify E-Commerce",
    industry: "D2C Fashion & Retail",
    stack: ["Shopify 2.0", "Liquid", "Razorpay UPI", "Shiprocket API"],
    summary:
      "Custom Shopify 2.0 theme engineered for high mobile conversion, featuring instant UPI checkout, COD OTP verification, and automated courier assignment.",
    placeholderTag: "[ADD REAL CASE STUDY: D2C Shopify Storefront — Client Name, Screenshots & Live URL]",
  },
  {
    slug: "nextjs-b2b-saas-platform",
    title: "Enterprise Multi-Tenant SaaS Web Application",
    category: "Custom Web Application",
    industry: "B2B Software & Workflow Automation",
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma"],
    summary:
      "Full-stack web application featuring role-based access control, subscription billing integration, dynamic analytical dashboards, and sub-second edge rendering.",
    placeholderTag: "[ADD REAL CASE STUDY: Next.js SaaS Web App — Client Name, Screenshots & Live URL]",
  },
  {
    slug: "industrial-export-portal",
    title: "Global Industrial Machinery & Export Showcase",
    category: "Corporate Web Portal",
    industry: "Heavy Engineering & Manufacturing",
    stack: ["Next.js", "Tailwind CSS", "Schema.org", "AWS Edge"],
    summary:
      "Digital export catalog engineered for international procurement buyers, complete with downloadable technical spec sheets, RFQ quote generators, and multi-lingual architecture.",
    placeholderTag: "[ADD REAL CASE STUDY: Industrial Exporter Portal — Client Name, Screenshots & Live URL]",
  },
  {
    slug: "healthcare-appointment-portal",
    title: "Super-Specialty Healthcare & Doctor Booking Platform",
    category: "Healthcare Web Application",
    industry: "Medical Services & Diagnostic Networks",
    stack: ["Next.js App Router", "Node.js", "PostgreSQL", "SMS/WhatsApp API"],
    summary:
      "Patient appointment scheduling portal with real-time doctor availability calendars, automated SMS/WhatsApp reminders, and secure PDF test report downloads.",
    placeholderTag: "[ADD REAL CASE STUDY: Healthcare Appointment System — Client Name, Screenshots & Live URL]",
  },
];

export default function PortfolioPage() {
  const pageUrl = `${siteConfig.siteUrl}/portfolio`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Portfolio & Case Studies | Website Development Expert",
    description:
      "Showcase of custom web applications, e-commerce storefronts, and corporate portals engineered by Website Development Expert.",
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
                <Layers className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Engineered Case Studies • Transparent Architectures</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Our Work &amp; <span className="text-[#ff6b1e]">Deliverables</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                Explore real architectural blueprints, technology stacks, and engineering standards delivered by our Sector 62, Noida development center.
              </p>

              <div className="mt-6 text-xs text-slate-500">
                <span>In compliance with client NDAs, client-identifying metrics and logos are kept as placeholders until explicit verification.</span>
              </div>
            </div>
          </div>
        </header>

        {/* Portfolio Grid */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_PROJECTS.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:border-[#ff6b1e]/50 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-bold text-[#ff6b1e] bg-[#fff5ee] px-3 py-1 rounded-full border border-[#ff6b1e]/20">
                        {project.category}
                      </span>
                      <span>{project.industry}</span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mt-2">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="hover:text-[#ff6b1e] transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-semibold text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Placeholder Box */}
                    <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-3.5 text-center">
                      <p className="text-[11px] font-mono text-slate-600">
                        {project.placeholderTag}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                    >
                      <span>View Technical Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <EnquiryButton
                      variant="link"
                      service={project.title}
                      className="p-0 text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      <span>Inquire Similar Project</span>
                    </EnquiryButton>
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
                Have a Web Application or Storefront to Build?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Connect with our senior software architects at our Noida Sector 62 office. We evaluate your requirements and provide an actionable architectural scope.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton className="px-8 py-3.5 text-sm">
                  <span>Discuss Your Project</span>
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
