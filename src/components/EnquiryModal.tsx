"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  X,
  Phone,
  Mail,
  User,
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Download,
  FileText,
} from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import { getStoredUtmParams, trackFormSubmit } from "@/lib/tracking";

interface ModalOptions {
  service?: string;
  location?: string;
  budget?: string;
}

interface EnquiryContextType {
  isOpen: boolean;
  openEnquiryModal: (options?: ModalOptions | string) => void;
  closeEnquiryModal: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function useEnquiryModal() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiryModal must be used within an EnquiryProvider");
  }
  return context;
}

const SERVICES_LIST = [
  "Custom Web Application",
  "Enterprise E-Commerce Platform",
  "UI/UX Design & Architecture",
  "Technical SEO & Speed Optimization",
  "Next.js / React Development",
  "Corporate Website Redesign",
  "Other Consultation",
];

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState("Custom Web Application");
  const [location, setLocation] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const openEnquiryModal = (options?: ModalOptions | string) => {
    if (typeof options === "string") {
      setService(options || "Custom Web Application");
    } else if (options) {
      if (options.service) setService(options.service);
      if (options.location) setLocation(options.location);
    }
    setSuccess(false);
    setError("");
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError("Please fill in your name and phone number.");
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
          name: fullName,
          phone,
          email,
          service,
          location,
          message,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          ...utm,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSuccess(true);
      trackFormSubmit(service, "Modal Lead", "enquiry_modal");
      setFullName("");
      setPhone("");
      setEmail("");
      setMessage("");

      // Automatically trigger brochure download
      if (typeof window !== "undefined") {
        try {
          const downloadLink = document.createElement("a");
          downloadLink.href = "/BM%20Brochure%202026.pdf";
          downloadLink.setAttribute("download", "BM Brochure 2026.pdf");
          downloadLink.target = "_blank";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        } catch (downloadErr) {
          console.error("Auto-download failed:", downloadErr);
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, openEnquiryModal, closeEnquiryModal }}>
      {children}

      {/* Mobile Bottom Fixed Action Bar - Sits cleanly at screen bottom, never overlaps text */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 flex sm:hidden items-center gap-2 shadow-2xl">
        <a
          href="https://wa.me/919990613140?text=Hi%20WebDev%20Expert%2C%20I%20would%20like%20to%20discuss%20a%20website%20development%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 px-3 text-xs font-bold text-white shadow-sm active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.32C9.33 7.32 9.04 7.4 8.78 7.68C8.53 7.97 7.81 8.64 7.81 10.02C7.81 11.4 8.81 12.73 8.95 12.92C9.09 13.11 10.95 16.09 13.88 17.24C16.32 18.2 16.82 18.01 17.36 17.96C17.9 17.91 19.1 17.25 19.35 16.55C19.6 15.85 19.6 15.26 19.52 15.13C19.45 15 19.25 14.93 18.96 14.78C18.66 14.64 17.2 13.92 16.93 13.82C16.66 13.72 16.46 13.67 16.27 13.97C16.07 14.26 15.5 14.93 15.33 15.13C15.15 15.33 14.98 15.35 14.69 15.21C14.39 15.06 13.45 14.75 12.33 13.75C11.45 12.97 10.86 12 10.71 11.75C10.57 11.5 10.7 11.37 10.85 11.22C10.98 11.09 11.14 10.88 11.29 10.71C11.43 10.53 11.48 10.41 11.58 10.21C11.68 10.01 11.63 9.84 11.55 9.69C11.48 9.54 10.9 8.11 10.65 7.53C10.42 6.96 10.18 7.04 10 7.03C9.83 7.03 9.63 7.03 9.53 7.32Z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => openEnquiryModal()}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ff6b1e] py-2.5 px-3 text-xs font-bold text-white shadow-sm active:scale-95 transition-transform"
          aria-label="Open Instant Enquiry Form"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0" />
          <span>Quick Enquiry</span>
        </button>
      </div>

      {/* Desktop Floating CTA Dock on Bottom-Right */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        <a
          href="https://wa.me/919990613140?text=Hi%20WebDev%20Expert%2C%20I%20would%20like%20to%20discuss%20a%20website%20development%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.32C9.33 7.32 9.04 7.4 8.78 7.68C8.53 7.97 7.81 8.64 7.81 10.02C7.81 11.4 8.81 12.73 8.95 12.92C9.09 13.11 10.95 16.09 13.88 17.24C16.32 18.2 16.82 18.01 17.36 17.96C17.9 17.91 19.1 17.25 19.35 16.55C19.6 15.85 19.6 15.26 19.52 15.13C19.45 15 19.25 14.93 18.96 14.78C18.66 14.64 17.2 13.92 16.93 13.82C16.66 13.72 16.46 13.67 16.27 13.97C16.07 14.26 15.5 14.93 15.33 15.13C15.15 15.33 14.98 15.35 14.69 15.21C14.39 15.06 13.45 14.75 12.33 13.75C11.45 12.97 10.86 12 10.71 11.75C10.57 11.5 10.7 11.37 10.85 11.22C10.98 11.09 11.14 10.88 11.29 10.71C11.43 10.53 11.48 10.41 11.58 10.21C11.68 10.01 11.63 9.84 11.55 9.69C11.48 9.54 10.9 8.11 10.65 7.53C10.42 6.96 10.18 7.04 10 7.03C9.83 7.03 9.63 7.03 9.53 7.32Z" />
          </svg>
          <span>WhatsApp Us</span>
        </a>

        <button
          onClick={() => openEnquiryModal()}
          className="flex items-center gap-2.5 rounded-full bg-[#ff6b1e] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-[#ff6b1e]/40 hover:bg-[#e55510] hover:scale-105 active:scale-95 transition-all border-2 border-white/20"
          aria-label="Open Instant Enquiry Form"
        >
          <Sparkles className="w-4 h-4 animate-pulse shrink-0" />
          <span>Quick Enquiry</span>
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={closeEnquiryModal}
          />

          {/* Modal Card - Ultra Compact on Mobile, Fits Without Scrolling */}
          <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-7 shadow-2xl border border-slate-100 z-10 my-auto transition-all animate-in fade-in zoom-in-95 duration-200 max-h-[94vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeEnquiryModal}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Close Enquiry Dialog"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {success ? (
              <div className="py-5 sm:py-6 text-center space-y-3.5 sm:space-y-4">
                <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Enquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! Your requirements have been saved. Our senior website
                  engineer will call you shortly at your registered number.
                </p>

                {/* Automatic Brochure Download Box */}
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/80 border border-emerald-200/90 text-left flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-bold text-emerald-950 truncate">
                        Brochure Downloading...
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-emerald-700 truncate">
                        BM Brochure 2026 (PDF • 4.0 MB)
                      </p>
                    </div>
                  </div>
                  <a
                    href="/BM%20Brochure%202026.pdf"
                    download="BM Brochure 2026.pdf"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href="tel:+919990613140"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#e55510] transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now: {siteConfig.phone}</span>
                  </a>
                  <button
                    onClick={closeEnquiryModal}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="pr-6 sm:pr-8">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/20 text-[#ff6b1e] text-[10px] sm:text-[11px] font-bold mb-1 sm:mb-2">
                    <Sparkles className="w-3 h-3 text-[#ff6b1e]" />
                    <span>Direct Senior Engineer Consultation</span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    Get Free Website Proposal &amp; Quote
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
                    Direct line:{" "}
                    <a
                      href="tel:+919990613140"
                      className="font-bold text-[#ff6b1e] hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>

                {error && (
                  <div className="mt-3 p-2.5 rounded-xl bg-red-50 text-red-600 text-xs font-medium border border-red-200">
                    {error}
                  </div>
                )}

                {/* Form - Compact on Mobile */}
                <form onSubmit={handleSubmit} className="mt-3.5 sm:mt-5 space-y-2.5 sm:space-y-3.5">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name <span className="text-[#ff6b1e]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-9 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff6b1e] focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number <span className="text-[#ff6b1e]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 99906 13140"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-9 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff6b1e] focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 transition"
                      />
                    </div>
                  </div>

                  {/* 2-Column Responsive Row: Email (Optional) + City / Location */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 truncate">
                        Email (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff6b1e] focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 truncate">
                        City / Location
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. Noida"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-8 sm:pl-9 pr-2.5 sm:pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff6b1e] focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#ff6b1e] focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 transition cursor-pointer"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Project Requirements (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400" />
                      <textarea
                        rows={2}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Brief notes on timeline, design, features..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-9 pr-3 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff6b1e] focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 transition resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-1 sm:pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] py-3 sm:py-3.5 px-5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#ff6b1e]/30 hover:bg-[#e55510] transition-all hover:scale-[1.01] active:scale-98 disabled:opacity-70 disabled:pointer-events-none cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting Your Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit &amp; Download Brochure</span>
                          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[10px] sm:text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% Confidential. Instant response within 15 mins.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  );
}

// Reusable Button component that triggers the enquiry modal
export function EnquiryButton({
  children,
  className = "",
  service,
  location,
  variant = "primary",
}: {
  children?: ReactNode;
  className?: string;
  service?: string;
  location?: string;
  variant?: "primary" | "secondary" | "link";
}) {
  const { openEnquiryModal } = useEnquiryModal();

  const baseStyles =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ff6b1e]/30 hover:bg-[#e55510] transition-all hover:scale-105 active:scale-95 cursor-pointer"
      : variant === "secondary"
      ? "inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs cursor-pointer"
      : "inline-flex items-center gap-2 text-sm font-bold text-[#ff6b1e] hover:text-[#e55510] transition cursor-pointer";

  return (
    <button
      type="button"
      onClick={() => openEnquiryModal({ service, location })}
      className={`${baseStyles} ${className}`}
    >
      {children || (
        <>
          <span>Start Your Project</span>
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  );
}
