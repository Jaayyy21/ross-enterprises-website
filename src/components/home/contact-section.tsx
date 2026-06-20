"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { contact, company } from "@/lib/company-data";

export function ContactSection() {
  return (
    <section className="bg-beige/40 py-16 md:py-16 md:py-24 relative bg-grain">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <SectionHeader
              title="Regional Network"
              subtitle="Providing localized support and logistics across Gujarat and pan-India industrial hubs."
              align="left"
              className="mb-14"
            />

            <div className="grid gap-12 sm:grid-cols-2">
              <div className="group">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-primary-dark text-accent shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 tracking-tight">Headquarters</h3>
                <p className="text-sm leading-relaxed text-foreground/60 font-medium italic pr-10">
                  {contact.address}
                </p>
              </div>

              <div className="group">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-primary-dark text-accent shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 tracking-tight">Direct Lines</h3>
                <div className="space-y-3">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/-/g, "")}`}
                      className="block text-sm text-foreground/50 hover:text-accent font-bold transition-colors tracking-wide"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="group">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-primary-dark text-accent shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 tracking-tight">Email Desk</h3>
                <div className="space-y-3">
                  {contact.emails.slice(0, 3).map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-sm text-foreground/50 hover:text-accent font-bold transition-colors truncate tracking-wide"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="group">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-primary-dark text-accent shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 tracking-tight">Instant Support</h3>
                <a
                  href={`https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=Hello`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[11px] font-bold text-accent hover:text-primary-dark transition-colors uppercase tracking-[0.3em]"
                >
                  Connect via WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm border border-taupe/20 shadow-[0_50px_100px_rgba(90,58,34,0.1)] relative h-[550px]"
          >
            <div className="absolute inset-0 bg-primary-dark opacity-10 mix-blend-multiply pointer-events-none" />
            <iframe
              title="Ross Enterprises location map"
              src="https://maps.google.com/maps?q=22.249432,73.188583&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale contrast-[1.1] brightness-[0.9] sepia-[0.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Visual anchor */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-accent/30 m-6" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-accent/30 m-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
