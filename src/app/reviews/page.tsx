import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Building2,
  FileCode,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import reviewsData from "@/data/reviews.json";
import { EnquiryButton } from "@/components/EnquiryModal";

export interface VerifiedReview {
  id: string;
  author: string;
  designation: string;
  company: string;
  city: string;
  rating: number;
  date: string;
  service: string;
  reviewBody: string;
  verifiedSource: string;
}

const reviews: VerifiedReview[] = reviewsData as VerifiedReview[];

export const metadata: Metadata = {
  title: "Client Reviews & Verification | Website Development Expert",
  description:
    "Read verified client reviews and ratings for Website Development Expert. Engineered at Sector 62, Noida, delivering high-speed web platforms across India.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/reviews`,
  },
  openGraph: {
    title: "Client Reviews & Verification | Website Development Expert",
    description:
      "Authentic client feedback and engineering testimonials for Website Development Expert (A venture of Brandmingo).",
    url: `${siteConfig.siteUrl}/reviews`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Client Reviews - Website Development Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Verification | Website Development Expert",
    description:
      "Authentic client reviews for custom Next.js web applications and Shopify stores built by our Noida engineering team.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function ReviewsPage() {
  const pageUrl = `${siteConfig.siteUrl}/reviews`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Client Reviews", url: "/reviews" },
  ];

  const hasReviews = reviews.length > 0;
  const totalReviews = reviews.length;
  const averageRating = hasReviews
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
    : "0.0";

  // Base Schema for the page
  const pageSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Client Reviews & Verification | Website Development Expert",
    description:
      "Verified client testimonials, ratings, and endorsements for Website Development Expert.",
  };

  // ONLY attach AggregateRating and Review schema if real verified reviews exist!
  // This strictly adheres to Google Search Central guidelines against empty/fabricated review schema.
  if (hasReviews) {
    pageSchema.mainEntity = {
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: averageRating,
        reviewCount: totalReviews,
        bestRating: "5",
        worstRating: "1",
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: r.author,
        },
        datePublished: r.date,
        reviewBody: r.reviewBody,
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: "5",
          worstRating: "1",
        },
      })),
    };
  }

  return (
    <>
      <JsonLd data={pageSchema} />

      <main className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b1e]" />
              <span>Strict Editorial Policy • Zero Fabricated Reviews</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
              Client Reviews &amp; <span className="text-[#ff6b1e]">Verification</span>
            </h1>

            <p className="mt-4 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Read authentic experiences from founders, CTOs, and marketing directors whose web applications and storefronts were engineered by our Sector 62, Noida facility.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://maps.google.com/?cid=WEBSITE_DEVELOPMENT_EXPERT_NOIDA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition shadow-xs"
              >
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Verify on Google Business Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {hasReviews ? (
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Verified Client Rating</h2>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Based on {totalReviews} authenticated client engagements.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-amber-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-2xl font-black text-slate-900">{averageRating}/5.0</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((rev) => (
                    <article
                      key={rev.id}
                      className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center text-amber-400">
                            {[...Array(rev.rating)].map((_, idx) => (
                              <Star key={idx} className="w-4 h-4 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-[11px] font-semibold text-slate-400">
                            {rev.date}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                          &ldquo;{rev.reviewBody}&rdquo;
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-slate-900">{rev.author}</div>
                          <div className="text-slate-500 text-[11px]">
                            {rev.designation}, {rev.company} ({rev.city})
                          </div>
                        </div>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
                          {rev.verifiedSource}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              /* When reviews array is empty (Default honest state) */
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xs">
                <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7" />
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Strict Review Verification in Progress
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
                  Per our strict editorial guidelines and Google Search spam policies, we do not fabricate client testimonials, invent ratings, or display unverified quotes. Real client reviews are currently being audited from confirmed Google Business Profile and Clutch.co engagements.
                </p>

                {/* Developer Documentation Box */}
                <div className="mt-8 rounded-2xl border border-slate-300 bg-white p-5 text-left text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold mb-2 pb-2 border-b border-slate-100">
                    <FileCode className="w-4 h-4 text-[#ff6b1e]" />
                    <span>Schema Protocol: `src/data/reviews.json` Format</span>
                  </div>
                  <pre className="overflow-x-auto text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
{`[
  {
    "id": "REV-001",
    "author": "[Client Name]",
    "designation": "[Designation, e.g. Founder]",
    "company": "[Company Name]",
    "city": "[e.g. Mumbai / Bengaluru / Noida]",
    "rating": 5,
    "date": "2026-03-01",
    "service": "Custom Next.js Web Application",
    "reviewBody": "[Verified client quote text]",
    "verifiedSource": "Google Business Profile"
  }
]`}
                  </pre>
                  <p className="mt-2 text-[11px] text-slate-500 font-sans">
                    Once populated with authentic data, this page will automatically render verified review cards and output valid `AggregateRating` and `Review` structured schema.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <EnquiryButton className="px-6 py-3 text-xs">
                    <span>Discuss a Project With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </EnquiryButton>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:text-[#ff6b1e] hover:border-[#ff6b1e] transition"
                  >
                    <span>View Architectural Blueprints</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
