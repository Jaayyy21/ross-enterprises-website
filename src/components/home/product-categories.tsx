"use client";

import React from "react";
import Link from "next/link";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion, useAnimationControls } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { catalogData } from "@/lib/catalog-data";

export function ProductCategories() {
  return (
    <section className="bg-beige/30 bg-grain py-16 md:py-16 md:py-24 overflow-hidden relative">
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 mb-16 flex items-end justify-between">
        <SectionHeader
          title="Product Portfolio"
          subtitle="Precision components and integrated systems from world-leading industrial brands."
          align="left"
          className="mb-0 max-w-2xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogData.map((category) => (
              <motion.div
                key={category.id}
                className="w-full flex-shrink-0"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              >
                <Link
                  href={`/categories/${category.id}`}
                  className="group flex flex-col h-full bg-background border border-taupe/20 rounded-sm overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:border-accent/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-beige/10">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                        {category.name}
                      </h3>
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1 bg-background">
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-2 py-1 rounded-sm">
                        {category.subcategories.length} Product Families
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/70 mb-6 flex-1">
                      {category.description}
                    </p>
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary-dark group-hover:text-accent transition-colors duration-300">
                      View Catalog <ArrowUpRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Decorative anchors */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-taupe/10 -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-taupe/5 translate-x-32 translate-y-32 rounded-full" />
    </section>
  );
}
