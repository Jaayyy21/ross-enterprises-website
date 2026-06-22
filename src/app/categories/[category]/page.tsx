import { notFound } from "next/navigation";
import Link from "next/link";
import { ImageWithFallback as Image } from "@/components/ui/image-with-fallback";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { catalogData, getCategoryById, categoryBrandMapping, getCatalogUrl } from "@/lib/catalog-data";
import { brands } from "@/lib/company-data";
import { ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return catalogData.map((category) => ({
    category: category.id,
  }));
}

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryById(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const mappedBrands = categoryBrandMapping[category.id] || [];

  return (
    <div className="flex flex-col">
      {/* Category Hero */}
      <section className="relative flex min-h-[40vh] items-center bg-primary py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{category.name}</h1>
            <p className="mt-4 text-lg text-white/80">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Brands Catalog Grid */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <SectionHeader
            title="Brands We Represent"
            subtitle={`Explore the official catalogs for our ${category.name.toLowerCase()} solutions.`}
          />
          {mappedBrands.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
              {mappedBrands.map((brandId) => {
                const brandData = brands.find(b => b.id === brandId);
                if (!brandData) return null;
                
                const catalogUrl = getCatalogUrl(category.id, brandId);
                
                return (
                  <Card key={brandId} className="group flex flex-col overflow-hidden bg-white rounded-none border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <a href={catalogUrl} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col items-center p-6 sm:p-8">
                      <div className="relative h-16 sm:h-20 w-full mb-6 group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={brandData.logo}
                          alt={brandData.name}
                          fill
                          className={`object-contain mix-blend-multiply ${
                            ['parker', 'transair', 'origa', 'piab'].includes(brandData.id) ? 'scale-[1.6]' : ''
                          }`}
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-end flex-1 mt-auto w-full border-t border-border/50 pt-4 sm:pt-6">
                        <h3 className="text-[10px] sm:text-[11px] font-bold text-primary mb-3 uppercase tracking-[0.2em] text-center">{brandData.name}</h3>
                        <div className="flex items-center text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                          View Catalog <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 text-center text-muted">
              <p>Catalogs for this category are being updated.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
