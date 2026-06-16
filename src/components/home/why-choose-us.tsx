"use client";

import { motion } from "framer-motion";
import { Award, Box, History, Settings, Users, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { whyChooseUs } from "@/lib/company-data";

const iconMap = [History, Settings, Box, Award, Users, Zap];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-background bg-grain relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-beige/40 blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-taupe/10 blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 relative">
        <SectionHeader
          title="The Ross Advantage"
          subtitle="Combining three decades of industrial presence with unmatched technical expertise."
          align="center"
          className="mx-auto mb-24"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[i] || Zap;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative flex flex-col"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-primary-dark text-accent shadow-2xl mb-8 group-hover:rotate-6 transition-transform duration-500">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="absolute -left-6 top-0 h-16 w-px bg-taupe/30 group-hover:bg-accent transition-all duration-500" />
                <h3 className="text-2xl font-bold text-primary-dark mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/60 font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 p-16 bg-primary-dark rounded-sm shadow-2xl text-center relative overflow-hidden group border border-taupe/20"
        >
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-accent/20 m-4" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-accent/20 m-4" />
          
          <h3 className="text-3xl font-bold text-background mb-6 relative z-10 tracking-tight">Dedicated Industrial Support Since 1996</h3>
          <p className="text-background/60 max-w-3xl mx-auto text-[15px] leading-relaxed relative z-10 font-medium italic">
            "Our commitment goes beyond product delivery. We provide comprehensive technical consultation, system design, and specialized training for every brand we represent, ensuring your operations never miss a beat."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
