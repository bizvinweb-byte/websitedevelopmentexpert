import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Code2,
  DollarSign,
  FileCode2,
  Lock,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "WordPress Development Company India | Custom Theme & Woo",
  description:
    "Top WordPress development company in India. We code custom themes, Gutenberg blocks, and WooCommerce stores with zero plugin bloat and strict security.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/wordpress-website-development`,
  },
  openGraph: {
    title: "WordPress Development Company India | Custom Theme & Woo",
    description:
      "Custom WordPress and WooCommerce development company based in Noida. Clean PHP 8 code, Gutenberg editor blocks, and enterprise security hardening.",
    url: `${siteConfig.siteUrl}/services/wordpress-website-development`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "WordPress Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Company India | Custom Theme & Woo",
    description:
      "Bespoke WordPress theme engineering, custom Gutenberg blocks, and WooCommerce solutions built from Noida HQ for businesses across India.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function WordpressServicePage() {
  const pageUrl = `${siteConfig.siteUrl}/services/wordpress-website-development`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/website-development-company-in-india#services" },
    { name: "WordPress Website Development", url: "/services/wordpress-website-development" },
  ];

  const faqs = [
    {
      question: "How do your custom WordPress websites differ from typical template sites?",
      answer:
        "Typical Indian WordPress agency sites install heavy third-party marketplace themes (like Avada or Divi) loaded with 30+ conflicting plugins, drag-and-drop page builders, and unminified CSS. This results in slow load speeds and high vulnerability risks. In contrast, we write lean, bespoke WordPress themes using modern PHP 8, native Gutenberg blocks, and clean CSS. Our sites load in under a second and require fewer than 5 essential utility plugins.",
    },
    {
      question: "Is WordPress still secure for business websites in 2026?",
      answer:
        "Yes, when properly architected. Over 90% of WordPress security breaches stem from vulnerable, abandoned third-party plugins and default configuration weaknesses. We harden our WordPress deployments with custom database table prefixes, disabled XML-RPC, blocked rest-route user enumerations, automated daily cloud snapshots, and two-factor authentication (2FA) enforcement.",
    },
    {
      question: "Can our marketing team easily edit pages and publish blog posts without technical help?",
      answer:
        "Yes, that is the primary reason businesses love WordPress. We build custom native Gutenberg blocks tailored to your visual design system. Your marketing team can visually assemble new landing pages, change banners, insert calls to action, and publish blog articles with intuitive drag-and-drop controls without breaking layouts.",
    },
    {
      question: "What is Headless WordPress, and should we consider it?",
      answer:
        "Headless WordPress uses WordPress solely as a content authoring backend, while a modern Next.js React frontend consumes the content via the WordPress REST API or WPGraphQL. This gives your content team the familiar WordPress editorial interface while giving your users ultra-fast React browsing speeds and superior Core Web Vitals.",
    },
    {
      question: "What are the costs and delivery timelines for custom WordPress development?",
      answer:
        "Standard custom WordPress corporate websites typically range from ₹25,000 to ₹50,000 (2–3 weeks). Advanced WooCommerce stores and custom membership portals range between ₹45,000 to ₹1,10,000 (3–5 weeks).",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "WordPress Website Development Services",
    serviceType: "Content Management Web Development",
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
      "Custom WordPress development company engineering bespoke themes, Gutenberg blocks, WooCommerce portals, and security hardening for Indian businesses.",
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
                <Globe2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Custom WordPress &amp; WooCommerce Engineering • Noida HQ</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                WordPress Website Development Company in{" "}
                <span className="text-[#ff6b1e]">India</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
                We engineer bespoke WordPress themes, native Gutenberg blocks, and scalable WooCommerce storefronts without the plugin bloat and security vulnerabilities of standard template sites. Delivered from our Noida technology center.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  service="WordPress Development"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Request WordPress Scope</span>
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
                <span>Zero plugin bloat • Custom Gutenberg editor blocks • Enterprise security hardening</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Detailed WordPress Capabilities */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Bespoke Engineering
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                High-Performance WordPress Without the Bloat
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                WordPress powers over 40% of the web, but poorly built WordPress sites are notorious for sluggish load times and frequent security breaches. We treat WordPress as a professional content management framework, writing custom code that keeps your site fast, accessible, and secure.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Custom Theme Coding (PHP 8+)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We write clean, semantic PHP 8 and modular SCSS/Tailwind code structured around WordPress coding standards, ensuring lightning-fast database queries and zero unnecessary scripts.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Native Gutenberg Block Creation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Say goodbye to slow third-party page builders like Elementor or WPBakery. We engineer lightweight custom Gutenberg blocks tailored to your exact brand design system.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Enterprise Security Hardening
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We implement multi-layer security protections: non-standard database prefixes, disabled XML-RPC, brute-force login throttling, automated cloud backups, and SSL enforcement.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  WooCommerce Custom Development
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Transform WordPress into a scalable commercial storefront with Indian payment gateways (Razorpay, UPI), automated GST invoice PDFs, and courier tracking integrations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Speed &amp; Core Web Vitals Optimization
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Automated WebP/AVIF image generation, Redis object caching, database query optimization, and CDN edge caching to ensure fast mobile page rendering.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Headless WordPress with Next.js
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Leverage WordPress as an easy-to-use content repository via WPGraphQL, while serving your public website through an ultra-fast Next.js React frontend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pricing & Timelines */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Investment &amp; Timelines
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Transparent WordPress Development Packages in India
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  We deliver fixed-price WordPress proposals with itemized scopes. Every project includes comprehensive training sessions for your editorial team and post-launch support.
                </p>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Training &amp; Documentation:</strong> Step-by-step video tutorials recorded for your exact website backend, demonstrating how to update text, banners, and blogs.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">No Annual Theme Subscriptions:</strong> Because our themes are custom-coded, you never get locked into recurring commercial theme license renewals.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Full Administrative Access:</strong> You receive 100% administrator control over hosting, cPanel/SSH, database credentials, and WordPress super-admin accounts.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Indicative WordPress Packages (2026)
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Custom Corporate WordPress Site</span>
                      <span className="font-bold text-[#ff6b1e]">₹25,000 – ₹50,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Bespoke PHP 8 theme, custom Gutenberg blocks, technical SEO, fast caching, 2–3 weeks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Custom WooCommerce Storefront</span>
                      <span className="font-bold text-[#ff6b1e]">₹45,000 – ₹1,10,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Catalog setup, Indian payment gateways, GST invoicing, shipping integrations, 3–5 weeks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Headless WordPress + Next.js</span>
                      <span className="font-bold text-[#ff6b1e]">₹90,000 – ₹2,20,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      WPGraphQL backend, React 19 frontend, edge rendering, sub-second speed, 5–8 weeks.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <EnquiryButton
                    service="WordPress Development"
                    className="w-full justify-center text-xs sm:text-sm"
                  >
                    <span>Request WordPress Technical Proposal</span>
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
                Frequently Asked Questions — WordPress Development
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Answers regarding custom theme coding, security hardening, and Gutenberg blocks.
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
              Related Web Development Capabilities
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <Link
                href="/services/shopify-development-company"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Shopify Development →
              </Link>
              <Link
                href="/services/nextjs-development-company"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Next.js Engineering →
              </Link>
              <Link
                href="/services/custom-web-application-development"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Custom Web Applications →
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
                Ready to Upgrade Your WordPress Website?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Connect with our senior WordPress developers at our Noida Sector 62 office. We evaluate your current site performance, security posture, and provide a fixed-scope roadmap.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  service="WordPress Development"
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Free WordPress Consultation</span>
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
