import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  PhoneCall,
  Sparkles,
  MapPin,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { serviceLocations, siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes at build time for instant Googlebot crawling
export async function generateStaticParams() {
  return Object.keys(serviceLocations).map((slug) => ({
    slug,
  }));
}

// Dynamic SEO Metadata for Google Rank 1 Targeting
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = serviceLocations[slug];

  if (!pageData) {
    return {
      title: "Page Not Found",
    };
  }

  const pageUrl = `${siteConfig.siteUrl}/services/${pageData.slug}`;

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      url: pageUrl,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
          width: 1200,
          height: 630,
          alt: `${pageData.heading} | Website Development Expert`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
    },
  };
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const data = serviceLocations[slug];

  if (!data) {
    notFound();
  }

  // Schema: WebDevelopmentService + LocalBusiness
  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: data.heading,
    description: data.metaDescription,
    url: `${siteConfig.siteUrl}/services/${data.slug}`,
    logo: `${siteConfig.siteUrl}/images/webdev-logo.png`,
    image: `${siteConfig.siteUrl}/images/webdev-banner.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "City",
      name: data.cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: data.stateName,
      },
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
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
  };

  // Schema: FAQPage for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/#services" },
    { name: data.heading, url: `/services/${data.slug}` },
  ];

  return (
    <>
      <JsonLd data={[localServiceSchema, faqSchema]} />

      <article className="min-h-screen bg-white">
        {/* Top Hero Section */}
        <header className="relative overflow-hidden pt-8 pb-20 sm:pt-12 sm:pb-28 bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-gradient-to-tr from-[#ff6b1e]/10 to-amber-200/20 blur-3xl rounded-full pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Hierarchy */}
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            {/* Main Hero Header */}
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Premier Web Development for {data.cityName} • Engineered at Noida HQ</span>
              </div>

              {/* Exact Target H1 for Google Rank */}
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl sm:leading-tight">
                {data.heading}
              </h1>

              {/* High-Impact Hero Summary */}
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
                {data.heroDescription}
              </p>

              {/* CTA Action Bar */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  location={data.cityName}
                  service={`Website Development in ${data.cityName}`}
                  className="px-8 py-3.5 text-base"
                >
                  <span>Contact Now</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-base font-semibold text-slate-700 shadow-2xs hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call: +91 99906 13140</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Clients / Trust Signals */}
        <section
          className="border-y border-slate-100 bg-slate-50/60 py-10"
          aria-label="Featured Clients"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Trusted by fast-growing brands across {data.stateName} &amp; India
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-6 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="font-extrabold text-slate-800 text-lg">SWIGGY</div>
              <div className="font-extrabold text-slate-800 text-lg">ADDA247</div>
              <div className="font-extrabold text-slate-800 text-lg">SKILLMINE</div>
              <div className="font-extrabold text-slate-800 text-lg">MOBIOTICS</div>
              <div className="font-extrabold text-slate-800 text-lg">ZOMATO</div>
              <div className="font-extrabold text-slate-800 text-lg">PAYTM</div>
            </div>
          </div>
        </section>

        {/* Core Capabilities / Semantic Features Section */}
        <section
          className="py-12 sm:py-16 bg-white"
          id="features"
          aria-labelledby="features-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2
                id="features-heading"
                className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Why Businesses in {data.cityName} Choose Our Web Engineering
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We engineer scalable web platforms combining cutting-edge design,
                clean Next.js architecture, and top-tier Google ranking factors.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {data.features.map((feat, idx) => {
                const icons = [Code2, Zap, ShieldCheck, Rocket];
                const IconComponent = icons[idx % icons.length];
                return (
                  <div
                    key={feat.title}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e] group-hover:bg-[#ff6b1e] group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section
          className="bg-slate-900 py-12 sm:py-16 text-white"
          id="process"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#ff6b1e] text-xs font-bold uppercase tracking-wider">
                Proven Methodology
              </span>
              <h2
                id="process-heading"
                className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                How We Deliver 1st-Page Google Ready Websites in {data.cityName}
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6"
                >
                  <span className="text-2xl font-black text-[#ff6b1e]">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section with Structured Data */}
        <section
          className="py-12 sm:py-16 bg-white"
          id="faqs"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6b1e] bg-[#fff5ee] border border-[#ff6b1e]/20 px-3 py-1 rounded-full">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2
                id="faq-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Website Development in {data.cityName} — FAQs
              </h2>
              <p className="mt-3 text-slate-600 text-sm">
                Answers to common queries about our web design and Google ranking services in {data.cityName}, {data.stateName}.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {data.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
                >
                  <h3 className="text-base font-bold text-slate-900 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Cities / Internal Silo Linking for SEO Authority */}
        {data.nearbyCities.length > 0 && (
          <section
            className="border-t border-slate-100 bg-slate-50/50 py-10 sm:py-12"
            aria-labelledby="nearby-hubs-heading"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2
                  id="nearby-hubs-heading"
                  className="text-2xl font-bold text-slate-900"
                >
                  Nearby Web Development Hubs in {data.stateName} &amp; Region
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Explore our localized digital services in neighboring commercial cities
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {data.nearbyCities.map((nearCity) => (
                  <Link
                    key={nearCity.slug}
                    href={`/services/${nearCity.slug}`}
                    className="flex items-center gap-2 p-4 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] shadow-2xs transition"
                  >
                    <MapPin className="h-4 w-4 text-[#ff6b1e] shrink-0" />
                    <span className="truncate">Web Agency in {nearCity.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA Section */}
        <section
          className="bg-white py-12 sm:py-16 text-center"
          id="contact"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-[#fff5ee] p-10 sm:p-14 shadow-lg shadow-[#ff6b1e]/5">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Ready to Rank Your Website in {data.cityName} on Google&apos;s 1st Page?
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base">
                Speak with our senior website engineers in {data.cityName}. We
                provide a complete SEO and architectural audit before starting.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <EnquiryButton
                  location={data.cityName}
                  service={`Website Development in ${data.cityName}`}
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Free Quote in {data.cityName}</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-8 py-3.5 text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call: +91 99906 13140</span>
                </Link>
                <Link
                  href="mailto:contact@websitedevelopmentexpert.in"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-semibold text-slate-600 hover:border-slate-400 transition-all"
                >
                  Email Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
