"use client";

import React from "react";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { SectionHeader } from "@/components/ui/section-header";
import { customers } from "@/lib/company-data";

export function CustomerShowcase() {

  // Duplicate customers for seamless loop
  const loopCustomers = [...customers, ...customers];

  return (
    <section className="bg-background py-16 md:py-16 md:py-24 overflow-hidden border-t border-taupe/10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-16">
        <SectionHeader
          title="Trusted By Industry Leaders"
          subtitle="Supporting manufacturers, OEMs, process industries, and engineering organizations across India since 1996."
          align="center"
        />
      </div>

      <div className="relative">
        <div className="flex overflow-hidden w-full bg-texture py-6 border-y border-taupe/5">
          <div className="flex gap-12 sm:gap-20 items-center w-max animate-marquee">
            {loopCustomers.map((customer, i) => (
              <div
                key={`${customer.id}-${i}`}
                className="flex flex-col items-center gap-4 group shrink-0"
              >
                <div className="relative h-12 w-24 sm:h-16 sm:w-32 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 group-hover:text-accent transition-colors duration-500">
                  {customer.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center mt-20">
        <p className="text-sm text-foreground/40 font-medium leading-relaxed italic">
          "Our commitment to quality and service has allowed us to build lasting relationships 
          with India's most respected industrial organizations since 1996."
        </p>
      </div>
    </section>
  );
}
