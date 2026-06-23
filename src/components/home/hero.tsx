"use client";

import Link from "next/link";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, images } from "@/lib/company-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-primary-dark">
        <Image
          src={images.hero}
          alt="Industrial excellence"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
          sizes="100vw"
        />
        {/* Premium dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/95 via-primary-dark/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-12">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 sm:gap-6 mb-12"
          >
            <div className="h-px w-12 sm:w-20 bg-accent" />
            <span className="text-xs sm:text-lg font-bold uppercase tracking-[0.4em] text-accent">
              Ross Enterprises — Est. {company.foundedYear}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl font-bold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-8xl"
          >
            {company.tagline.split('Since')[0]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-lg sm:text-2xl leading-relaxed text-white/80 max-w-3xl font-medium"
          >
            {company.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 flex flex-col gap-4 sm:flex-row items-center"
          >
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent-dark border-none px-12 rounded-none shadow-md h-14">
              <Link href="/connect#inquiry" className="uppercase tracking-[0.1em] text-xs font-bold">
                Start an Inquiry
                <ArrowRight className="h-4 w-4 ml-3" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:text-accent transition-colors px-10 h-14 group rounded-none">
              <Link href="/expertise" className="uppercase tracking-[0.1em] text-xs font-bold">
                Our Heritage
                <span className="block h-px w-0 bg-accent transition-all group-hover:w-full mt-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/20 pt-12"
          >
            <div className="space-y-2">
              <p className="text-4xl font-bold text-white tracking-tighter">30+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Years Excellence</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-white tracking-tighter">12+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Global Brands</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-white tracking-tighter">500+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">OEM Partners</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
