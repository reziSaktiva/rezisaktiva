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
 * Tile karya — visual `.work-tile` mockup. `href` opsional: Home teaser
 * mengarah ke index Work; index R1 tidak link ke case M10 (ADR-020).
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

  return <Center className={className}>{inner}</Center>;
}
