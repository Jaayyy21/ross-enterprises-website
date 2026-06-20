import { notFound } from "next/navigation";
import Link from "next/link";
import { ImageWithFallback as Image } from "@/components/ui/image-with-fallback";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { catalogData, getCategoryById } from "@/lib/catalog-data";
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

      {/* Subcategories / Product Families Grid */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <SectionHeader
            title="Explore Product Families"
            subtitle={`Browse our comprehensive range of ${category.name.toLowerCase()} solutions.`}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((sub) => (
              <Card key={sub.id} className="group flex flex-col overflow-hidden">
                <Link href={`/categories/${category.id}/${sub.id}`} className="flex flex-1 flex-col">
                  <div className="relative aspect-[4/3] bg-white">
                    <Image
                      src={sub.image}
                      alt={sub.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"

                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-primary">{sub.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{sub.description}</p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-accent">
                      View Products <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>    </div>
  );
}
