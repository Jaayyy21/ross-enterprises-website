import type { Metadata } from "next";
import { InquiryForm } from "@/components/home/inquiry-form";
import { ContactSection } from "@/components/home/contact-section";
import { company } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ross Enterprises in Vadodara for pneumatic, hydraulic, and instrumentation product inquiries. +91-9427506160 / +91-9824018510.",
  alternates: {
    canonical: "https://rossenterprises.in/connect",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Reach {company.name} for product inquiries, technical support, vendor
            registration, and project quotations.
          </p>
        </div>
      </section>
      <InquiryForm />
      <ContactSection />
    </>
  );
}
