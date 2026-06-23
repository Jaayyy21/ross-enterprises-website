import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rossenterprises.in"),
  title: {
    default: "Ross Enterprises | Industrial Automation & Fluid Control Solutions",
    template: "%s | Ross Enterprises",
  },
  description:
    "Ross Enterprises — trusted supplier of pneumatic, hydraulic, instrumentation and automation products since 1996. Representing Parker, Legris, Piab, Pneumax, Baumer and more. Vadodara, Gujarat, India.",
  keywords: [
    "pneumatics",
    "hydraulics",
    "instrumentation",
    "industrial automation",
    "Parker",
    "Legris",
    "Piab",
    "Vadodara",
    "Gujarat",
    "Ross Enterprises",
  ],
  authors: [{ name: "Ross Enterprises" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rossenterprises.in",
    siteName: "Ross Enterprises",
    title: "Ross Enterprises | Industrial Automation & Fluid Control Solutions",
    description:
      "Trusted supplier of pneumatic, hydraulic, instrumentation and automation products serving industries across Gujarat and India since 1996.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rossenterprises.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Ross Enterprises",
    "foundingDate": "1996",
    "industry": "Industrial Automation & Engineering Solutions",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "url": "https://rossenterprises.in"
  };

  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
