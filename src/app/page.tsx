import { Hero } from "@/components/home/hero";
import { BrandsSection } from "@/components/home/brands-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { ProductCategories } from "@/components/home/product-categories";
import { CustomerShowcase } from "@/components/home/customer-showcase";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedProducts } from "@/components/home/featured-products";
import { InquiryForm } from "@/components/home/inquiry-form";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsSection />
      <IndustriesSection />
      <ProductCategories />
      <CustomerShowcase />
      <WhyChooseUs />
      <FeaturedProducts />
      <InquiryForm />
      <ContactSection />
    </>
  );
}
