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
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 shrink-0 group">
          <Image
            src={images.logo}
            alt="Ross Enterprises"
            width={120}
            height={48}
            className="h-8 w-auto sm:h-10 object-contain transition-transform group-hover:scale-105"
            priority
            unoptimized
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
          
          <div className="group relative">
            <button className="flex items-center gap-1 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-accent">
              Portfolio <ChevronDown className="h-3 w-3" />
            </button>
            
            <div className="absolute left-0 top-full hidden w-[600px] bg-background shadow-2xl border border-taupe/20 group-hover:block transition-all p-10 rounded-sm">
              <div className="grid grid-cols-2 gap-10">
                {catalogData.map(category => (
                  <div key={category.id} className="flex flex-col">
                    <Link 
                      href={`/categories/${category.id}`}
                      className="text-xs font-bold text-primary-dark mb-5 pb-2 border-b border-taupe/20 uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      {category.name}
                    </Link>
                    <ul className="space-y-3">
                      {category.subcategories.map(sub => (
                        <li key={sub.id}>
                          <Link 
                            href={`/categories/${category.id}/${sub.id}`}
                            className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest hover:text-accent transition-colors block"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
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
        "fixed inset-0 top-[72px] z-40 bg-background/98 backdrop-blur-xl lg:hidden transition-transform duration-500",
        mobileOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-10 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-5 text-lg font-bold text-foreground/80 uppercase tracking-[0.2em] border-b border-taupe/10 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="mt-10">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-8">Product Portfolio</p>
            <div className="space-y-8">
              {catalogData.map(category => (
                <div key={category.id}>
                  <Link 
                    href={`/categories/${category.id}`}
                    className="block text-sm font-bold text-primary-dark mb-4 uppercase tracking-widest"
                    onClick={() => setMobileOpen(false)}
                  >
                    {category.name}
                  </Link>
                  <div className="grid grid-cols-2 gap-4">
                    {category.subcategories.map(sub => (
                      <Link
                        key={sub.id}
                        href={`/categories/${category.id}/${sub.id}`}
                        className="text-[9px] font-bold text-foreground/50 uppercase tracking-widest"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
