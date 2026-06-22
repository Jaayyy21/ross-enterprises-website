import type { Metadata } from "next";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import Link from "next/link";
import { brands, brandProductLines } from "@/lib/company-data";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Companies We Represent",
  description:
    "Ross Enterprises proudly represents world-leading manufacturers across pneumatics, hydraulics, instrumentation, automation, and industrial connectivity.",
};

export default function CompaniesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-primary-dark bg-grain">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="h-px w-12 bg-accent/30" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
              Trusted Global Partners
            </p>
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <h1 className="text-5xl font-bold text-background sm:text-7xl tracking-tighter mb-10 leading-[0.95]">
            Companies We Represent
          </h1>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-background/60 font-medium italic">
            Ross Enterprises proudly represents world-leading manufacturers across pneumatics, hydraulics, instrumentation, automation, sensors, vacuum technology, fluid control systems, and industrial connectivity solutions.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-32 bg-grain relative">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-12 lg:gap-20">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/companies-we-represent/${brand.id}`}
                className="group relative grid lg:grid-cols-12 gap-10 lg:gap-20 p-10 lg:p-16 rounded-sm bg-white border border-taupe/20 shadow-md shadow-taupe/5 transition-all duration-300 hover:shadow-lg hover:shadow-taupe/20 hover:-translate-y-0.5 hover:border-accent/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {/* Logo & Basic Info */}
                <div className="lg:col-span-4 flex flex-col">
                  <div className="relative h-24 w-full mb-10 transition-transform duration-500 group-hover:scale-[1.03]">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className={`object-contain object-left mix-blend-multiply ${
                        brand.id === 'parker' ? 'scale-[1.4] origin-left' :
                        brand.id === 'transair' ? 'scale-[1.5] origin-left' : ''
                      }`}
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark mb-2 tracking-tight transition-colors duration-300 group-hover:text-accent">
                    {brand.name}
                  </h2>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest mb-8">
                    {brand.tagline}
                  </p>

                  {/* View Details CTA */}
                  <div className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary-dark/40 transition-colors duration-300 group-hover:text-accent">
                    View Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Description & Product Lines */}
                <div className="lg:col-span-8">
                  <div className="mb-12">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-taupe mb-6">Overview</h3>
                    <p className="text-lg leading-relaxed text-foreground/70 font-medium">
                      {brand.description}
                    </p>
                  </div>

                  {brandProductLines[brand.id] && (
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-taupe mb-8">Solutions Portfolio</h3>
                      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                        {brandProductLines[brand.id].map((line, idx) => (
                          <div key={idx} className="flex gap-4 items-start">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-1 shrink-0" />
                            <span className="text-[13px] leading-relaxed text-foreground/60 font-medium">{line}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-32 px-4">
        <div className="mx-auto max-w-5xl bg-primary-dark p-16 lg:p-24 rounded-sm shadow-2xl relative overflow-hidden text-center group border border-taupe/20">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h2 className="text-4xl font-bold text-background mb-8 relative z-10 tracking-tight">Need Technical Assistance?</h2>
          <p className="text-background/60 max-w-2xl mx-auto text-lg leading-relaxed mb-12 relative z-10 font-medium italic">
            "Our engineering team provides deep technical expertise for every brand we represent. From system design to specialized spares selection, we're here to help."
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
            <a 
              href="/contact" 
              className="px-12 py-5 bg-accent text-background text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-primary-dark transition-all"
            >
              Contact Sales
            </a>
            <a 
              href="/contact" 
              className="px-12 py-5 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white/5 transition-all"
            >
              Technical Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
