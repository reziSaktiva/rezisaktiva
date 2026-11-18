import NextImage from "next/image";
import NextLink from "next/link";
import { workPhotoProps } from "@/lib/work-image";
import { cn } from "@/lib/utils";
import { ClipReveal } from "./reveal";

export type ProjectCardProps = {
  /** In-site case path, e.g. `/en/projects/minerank`. */
  href: string;
  name: string;
  /** One meta line under the name, e.g. `2025 · Migrated ~500 recipes…`. */
  meta: string;
  imageSrc: string;
  /** `next/image` sizes for the slot the parent gives the card. */
  sizes?: string;
  /** Load the image eagerly (first row above the fold). */
  eager?: boolean;
  /** Custom-cursor label shown over the card on fine pointers. */
  cursorLabel?: string;
  /** Heading level for the name; depends on the page outline. */
  headingLevel?: "h2" | "h3";
  className?: string;
};

/**
 * Monolith project card (T-081.1, ADR-052): grayscale shot revealed with a
 * clip wipe; on hover/focus the shot blurs and the name rises in a veil.
 * Touch screens show the veil all the time. Links straight to the case page
 * (ADR-054 point 2). Props only, no page layout, so the Home Work section can
 * reuse it; the parent sets the grid and the aspect via `className`.
 */
export function ProjectCard({
  href,
  name,
  meta,
  imageSrc,
  sizes = "(max-width: 767px) 100vw, 50vw",
  eager = false,
  cursorLabel,
  headingLevel: Heading = "h2",
  className,
}: ProjectCardProps) {
  return (
    <NextLink
      href={href}
      className={cn("pcard", className)}
      data-t={name}
      data-cursor={cursorLabel}
    >
      <ClipReveal className="pcard-media">
        <NextImage
          {...workPhotoProps(imageSrc, sizes)}
          className="pcard-img"
          loading={eager ? "eager" : undefined}
        />
      </ClipReveal>
      <div className="pcard-veil">
        <Heading className="pcard-name display">{name}</Heading>
        <p className="pcard-meta">{meta}</p>
      </div>
    </NextLink>
  );
}
