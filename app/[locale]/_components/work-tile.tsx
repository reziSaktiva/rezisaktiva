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
 * `href` (internal, via NextLink) — dipakai teaser Home, mengarah ke index
 * Work (bukan langsung ke repo/live); index R1 tidak link ke case M10
 * (ADR-020).
 *
 * `item.href` (eksternal, repo/live nyata — T-021.5) dipakai di Work index
 * sendiri saat `href` tidak diberikan. Item tanpa `item.href` (mis. project
 * internal tanpa URL publik) tetap render statis, tidak clickable.
 *
 * Caption + scrim: `useContainerReveal` (hover/focus desktop; selalu
 * terlihat di sentuh; reduced-motion dihormati). Bukan Overlay Astryx —
 * touch toggle Overlay akan menunda navigasi tautan.
 */
export function WorkTile({
  item,
  href,
  featured = false,
  wide = false,
}: {
  item: WorkItem;
  href?: string;
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

  if (item.href) {
    // `isExternalLink` sengaja tidak dipakai di sini — ikon + label
    // tersembunyi bawaannya dirender sebagai sibling di dalam tile media
    // (`.home-work-tile`), bisa nyangkut di atas gambar. `target="_blank"`
    // sudah cukup aman: `Link` Astryx otomatis menambah `rel="noopener
    // noreferrer"` untuk target apa pun yang bernilai `_blank`.
    return (
      <Link
        href={item.href}
        target="_blank"
        {...mergeProps(containerProps, { className })}
      >
        {inner}
      </Link>
    );
  }

  return (
    <Center {...mergeProps(containerProps, { className })}>{inner}</Center>
  );
}
