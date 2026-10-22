"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Building2,
  DollarSign,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { getStoredUtmParams, trackFormSubmit } from "@/lib/tracking";

interface LeadContactFormProps {
  defaultService?: string;
  sourceContext?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const BUDGET_RANGES = [
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000 – ₹5,00,000",
  "₹5,00,000+ (Enterprise)",
];

const SERVICES = [
  "Custom Next.js Web Application",
  "Shopify Storefront Development",
  "E-Commerce Platform & Cart Engineering",
  "WordPress / WooCommerce Development",
  "Website Speed & Core Web Vitals Optimization",
  "Corporate Website Redesign",
  "General Architectural Consultation",
];

export default function LeadContactForm({
  defaultService = "Custom Next.js Web Application",
  sourceContext = "Inline Service Form",
  title = "Request a Free Architectural Discovery Session",
  subtitle = "Discuss your web platform with our senior engineers at our Sector 62, Noida HQ or via video call across India.",
  className = "",
}: LeadContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [budgetRange, setBudgetRange] = useState(BUDGET_RANGES[0]);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot spam trap

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const utm = getStoredUtmParams();

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service,
          budgetRange,
          location: sourceContext,
          message: message.trim(),
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          website_hp: honeypot, // Honeypot trap
          ...utm,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSuccess(true);
      trackFormSubmit(service, budgetRange, "inline_lead_form");

      setFullName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg ${className}`}
    >
      <div className="mb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff5ee] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ff6b1e]/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Honest Technical Scoping • No Sales Pressure</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">{title}</h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{subtitle}</p>
      </div>

      {success ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 sm:p-8 text-center animate-in fade-in duration-300">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">Inquiry Received Successfully</h4>
          <p className="text-xs sm:text-sm text-slate-700 mt-2 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. One of our senior software architects from our Noida Sector 62 office will review your project requirements and call you shortly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919990613140?text=Hello%2C%20I%20just%20submitted%20a%20project%20inquiry%20on%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition shadow-xs"
            >
              <span>Instant Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 font-medium">
              {error}
            </div>
          )}

          {/* Honeypot field (hidden from human visitors) */}
          <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
            <label htmlFor="website_hp">Leave this blank</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="lead-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  id="lead-name"
                  required
                  placeholder="e.g. Vikram Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b1e] focus:outline-none focus:ring-1 focus:ring-[#ff6b1e]"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="lead-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  id="lead-phone"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b1e] focus:outline-none focus:ring-1 focus:ring-[#ff6b1e]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label htmlFor="lead-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                Business Email (Optional)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  id="lead-email"
                  placeholder="vikram@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b1e] focus:outline-none focus:ring-1 focus:ring-[#ff6b1e]"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="lead-service" className="block text-xs font-bold text-slate-700 mb-1.5">
                Service Required
              </label>
              <select
                id="lead-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-xs sm:text-sm text-slate-800 focus:border-[#ff6b1e] focus:outline-none focus:ring-1 focus:ring-[#ff6b1e]"
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="lead-budget" className="block text-xs font-bold text-slate-700 mb-1.5">
              Estimated Budget Bracket (INR)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <select
                id="lead-budget"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-800 focus:border-[#ff6b1e] focus:outline-none focus:ring-1 focus:ring-[#ff6b1e]"
              >
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="lead-message" className="block text-xs font-bold text-slate-700 mb-1.5">
              Project Details or Questions (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <textarea
                id="lead-message"
                rows={3}
                placeholder="Briefly describe your objectives, current website URL, or desired timeline..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b1e] focus:outline-none focus:ring-1 focus:ring-[#ff6b1e]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] py-3.5 px-6 text-sm font-bold text-white shadow-md shadow-[#ff6b1e]/20 hover:bg-[#e55510] transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Submitting Project Request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Architectural Proposal</span>
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-2">
            <span className="text-[11px] text-slate-500">
              No spam guarantee • We respect Indian DPDP Act standards • Your contact details are never shared.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
