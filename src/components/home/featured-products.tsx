"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredProducts } from "@/lib/company-data";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section className="bg-beige/10 py-24 lg:py-32 bg-grain relative">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <SectionHeader
            title="Featured Solutions"
            subtitle="Representing the forefront of industrial pneumatic and hydraulic engineering."
            className="mb-0 max-w-2xl"
            align="left"
          />
          <div className="flex gap-5 mt-10 md:mt-0">
            <button
              onClick={prevSlide}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-taupe/30 bg-background text-primary-dark hover:bg-primary-dark hover:text-background shadow-sm transition-all duration-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-taupe/30 bg-background text-primary-dark hover:bg-primary-dark hover:text-background shadow-sm transition-all duration-500"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {featuredProducts
                  .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                  .map((product) => (
                    <div key={product.name} className="group flex flex-col h-full bg-background border border-taupe/20 rounded-sm overflow-hidden shadow-[0_30px_60px_rgba(90,58,34,0.05)] transition-all duration-700 hover:shadow-[0_50px_100px_rgba(90,58,34,0.12)] hover:border-accent/40">
                      <div className="relative aspect-square overflow-hidden bg-beige/5 p-12 group-hover:bg-beige/10 transition-colors duration-700">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-12 transition-all duration-1000 group-hover:scale-105 group-hover:rotate-2 grayscale-[0.2] group-hover:grayscale-0"
                          sizes="400px"
                          unoptimized
                        />
                        <div className="absolute top-8 left-8 py-1.5 px-4 bg-primary-dark text-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
                          {product.brand}
                        </div>
                      </div>
                      <div className="p-10 flex flex-col flex-1">
                        <h3 className="text-2xl font-bold text-primary-dark mb-5 tracking-tight leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-foreground/60 line-clamp-3 mb-10 flex-1 font-medium">
                          {product.description}
                        </p>
                        <Link 
                          href="/contact#inquiry"
                          className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-accent hover:text-primary-dark transition-colors group/link"
                        >
                          Technical Specifications <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center gap-4 mt-20">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-700 ${
                i === currentIndex ? "w-16 bg-accent" : "w-2 bg-taupe/30 hover:bg-taupe/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Visual anchor */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-taupe/20 to-transparent" />
    </section>
  );
}
