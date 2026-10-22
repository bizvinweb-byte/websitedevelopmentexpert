"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Building2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { getStoredUtmParams, trackSeoCheckerUse, trackFormSubmit } from "@/lib/tracking";

interface CheckItem {
  id: string;
  label: string;
  status: "pass" | "warn" | "fail";
  value: string;
  detail: string;
}

interface AuditResult {
  url: string;
  domain: string;
  score: number;
  statusCode: number;
  checks: CheckItem[];
  pageSpeedUrl: string;
}

export default function SeoCheckerClient() {
  const [urlInput, setUrlInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);

  // Lead capture state
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Free Tools", url: "/tools/seo-checker" },
    { name: "Website SEO & Speed Checker", url: "/tools/seo-checker" },
  ];

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setLeadSuccess(false);

    try {
      const res = await fetch("/api/check-seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlInput.trim() }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to scan website. Please verify the URL.");
      }

      setResult(data);
      const issues = data.checks.filter((c: CheckItem) => c.status !== "pass").length;
      trackSeoCheckerUse(data.url, issues);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Audit error. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail && !leadPhone) return;

    setLeadLoading(true);
    try {
      const utm = getStoredUtmParams();
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "SEO Audit Lead",
          phone: leadPhone || "Not Provided",
          email: leadEmail,
          service: "Technical SEO & Speed Optimization",
          message: `Requested detailed manual code audit for URL: ${result?.url || urlInput}. Tool Score: ${result?.score || "N/A"}`,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          ...utm,
        }),
      });

      setLeadSuccess(true);
      trackFormSubmit("Technical SEO Audit", "SEO Checker Lead", "seo_checker_lead");
    } catch {
      setLeadSuccess(true);
    } finally {
      setLeadLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Hero */}
      <header className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 bg-gradient-to-b from-orange-50/40 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Engineering Audit • Instant Technical Analysis</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            Website SEO &amp; Speed <span className="text-[#ff6b1e]">Checker</span>
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Test your website's on-page technical SEO, mobile viewport scaling, H1 tags, image alt coverage, and indexability in seconds.
          </p>

          {/* URL Input Form */}
          <div className="mt-8 mx-auto max-w-2xl">
            <form
              onSubmit={handleAudit}
              className="flex flex-col sm:flex-row gap-2.5 p-2 rounded-2xl bg-white border border-slate-300 shadow-lg focus-within:border-[#ff6b1e] focus-within:ring-2 focus-within:ring-[#ff6b1e]/20"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Enter your website URL (e.g. yourcompany.com)"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full rounded-xl py-3 pl-11 pr-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#e55510] active:scale-95 transition-all disabled:opacity-50 cursor-pointer whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Scanning Website...</span>
                  </>
                ) : (
                  <>
                    <span>Analyze Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 text-left font-medium">
                {error}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Results Section */}
      {result && (
        <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-200 animate-in fade-in duration-300">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Score Header Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Audit Results For
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 break-all">
                  {result.url}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  HTTP Response Status: <span className="font-bold text-emerald-600">{result.statusCode} OK</span>
                </p>
              </div>

              <div className="flex items-center gap-5 shrink-0">
                <div className="text-center">
                  <div
                    className={`text-4xl sm:text-5xl font-black ${
                      result.score >= 80
                        ? "text-emerald-600"
                        : result.score >= 60
                        ? "text-amber-500"
                        : "text-red-500"
                    }`}
                  >
                    {result.score}
                    <span className="text-xl font-normal text-slate-400">/100</span>
                  </div>
                  <div className="text-xs font-bold text-slate-600 mt-0.5">
                    Technical Health Score
                  </div>
                </div>

                <a
                  href={result.pageSpeedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#fff5ee] text-slate-700 hover:text-[#ff6b1e] text-xs font-semibold border border-slate-200 transition"
                >
                  <span>Google PageSpeed Insights</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Technical Checks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.checks.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {item.label}
                      </span>
                      {item.status === "pass" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Pass
                        </span>
                      )}
                      {item.status === "warn" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Warning
                        </span>
                      )}
                      {item.status === "fail" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                          <XCircle className="w-3.5 h-3.5" />
                          Fix Needed
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-slate-900">{item.value}</div>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Report Lead Magnet Box */}
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-xl">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b1e]/20 text-[#ff6b1e] text-xs font-semibold mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Free Architectural Consultation</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  Need a Senior Software Engineer to Fix These Issues?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Enter your contact details below to receive a personalized, line-by-line code audit and speed remediation plan from our Sector 62, Noida engineering team.
                </p>

                {leadSuccess ? (
                  <div className="mt-6 rounded-2xl bg-white/10 p-4 border border-emerald-500/30 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div className="text-xs sm:text-sm text-white">
                      <strong>Request Received!</strong> One of our senior technical architects will review {result.domain} and send your recommendations.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Your business email"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="flex-1 rounded-xl bg-white/10 border border-slate-700 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#ff6b1e]"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp / Phone number"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="flex-1 rounded-xl bg-white/10 border border-slate-700 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#ff6b1e]"
                    />
                    <button
                      type="submit"
                      disabled={leadLoading}
                      className="rounded-xl bg-[#ff6b1e] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#e55510] transition shrink-0 cursor-pointer disabled:opacity-50"
                    >
                      {leadLoading ? "Submitting..." : "Send Free Report"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Informational Answer Blocks / FAQ for AEO */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              What Does This Website SEO &amp; Speed Checker Analyze?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-200">
              <strong>Direct Answer:</strong> This tool performs automated public HTTP crawling of your submitted URL to evaluate foundational technical SEO indicators: title tag length (50–60 characters), meta description presence (140–155 characters), single semantic H1 heading hierarchy, image alt attribute coverage, mobile viewport configuration, HTTPS encryption, robots.txt access, and XML sitemap presence.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              How Does Page Speed Affect Google Rankings in India?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-200">
              <strong>Direct Answer:</strong> Google uses real-world mobile page speed via the Chrome User Experience Report (CrUX) as a core ranking signal. In India, where over 75% of traffic originates on budget 4G and 5G mobile devices, pages with unoptimized images or heavy JavaScript frameworks experience high bounce rates and lower checkout conversion rates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
