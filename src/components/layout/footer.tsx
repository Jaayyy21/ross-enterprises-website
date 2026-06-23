import Link from "next/link";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { company, contact, images, brands } from "@/lib/company-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="mx-auto max-w-[1600px] px-4 py-16 md:py-24 sm:px-6 lg:px-12 relative">
        <div className="grid gap-12 sm:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-24">
          <div className="md:col-span-2">
            <Image
              src={images.logo}
              alt="Ross Enterprises"
              width={160}
              height={64}
              className="mb-10 h-12 w-auto opacity-90"
            />
            <p className="text-background/50 text-sm leading-relaxed max-w-sm mb-12 italic font-serif">
              "Providing precision engineering and integrated motion control solutions since 1996, anchored by heritage and driven by industrial excellence."
            </p>

          </div>

          <div>
            <h3 className="mb-10 text-[11px] font-bold uppercase tracking-[0.4em] text-accent/80">Navigation</h3>
            <ul className="space-y-5">
              {[
                { href: "/expertise", label: "Our Heritage" },
                { href: "/partners", label: "Partners" },
                { href: "/customers", label: "Our Customers" },
                { href: "/portfolio", label: "Portfolio" },

              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/40 transition-colors hover:text-background flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-10 text-[11px] font-bold uppercase tracking-[0.4em] text-accent/80">Support</h3>
            <ul className="space-y-5">
              {[
                { href: "/connect#inquiry", label: "Request Quote" },
                { href: "/connect", label: "Connect" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/40 transition-colors hover:text-background flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <ShieldCheck className="h-4 w-4 text-accent/60" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/30">Auth. Representative</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/20">
              © {currentYear} Ross Enterprises
            </p>
          </div>

          <div className="flex gap-12">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/20 hover:text-accent transition-colors">Privacy</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/20 hover:text-accent transition-colors">Terms</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/20 hover:text-accent transition-colors">Vadodara, India</Link>
          </div>
        </div>
      </div>

      {/* Visual anchor */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}
