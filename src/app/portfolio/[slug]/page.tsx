import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Globe2,
  Layers,
  Building2,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  industry: string;
  stack: string[];
  clientOverview: string;
  challenge: string;
  solution: string;
  technicalHighlights: string[];
  architectureDetails: {
    frontend: string;
    backend: string;
    integrations: string;
    security: string;
  };
  metricsPlaceholder: string;
  reviewPlaceholder: string;
  relevantServiceUrl: string;
  relevantServiceName: string;
}

const CASE_STUDIES: Record<string, ProjectDetail> = {
  "d2c-luxury-shopify-store": {
    slug: "d2c-luxury-shopify-store",
    title: "High-Growth D2C Apparel & Lifestyle Storefront",
    category: "Shopify E-Commerce",
    industry: "D2C Fashion & Retail",
    stack: ["Shopify 2.0", "Liquid", "Razorpay UPI", "Shiprocket API", "Tailwind CSS"],
    clientOverview:
      "A fast-scaling Indian direct-to-consumer fashion brand requiring a high-converting mobile-first storefront capable of handling nationwide festive flash sales without performance degradation.",
    challenge:
      "The client's previous monolithic setup suffered from high cart abandonment on 4G networks, delayed Indian payment processing, and cumbersome manual order routing to third-party 3PL warehouses.",
    solution:
      "Engineered a lightweight custom Shopify 2.0 theme adhering to zero-bloat Liquid rendering principles. Integrated accelerated Razorpay UPI Magic Checkout, automated COD OTP verification via SMS, and bidirectional Shiprocket dispatch webhooks.",
    technicalHighlights: [
      "Custom Shopify 2.0 Liquid sections with zero extraneous jQuery or heavy UI dependencies",
      "One-click UPI payment integration optimizing Indian checkout completion",
      "Automated Cash on Delivery (COD) verification preventing fake orders and reducing RTO",
      "Automated inventory synchronization across regional fulfillment warehouses",
      "Dynamic schema markup for Merchant Product and Breadcrumb search snippets",
    ],
    architectureDetails: {
      frontend: "Shopify 2.0 Sections Architecture, Modular CSS, Vanilla JavaScript micro-interactions",
      backend: "Shopify Storefront & Admin REST/GraphQL APIs, Node.js webhook middleware",
      integrations: "Razorpay Payment Gateway, Shiprocket 3PL API, WhatsApp Business Automated Updates",
      security: "Level 1 PCI-DSS compliant checkout, automated CSRF validation, SSL encrypted transport",
    },
    metricsPlaceholder:
      "[ADD REAL METRICS: e.g. +38% Checkout Completion, Sub-1.8s Mobile First Contentful Paint, 24% Reduction in RTO via OTP Verification]",
    reviewPlaceholder:
      "[ADD REAL CLIENT REVIEW: 'The team at Website Development Expert engineered our Shopify storefront with incredible precision and speed.' — Founder, D2C Apparel Brand, Mumbai]",
    relevantServiceUrl: "/services/shopify-development-company",
    relevantServiceName: "Shopify Development Services",
  },
  "nextjs-b2b-saas-platform": {
    slug: "nextjs-b2b-saas-platform",
    title: "Enterprise Multi-Tenant SaaS Web Application",
    category: "Custom Web Application",
    industry: "B2B Software & Workflow Automation",
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    clientOverview:
      "A B2B enterprise software provider serving supply chain managers across Indian logistics corridors, requiring a multi-tenant client portal with granular role permissions.",
    challenge:
      "The legacy single-page application had slow initial dashboard load times, frequent bundle re-parsing issues, and fragile relational data querying under peak concurrency.",
    solution:
      "Re-architected the web platform using Next.js App Router with React Server Components. Migrated state-heavy tables to server-side paginated queries backed by PostgreSQL and Prisma ORM, deployed across distributed edge nodes.",
    technicalHighlights: [
      "React Server Components streaming heavy analytical datasets with zero client-side JavaScript bloat",
      "Multi-tenant data isolation with role-based access control (Admin, Dispatcher, Auditor)",
      "Strict end-to-end TypeScript typings eliminating cross-service payload discrepancies",
      "Automated PDF invoice generation and GST tax calculation engines",
      "Edge middleware authentication verifying JWT sessions in under 15ms",
    ],
    architectureDetails: {
      frontend: "Next.js App Router, Tailwind CSS, TanStack React Query for real-time mutations",
      backend: "Node.js Serverless Edge Functions, Prisma ORM, PostgreSQL connection pooling",
      integrations: "SendGrid Transactional API, AWS S3 Secure Storage, Enterprise SSO",
      security: "Encrypted cookie sessions, strict Content Security Policy, rate-limited API routes",
    },
    metricsPlaceholder:
      "[ADD REAL METRICS: e.g. 65% Reduction in Initial Bundle Size, Sub-300ms Dashboard Route Transitions, 99.9% Uptime During Monthly Billing Audits]",
    reviewPlaceholder:
      "[ADD REAL CLIENT REVIEW: 'Their architectural knowledge of Next.js and secure database handling gave our enterprise clients complete peace of mind.' — CTO, Logistics SaaS, Gurugram]",
    relevantServiceUrl: "/services/nextjs-development-company",
    relevantServiceName: "Next.js Development Services",
  },
  "industrial-export-portal": {
    slug: "industrial-export-portal",
    title: "Global Industrial Machinery & Export Showcase",
    category: "Corporate Web Portal",
    industry: "Heavy Engineering & Manufacturing",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS CloudFront", "Schema.org"],
    clientOverview:
      "A manufacturing firm based in an NCR industrial zone exporting precision machinery, valves, and CNC components to clients across Europe, the Middle East, and Southeast Asia.",
    challenge:
      "The company's digital catalog failed to attract international procurement inquiries due to lack of technical specification schemas, slow global asset delivery, and poor mobile readability.",
    solution:
      "Built a technical export catalog utilizing Next.js static site generation (SSG) with global CDN distribution. Implemented Schema.org Product and TechArticle metadata, multi-currency price estimators, and a structured Request-for-Quote (RFQ) pipeline.",
    technicalHighlights: [
      "Search-optimized technical spec sheets indexable for industrial machine part numbers",
      "Global CDN caching ensuring sub-second response times for overseas procurement agents",
      "Interactive RFQ (Request for Quote) pipeline delivering inquiries directly to sales CRM",
      "Downloadable engineering CAD and PDF specification data sheets with lazy streaming",
      "Bilingual ready architecture with internationalized URL path routing",
    ],
    architectureDetails: {
      frontend: "Next.js Static Generation, Responsive Tailwind UI, Accessible HTML5 table components",
      backend: "Next.js API routes routing inquiries to automated email and CRM webhooks",
      integrations: "AWS CloudFront Global CDN, S3 Document Vault, Zoho CRM Integration",
      security: "HSTS header protection, sanitized inquiry inputs, automated bot-filtering honeypots",
    },
    metricsPlaceholder:
      "[ADD REAL METRICS: e.g. 140% Increase in International Organic Inquiries, 0.8s Global CDN First Contentful Paint, Verified B2B Procurement Leads]",
    reviewPlaceholder:
      "[ADD REAL CLIENT REVIEW: 'Website Development Expert gave our manufacturing firm a world-class international digital presence that directly brought European inquiries.' — Managing Director, Noida]",
    relevantServiceUrl: "/services/custom-web-application-development",
    relevantServiceName: "Custom Web Application Development",
  },
  "healthcare-appointment-portal": {
    slug: "healthcare-appointment-portal",
    title: "Super-Specialty Healthcare & Doctor Booking Platform",
    category: "Healthcare Web Application",
    industry: "Medical Services & Diagnostic Networks",
    stack: ["Next.js App Router", "Node.js", "PostgreSQL", "SMS/WhatsApp API", "Tailwind CSS"],
    clientOverview:
      "A regional multi-specialty clinical network requiring an online booking portal for outpatient consultations, diagnostic test slot reservations, and automated patient reminders.",
    challenge:
      "Patients suffered from double-booking errors, long telephone hold times, and missed consultations due to the lack of automated multi-channel notification reminders.",
    solution:
      "Developed a responsive Next.js booking portal integrating real-time doctor consultation slots, instant appointment confirmation via WhatsApp API, and secure authenticated test report retrieval.",
    technicalHighlights: [
      "Dynamic doctor schedule calendar with automated slot blocking avoiding concurrent overlaps",
      "Automated WhatsApp and SMS confirmation webhooks triggered upon successful reservation",
      "HIPAA and Indian digital health data compliance considerations for patient test records",
      "High-contrast, accessible typography supporting elderly and mobile-first users",
      "Zero-latency search filter by doctor specialty, clinic branch, and appointment availability",
    ],
    architectureDetails: {
      frontend: "Next.js App Router, Accessible ARIA UI primitives, Tailwind CSS",
      backend: "Node.js scheduling microservice, PostgreSQL transactional lock handling",
      integrations: "Gupshup / Twilio WhatsApp API, Razorpay Consultation Fees, S3 Encrypted Reports",
      security: "Time-limited signed URLs for medical report downloads, encrypted patient identifiers",
    },
    metricsPlaceholder:
      "[ADD REAL METRICS: e.g. 45% Reduction in Clinic Front-Desk Call Volume, 80% Drop in Appointment No-Shows via WhatsApp Reminders]",
    reviewPlaceholder:
      "[ADD REAL CLIENT REVIEW: 'The patient scheduling flow works seamlessly across every mobile browser. It transformed our clinic operations.' — Medical Director, Hospital Network, Delhi NCR]",
    relevantServiceUrl: "/services/custom-web-application-development",
    relevantServiceName: "Custom Web Application Development",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];
  if (!project) return {};

  const pageUrl = `${siteConfig.siteUrl}/portfolio/${project.slug}`;

  return {
    title: `${project.title.slice(0, 48)} | Case Study`,
    description: `Case study architecture for ${project.title}. Engineered by Website Development Expert at our Sector 62, Noida facility.`.slice(0, 155),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.clientOverview,
      url: pageUrl,
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study`,
      description: project.clientOverview.slice(0, 150),
      images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];
  if (!project) {
    notFound();
  }

  const pageUrl = `${siteConfig.siteUrl}/portfolio/${project.slug}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
    { name: project.category, url: pageUrl },
  ];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${pageUrl}#article`,
    url: pageUrl,
    headline: project.title,
    description: project.clientOverview,
    inLanguage: "en-IN",
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Website Development Expert",
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
    about: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: project.category,
      operatingSystem: "Web",
    },
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#ff6b1e] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Case Studies</span>
              </Link>
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-5 shadow-2xs">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.industry}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {project.title}
              </h1>

              <p className="mt-5 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
                {project.clientOverview}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="py-10 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-3">
                  <Zap className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#fff5ee]/40 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[#ff6b1e] font-bold text-sm mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Architectural Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Matrix */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#ff6b1e]" />
                <span>Technical Blueprint &amp; Subsystems</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Frontend Layer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    {project.architectureDetails.frontend}
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Backend &amp; Database
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    {project.architectureDetails.backend}
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Third-Party APIs &amp; Logistics
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    {project.architectureDetails.integrations}
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Security &amp; Data Integrity
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium">
                    {project.architectureDetails.security}
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Highlights */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#ff6b1e]" />
                <span>Core Engineering Highlights</span>
              </h2>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-3.5 shadow-2xs">
                {project.technicalHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Placeholders Section */}
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Verified Performance &amp; Client Endorsement
              </h2>

              {/* Performance Metrics Placeholder */}
              <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-6 sm:p-8">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                  Performance Metrics Verification Required
                </div>
                <p className="text-xs sm:text-sm font-mono text-amber-900 leading-relaxed">
                  {project.metricsPlaceholder}
                </p>
                <div className="mt-3 text-[11px] text-amber-700">
                  Per our strict editorial guidelines, real client analytics figures are audited before being published publicly.
                </div>
              </div>

              {/* Client Review Placeholder */}
              <div className="rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/60 p-6 sm:p-8">
                <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">
                  Client Testimonial Verification
                </div>
                <blockquote className="text-xs sm:text-sm font-mono text-blue-900 leading-relaxed italic">
                  {project.reviewPlaceholder}
                </blockquote>
                <div className="mt-3 text-[11px] text-blue-700">
                  Client references and live URL previews can be demonstrated during private architectural discovery sessions.
                </div>
              </div>

              {/* Case Study Screenshot Placeholder */}
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <p className="text-xs font-mono text-slate-600">
                  [ADD REAL CASE STUDY SCREENSHOTS &amp; ARCHITECTURE DIAGRAMS FOR {project.title.toUpperCase()}]
                </p>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  1200 x 675 responsive WebP asset placeholder
                </span>
              </div>
            </div>

            {/* Service Cross-link */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Interested in this exact technology stack?
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Learn more about our dedicated service deliverables and architectural processes.
                </p>
              </div>
              <Link
                href={project.relevantServiceUrl}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:text-[#ff6b1e] hover:border-[#ff6b1e] transition-colors shrink-0 shadow-2xs"
              >
                <span>Explore {project.relevantServiceName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 py-12 sm:py-16 text-center border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ready to Engineer Your Web Platform?
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
              Connect with our senior technical consultants at our Sector 62, Noida office or schedule a video discovery session from anywhere in India.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <EnquiryButton className="px-8 py-3.5 text-sm" service={project.title}>
                <span>Request Architectural Consultation</span>
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
