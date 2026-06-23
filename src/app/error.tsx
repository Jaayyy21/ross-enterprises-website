"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-50 border border-red-100 shadow-sm mb-8">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-primary-dark tracking-tighter mb-6">
          System Malfunction
        </h1>
        
        <p className="text-muted text-lg font-medium leading-relaxed mb-10 max-w-md">
          An unexpected error occurred during the execution of this request. Our technical team has been notified of the disruption.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
          <Button 
            onClick={() => reset()}
            size="lg" 
            className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary-dark text-white rounded-none shadow-md transition-all duration-300 uppercase tracking-widest text-xs font-bold"
          >
            <RefreshCw className="mr-3 h-4 w-4" />
            Retry Connection
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 border-border hover:bg-surface rounded-none transition-all duration-300 uppercase tracking-widest text-xs font-bold">
            <Link href="/">
              <Home className="mr-3 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
