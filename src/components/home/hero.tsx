"use client";

import Link from "next/link";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, images } from "@/lib/company-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background bg-grain">
      {/* Visual background elements */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Industrial excellence"
          fill
          className="object-cover opacity-20 grayscale brightness-125"
          priority
          sizes="100vw"

        />
        {/* Layered gradients for "atmospheric" feel */}
        <div className="absolute inset-0 bg-gradient-to-tr from-beige/60 via-transparent to-taupe/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-beige)_0%,_transparent_50%)] opacity-70" />
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
            className="text-6xl font-bold leading-[0.95] tracking-tighter text-primary-dark sm:text-7xl lg:text-8xl"
          >
            {company.tagline.split('Since')[0]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-lg sm:text-2xl leading-relaxed text-foreground/70 max-w-3xl font-medium"
          >
            {company.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 flex flex-col gap-6 sm:flex-row items-center"
          >
            <Button asChild size="lg" className="bg-primary-dark text-background hover:bg-primary border-none px-12 rounded-sm shadow-2xl h-16">
              <Link href="/contact#inquiry" className="uppercase tracking-[0.2em] text-[11px] font-bold">
                Start an Inquiry
                <ArrowRight className="h-4 w-4 ml-3" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-primary-dark hover:text-accent transition-colors px-10 h-16 group">
              <Link href="/about" className="uppercase tracking-[0.2em] text-[11px] font-bold">
                Our Heritage
                <span className="block h-px w-0 bg-accent transition-all group-hover:w-full mt-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-taupe/30 pt-12"
          >
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary-dark tracking-tighter">30+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-taupe">Years Excellence</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary-dark tracking-tighter">12+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-taupe">Global Brands</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary-dark tracking-tighter">500+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-taupe">OEM Partners</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
    </section>
  );
}
