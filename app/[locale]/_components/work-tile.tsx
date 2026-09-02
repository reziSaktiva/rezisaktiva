"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useContainerReveal } from "@astryxdesign/core/hooks";
import { mergeProps } from "@astryxdesign/core/utils";
import type { WorkItem } from "@/content/work";
import { workPhotoProps } from "@/lib/work-image";

/**
 * Tile karya — visual `.work-tile` + craft hover (T-025.5).
 *
 * `href` (internal, via NextLink) — tautan katalog, mis. “Semua proyek”.
 *
 * `onSelect` — klik tile membuka project sheet (Home teaser + Work index).
 *
 * Caption + scrim: `useContainerReveal` (hover/focus desktop; selalu
 * terlihat di sentuh; reduced-motion dihormati). Bukan Overlay Astryx —
 * touch toggle Overlay akan menunda navigasi tautan. Hook tetap sampai T-036.
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
  /** Work index: buka sheet. Jangan dipakai bersama `href`. */
  onSelect?: () => void;
  sheetOpen?: boolean;
  sheetPanelId?: string;
  featured?: boolean;
  /** Full-row leftover tile (not featured copy) — same aspect as featured so it is not a tall 4/5 banner. */
  wide?: boolean;
}) {
  const { getContainerProps, getContentRevealProps } = useContainerReveal();
  const className =
    featured || wide
      ? "home-work-tile home-work-tile--featured"
      : "home-work-tile";

  const containerProps = getContainerProps();
  const revealProps = getContentRevealProps({ isLayoutPreserved: true });

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
        />
      </div>
      <div
        aria-hidden="true"
        {...mergeProps(revealProps, { className: "home-work-tile-scrim" })}
      />
      <div
        {...mergeProps(revealProps, {
          className: "home-work-tile-meta flex flex-col gap-1",
        })}
      >
        <TitleTag className="home-work-tile-title">{item.name}</TitleTag>
        <p className="home-work-tile-outcome">{item.outcome}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <NextLink href={href} {...mergeProps(containerProps, { className })}>
        {inner}
      </NextLink>
    );
  }

  if (onSelect) {
    return (
      <div {...mergeProps(containerProps, { className })}>
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

  return <div {...mergeProps(containerProps, { className })}>{inner}</div>;
}
