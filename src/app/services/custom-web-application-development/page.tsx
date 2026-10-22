import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Server,
  Database,
  Lock,
  Globe2,
  DollarSign,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Custom Web Application Development India | Full-Stack Experts",
  description:
    "Leading custom web application development company in India. We engineer scalable SaaS platforms, enterprise client portals, and secure cloud software.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/custom-web-application-development`,
  },
  openGraph: {
    title: "Custom Web Application Development India | Full-Stack Experts",
    description:
      "Enterprise full-stack web application development company based in Noida. We build robust SaaS platforms, internal portals, and custom API systems for Indian businesses.",
    url: `${siteConfig.siteUrl}/services/custom-web-application-development`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Custom Web Application Development in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Application Development India | Full-Stack Experts",
    description:
      "Custom Next.js, Node.js, and PostgreSQL web application engineering built from Noida HQ for enterprises and startups across India.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function CustomWebAppServicePage() {
  const pageUrl = `${siteConfig.siteUrl}/services/custom-web-application-development`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/website-development-company-in-india#services" },
    { name: "Custom Web Application Development", url: "/services/custom-web-application-development" },
  ];

  const faqs = [
    {
      question: "What is the difference between a custom web application and a standard website?",
      answer:
        "A standard website is primarily informative: displaying company profiles, service overviews, contact forms, and articles. A custom web application is dynamic, interactive software accessible via web browsers. It includes user authentication, role-based permission tiers, database CRUD operations, business logic automation (invoicing, scheduling, approvals), third-party API data synchronizations, and real-time state management.",
    },
    {
      question: "How do you ensure data security and compliance for sensitive business applications?",
      answer:
        "We implement enterprise security best practices: encrypted authentication tokens (JWT with HTTP-only cookies), role-based access control (RBAC), database encryption at rest using AES-256, TLS 1.3 in transit, parameterized database queries to prevent SQL injections, and strict Content Security Policies (CSP). We follow OWASP Top 10 guidelines throughout design and implementation.",
    },
    {
      question: "Can custom web applications scale to handle high concurrent user traffic?",
      answer:
        "Yes. We engineer applications on modern cloud-native architectures (Docker, Kubernetes, AWS ECS, or Vercel Edge). Backends utilize stateless API runtimes, Redis in-memory caching for frequent queries, and read-replica database pools to handle thousands of concurrent transactions without performance degradation.",
    },
    {
      question: "What is your development methodology and code handover protocol?",
      answer:
        "We work in two-week agile sprints. Every sprint concludes with a live video demo on a dedicated staging server. Code is committed daily to your private Git repository (GitHub/GitLab). Upon project completion and final milestone approval, 100% intellectual property, deployment scripts, database schemas, and documentation are transferred to your organization.",
    },
    {
      question: "What are typical investment levels and timelines for custom web applications?",
      answer:
        "Minimum Viable Products (MVPs) and internal workflow dashboards typically range from ₹80,000 to ₹1,80,000 (4–6 weeks). Complex multi-tenant SaaS platforms, enterprise client portals, and marketplace applications range from ₹1,80,000 to ₹4,50,000+ (8–14 weeks) depending on custom integrations and complexity.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Custom Web Application Development Services",
    serviceType: "Software Web Engineering",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "Full-stack custom web application development company engineering scalable SaaS platforms, client portals, and enterprise workflow software for Indian businesses.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <Code2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Full-Stack SaaS &amp; Enterprise Portals • Noida HQ Engineering</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Custom Web Application Development in{" "}
                <span className="text-[#ff6b1e]">India</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
                We engineer scalable, secure, and mission-critical web applications tailored to your exact business logic. From multi-tenant SaaS products and B2B vendor portals to custom workflow automation software, delivered from our Noida Sector 62 technology center.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  service="Custom Web Application"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Request Architectural Scope</span>
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

              <div className="mt-6 text-xs text-slate-500">
                <span>Next.js 16 • Node.js / Python • PostgreSQL • AWS &amp; Vercel • 100% Code Ownership</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Detailed Capabilities */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Tailored Software
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Custom Web Applications Tailored to Your Business Architecture
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Off-the-shelf software rarely fits nuanced operational processes. When subscription SaaS tools force you into rigid compromises, building custom web applications gives you proprietary advantage, eliminates recurring per-seat software licensing fees, and automates manual bottlenecks.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Multi-Tenant SaaS Platforms
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Architected with partitioned database schemas, automated subscription billing (Razorpay Subscriptions, Stripe), usage tracking, and self-service customer admin dashboards.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  B2B Client &amp; Vendor Portals
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Secure collaboration portals with role-based document sharing, invoice downloads, ticket tracking, milestone approvals, and automated email/WhatsApp alerts.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Internal Workflow Automation Dashboards
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Eliminate messy spreadsheets with bespoke database tools: inventory management, lead pipeline tracking, employee shifts, and custom analytical reporting.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  REST &amp; GraphQL API Architecture
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-throughput, well-documented API endpoints connecting your web application to mobile apps, legacy ERPs, payment gateways, and third-party partner networks.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Role-Based Access Control (RBAC)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Granular permission matrices ensuring administrators, managers, staff, and external clients only see and edit data authorized for their security clearance tier.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Real-Time Notifications &amp; Webhooks
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Websocket connections, live status updates, background task processing with Celery/Redis, and automated transactional WhatsApp/SMS message delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Technology Stack & Pricing */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Disciplined Execution
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Modern Production Technology Stack
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  We build with modern, battle-tested technologies that attract top developer talent and avoid legacy framework obsolescence.
                </p>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Frontend:</strong> Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Lucide Icons, and accessible Radix UI primitives.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Backend &amp; Databases:</strong> Node.js / NestJS / Python FastAPI, PostgreSQL, Prisma ORM, Redis for in-memory session caching.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Infrastructure &amp; CI/CD:</strong> Vercel Edge Networks, AWS (EC2, S3, RDS), Docker containers, and automated GitHub Actions test pipelines.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Indicative Web Application Tiers (2026)
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Workflow Dashboard / Client Portal</span>
                      <span className="font-bold text-[#ff6b1e]">₹80,000 – ₹1,80,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      User authentication, database models, CRUD views, exportable reports, 4–6 weeks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Full-Featured SaaS MVP</span>
                      <span className="font-bold text-[#ff6b1e]">₹1,80,000 – ₹3,20,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Multi-tenant organization logic, recurring subscription billing, role permissions, 6–9 weeks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Enterprise Custom Software</span>
                      <span className="font-bold text-[#ff6b1e]">₹3,20,000 – ₹6,00,000+</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Complex enterprise ERP/CRM webhooks, high-concurrency scaling, microservices, 8–14 weeks.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <EnquiryButton
                    service="Custom Web Application"
                    className="w-full justify-center text-xs sm:text-sm"
                  >
                    <span>Request Web Application Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </EnquiryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: FAQs */}
        <section className="py-12 sm:py-16 bg-white" id="faqs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Direct Answers
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions — Custom Web Apps
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Answers regarding software scalability, data security, sprint models, and IP transfer.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Cross-Linking */}
        <section className="py-10 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
              Explore Related Web Capabilities
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <Link
                href="/services/nextjs-development-company"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Next.js Engineering →
              </Link>
              <Link
                href="/services/shopify-development-company"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Shopify Development →
              </Link>
              <Link
                href="/services/ecommerce-website-development"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                E-Commerce Solutions →
              </Link>
              <Link
                href="/website-development-cost-in-india"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Website Cost in India Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-[#fff5ee] p-8 sm:p-12 shadow-lg shadow-[#ff6b1e]/5">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Ready to Build Your Custom Web Application?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Connect with our senior software architects at our Noida Sector 62 office. We evaluate your workflow specifications, technical requirements, and deliver an actionable fixed proposal.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  service="Custom Web Application"
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Free Architecture Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call: +91 99906 13140</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
