// Analytics, Conversion Event Dispatcher & UTM Attribution Capture

export interface UtmParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  landingPage?: string;
}

const UTM_STORAGE_KEY = "wde_utm_params";

/**
 * Initializes and stores UTM parameters from the current URL if present.
 * Persists in sessionStorage so attribution is preserved throughout the session.
 */
export function initUtmCapture(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const existing = getStoredUtmParams();

    const currentSource = urlParams.get("utm_source");
    const currentMedium = urlParams.get("utm_medium");
    const currentCampaign = urlParams.get("utm_campaign");
    const currentTerm = urlParams.get("utm_term");
    const currentContent = urlParams.get("utm_content");

    // Only overwrite if new UTM parameters are detected in URL
    if (currentSource || currentMedium || currentCampaign) {
      const newParams: UtmParams = {
        utmSource: currentSource || "",
        utmMedium: currentMedium || "",
        utmCampaign: currentCampaign || "",
        utmTerm: currentTerm || "",
        utmContent: currentContent || "",
        referrer: document.referrer || "",
        landingPage: window.location.pathname,
      };
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(newParams));
      return newParams;
    }

    if (existing && Object.keys(existing).length > 0) {
      return existing;
    }

    // Capture organic referrer if available
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
      const organicAttribution: UtmParams = {
        utmSource: new URL(document.referrer).hostname,
        utmMedium: "referral",
        referrer: document.referrer,
        landingPage: window.location.pathname,
      };
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(organicAttribution));
      return organicAttribution;
    }
  } catch (err) {
    console.warn("Failed to capture UTM parameters:", err);
  }

  return {};
}

/**
 * Retrieves stored UTM attribution data for lead form submission.
 */
export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// ----------------------------------------------------
// GA4 Custom Event Dispatcher
// ----------------------------------------------------

declare global {
  interface Window {
    gtag?: (
      command: "event" | "consent" | "config" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Low-level event dispatcher to window.gtag
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, {
        ...params,
        send_to: process.env.NEXT_PUBLIC_GA_ID,
      });
    } catch (err) {
      console.warn(`GA4 trackEvent error (${eventName}):`, err);
    }
  }
}

/**
 * Key Conversion Event: Form Submission
 */
export function trackFormSubmit(service: string, budgetRange?: string, formId = "lead_form") {
  trackEvent("form_submit", {
    service_name: service,
    budget_range: budgetRange || "Not Specified",
    form_id: formId,
    event_category: "Conversion",
    event_label: service,
    is_key_event: true,
  });
}

/**
 * Key Conversion Event: WhatsApp Click
 */
export function trackWhatsAppClick(location = "sticky_bar") {
  trackEvent("whatsapp_click", {
    click_location: location,
    event_category: "Conversion",
    event_label: "WhatsApp Chat Initiation",
    is_key_event: true,
  });
}

/**
 * Phone Call Click Event
 */
export function trackPhoneClick(location = "header") {
  trackEvent("phone_click", {
    click_location: location,
    phone_number: "+91 99906 13140",
    event_category: "Contact",
    event_label: "Direct Phone Call",
  });
}

/**
 * Generic Primary CTA Click
 */
export function trackCtaClick(label: string, location: string) {
  trackEvent("cta_click", {
    cta_label: label,
    cta_location: location,
    event_category: "Engagement",
  });
}

/**
 * Price Calculator Usage Event
 */
export function trackCalculatorUse(platform: string, estimatedCost: string) {
  trackEvent("calculator_use", {
    platform_selected: platform,
    estimated_cost_inr: estimatedCost,
    event_category: "Lead Magnet",
    event_label: `Calculator: ${platform}`,
  });
}

/**
 * Free SEO Checker Tool Usage Event
 */
export function trackSeoCheckerUse(urlChecked: string, issuesCount: number) {
  trackEvent("seo_checker_use", {
    checked_url: urlChecked,
    issues_detected: issuesCount,
    event_category: "Lead Magnet",
    event_label: "SEO Speed Audit Tool",
  });
}

/**
 * Scroll Depth Tracking Event
 */
export function trackScrollDepth(depthPercent: number) {
  trackEvent("scroll_depth", {
    depth_percent: depthPercent,
    event_category: "Reading Engagement",
  });
}
