"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, images } from "@/lib/company-data";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/expertise", label: "Expertise" },
  { href: "/partners", label: "Partners" },
  { href: "/customers", label: "Customers" },
  { href: "/connect", label: "Connect" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-background/95 backdrop-blur-md py-3 shadow-sm border-b border-border" 
        : "bg-background py-5 border-b border-border"
    )}>
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-12 relative">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 shrink-0 group">
          <Image
            src={images.logo}
            alt="Ross Enterprises"
            width={120}
            height={48}
            className="h-8 w-auto sm:h-10 object-contain transition-transform group-hover:scale-105"
            priority

          />
          <div className="flex flex-col border-l border-border pl-3 sm:pl-4">
            <span className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-primary-dark whitespace-nowrap">Ross Enterprises</span>
            <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.3em] text-accent">Since 1996</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/portfolio' && pathname.startsWith('/categories'));
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={cn(
                  "px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors whitespace-nowrap relative group",
                  isActive ? "text-accent" : "text-primary hover:text-accent"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex flex-col items-end whitespace-nowrap">
            <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-[0.2em] mb-1">Support Desk</p>
            <a
              href={`tel:${contact.primaryPhone}`}
              className="text-xs font-bold text-primary-dark hover:text-accent transition-colors tracking-widest whitespace-nowrap"
            >
              {contact.primaryPhone}
            </a>
          </div>
          <Button asChild size="sm" className="bg-accent text-white border-none rounded-none px-6 h-10 shadow-sm hover:bg-accent-dark whitespace-nowrap">
            <Link href="/connect#inquiry" className="text-[10px] font-bold uppercase tracking-widest">Request Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-none p-2 text-primary-dark lg:hidden bg-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      </header>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[72px] z-40 bg-background/98 backdrop-blur-xl lg:hidden transition-transform duration-500 overflow-y-auto",
        mobileOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-8 h-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className="py-4 text-sm font-bold text-foreground/80 uppercase tracking-[0.2em] border-b border-border hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Portfolio link is now integrated into navLinks map */}

          <div className="mt-auto pt-10 pb-8 flex flex-col gap-6">
            <div className="flex flex-col">
              <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-[0.2em] mb-2">Connect Now</p>
              <a href={`tel:${contact.primaryPhone}`} className="text-lg font-bold text-primary-dark tracking-widest">{contact.primaryPhone}</a>
            </div>
            <Button asChild className="w-full bg-accent hover:bg-accent-dark text-white h-14 rounded-none">
              <Link href="/connect#inquiry" className="text-xs font-bold uppercase tracking-[0.2em]" onClick={() => setMobileOpen(false)}>Request Quote</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
