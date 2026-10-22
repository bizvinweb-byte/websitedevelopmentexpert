import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  Code2,
  ShoppingBag,
  Cpu,
  Layers,
  Compass,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig, ncrCities, toSlug } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Website Development Company in Noida | Sector 62 Office",
  description:
    "Top website development company in Noida Sector 62. Visit our office at ITHUM Tower for Next.js, Shopify, and custom web development. Call +91 99906 13140.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/website-development-company-in-noida`,
  },
  openGraph: {
    title: "Website Development Company in Noida | Sector 62 Office",
    description:
      "Physical headquarters at ITHUM Tower, Sector 62, Noida. We engineer high-speed Next.js web applications and Shopify stores for businesses across Delhi NCR and India.",
    url: `${siteConfig.siteUrl}/website-development-company-in-noida`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Website Development Company in Noida Sector 62 Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Noida | Sector 62 Office",
    description:
      "Headquartered at ITHUM Tower, Sector 62, Noida. Custom Next.js and Shopify web development with in-person meeting availability.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function NoidaHQPage() {
  const pageUrl = `${siteConfig.siteUrl}/website-development-company-in-noida`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Website Development Company in Noida", url: "/website-development-company-in-noida" },
  ];

  const faqs = [
    {
      question: "Where is your Noida office located and what are the visiting hours?",
      answer:
        "Our office is located at 8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309. We are directly accessible via the Noida Electronic City Metro Station (Blue Line) and the NH-24 corridor. Our office hours are Monday through Saturday from 9:00 AM to 7:00 PM IST. Clients are encouraged to schedule an appointment prior to visiting for uninterrupted technical meetings.",
    },
    {
      question: "Can we meet your development team in person before starting a project?",
      answer:
        "Yes, absolutely. For clients located in Noida, Greater Noida, Ghaziabad, Delhi, and Gurugram, we welcome in-person discovery meetings at our ITHUM Tower office. You will meet directly with our solutions architects and project managers to review wireframes, technical scope, and project roadmaps.",
    },
    {
      question: "What types of businesses do you build websites for in Noida?",
      answer:
        "We serve Noida's diverse commercial ecosystem: IT and software firms in Sector 62 and Sector 63, media and entertainment agencies in Film City Sector 16A, manufacturing companies in Phase 2 and Sector 80, healthcare super-specialty clinics, and high-growth retail D2C brands across Delhi NCR.",
    },
    {
      question: "How long does a website take to build and launch in Noida?",
      answer:
        "Standard corporate websites are typically launched within 2 to 3 weeks from visual sign-off. Custom e-commerce portals, Shopify builds, and full-stack Next.js web applications generally take 4 to 8 weeks, structured into transparent agile sprints with weekly staging reviews.",
    },
    {
      question: "Do you provide on-site technical support in Noida and Delhi NCR?",
      answer:
        "Yes. In addition to our 24/7 remote monitoring and ticketing support, our senior technical personnel can provide on-site training sessions, executive demonstrations, and architectural workshops at your corporate office in Noida or Delhi NCR upon request.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: "Website Development Expert - Noida Headquarters",
    url: pageUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6280",
      longitude: "77.3649",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Noida" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
      { "@type": "Country", name: "India" },
    ],
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
      <JsonLd data={[localBusinessSchema, faqSchema]} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Sole Physical Office • ITHUM Tower, Sector 62, Noida</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Website Development Company in{" "}
                <span className="text-[#ff6b1e]">Noida</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                Visit our physical headquarters at ITHUM Tower, Sector 62, Noida. A specialized venture of Brandmingo engineering high-speed Next.js web applications, custom Shopify stores, and enterprise digital solutions with direct in-person collaboration.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  location="Noida HQ"
                  service="Website Development in Noida"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Schedule Noida Office Visit</span>
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

              {/* Physical Office Card */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-md max-w-2xl mx-auto text-left">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-sm font-bold text-slate-900">
                      Noida Corporate Development Center
                    </h2>
                    <p className="text-xs text-slate-600">
                      {siteConfig.address.building}, {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} - {siteConfig.address.postalCode}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ff6b1e]" />
                        Mon–Sat: 9:00 AM – 7:00 PM
                      </span>
                      <span className="flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-[#ff6b1e]" />
                        Near Noida Electronic City Metro
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Noida Local Industrial Ecosystem */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Noida Industries We Serve
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Businesses &amp; Sectors We Build Websites For (From Our Sector 62 HQ)
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating directly from our sole physical facility at ITHUM Tower, Sector 62, we engineer custom websites, e-commerce stores, and Next.js applications for businesses across Noida&apos;s commercial hubs:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Sector 62 &amp; Sector 63 IT Hubs
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Home to major tech parks, software exporters, BPO centers, and institutional campuses. We engineer high-performance web applications, enterprise client portals, and secure API architectures for IT companies, software firms, and corporate offices located across Sector 62 and Sector 63.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Film City &amp; Sector 16A Media Hub
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  North India&apos;s creative capital hosting national broadcasting networks, digital production agencies, and publishing houses. We build fast-streaming editorial portals, high-concurrency content blogs, and dynamic portfolio showcases.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Noida Phase 2, Sector 80 &amp; Sector 85 Industrial Belt
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Manufacturing powerhouses, garment export units, and auto precision engineering firms require robust B2B wholesale portals, international export showcases, and automated RFQ catalogs that generate qualified global inquiries.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Retail D2C Brands &amp; Greater Noida Expressway Corridor
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fast-growing lifestyle, consumer electronics, and FMCG brands operating along the Expressway corridor. We engineer customized Shopify stores with instant UPI checkout, COD verification, and automated courier sync.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Healthcare &amp; Super-Specialty Clinics
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Medical centers, diagnostic laboratories, and super-specialty hospitals around Sector 27 and Sector 128. We engineer appointment booking portals, doctor directories, and patient consultation funnels.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Educational Institutions &amp; Coaching Academies
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Noida and Greater Noida Knowledge Park campuses benefit from our student admission portals, online fee payment integration, and LMS course catalogs built with Next.js.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Map & Visiting Details */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100" id="visit-office">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Visit In Person
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  How to Visit Our Noida Sector 62 Development Office
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Our corporate development center is centrally situated in Sector 62, Noida, offering seamless connectivity for clients traveling from Delhi, Greater Noida, Ghaziabad, or Gurugram.
                </p>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <Compass className="w-5 h-5 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">By Delhi Metro:</strong> Take the Blue Line to the Noida Electronic City Metro Station. Our office at ITHUM Tower is less than a 5-minute walk or brief e-rickshaw ride from Exit Gate 3.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">By Road via NH-24 / Delhi-Meerut Expressway:</strong> Convenient vehicular access with multi-level visitor parking within the ITHUM complex for smooth client meetings.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <Clock className="w-5 h-5 text-[#ff6b1e]" />
                    <div>
                      <strong className="text-slate-900">Working Hours:</strong> Monday through Saturday, 9:00 AM to 7:00 PM IST. Closed on Sundays.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=ITHUM+TOWER+Sector+62+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#ff6b1e] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#e55510] transition-all"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href="tel:+919990613140"
                    className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
                  >
                    <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                    <span>Call Ahead: +91 99906 13140</span>
                  </a>
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-md overflow-hidden">
                <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-slate-100">
                  <iframe
                    title="Website Development Expert Noida Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620921443684!2d77.362325!3d28.6279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456e74d75d%3A0x6b107e3e9d80d220!2sThe%20iThum!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
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
                Frequently Asked Questions — Web Development in Noida
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Clear answers regarding our Sector 62 office, meeting protocols, and local services.
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

        {/* Section 4: Delhi NCR Corridor Internal Links */}
        <section className="py-10 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
              Explore Our Delhi NCR Local Service Corridor
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              {ncrCities.map((loc) => (
                <Link
                  key={loc.city}
                  href={`/${toSlug(loc.city)}`}
                  className={`px-4 py-2 rounded-xl border transition shadow-2xs ${
                    loc.city === "Noida"
                      ? "bg-[#ff6b1e] text-white border-[#ff6b1e] font-bold"
                      : "bg-white border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e]"
                  }`}
                >
                  {loc.city} ({loc.state}) →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-[#fff5ee] p-8 sm:p-12 shadow-lg shadow-[#ff6b1e]/5">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Ready to Meet at Our Noida Sector 62 Office?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Schedule an in-person meeting or video call with our lead website development architects. We analyze your requirements and provide an itemized fixed-scope proposal.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  location="Noida Sector 62"
                  service="In-Person Noida Meeting"
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Book Noida Meeting</span>
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
