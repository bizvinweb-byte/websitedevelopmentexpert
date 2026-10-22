# GA4 & Conversion Tracking Architecture Plan

> **Measurement Philosophy:**
> Clean, privacy-conscious event measurement designed for Indian consumer behavior. In India, digital leads typically originate through two distinct channels: **formal web form inquiries** and **instant WhatsApp/call conversations**. Both paths must be tracked accurately with full marketing channel attribution (UTM source, medium, campaign) while complying with India's Digital Personal Data Protection (DPDP) Act 2023.

---

## 1. Google Consent Mode v2 & DPDP Compliance

Our application implements **Google Consent Mode v2** natively via [`src/components/CookieConsentBanner.tsx`](file:///c:/websitedevelopmentexpert/src/components/CookieConsentBanner.tsx) and [`src/app/layout.tsx`](file:///c:/websitedevelopmentexpert/src/app/layout.tsx).

### Default Consent State (Prior to User Action):
```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});
```

### When User Clicks "Accept Analytics":
```javascript
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'denied' // Preserves maximum privacy
});
```

---

## 2. Event Taxonomy & Custom Dimensions

| Event Name | Event Category | Trigger Condition | Captured Parameters | GA4 Conversion Status |
| :--- | :--- | :--- | :--- | :--- |
| `form_submit` | **Conversion** | User submits the inline lead form or modal inquiry successfully | `service_name`<br>`budget_range`<br>`form_id`<br>`is_key_event: true` | **KEY EVENT (Mark as Conversion)** |
| `whatsapp_click` | **Conversion** | User clicks any WhatsApp CTA (sticky bar, header, contact page) | `click_location`<br>`is_key_event: true` | **KEY EVENT (Mark as Conversion)** |
| `phone_click` | **Contact** | User clicks any click-to-call phone link (`tel:+919990613140`) | `click_location`<br>`phone_number` | Standard Event |
| `cta_click` | **Engagement** | User clicks primary action buttons ("Get Proposal", "Start Conversation") | `cta_label`<br>`cta_location` | Standard Event |
| `calculator_use` | **Lead Magnet** | User interacts with the pricing calculator on `/website-development-cost-in-india` | `platform_selected`<br>`estimated_cost_inr` | Standard Event |
| `seo_checker_use` | **Lead Magnet** | User audits their domain using the free SEO & Speed Checker tool | `checked_url`<br>`issues_detected` | Standard Event |
| `scroll_depth` | **Reading Engagement** | User scrolls past 25%, 50%, 75%, and 90% of in-depth guides | `depth_percent` | Standard Event |

---

## 3. Detailed Event Specifications

### 1. `form_submit` (Primary Key Event)
- **Fired From:** [`src/components/LeadContactForm.tsx`](file:///c:/websitedevelopmentexpert/src/components/LeadContactForm.tsx) and [`src/components/EnquiryModal.tsx`](file:///c:/websitedevelopmentexpert/src/components/EnquiryModal.tsx).
- **Trigger Code:**
  ```typescript
  trackFormSubmit(service, budgetRange, formId);
  ```
- **Payload Schema:**
  ```json
  {
    "event": "form_submit",
    "service_name": "Shopify Storefront Development",
    "budget_range": "₹50,000 – ₹1,00,000",
    "form_id": "inline_lead_form",
    "is_key_event": true
  }
  ```
- **GA4 Action Required:** In GA4 Admin > **Events**, find `form_submit` and toggle **"Mark as key event"** (formerly conversion).

### 2. `whatsapp_click` (Primary Key Event)
- **Fired From:** Sticky Mobile Bar, Header, Contact Page, and Service CTA blocks.
- **Trigger Code:**
  ```typescript
  trackWhatsAppClick("sticky_mobile_bar");
  ```
- **Payload Schema:**
  ```json
  {
    "event": "whatsapp_click",
    "click_location": "sticky_mobile_bar",
    "is_key_event": true
  }
  ```
- **GA4 Action Required:** In GA4 Admin > **Events**, find `whatsapp_click` and toggle **"Mark as key event"**.

### 3. `calculator_use`
- **Fired From:** [`src/components/CostCalculator.tsx`](file:///c:/websitedevelopmentexpert/src/components/CostCalculator.tsx).
- **Trigger Code:**
  ```typescript
  trackCalculatorUse("Shopify 2.0 D2C Storefront", "55000-75000");
  ```
- **Payload Schema:**
  ```json
  {
    "event": "calculator_use",
    "platform_selected": "Shopify 2.0 D2C Storefront",
    "estimated_cost_inr": "55000-75000"
  }
  ```

### 4. `seo_checker_use`
- **Fired From:** [`src/app/tools/seo-checker/page.tsx`](file:///c:/websitedevelopmentexpert/src/app/tools/seo-checker/page.tsx).
- **Trigger Code:**
  ```typescript
  trackSeoCheckerUse("clientdomain.com", 2);
  ```

---

## 4. UTM Parameter & Marketing Channel Attribution

Our application captures attribution parameters automatically on initial landing via [`src/lib/tracking.ts`](file:///c:/websitedevelopmentexpert/src/lib/tracking.ts) and stores them in `sessionStorage`:
- `utm_source`: e.g. `google`, `linkedin`, `clutch`, `newsletter`
- `utm_medium`: e.g. `cpc`, `organic`, `referral`, `email`
- `utm_campaign`: e.g. `shopify_experts_india`, `noida_local_b2b`
- `utm_term`: e.g. `nextjs+development+company`
- `utm_content`: e.g. `banner_v1`
- `referrer`: e.g. `https://clutch.co/`
- `landingPage`: e.g. `/services/nextjs-development-company`

Whenever an inquiry is submitted via any form, these parameters are attached directly to the lead record in [`src/lib/enquiry-store.ts`](file:///c:/websitedevelopmentexpert/src/lib/enquiry-store.ts) and forwarded to Google Sheets or CRM.
