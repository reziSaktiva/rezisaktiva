"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import type { WorkItem } from "@/content/work";
import { workPhotoProps } from "@/lib/work-image";
import { cn } from "@/lib/utils";

/**
 * Work tile — `.work-tile` visual + hover craft (T-025.5, T-036.2).
 *
 * `href` (internal, via NextLink) — catalog link, e.g. “All projects”.
 *
 * `onSelect` — tile click opens project sheet (Work index).
 *
 * Caption + scrim: CSS hover/focus on desktop; always visible when
 * `hover: none` (phone). Desktop hover = grayscale → full color,
 * photo scales slightly inside the plate + caption. Reduced-motion =
 * no scale; color still flips instantly.
 */
export function WorkTile({
  item,
  href,
  onSelect,
  sheetOpen = false,
  sheetPanelId,
  featured = false,
  wide = false,
}: {
  item: WorkItem;
  href?: string;
  /** Work index: open sheet. Do not use with `href`. */
  onSelect?: () => void;
  sheetOpen?: boolean;
  sheetPanelId?: string;
  featured?: boolean;
  /** Full-row leftover tile (not featured copy) — same aspect as featured so it is not a tall 4/5 banner. */
  wide?: boolean;
}) {
  const className = cn(
    "home-work-tile",
    (featured || wide) && "home-work-tile--featured",
  );

  const TitleTag = featured ? "h2" : "h3";

  const inner = (
    <>
      <div className="home-work-tile-media">
        <NextImage
          {...workPhotoProps(
            item.imageSrc,
            featured || wide
              ? "(max-width: 767px) 100vw, 1400px"
              : "(max-width: 767px) 100vw, 700px",
          )}
          priority={featured}
        />
      </div>
      <div aria-hidden="true" className="home-work-tile-scrim" />
      <div className="home-work-tile-meta flex flex-col gap-1">
        <TitleTag className="home-work-tile-title">{item.name}</TitleTag>
        <p className="home-work-tile-outcome">{item.outcome}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <NextLink href={href} className={className}>
        {inner}
      </NextLink>
    );
  }

  if (onSelect) {
    return (
      <div className={className}>
        {inner}
        <button
          type="button"
          className="home-work-tile-hit"
          onClick={onSelect}
          aria-label={item.name}
          aria-haspopup="dialog"
          aria-expanded={sheetOpen}
          aria-controls={sheetPanelId}
        />
      </div>
    );
  }

  return <div className={className}>{inner}</div>;
}
