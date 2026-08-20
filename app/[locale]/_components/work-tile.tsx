"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { Center } from "@astryxdesign/core/Center";
import { Heading } from "@astryxdesign/core/Heading";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import type { WorkItem } from "@/content/work";

/**
 * Tile karya — visual `.work-tile` mockup.
 *
 * `href` (internal, via NextLink) — dipakai teaser Home, mengarah ke index
 * Work (bukan langsung ke repo/live); index R1 tidak link ke case M10
 * (ADR-020).
 *
 * `item.href` (eksternal, repo/live nyata — T-021.5) dipakai di Work index
 * sendiri saat `href` tidak diberikan. Item tanpa `item.href` (mis. project
 * internal tanpa URL publik) tetap render statis, tidak clickable.
 */
export function WorkTile({
  item,
  href,
  featured = false,
}: {
  item: WorkItem;
  href?: string;
  featured?: boolean;
}) {
  const className = featured
    ? "home-work-tile home-work-tile--featured"
    : "home-work-tile";

  const inner = (
    <>
      <Center className="home-work-tile-media">
        <NextImage
          src={item.imageSrc}
          alt=""
          fill
          sizes={featured ? "100vw" : "50vw"}
        />
      </Center>
      <VStack gap={1} className="home-work-tile-meta">
        <Heading level={featured ? 2 : 3}>{item.name}</Heading>
        <Text size="sm">{item.outcome}</Text>
      </VStack>
    </>
  );

  if (href) {
    return (
      <Link as={NextLink} href={href} className={className}>
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
      <Link href={item.href} target="_blank" className={className}>
        {inner}
      </Link>
    );
  }

  return <Center className={className}>{inner}</Center>;
}
