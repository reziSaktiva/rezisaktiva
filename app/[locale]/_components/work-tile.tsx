"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { Center } from "@astryxdesign/core/Center";
import { Heading } from "@astryxdesign/core/Heading";
import { useContainerReveal } from "@astryxdesign/core/hooks";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { mergeProps } from "@astryxdesign/core/utils";
import type { WorkItem } from "@/content/work";

/**
 * Tile karya — visual `.work-tile` mockup + craft hover (T-025.5).
 *
 * `href` (internal, via NextLink) — teaser Home, ke index Work (bukan
 * sheet per item, ADR-027).
 *
 * `onSelect` — Work index: klik tile membuka project sheet (T-026), bukan
 * `item.href`. Live/repo hanya di dalam sheet.
 *
 * Caption + scrim: `useContainerReveal` (hover/focus desktop; selalu
 * terlihat di sentuh; reduced-motion dihormati). Bukan Overlay Astryx —
 * touch toggle Overlay akan menunda navigasi tautan.
 */
export function WorkTile({
  item,
  href,
  onSelect,
  featured = false,
  wide = false,
}: {
  item: WorkItem;
  href?: string;
  /** Work index: buka sheet. Jangan dipakai bersama `href`. */
  onSelect?: () => void;
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

  const inner = (
    <>
      <Center className="home-work-tile-media">
        <NextImage
          src={item.imageSrc}
          alt=""
          fill
          sizes={featured || wide ? "100vw" : "50vw"}
        />
      </Center>
      <Center
        aria-hidden="true"
        {...mergeProps(revealProps, { className: "home-work-tile-scrim" })}
      >
        {null}
      </Center>
      <VStack
        gap={1}
        {...mergeProps(revealProps, { className: "home-work-tile-meta" })}
      >
        <Heading level={featured ? 2 : 3} className="home-work-tile-title">
          {item.name}
        </Heading>
        <Text size="sm" className="home-work-tile-outcome">
          {item.outcome}
        </Text>
      </VStack>
    </>
  );

  if (href) {
    return (
      <Link
        as={NextLink}
        href={href}
        {...mergeProps(containerProps, { className })}
      >
        {inner}
      </Link>
    );
  }

  if (onSelect) {
    return (
      <VStack
        as="button"
        onClick={onSelect}
        {...mergeProps(containerProps, { className })}
      >
        {inner}
      </VStack>
    );
  }

  return (
    <Center {...mergeProps(containerProps, { className })}>{inner}</Center>
  );
}
