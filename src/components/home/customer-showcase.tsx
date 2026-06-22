"use client";

import React from "react";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { SectionHeader } from "@/components/ui/section-header";
import { customers } from "@/lib/company-data";

export function CustomerShowcase() {

  return (
    <section className="bg-background py-16 md:py-16 md:py-24 overflow-hidden border-t border-taupe/10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-16">
        <SectionHeader
          title="Trusted By Industry Leaders"
          subtitle="Supporting manufacturers, OEMs, process industries, and engineering organizations across India since 1996."
          align="center"
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center">
          {customers.map((customer, i) => (
            <div
              key={`${customer.id}-${i}`}
              className="flex flex-col items-center gap-4 group w-full p-6 bg-white border border-border shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none"
            >
              <div className="relative h-12 w-full sm:h-16 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  fill
                  className={`object-contain mix-blend-multiply ${
                    ['schneider-electric', 'zydus', 'raychem-rpg', 'everest-spices', 'banco', 'elecon', 'real-namkeen'].includes(customer.id)
                      ? 'scale-[1.4]'
                      : ''
                  }`}
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center mt-20">
        <p className="text-sm text-foreground/40 font-medium leading-relaxed italic">
          &quot;Our commitment to quality and service has allowed us to build lasting relationships 
          with India&apos;s most respected industrial organizations since 1996.&quot;
        </p>
      </div>
    </section>
  );
}
