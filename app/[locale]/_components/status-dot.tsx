import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Titik status lokal (T-034.2). shadcn tidak punya padanan StatusDot Astryx.
 * Pulsa CSS; token success; hormati prefers-reduced-motion.
 */
export function StatusDot({
  label,
  isPulsing = false,
  className,
  ...props
}: {
  label: string;
  isPulsing?: boolean;
  className?: string;
} & ComponentProps<"span">) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn("about-status-dot", isPulsing && "is-pulsing", className)}
      {...props}
    />
  );
}
