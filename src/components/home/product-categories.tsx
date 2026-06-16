"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion, useAnimationControls } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { catalogData } from "@/lib/catalog-data";

export function ProductCategories() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate catalog data for seamless loop
  const loopData = [...catalogData, ...catalogData, ...catalogData];

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-beige/30 bg-grain py-24 lg:py-32 overflow-hidden relative">
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-16 flex items-end justify-between">
        <SectionHeader
          title="Product Portfolio"
          subtitle="Precision components and integrated systems from world-leading industrial brands."
          align="left"
          className="mb-0 max-w-2xl"
        />
        
        <div className="hidden md:flex gap-4 mb-2">
          <button 
            onClick={scrollPrev}
            className="h-12 w-12 rounded-full border border-taupe/30 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-background transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="h-12 w-12 rounded-full border border-taupe/30 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-background transition-all"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div 
        className="relative px-4 sm:px-6 lg:px-8 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-8 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <motion.div
            className="flex gap-8"
            animate={{
              x: isHovered ? undefined : ["0%", "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            drag="x"
            dragConstraints={{ right: 0, left: -2000 }}
            style={{ width: "fit-content" }}
          >
            {loopData.map((category, i) => (
              <motion.div
                key={`${category.id}-${i}`}
                className="w-[380px] flex-shrink-0"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                <Link
                  href={`/categories/${category.id}`}
                  className="group flex flex-col h-full bg-background border border-taupe/20 rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(90,58,34,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(90,58,34,0.1)] hover:border-accent/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-beige/10">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                      sizes="380px"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex justify-between items-baseline mb-5">
                      <h3 className="text-2xl font-bold text-primary-dark tracking-tight">
                        {category.name}
                      </h3>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-2 py-1">
                        {category.subcategories.length} Families
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/60 mb-8 flex-1 line-clamp-3">
                      {category.description}
                    </p>
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-accent group-hover:translate-x-3 transition-transform duration-500">
                      Explore Solutions <ArrowUpRight className="ml-3 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative anchors */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-taupe/10 -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-taupe/5 translate-x-32 translate-y-32 rounded-full" />
    </section>
  );
}
