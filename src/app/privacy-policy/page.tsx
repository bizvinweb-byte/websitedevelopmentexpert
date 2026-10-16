import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, PhoneCall, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Website Development Expert",
  description:
    "Privacy Policy for Website Development Expert. Learn how we collect, protect, and handle your data in full compliance with the Digital Personal Data Protection Act (DPDP Act) and global privacy standards.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { name: "Home", url: "/" },
              { name: "Privacy Policy", url: "/privacy-policy" },
            ]}
          />
        </div>

        {/* Header */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff5ee] text-[#ff6b1e] border border-[#ff6b1e]/20 text-xs font-bold mb-3 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#ff6b1e]" />
            <span>Official Privacy Statement</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Last Updated &amp; Effective Date: <span className="font-semibold text-slate-700">{lastUpdated}</span>
          </p>

          <p className="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
            At <strong>{siteConfig.name}</strong>, your digital privacy and data security are our highest priorities. This Privacy Policy outlines our transparent data handling practices in compliance with India&apos;s Digital Personal Data Protection Act (DPDP Act) and international data governance standards.
          </p>
        </div>

        {/* Content Body */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#ff6b1e]" />
              1. Information We Collect
            </h2>
            <p>
              When you interact with our website, request a technical proposal, or submit an inquiry for web development or Shopify solutions, we may collect the following details:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact Information:</strong> Name, phone number, email address, company name, and geographical city/location.</li>
              <li><strong>Project Specifications:</strong> Required technical stack, project budget range, timeline preferences, and scope descriptions.</li>
              <li><strong>Technical &amp; Log Data:</strong> Anonymized IP addresses, browser types, device operating systems, and page visit analytics via secure server logs.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#ff6b1e]" />
              2. How We Use Your Information
            </h2>
            <p>We process collected information strictly for legitimate commercial and engineering purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>To prepare tailored website architectural blueprints, scope documents, and transparent commercial quotes.</li>
              <li>To provide instant automatic delivery of our technical capability brochure PDF upon inquiry.</li>
              <li>To communicate project milestones, service updates, and schedule technical consultation calls.</li>
              <li>To optimize website performance, server uptime, and user navigation experience.</li>
            </ul>
            <p className="text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200/60">
              Strict Guarantee: We never sell, rent, trade, or distribute your personal contact information to third-party marketing brokers or unauthorized entities.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#ff6b1e]" />
              3. Data Security &amp; Storage
            </h2>
            <p>
              We implement enterprise-grade technical safeguards including TLS 1.3 cryptographic encryption, secure HTTPS protocol headers, encrypted cloud storage, and role-based internal access restrictions to safeguard your data against unauthorized access, loss, or manipulation.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ff6b1e]" />
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website uses minimal, non-intrusive functional cookies and privacy-respecting analytics tools to understand page speed metrics and user traffic flows. You have the complete right to modify cookie preferences or disable them entirely in your web browser settings without compromising essential website access.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#ff6b1e]" />
              5. Your Rights &amp; Data Control
            </h2>
            <p>Under applicable Indian and global data protection regulations, you possess the following rights:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Right to request a copy of the personal information we hold about you.</li>
              <li>Right to rectify, correct, or update incomplete or inaccurate details.</li>
              <li>Right to request immediate erasure (deletion) of your contact records from our prospective databases.</li>
            </ul>
            <p>
              To exercise any of these rights, simply email our privacy team at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#ff6b1e] font-semibold underline">
                {siteConfig.email}
              </a>.
            </p>
          </section>

          {/* Section 6 - Contact Office */}
          <section className="space-y-3 border-t border-slate-100 pt-6 bg-slate-50 p-4 sm:p-6 rounded-2xl">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              6. Grievance Officer &amp; Office Contact Details
            </h2>
            <p className="text-slate-600">
              For any privacy concerns, data inquiries, or formal grievances, please reach our Data Compliance Officer:
            </p>
            <div className="space-y-1.5 text-slate-700 font-medium">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                <span>
                  <strong>Headquarters:</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}, India
                </span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                <span><strong>Phone:</strong> {siteConfig.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                <span><strong>Email:</strong> {siteConfig.email}</span>
              </p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
