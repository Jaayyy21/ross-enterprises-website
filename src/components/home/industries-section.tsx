"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Cog,
  Factory,
  FlaskConical,
  Package,
  Pill,
  UtensilsCrossed,
  Wrench,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { industries } from "@/lib/company-data";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import Link from "next/link";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  pill: Pill,
  flask: FlaskConical,
  factory: Factory,
  utensils: UtensilsCrossed,
  wrench: Wrench,
  cog: Cog,
  car: Car,
  package: Package,
};

export function IndustriesSection() {
  return (
    <section className="bg-beige/40 py-16 md:py-16 md:py-24 bg-grain relative">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-20 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <SectionHeader
              title="Industries Served"
              subtitle="Engineering high-performance systems for critical manufacturing and process environments."
              align="left"
              className="mb-10"
            />
            <p className="text-foreground/60 mb-12 leading-relaxed text-sm font-medium">
              From cleanroom pharmaceuticals to heavy-duty automotive plants, our technical expertise ensures the right fluid power and automation solutions for the world's most demanding sectors.
            </p>
            <div className="p-10 bg-primary-dark rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity" />
              <p className="text-background text-sm font-bold leading-relaxed mb-6 relative z-10">
                Seeking a bespoke industrial solution for your facility?
              </p>
              <Link href="/connect" className="inline-flex items-center text-accent font-bold uppercase tracking-[0.2em] text-[10px] hover:translate-x-2 transition-transform relative z-10">
                Explore Solutions <ArrowRight className="ml-3 h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {industries.map((industry, i) => {
              const Icon = iconMap[industry.icon] ?? Cog;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <Link
                    href="/customers"
                    className="group relative block h-80 overflow-hidden rounded-sm bg-black border border-taupe/20 shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-accent/30 hover:-translate-y-2 w-full"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={industry.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1080"}
                        alt={industry.name}
                        fill
                        className="object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                    </div>

                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent text-background shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-background mb-3 tracking-tight">
                        {industry.name}
                      </h3>
                      <p className="text-[11px] leading-relaxed text-background/60 line-clamp-2 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 font-medium">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                        Explore Sector <ChevronRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
