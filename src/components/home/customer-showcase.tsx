"use client";

import React, { useState } from "react";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { customers } from "@/lib/company-data";

export function CustomerShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate customers for seamless loop
  const loopCustomers = [...customers, ...customers];

  return (
    <section className="bg-background py-24 lg:py-32 overflow-hidden border-t border-taupe/10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-16">
        <SectionHeader
          title="Trusted Industry Partners"
          subtitle="Empowering leading companies across diverse sectors with reliable industrial solutions."
          align="center"
        />
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 sm:gap-20 items-center whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ 
              width: "fit-content",
              pauseOnHover: true 
            }}
            whileHover={{ transition: { duration: 80 } }} // Slow down on hover instead of stopping completely for better effect
          >
            {loopCustomers.map((customer, i) => (
              <div
                key={`${customer.id}-${i}`}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="relative h-12 w-24 sm:h-16 sm:w-32 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 128px, 160px"
                    unoptimized
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 group-hover:text-accent transition-colors duration-500">
                  {customer.name}
                </span>
              </div>
            ))}
          </motion.div>
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
