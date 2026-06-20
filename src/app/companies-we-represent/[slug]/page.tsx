import type { Metadata } from "next";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brands, brandProductLines } from "@/lib/company-data";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.id }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.id === slug);
  if (!brand) return { title: "Brand Not Found" };

  return {
    title: brand.name,
    description: brand.description,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = brands.find((b) => b.id === slug);

  if (!brand) {
    notFound();
  }

  return (
    <>
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <Link
            href="/companies-we-represent"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Partners
          </Link>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-white p-3">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className={`object-contain p-2 mix-blend-multiply ${
                  brand.id === 'parker' ? 'scale-[1.4]' : 
                  brand.id === 'transair' ? 'scale-[1.5]' : ''
                }`}
                sizes="96px"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {brand.name}
              </h1>
              <p className="mt-2 text-lg text-accent">{brand.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-muted">{brand.description}</p>

          {brandProductLines[slug] && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-primary">Product Range</h2>
              <ul className="mt-4 space-y-3">
                {brandProductLines[slug].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-muted before:text-accent before:content-['•']"
                  >
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <div className="flex-1 rounded-lg border border-border bg-surface p-8">
              <h2 className="text-xl font-bold text-primary">
                Interested in {brand.name} products?
              </h2>
              <p className="mt-3 text-muted">
                Contact our technical team for product selection, specifications,
                and quotations. We hold stock and provide expert guidance for your
                application requirements.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex-1 rounded-lg border border-taupe/20 bg-beige/10 p-8 flex flex-col justify-center items-center text-center">
              <h2 className="text-xl font-bold text-primary-dark mb-4">Manufacturer Website</h2>
              <p className="text-sm text-foreground/60 mb-8 font-medium italic">Explore the full range of {brand.name} products and global documentation.</p>
              <Button asChild variant="outline" className="border-taupe/40 hover:bg-taupe/10">
                <a href={brand.website} target="_blank" rel="noopener noreferrer">
                  Visit Official Website
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
