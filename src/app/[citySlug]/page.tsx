import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  MapPin,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  Video,
  MessageSquare,
  Search,
  Compass,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { CITIES_DATA } from "@/lib/city-data";
import { EnquiryButton } from "@/components/EnquiryModal";

interface PageProps {
  params: Promise<{ citySlug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CITIES_DATA).map((citySlug) => ({
    citySlug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const data = CITIES_DATA[citySlug];

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  const pageUrl = `${siteConfig.siteUrl}/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: pageUrl,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
          width: 1200,
          height: 630,
          alt: `${data.heroHeadline} | Website Development Expert`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
    },
  };
}

export default async function IndexedCityPage({ params }: PageProps) {
  const { citySlug } = await params;
  const data = CITIES_DATA[citySlug];

  if (!data) {
    notFound();
  }

  const pageUrl = `${siteConfig.siteUrl}/${data.slug}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Areas We Serve", url: "/areas-we-serve" },
    { name: data.cityName, url: `/${data.slug}` },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: data.heroHeadline,
    description: data.metaDescription,
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
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
      <JsonLd data={[webPageSchema, faqSchema]} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                {data.isNCR ? (
                  <Building2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                ) : (
                  <Globe2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                )}
                <span>
                  {data.isNCR
                    ? `Delhi NCR Local Service • Direct Proximity to Noida HQ`
                    : `Remote Project Delivery for ${data.cityName} • Engineered at Noida HQ`}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                {data.heroHeadline}
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                {data.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  location={data.cityName}
                  service={`Website Development for ${data.cityName}`}
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
                  <strong>Sole Physical Location:</strong> Sector 62, Noida, UP. We maintain NO offices in {data.cityName}. All projects are delivered remotely with full transparency.
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: City Industry Landscape */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Industrial Context
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.industryLandscape.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {data.industryLandscape.description}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.industryLandscape.sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {sector.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sector.need}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Local Buyer Behavior & Search Trends */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Market Insights
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  How Buyers in {data.cityName} Evaluate Web Development Partners
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {data.buyerBehavior.overview}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {data.buyerBehavior.expectations}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Realistic Search Queries from {data.cityName} Buyers</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm font-mono text-slate-700">
                  {data.buyerBehavior.searchExamples.map((query) => (
                    <li
                      key={query}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5"
                    >
                      <span className="text-[#ff6b1e]">›</span>
                      <span>{query}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Remote Delivery Protocol */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Transparent Workflow
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                How We Collaborate with Clients in {data.cityName}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {data.remoteDeliveryModel.overview}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.remoteDeliveryModel.points.map((pt) => (
                <div
                  key={pt.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition"
                >
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e]" />
                    <span>{pt.title}</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Client Work Placeholder */}
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Featured Client Case Study Placeholder
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                {data.clientWorkPlaceholder}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                [ADD REAL CLIENT WORK FOR {data.cityName.toUpperCase()}: Metrics, Screenshots &amp; Testimonial]
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Most Relevant Services for City */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Recommended Solutions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Top Services Recommended for {data.cityName} Businesses
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Tailored web engineering services aligned with {data.cityName}&apos;s specific commercial needs.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.topServices.map((svc) => (
                <div
                  key={svc.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {svc.whyRelevant}
                    </p>
                  </div>
                  <Link
                    href={svc.url}
                    className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: City Specific FAQs */}
        <section className="py-12 sm:py-16 bg-white" id="faqs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Direct Answers
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions — Web Development for {data.cityName}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Specific questions from business owners in {data.cityName}.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {data.faqs.map((faq) => (
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

        {/* Bottom CTA */}
        <section className="bg-slate-50 py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Ready to Discuss Your Project in {data.cityName}?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Connect directly with our senior development engineers at our Noida Sector 62 headquarters. We provide an itemized technical scope, stack recommendation, and fixed proposal.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  location={data.cityName}
                  service={`Website Development in ${data.cityName}`}
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Free Proposal for {data.cityName}</span>
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
