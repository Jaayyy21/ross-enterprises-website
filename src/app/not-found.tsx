import Link from "next/link";
import { ArrowLeft, HardHat, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface border border-border shadow-sm mb-8">
          <FileQuestion className="h-10 w-10 text-accent" />
        </div>

        <h1 className="text-8xl font-bold text-primary-dark tracking-tighter mb-4">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-primary tracking-tight mb-6">
          Page Not Found
        </h2>
        
        <p className="text-muted text-lg font-medium leading-relaxed mb-10 max-w-md">
          The requested system route does not exist. The page you are looking for may have been relocated or decommissioned.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
          <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary-dark text-white rounded-none shadow-md transition-all duration-300 uppercase tracking-widest text-xs font-bold">
            <Link href="/">
              <ArrowLeft className="mr-3 h-4 w-4" />
              Return Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 border-border hover:bg-surface rounded-none transition-all duration-300 uppercase tracking-widest text-xs font-bold">
            <Link href="/products">
              <HardHat className="mr-3 h-4 w-4" />
              View Expertise
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
