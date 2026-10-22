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
  Building2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { serviceLocations, siteConfig, isCityIndexed } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceLocations).map((slug) => ({
    slug,
  }));
}

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

  const isIndexed = isCityIndexed(slug);
  const canonicalUrl = isIndexed
    ? `${siteConfig.siteUrl}/${pageData.slug}`
    : `${siteConfig.siteUrl}/services/${pageData.slug}`;

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      url: canonicalUrl,
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

  const isIndexed = isCityIndexed(slug);
  const canonicalUrl = isIndexed
    ? `${siteConfig.siteUrl}/${data.slug}`
    : `${siteConfig.siteUrl}/services/${data.slug}`;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Areas We Serve", url: "/areas-we-serve" },
    { name: data.heading, url: `/services/${data.slug}` },
  ];

  return (
    <>
      <article className="min-h-screen bg-white">
        {/* Top Hero Section */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 bg-gradient-to-b from-orange-50/30 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Noida Sector 62 HQ • Remote Delivery for {data.cityName}</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
                {data.heading}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
                {data.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  location={data.cityName}
                  service={`Website Development in ${data.cityName}`}
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Request Proposal for {data.cityName}</span>
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

              {/* Honest Notice */}
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs text-slate-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
                <Building2 className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                <span>
                  <strong>Notice:</strong> Headquartered at Sector 62, Noida. We serve clients in {data.cityName} remotely via video calls, WhatsApp, and private staging links. We maintain no branch offices in {data.cityName}.
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-12 bg-white border-t border-slate-100" id="features">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Web Development Capabilities for {data.cityName}
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Engineered with clean Next.js architecture, mobile-first design, and Schema.org structured data.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.features.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition-all"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-slate-900 py-12 text-white" id="process">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-[#ff6b1e] text-xs font-bold uppercase tracking-wider">
                Methodology
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                How We Deliver Web Projects for {data.cityName}
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5"
                >
                  <span className="text-xl font-black text-[#ff6b1e]">
                    {step.step}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-white" id="faqs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Frequently Asked Questions — {data.cityName}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Answers regarding remote delivery, communication, and technical standards.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {data.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
                >
                  <h3 className="text-sm font-bold text-slate-900 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Link to Areas We Serve */}
        <section className="py-8 bg-slate-50 border-t border-slate-100 text-center">
          <div className="mx-auto max-w-4xl px-4">
            <p className="text-xs text-slate-600">
              Want to see all regions we serve across India?{" "}
              <Link href="/areas-we-serve" className="text-[#ff6b1e] font-bold hover:underline">
                View Areas We Serve →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-12 text-center" id="contact">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-[#fff5ee] p-8 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Need a High-Performance Website for Your Business in {data.cityName}?
              </h2>
              <p className="mt-3 text-slate-600 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
                Connect with our senior website development team at our Noida Sector 62 office for a free technical consultation and fixed proposal.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  location={data.cityName}
                  service={`Website Development in ${data.cityName}`}
                  className="px-8 py-3 text-xs sm:text-sm"
                >
                  <span>Request Proposal for {data.cityName}</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
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
