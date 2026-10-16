import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck, ShieldAlert, Award, FileText, ArrowLeft, PhoneCall, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms and Conditions | Website Development Expert",
  description:
    "Terms and Conditions governing web application development, custom Next.js engineering, Shopify design, and ongoing technical support services provided by Website Development Expert.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/terms-and-conditions`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { name: "Home", url: "/" },
              { name: "Terms & Conditions", url: "/terms-and-conditions" },
            ]}
          />
        </div>

        {/* Header */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff5ee] text-[#ff6b1e] border border-[#ff6b1e]/20 text-xs font-bold mb-3 shadow-2xs">
            <FileCheck className="w-4 h-4 text-[#ff6b1e]" />
            <span>Master Service Agreement</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Last Updated &amp; Effective Date: <span className="font-semibold text-slate-700">{lastUpdated}</span>
          </p>

          <p className="mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
            Welcome to <strong>{siteConfig.name}</strong>. By accessing our website, engaging our design or software engineering services, or commissioning custom website/e-commerce development, you agree to comply with and be bound by the following Terms and Conditions.
          </p>
        </div>

        {/* Content Body */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#ff6b1e]" />
              1. Services Scope &amp; Proposals
            </h2>
            <p>
              {siteConfig.name} provides professional digital engineering services including custom Next.js/React web development, Shopify e-commerce architecture, bespoke UI/UX design, performance optimization, and technical search engine optimization (SEO).
            </p>
            <p>
              Every client project is initiated following an explicit, mutually agreed Scope of Work (SOW) or written technical proposal specifying deliverable features, technology stack, milestones, and commercial cost.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#ff6b1e]" />
              2. Intellectual Property &amp; Code Ownership
            </h2>
            <p className="text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200/60">
              100% Client Ownership Guarantee: Upon receipt of final agreed payment milestones, full intellectual property rights, custom codebase, graphic design assets, and administrative credentials are fundamentally transferred to the client.
            </p>
            <p>
              Open-source libraries, standard framework components (such as Next.js, React, Tailwind CSS, or third-party npm packages) remain governed by their respective standard open-source licenses (MIT, Apache 2.0).
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#ff6b1e]" />
              3. Payment Milestones &amp; Billing
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Milestone Billing:</strong> Standard projects follow structured milestone phases (e.g., initial kickoff advance, design sign-off, staging completion, and final production deployment).</li>
              <li><strong>Taxes:</strong> All invoices are issued with applicable statutory taxes (GST in India) in compliance with financial regulations.</li>
              <li><strong>Scope Revisions:</strong> Any additional feature requests beyond the signed Scope of Work will be quoted separately as an addendum to prevent project delivery delays.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#ff6b1e]" />
              4. Warranty &amp; Post-Launch Bug Fix SLA
            </h2>
            <p>
              All websites engineered by {siteConfig.name} include a standard complimentary post-launch warranty period (ranging from 30 to 90 days as per project agreement) during which our senior developers rectify any software defects, responsive bugs, or cross-browser rendering inconsistencies without additional charge.
            </p>
            <p>
              The warranty does not cover issues introduced by unauthorized third-party modifications, external hosting outages beyond our servers, or alterations to production API keys by third parties.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#ff6b1e]" />
              5. Client Responsibilities &amp; Content Sign-Off
            </h2>
            <p>
              Clients agree to provide required brand collateral (logos, text copy, legal permissions, and domain DNS access) in a timely manner. Prompt feedback during UI/UX prototyping phases ensures adherence to estimated delivery schedules.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#ff6b1e]" />
              6. Limitation of Liability &amp; Governing Law
            </h2>
            <p>
              To the fullest extent permitted by applicable law, {siteConfig.name} shall not be liable for indirect, incidental, or consequential damages resulting from third-party server downtime, cyber-attacks on third-party cloud infrastructure, or external payment gateway disruptions.
            </p>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Gautam Buddha Nagar (Noida), Uttar Pradesh, India</strong>.
            </p>
          </section>

          {/* Section 7 - Office Address */}
          <section className="space-y-3 border-t border-slate-100 pt-6 bg-slate-50 p-4 sm:p-6 rounded-2xl">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              7. Questions Regarding These Terms?
            </h2>
            <p className="text-slate-600">
              For any clarification regarding our legal terms or service agreements, reach our engineering and contracts team directly:
            </p>
            <div className="space-y-1.5 text-slate-700 font-medium">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                <span>
                  <strong>Office:</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}, India
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
