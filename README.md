<div align="center">
  <h1>Ross Enterprises Corporate Website</h1>
  <p><em>Industrial Automation & Engineering Solutions (Est. 1996)</em></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
  [![Cloudflare Turnstile](https://img.shields.io/badge/Security-Cloudflare_Turnstile-F38020?style=flat-square&logo=cloudflare)](https://www.cloudflare.com/products/turnstile/)
</div>

<br />

> **Note:** This repository houses the production source code for the official Ross Enterprises website. It serves as a digital storefront, credibility builder, and secure technical inquiry portal for enterprise customers.

---

## 📖 Project Overview

The Ross Enterprises website has been completely architected from the ground up to reflect the scale and precision of a leading industrial solutions provider. Moving away from legacy tech, this application is built on the **Next.js App Router**, leveraging modern web paradigms like React Server Components (RSC), strict TypeScript typings, and advanced server actions.

## 🏢 Business Context

Based in Vadodara, Gujarat, India, **Ross Enterprises** has been a premier authorized distributor of pneumatic, hydraulic, and automation components since 1996. They represent world-class brands such as Parker Hannifin and Legris. 

The primary business objective of this web platform is to:
1. Act as a high-trust portfolio showcasing major industrial clients.
2. Provide a seamless, premium user experience for prospective partners and customers.
3. Facilitate secure, spam-free technical inquiries directly to the engineering team.
4. Rank highly on regional search engines for specialized fluid power components.

## ⚡ Technology Stack

### Core Architecture
* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS + Vanilla CSS Modules
* **Animations:** Framer Motion (Micro-interactions, scroll reveals)
* **Icons:** Lucide React

### Backend & Integrations
* **API / Handlers:** Next.js Server Actions
* **Email Provider:** Resend SDK
* **Validation:** Zod (Type-safe schema validation)
* **Security:** Cloudflare Invisible Turnstile (Bot mitigation)

## ✨ Key Features

* **Server-Side Rendered (SSR) & Statically Generated:** Maximized performance and SEO indexing.
* **Premium UI/UX:** Dark mode aesthetics, glassmorphism, dynamic scroll animations, and fluid typography.
* **Responsive Architecture:** Pixel-perfect rendering across all viewports (Mobile, Tablet, Desktop).
* **Server-Action Inquiry Form:** Robust, JavaScript-independent fallback form handling.
* **Zero-Spam Architecture:** Invisible captchas and honeypots ensure only legitimate engineering requests reach the inbox.

## 🛡️ Security Architecture

The application implements a defense-in-depth approach to form submissions and API routes, specifically engineered for a shared hosting environment (cPanel/Node.js):

* **Cloudflare Invisible Turnstile:** Replaces legacy reCAPTCHA. Validates user sessions invisibly without hindering the UX. Strict domain matching ensures tokens cannot be spoofed.
* **Zod Validation:** All incoming payloads are strictly verified against a `z.object` schema on the server *before* processing.
* **Honeypot Protection:** Hidden algorithmic trap fields intercept automated headless bots navigating the DOM.
* **Security Headers:** Strict transport security, X-Frame-Options, and Content-Security-Policies enforced at the Next.js routing layer.
* **Resend Server Actions:** Email relay operations run exclusively in secure server environments, completely hiding API keys from the client network layer.
* **Graceful Failures:** Fail-open implementation logic ensures business-critical inquiries are not lost during network anomalies.

## 📈 SEO & Performance

* **Semantic HTML5:** Strict adherence to semantic DOM structures (`<article>`, `<section>`, `<nav>`).
* **Metadata API:** Dynamic `robots`, `sitemap.xml`, and OpenGraph tag generation.
* **Image Optimization:** Utilization of `next/image` with WebP format enforcement and lazy loading.
* **Font Optimization:** `next/font` integration to eliminate layout shifts (CLS) and blocking render delays.

## 📂 Project Structure

```text
ROSS/
├── src/
│   ├── app/                    # Next.js App Router (Pages & Layouts)
│   │   ├── actions/            # Secure Server Actions (e.g. submit-inquiry.ts)
│   │   ├── categories/         # Product Category pages
│   │   ├── connect/            # Contact & Inquiry portal
│   │   ├── customers/          # Client trust portfolio
│   │   ├── expertise/          # Company history & specialization
│   │   ├── partners/           # Authorized distributorships
│   │   ├── portfolio/          # Project gallery
│   │   ├── privacy-policy/     # Legal & Compliance pages
│   │   └── products/           # Detailed product specifications
│   ├── components/             # Reusable UI Architecture
│   │   ├── home/               # Landing page specific blocks
│   │   ├── layout/             # Global headers, footers, navigation
│   │   └── ui/                 # Atomic design components (Buttons, Inputs)
│   └── lib/                    # Utilities, constants, and helper functions
├── public/                     # Static assets (images, documents)
├── next.config.ts              # Next.js bundler configuration
└── tailwind.config.ts          # Design system tokens and plugins
```

## 💻 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jaayyy21/ross-enterprises-website.git
   cd ross-enterprises-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory (refer to the Environment Variables section below).

4. **Start the development server**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:3000`.*

## 🔐 Environment Variables

Create a `.env.local` file at the project root. The application will not compile or process inquiries without these:

```env
# Resend API key for routing inquiry emails
RESEND_API_KEY=re_your_api_key_here

# Cloudflare Turnstile Configuration (Mandatory for form submission)
# Use '1x00000000000000000000AA' for local bypassing/testing
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_site_key

# Turnstile Secret Key for Server-Side verification
# Use '1x0000000000000000000000000000000AA' for local bypassing/testing
TURNSTILE_SECRET_KEY=your_cloudflare_secret_key
```

## 🚀 Deployment

This application is configured for a standard Node.js server environment (e.g., cPanel with Phusion Passenger) but is fully compatible with Vercel or AWS Amplify.

1. **Build the production bundle:**
   ```bash
   npm run build
   ```
2. **Start the production server:**
   ```bash
   npm run start
   ```

## 🎨 Design System

The application utilizes a custom tailored design system built on top of Tailwind CSS. We avoid generic defaults in favor of:
* **Typography:** Premium Google Fonts configured via `next/font`.
* **Color Palette:** Deep, industrial "primary-dark" backgrounds accented by vibrant, high-contrast action colors.
* **Micro-interactions:** Interactive hover states, subtle `translate-y` shifts, and opacity fades that reward user engagement without compromising performance.

## 🛣️ Future Enhancements

* [ ] Integration of a headless CMS (Sanity/Contentful) for dynamic product catalog updates.
* [ ] Advanced analytics and heatmapping integration.
* [ ] Client portal for direct RFQ (Request for Quotation) tracking.

## 🤝 Credits

Architected and engineered by the **Ross Enterprises Technical Team**.
