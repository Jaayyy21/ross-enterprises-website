"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { Menu, X, Phone, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, images } from "@/lib/company-data";
import { catalogData } from "@/lib/catalog-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Expertise" },
  { href: "/companies-we-represent", label: "Partners" },
  { href: "/customers", label: "Customers" },
  { href: "/contact", label: "Connect" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-background/95 backdrop-blur-md py-3 shadow-sm border-b border-taupe/20" 
        : "bg-background py-5 border-b border-taupe/10"
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
          <div className="flex flex-col border-l border-taupe/30 pl-3 sm:pl-4">
            <span className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-primary-dark whitespace-nowrap">Ross Enterprises</span>
            <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.3em] text-accent">Since 1996</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-accent whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          <div className="group">
            <button 
              onClick={() => setPortfolioOpen(!portfolioOpen)}
              onBlur={() => setTimeout(() => setPortfolioOpen(false), 200)}
              className="flex items-center gap-1 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-accent"
            >
              Portfolio <ChevronDown className={cn("h-3 w-3 transition-transform", portfolioOpen && "rotate-180")} />
            </button>

            <div className={cn(
              "absolute left-4 right-4 md:left-12 md:right-12 lg:left-1/2 lg:-translate-x-1/2 top-full w-auto lg:w-[90vw] lg:max-w-[1000px] bg-background shadow-2xl border border-taupe/20 transition-all p-8 lg:p-12 rounded-sm z-50",
              portfolioOpen ? "block" : "hidden"
            )}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {catalogData.map(category => (
                  <div key={category.id} className="flex flex-col">
                    <Link 
                      href={`/categories/${category.id}`}
                      className="text-[11px] font-bold text-primary-dark mb-4 pb-2 border-b border-taupe/20 uppercase tracking-[0.2em] hover:text-accent transition-colors"
                    >
                      {category.name}
                    </Link>
                    <ul className="space-y-2">
                      {category.subcategories.slice(0, 4).map(sub => (
                        <li key={sub.id}>
                          <Link 
                            href={`/categories/${category.id}/${sub.id}`}
                            className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest hover:text-accent transition-colors block"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                      {category.subcategories.length > 4 && (
                        <li>
                          <Link 
                            href={`/categories/${category.id}`}
                            className="text-[9px] font-bold text-accent uppercase tracking-widest hover:underline block pt-1"
                          >
                            + {category.subcategories.length - 4} More
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
          <Button asChild size="sm" className="bg-primary-dark text-background border-none rounded-sm px-6 h-10 shadow-lg hover:shadow-primary/20 whitespace-nowrap">
            <Link href="/contact#inquiry" className="text-[10px] font-bold uppercase tracking-widest">Request Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-primary-dark lg:hidden bg-taupe/10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

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
              className="py-4 text-sm font-bold text-foreground/80 uppercase tracking-[0.2em] border-b border-taupe/10 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8">
            <button 
              onClick={() => setActiveCategory(activeCategory === 'portfolio' ? null : 'portfolio')}
              className="flex items-center justify-between w-full py-4 text-sm font-bold text-primary-dark uppercase tracking-[0.2em] border-b border-taupe/10"
            >
              Portfolio
              <ChevronDown className={cn("h-4 w-4 transition-transform", activeCategory === 'portfolio' && "rotate-180")} />
            </button>

            {activeCategory === 'portfolio' && (
              <div className="mt-4 space-y-6 pl-4 border-l border-taupe/20">
                {catalogData.map(category => (
                  <div key={category.id}>
                    <Link 
                      href={`/categories/${category.id}`}
                      className="block text-[11px] font-bold text-accent mb-3 uppercase tracking-widest"
                      onClick={() => setMobileOpen(false)}
                    >
                      {category.name}
                    </Link>
                    <div className="grid grid-cols-1 gap-3">
                      {category.subcategories.map(sub => (
                        <Link
                          key={sub.id}
                          href={`/categories/${category.id}/${sub.id}`}
                          className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto pt-10 pb-8 flex flex-col gap-6">
            <div className="flex flex-col">
              <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-[0.2em] mb-2">Connect Now</p>
              <a href={`tel:${contact.primaryPhone}`} className="text-lg font-bold text-primary-dark tracking-widest">{contact.primaryPhone}</a>
            </div>
            <Button asChild className="w-full bg-primary-dark h-14 rounded-sm">
              <Link href="/contact#inquiry" className="text-xs font-bold uppercase tracking-[0.2em]" onClick={() => setMobileOpen(false)}>Request Quote</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
