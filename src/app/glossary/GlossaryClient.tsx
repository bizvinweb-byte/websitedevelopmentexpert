"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  ArrowRight,
  Building2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { GLOSSARY_TERMS, GlossaryTerm } from "@/lib/glossary-data";
import { EnquiryButton } from "@/components/EnquiryModal";

const CATEGORIES = [
  "All Categories",
  "Performance & SEO",
  "E-Commerce",
  "Architecture & Web Tech",
  "Security & Compliance",
];

export default function GlossaryClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/glossary" },
    { name: "Technical Glossary", url: "/glossary" },
  ];

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Header Hero */}
      <header className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 bg-gradient-to-b from-orange-50/40 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Reference • Citation-Friendly Definitions</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            Web Engineering &amp; SEO <span className="text-[#ff6b1e]">Glossary</span>
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Clear, unvarnished architectural definitions and practical guidance tailored for Indian business founders, software engineers, and digital marketing leaders.
          </p>

          {/* Filter & Search Bar */}
          <div className="mt-8 mx-auto max-w-2xl space-y-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search technical terms (e.g. Core Web Vitals, Headless, LCP, INP, UPI)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 py-3 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:border-[#ff6b1e] focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#ff6b1e] text-white shadow-2xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Glossary Terms List */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching technical terms found. Try adjusting your search query.
            </div>
          ) : (
            filteredTerms.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:border-[#ff6b1e]/40 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-[#ff6b1e] bg-[#fff5ee] px-3 py-1 rounded-full border border-[#ff6b1e]/20">
                    {item.category}
                  </span>
                  <a
                    href={`#${item.slug}`}
                    className="text-[11px] text-slate-400 hover:text-[#ff6b1e] font-mono"
                  >
                    #{item.slug}
                  </a>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {item.term}
                </h2>

                {/* Quotable 40-60 Word Direct Answer Block (AI Search Optimized) */}
                <div className="mt-4 rounded-2xl bg-slate-50 border-l-4 border-[#ff6b1e] p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    <strong>Direct Definition:</strong> {item.shortDefinition}
                  </p>
                </div>

                {/* Full Technical Explanation */}
                <div className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal space-y-3">
                  <p>{item.fullExplanation}</p>
                  <div className="rounded-xl bg-orange-50/40 p-3.5 border border-orange-100 text-slate-700">
                    <span className="font-bold text-slate-900 text-xs block mb-1">
                      🇮🇳 Indian Market Context:
                    </span>
                    {item.indianMarketContext}
                  </div>
                </div>

                {/* Related Service Link */}
                {item.relatedServiceUrl && (
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={item.relatedServiceUrl}
                      className="text-xs font-bold text-[#ff6b1e] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore our {item.relatedServiceName}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <EnquiryButton
                      variant="link"
                      service={item.term}
                      className="p-0 text-xs text-slate-500 hover:text-slate-900 font-semibold"
                    >
                      Ask an Architect
                    </EnquiryButton>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 py-12 sm:py-16 text-center border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Have Technical Questions About Your Web Stack?
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            Connect directly with our senior software engineering team at our Sector 62, Noida facility or request a virtual technical review.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <EnquiryButton className="px-8 py-3.5 text-sm">
              <span>Request Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </EnquiryButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
            >
              <Building2 className="w-4 h-4 text-[#ff6b1e]" />
              <span>Contact Noida HQ</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
