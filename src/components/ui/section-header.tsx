import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-5xl relative",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-8 h-px w-20 bg-accent",
          align === "center" && "mx-auto"
        )}
      />
      <h2
        className={cn(
          "text-4xl font-bold tracking-tighter sm:text-5xl lg:text-[4rem] lg:leading-[0.95]",
          light ? "text-background" : "text-primary-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-8 text-xl leading-relaxed max-w-2xl font-medium",
            light ? "text-background/60" : "text-foreground/60",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
