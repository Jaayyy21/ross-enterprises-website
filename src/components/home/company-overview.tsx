"use client";

import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion } from "framer-motion";
import { company, images } from "@/lib/company-data";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CompanyOverview() {
  return (
    <section className="bg-background py-24 lg:py-32 overflow-hidden bg-grain relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <SectionHeader
              title="Industrial Excellence Since 1996"
              subtitle="Providing advanced motion and control solutions through a portfolio of world-leading brands."
              align="left"
              className="mb-10"
            />
            
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-foreground/70 font-medium">
                {company.intro}
              </p>
              <p className="text-foreground/60 leading-relaxed italic border-l-2 border-accent/20 pl-8">
                {company.expertise}
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center">
              <Button asChild variant="default" size="lg" className="px-12 rounded-sm shadow-2xl">
                <Link href="/about" className="uppercase tracking-[0.2em] text-[11px] font-bold">
                  Our Heritage
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-background bg-beige overflow-hidden relative shadow-sm">
                      <Image 
                        src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop`}
                        alt="Expert"
                        fill
                        className="object-cover grayscale"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  <span className="text-primary-dark font-bold block uppercase tracking-widest mb-1">Trusted Globally</span>
                  <p className="text-foreground/50 font-medium">500+ OEM partners</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[0_50px_100px_rgba(90,58,34,0.15)]">
              <Image
                src={images.about}
                alt="Our Facility"
                fill
                className="object-cover sepia-[0.2] contrast-[1.1]"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-12 -right-12 hidden xl:flex h-44 w-44 flex-col items-center justify-center rounded-full bg-background border border-taupe shadow-2xl">
              <div className="text-4xl font-bold text-primary-dark">28+</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mt-1">Years of</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent">Expertise</div>
            </div>

            <div className="absolute -bottom-10 -left-10 hidden xl:block w-72 rounded-sm bg-background p-10 shadow-[0_30px_60px_rgba(90,58,34,0.1)] border border-taupe/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Core Capability</span>
              </div>
              <p className="text-[13px] font-bold text-primary-dark leading-relaxed italic">
                "Complete solution through designing, supplying, and commissioning total pneumatic systems."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative anchors */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-taupe/20 to-transparent" />
    </section>
  );
}
