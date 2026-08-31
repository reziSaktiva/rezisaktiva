"use client";

import { useCallback, useState } from "react";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Section } from "@astryxdesign/core/Section";
import { VStack } from "@astryxdesign/core/VStack";
import type { WorkItem } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { Reveal } from "./home-motion";
import { PROJECT_SHEET_ID, ProjectSheet } from "./project-sheet";
import { workTileLayout } from "./work-tile-layout";
import { WorkTile } from "./work-tile";

export function WorkIndexClient({
  locale,
  items,
}: {
  locale: Locale;
  items: readonly WorkItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeSheet = useCallback(() => setOpenId(null), []);
  const openItem = items.find((item) => item.id === openId) ?? null;
  const spanFullById = new Map(
    workTileLayout(items).map((slot) => [slot.id, slot.spanFull]),
  );

  return (
    <>
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
                  <WorkTile
                    item={item}
                    featured={item.featured}
                    wide={wide}
                    onSelect={() => setOpenId(item.id)}
                    sheetOpen={openId === item.id}
                    sheetPanelId={PROJECT_SHEET_ID}
                  />
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

      <ProjectSheet locale={locale} item={openItem} onClose={closeSheet} />
    </>
  );
}
