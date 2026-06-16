import type { Metadata } from "next";
import { ImageWithFallback as Image } from '@/components/ui/image-with-fallback';
import { company, images, stats } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ross Enterprises — active in pneumatics since 1996, promoted by Mr. Nimesh Patel. Complete pneumatic, hydraulic, and instrumentation solutions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {company.legalName}, promoted by {company.promoter}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                Our Story Since {company.foundedYear}
              </h2>
              <p className="mt-6 leading-relaxed text-muted">{company.history}</p>
              <p className="mt-4 leading-relaxed text-muted">{company.capabilities}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={images.facility}
                alt="Ross Enterprises operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-surface p-8 text-center"
              >
                <div className="text-4xl font-bold text-accent">{stat.value}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-lg border border-border bg-surface p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-primary">Mission & Vision</h2>
            <p className="mt-6 leading-relaxed text-muted">{company.mission}</p>
            <p className="mt-4 leading-relaxed text-muted">{company.expertise}</p>
          </div>
        </div>
      </section>
    </>
  );
}
