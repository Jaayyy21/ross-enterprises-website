import type { Metadata } from "next";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Brands We Represent",
  description:
    "Authorized representative of Parker, Legris, Transair, Rectus, Nitto, Origa, Piab, Pneumax, Luthra, CMATIC, Baumer, and Airmatic.",
};

export default function BrandsPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Brands We Represent
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            We represent world-leading manufacturers in pneumatics, hydraulics,
            instrumentation, and industrial automation for over two decades.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.href}
                className="group flex gap-6 rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-accent/30"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-surface">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-2"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {brand.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {brand.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {brand.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
