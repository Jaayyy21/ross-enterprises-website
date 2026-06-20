"use client";

import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion } from "framer-motion";
import { brands } from "@/lib/company-data";
import Link from "next/link";

export function BrandsSection() {
  return (
    <section className="py-16 md:py-24 bg-background bg-grain border-y border-taupe/10 relative">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-6"
          >
            <div className="h-px w-12 bg-accent/30" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
              World-Class Brand Portfolio
            </p>
            <div className="h-px w-12 bg-accent/30" />
          </motion.div>
          <h2 className="text-4xl font-bold text-primary-dark tracking-tight">Authorized Technical Representation</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-20">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex flex-col items-center"
            >
              <Link 
                href={`/companies-we-represent/${brand.id}`} 
                title={brand.name} 
                className="relative h-16 w-full group-hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className={`object-contain mix-blend-multiply ${
                    brand.id === 'parker' ? 'scale-[1.4]' : 
                    brand.id === 'transair' ? 'scale-[1.5]' : ''
                  }`}
                />
              </Link>
              <Link 
                href={`/companies-we-represent/${brand.id}`} 
                className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-dark group-hover:text-accent transition-colors duration-500 text-center"
              >
                {brand.name}
              </Link>
              <div className="mt-2 h-px w-0 bg-accent group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-taupe/10 text-center">
          <p className="text-[13px] text-foreground/40 font-medium italic tracking-wide">
            "Direct authorized representative providing genuine spares and comprehensive technical assistance since 1996."
          </p>
        </div>
      </div>
    </section>
  );
}
