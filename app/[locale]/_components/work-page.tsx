"use client";

import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { WORK_ITEMS, WORK_PAGE_COPY } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { Reveal, WordReveal } from "./home-motion";
import { WorkTile } from "./work-tile";

type WorkGridItem = { id: string; featured: boolean };

/**
 * Featured tiles always take a full row. A half-width tile that would sit
 * alone (next item is featured, or end of list) also spans full so the grid
 * never leaves an empty cell. Order of `items` is preserved.
 */
function workTileLayout(
  items: readonly WorkGridItem[],
): { id: string; spanFull: boolean }[] {
  const layout: { id: string; spanFull: boolean }[] = [];
  let pending: WorkGridItem | null = null;

  const flushPending = (spanFull: boolean) => {
    if (!pending) {
      return;
    }
    layout.push({ id: pending.id, spanFull });
    pending = null;
  };

  for (const item of items) {
    if (item.featured) {
      flushPending(true);
      layout.push({ id: item.id, spanFull: true });
      continue;
    }
    if (pending) {
      layout.push({ id: pending.id, spanFull: false });
      layout.push({ id: item.id, spanFull: false });
      pending = null;
    } else {
      pending = item;
    }
  }
  flushPending(true);

  return layout;
}

export function WorkPage({ locale }: { locale: Locale }) {
  const copy = WORK_PAGE_COPY[locale];
  const items = WORK_ITEMS[locale];
  const spanFullById = new Map(
    workTileLayout(items).map((slot) => [slot.id, slot.spanFull]),
  );

  return (
    <VStack className="work-page">
      <Section variant="transparent" padding={0} className="work-hero">
        <VStack className="home-container" gap={8}>
          <Heading level={1} className="work-h1">
            <WordReveal words={copy.h1} variant="compact" />
          </Heading>
          <Reveal>
            <Text color="secondary" display="block" className="work-lead">
              {copy.lead}
            </Text>
          </Reveal>
        </VStack>
      </Section>

      <Section variant="transparent" padding={0} className="work-grid-section">
        <VStack className="home-container">
          <Grid
            columns={{ minWidth: 480, max: 2, repeat: "fit" }}
            gap={3}
            className="home-work-grid"
          >
            {items.map((item) => {
              const spanFull = spanFullById.get(item.id) === true;
              const wide = spanFull && !item.featured;
              const tile = (
                <Reveal key={item.id} className="home-work-reveal">
                  <WorkTile item={item} featured={item.featured} wide={wide} />
                </Reveal>
              );
              return spanFull ? (
                <GridSpan key={item.id} columns="full">
                  {tile}
                </GridSpan>
              ) : (
                tile
              );
            })}
          </Grid>
        </VStack>
      </Section>
    </VStack>
  );
}
