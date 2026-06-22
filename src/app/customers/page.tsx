import type { Metadata } from "next";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import Link from "next/link";
import { customers } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Companies We Serve",
  description:
    "Showcasing the trusted customers and industries served by Ross Enterprises across India. Delivering industrial automation and fluid control excellence.",
};

export default function CustomersPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-px w-12 bg-accent/30" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
              Trusted Partnerships
            </p>
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <h1 className="text-5xl font-bold text-background sm:text-7xl tracking-tighter mb-10 leading-[0.95]">
            Companies We Serve
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-background/60 font-medium italic">
            Ross Enterprises is proud to support the growth and operations of industry leaders across pharmaceuticals, chemicals, automotive, and general manufacturing through precision engineering and reliable supply chains.
          </p>
        </div>
      </section>

      {/* Customers Grid */}
      <section className="py-32 bg-surface relative">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="group relative flex flex-col items-center justify-center p-8 lg:p-12 rounded-none bg-white border border-border shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 hover:border-accent aspect-square sm:aspect-video"
              >
                <div className="relative h-16 w-full sm:h-20 mb-6">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase text-center transition-colors group-hover:text-accent">
                  {customer.name}
                </h2>
              </div>
            ))}
          </div>

          {/* Empty Placeholder State for Future Updates */}
          <div className="mt-20 p-20 border-2 border-dashed border-border rounded-none text-center bg-surface/50">
            <h3 className="text-xl font-bold text-muted mb-4 uppercase tracking-[0.2em]">Partnering with the Best</h3>
            <p className="text-sm text-muted font-medium italic max-w-2xl mx-auto leading-relaxed">
              "We are constantly expanding our service footprint. This section is updated regularly as we establish new technical partnerships and supply agreements with industry leaders nationwide."
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-32 px-4">
        <div className="mx-auto max-w-4xl bg-primary p-16 lg:p-24 rounded-none shadow-xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h2 className="text-3xl font-bold text-background mb-8 relative z-10 tracking-tight">Become a Ross Partner</h2>
          <p className="text-background/60 max-w-2xl mx-auto text-lg leading-relaxed mb-12 relative z-10 font-medium italic">
            Join the network of companies that trust Ross Enterprises for their critical automation and fluid power needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-12 py-5 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-none hover:bg-white hover:text-primary transition-all relative z-10 shadow-sm hover:shadow-md"
          >
            Start a Collaboration
          </a>
        </div>
      </section>
    </div>
  );
}
