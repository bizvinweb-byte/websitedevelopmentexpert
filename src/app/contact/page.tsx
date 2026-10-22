import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Compass,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Contact Website Development Expert | Noida Sector 62 Office",
  description:
    "Contact Website Development Expert in Sector 62, Noida. Phone +91 99906 13140, email contact@websitedevelopmentexpert.in. Visit our ITHUM Tower office.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Website Development Expert | Noida Sector 62 Office",
    description:
      "Get in touch with our web engineering team at ITHUM Tower, Sector 62, Noida. Phone, WhatsApp, email, and interactive office map.",
    url: `${siteConfig.siteUrl}/contact`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Contact Website Development Expert Noida Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Website Development Expert | Noida Sector 62 Office",
    description:
      "Visit our Noida Sector 62 headquarters or schedule a video call with our lead website developers.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function ContactPage() {
  const pageUrl = `${siteConfig.siteUrl}/contact`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ];

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Contact Website Development Expert | Noida Sector 62 Office",
    description:
      "Contact information for Website Development Expert, headquartered at ITHUM Tower, Sector 62, Noida, Uttar Pradesh.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
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

  return (
    <>
      <JsonLd data={contactPageSchema} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Noida Sector 62 Headquarters • Direct Developer Access</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
                Connect with Our <span className="text-[#ff6b1e]">Noida HQ</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Visit our physical office at ITHUM Tower, Sector 62, Noida for in-person meetings, or connect remotely via phone, WhatsApp, and Google Meet from anywhere across India.
              </p>
            </div>
          </div>
        </header>

        {/* Contact Info & Map Grid */}
        <section className="py-8 sm:py-12 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-5 space-y-4">
                {/* Physical Office Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Sole Physical Office Address
                      </h2>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {siteConfig.address.building}<br />
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.region} - {siteConfig.address.postalCode}, India
                      </p>
                      <span className="text-[11px] text-slate-400 block mt-2">
                        Near Noida Electronic City Metro Station (Blue Line)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Telephone Inquiry
                      </h2>
                      <a
                        href="tel:+919990613140"
                        className="text-xs sm:text-sm font-bold text-[#ff6b1e] hover:underline block mt-0.5"
                      >
                        +91 99906 13140
                      </a>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Direct connection to senior project leads
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Direct WhatsApp Chat
                      </h2>
                      <a
                        href="https://wa.me/919990613140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-emerald-600 hover:underline block mt-0.5"
                      >
                        Message on WhatsApp ↗
                      </a>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Rapid responses for project inquiries
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Official Email
                      </h2>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#ff6b1e] hover:underline block mt-0.5"
                      >
                        {siteConfig.email}
                      </a>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        Formal RFPs and scope documents
                      </span>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Office Working Hours
                      </h2>
                      <p className="text-xs text-slate-600 mt-1">
                        <strong>Monday – Saturday:</strong> 9:00 AM – 7:00 PM IST<br />
                        <strong>Sunday:</strong> Closed for production maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Map & Inquiry CTA */}
              <div className="lg:col-span-7 space-y-6">
                {/* Instant Quote Form Card */}
                <div className="rounded-3xl border border-slate-200 bg-[#fff5ee]/40 p-6 sm:p-8 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                    Free Technical Scope
                  </span>
                  <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900">
                    Request an Itemized Project Proposal
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Have a new project or looking to re-engineer an existing website? Submit your details below or open our quick inquiry form for an immediate technical response.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <EnquiryButton className="px-7 py-3.5 text-xs sm:text-sm font-bold">
                      <span>Launch Inquiry Form</span>
                      <ArrowRight className="w-4 h-4" />
                    </EnquiryButton>
                    <a
                      href="https://wa.me/919990613140"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-emerald-500 hover:text-emerald-600 transition shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-500" />
                      <span>WhatsApp Us Directly</span>
                    </a>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm overflow-hidden">
                  <div className="relative h-[320px] sm:h-[380px] w-full rounded-2xl overflow-hidden bg-slate-100">
                    <iframe
                      title="Website Development Expert Noida Office Map"
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
          </div>
        </section>
      </article>
    </>
  );
}
