"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowRight, ShieldCheck, Headphones } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="inquiry" className="py-24 lg:py-32 bg-primary-dark bg-grain relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-taupe/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 relative">
        <div className="grid gap-24 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              title="Global Industrial Support"
              subtitle="Partner with Ross Enterprises for genuine spares, technical consultation, and large-scale system deployments."
              light
              align="left"
              className="mb-12"
            />
            
            <div className="space-y-12 mt-16">
              <div className="flex gap-8 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 shrink-0 group-hover:bg-accent/20 transition-colors duration-500">
                  <ShieldCheck className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h4 className="text-background font-bold text-xl mb-2 uppercase tracking-widest">Authorized Distribution</h4>
                  <p className="text-background/50 text-sm leading-relaxed font-medium">Direct representation of Parker, Legris, and other world-class brands ensuring 100% genuine components.</p>
                </div>
              </div>
              
              <div className="flex gap-8 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-accent/10 border border-accent/20 shrink-0 group-hover:bg-accent/20 transition-colors duration-500">
                  <Headphones className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h4 className="text-background font-bold text-xl mb-2 uppercase tracking-widest">Technical Consultation</h4>
                  <p className="text-background/50 text-sm leading-relaxed font-medium">Our experienced technocrafts provide expert guidance for system design and critical fluid power applications.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 p-10 bg-background/5 rounded-sm border border-white/5 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 bg-accent h-1/2" />
              <p className="text-background/80 font-medium italic text-[15px] leading-relaxed relative z-10">
                "We see to it that individual attention is given to our customers regarding specific needs and material of construction. Our heritage is built on technical integrity."
              </p>
              <p className="mt-6 text-accent text-[10px] font-bold uppercase tracking-[0.3em] relative z-10">— Mr. Nimesh Patel, Promoter</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background p-12 lg:p-16 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.4)] relative overflow-hidden border border-taupe/10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-accent/20 translate-x-16 -translate-y-16" />
            
            {submitted ? (
              <div className="py-24 text-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-accent/10 border border-accent/20"
                >
                  <Send className="h-12 w-12 text-accent" />
                </motion.div>
                <h3 className="text-3xl font-bold text-primary-dark tracking-tight">Inquiry Received</h3>
                <p className="mt-6 text-foreground/60 leading-relaxed max-w-sm mx-auto font-medium">
                  Our technical desk has been notified. A specialist will review your brief and contact you within 24 business hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="lg" className="mt-12 rounded-sm px-12 border-taupe/40">
                  New Technical Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                <div className="grid gap-10 sm:grid-cols-2">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 ml-1">Representative Name</label>
                    <Input id="name" name="name" required placeholder="Full Name" className="h-14 border-taupe/20 bg-beige/10 rounded-sm focus:bg-background focus:border-accent transition-all placeholder:text-foreground/20" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 ml-1">Organization</label>
                    <Input id="company" name="company" required placeholder="Company Name" className="h-14 border-taupe/20 bg-beige/10 rounded-sm focus:bg-background focus:border-accent transition-all placeholder:text-foreground/20" />
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 ml-1">Direct Email</label>
                    <Input id="email" name="email" type="email" required placeholder="email@organization.com" className="h-14 border-taupe/20 bg-beige/10 rounded-sm focus:bg-background focus:border-accent transition-all placeholder:text-foreground/20" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 ml-1">Contact Line</label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXX XXXXXX" className="h-14 border-taupe/20 bg-beige/10 rounded-sm focus:bg-background focus:border-accent transition-all placeholder:text-foreground/20" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 ml-1">Technical Requirement</label>
                  <Input id="requirement" name="requirement" required placeholder="e.g. High-Pressure Hydraulic Systems" className="h-14 border-taupe/20 bg-beige/10 rounded-sm focus:bg-background focus:border-accent transition-all placeholder:text-foreground/20" />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 ml-1">Project Brief / Specifications</label>
                  <Textarea id="message" name="message" placeholder="Include technical specifications, quantities, or specific brand preferences..." rows={4} className="border-taupe/20 bg-beige/10 rounded-sm focus:bg-background focus:border-accent transition-all resize-none p-6 placeholder:text-foreground/20" />
                </div>

                <Button type="submit" size="lg" className="w-full h-16 bg-primary-dark hover:bg-primary text-background rounded-sm shadow-2xl transition-all duration-500 active:scale-[0.98] uppercase tracking-[0.2em] text-[11px] font-bold">
                  Submit Technical Brief
                  <ArrowRight className="h-4 w-4 ml-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
