import type { Metadata } from "next";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import Link from "next/link";
import { customers } from "@/lib/company-data";
import { CheckCircle2, Building2, Briefcase, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Companies We Serve",
  description:
    "Showcasing the trusted customers and industries served by Ross Enterprises across India. Delivering industrial automation and fluid control excellence.",
};

export default function CustomersPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-primary-dark bg-grain">
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
      <section className="py-32 bg-grain relative">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="group relative flex flex-col p-10 lg:p-12 rounded-sm bg-background border border-taupe/10 shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-accent/30"
              >
                <div className="flex flex-col sm:flex-row gap-10 mb-10">
                  <div className="relative h-20 w-20 shrink-0 bg-beige/10 rounded-sm p-4 border border-taupe/10 group-hover:border-accent/30 transition-colors">
                    <Image
                      src={customer.logo}
                      alt={customer.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary-dark mb-2 tracking-tight">
                      {customer.name}
                    </h2>
                    <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-[10px]">
                      <Building2 className="h-3 w-3" />
                      {customer.industry}
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-foreground/70 font-medium mb-12">
                  {customer.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-10 mt-auto">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-4 w-4 text-taupe" />
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-taupe">Products Supplied</h3>
                    </div>
                    <ul className="space-y-3">
                      {customer.products.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-center text-[13px] font-medium text-foreground/60">
                          <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Zap className="h-4 w-4 text-taupe" />
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-taupe">Solutions Delivered</h3>
                    </div>
                    <ul className="space-y-3">
                      {customer.solutions.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-center text-[13px] font-medium text-foreground/60">
                          <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-taupe/10">
                  <p className="text-[11px] font-bold text-taupe uppercase tracking-widest">
                    Relationship: <span className="text-foreground/40 italic font-medium lowercase tracking-normal">{customer.relationship}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Placeholder State for Future Updates */}
          <div className="mt-20 p-20 border-2 border-dashed border-taupe/20 rounded-sm text-center bg-beige/5">
            <h3 className="text-xl font-bold text-taupe mb-4 uppercase tracking-[0.2em]">Partnering with the Best</h3>
            <p className="text-sm text-taupe/60 font-medium italic max-w-2xl mx-auto leading-relaxed">
              "We are constantly expanding our service footprint. This section is updated regularly as we establish new technical partnerships and supply agreements with industry leaders nationwide."
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-32 px-4">
        <div className="mx-auto max-w-4xl bg-primary-dark p-16 lg:p-24 rounded-sm shadow-2xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h2 className="text-3xl font-bold text-background mb-8 relative z-10 tracking-tight">Become a Ross Partner</h2>
          <p className="text-background/60 max-w-2xl mx-auto text-lg leading-relaxed mb-12 relative z-10 font-medium italic">
            Join the network of companies that trust Ross Enterprises for their critical automation and fluid power needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-12 py-5 bg-accent text-background text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-primary-dark transition-all relative z-10 shadow-lg"
          >
            Start a Collaboration
          </a>
        </div>
      </section>
    </div>
  );
}
