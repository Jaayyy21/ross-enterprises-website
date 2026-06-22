import type { Metadata } from "next";
import { ProductCategories } from "@/components/home/product-categories";

export const metadata: Metadata = {
  title: "Product Portfolio",
  description: "Browse our comprehensive catalog of pneumatics, hydraulics, instrumentation, and automation solutions.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-background min-h-screen pt-12">
      <ProductCategories />
    </div>
  );
}
