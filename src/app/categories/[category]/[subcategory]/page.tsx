import { notFound } from "next/navigation";
import { ImageWithFallback as Image } from "@/components/ui/image-with-fallback";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { catalogData, getSubcategoryById, getCategoryById } from "@/lib/catalog-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  
  catalogData.forEach((category) => {
    category.subcategories.forEach((sub) => {
      params.push({ category: category.id, subcategory: sub.id });
    });
  });

  return params;
}

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const resolvedParams = await params;
  const category = getCategoryById(resolvedParams.category);
  const subcategory = getSubcategoryById(resolvedParams.category, resolvedParams.subcategory);

  if (!category || !subcategory) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumbs could go here */}

      {/* Subcategory Hero */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                <Link href={`/categories/${category.id}`} className="hover:text-primary transition-colors">
                  {category.name}
                </Link>
                <span className="text-muted">/</span>
                <span>{subcategory.name}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{subcategory.name}</h1>
              <p className="mt-6 text-lg text-muted">{subcategory.description}</p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link href="/contact#inquiry">Request a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-lg">
              <Image
                src={subcategory.image}
                alt={subcategory.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Families */}
      <section className="py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <SectionHeader
            title="Product Families"
            subtitle={`Specific product lines available within ${subcategory.name.toLowerCase()}.`}
          />
          
          {subcategory.families.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subcategory.families.map((family) => (
                <Card key={family.id} className="group flex flex-col overflow-hidden">
                  <div className="relative aspect-video bg-white">
                    <Image
                      src={family.image}
                      alt={family.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col border-t border-border p-6">
                    <h3 className="text-lg font-semibold text-primary">{family.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{family.description}</p>
                    
                    {family.brands.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="text-xs font-semibold uppercase text-muted block mb-2">Available Brands:</span>
                        <div className="flex flex-wrap gap-2">
                          {family.brands.map(b => (
                            <span key={b} className="px-2 py-1 bg-surface text-primary text-xs rounded-sm capitalize">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button variant="outline" className="mt-6 w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                      <Link href="/contact#inquiry">
                        Inquire Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-sm border border-dashed border-border p-12 text-center">
              <h3 className="text-lg font-semibold text-primary">Catalog Update in Progress</h3>
              <p className="mt-2 text-muted">Specific product families for {subcategory.name} are currently being updated. Please contact us for immediate assistance.</p>
              <Button className="mt-6" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
