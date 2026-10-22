"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";
import { FAQ_DATA } from "@/lib/faq-data";

export default function FaqSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "services-overview": true,
  });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General & Services" },
    { id: "pricing", label: "Cost & Timelines" },
    { id: "tech", label: "Speed & Tech SEO" },
    { id: "noida", label: "Noida & Delhi NCR" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? FAQ_DATA
      : FAQ_DATA.filter((f) => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 py-10 sm:py-20 border-t border-slate-200/80 scroll-mt-20 sm:scroll-mt-24"
      id="faqs"
      aria-labelledby="faq-main-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff5ee] text-[#ff6b1e] border border-[#ff6b1e]/20 text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2
            id="faq-main-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Frequently Asked <span className="text-[#ff6b1e]">Questions</span>
          </h2>

          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Clear, transparent answers about website development costs, modern Next.js architecture, remote communication, and project delivery timelines.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#ff6b1e] text-white shadow-md shadow-[#ff6b1e]/25 scale-102"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Layout: Left Accordion List, Right Conversion Card */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Accordion Column */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#ff6b1e]/60 bg-white shadow-md shadow-[#ff6b1e]/5 ring-1 ring-[#ff6b1e]/20"
                      : "border-slate-200/90 bg-white hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-5.5 flex items-start justify-between gap-3 sm:gap-4 transition-colors cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0">
                      <span
                        className={`flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                          isOpen
                            ? "bg-[#ff6b1e] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isOpen ? "text-[#ff6b1e]" : "text-slate-900"
                          }`}
                        >
                          {faq.question}
                        </h3>
                        {faq.highlight && (
                          <span className="inline-flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {faq.highlight}
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#fff5ee] text-[#ff6b1e] rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Server-Rendered Accordion Content (Always in DOM for search crawlers) */}
                  <div
                    className={`px-4 pb-4 sm:px-5.5 sm:pb-5.5 pt-0 transition-all duration-200 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="border-t border-slate-100 pt-3 sm:pt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sticky Trust & Quick Action Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            {/* Direct Consultation Card */}
            <div className="rounded-2xl border border-[#ff6b1e]/20 bg-gradient-to-br from-[#fff5ee] via-white to-orange-50/50 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#ff6b1e] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-[#ff6b1e]" />
                Custom Project Requirements?
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Speak Directly with Our Web Engineering Team
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Receive an itemized technical scope, stack recommendation, and timeline estimate for your business.
              </p>

              <div className="mt-4 pt-4 border-t border-orange-100/80 space-y-2.5">
                <EnquiryButton className="w-full justify-center text-xs sm:text-sm font-bold py-3 shadow-md shadow-[#ff6b1e]/20">
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </EnquiryButton>

                <a
                  href={`tel:${siteConfig.rawPhone}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 hover:border-[#ff6b1e] py-2.5 px-4 text-xs font-bold text-slate-800 hover:text-[#ff6b1e] transition-all shadow-2xs active:scale-95"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#ff6b1e]" />
                  <span>Call: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-2.5">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Our Delivery Commitments
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e]" />
                  <span>Dedicated Project Manager &amp; WhatsApp Group</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e]" />
                  <span>Next.js Server-Side Rendered Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e]" />
                  <span>Noida Sector 62 Headquartered Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e]" />
                  <span>Full Intellectual Property &amp; Code Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
