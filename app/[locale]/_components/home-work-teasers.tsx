"use client";

import { useCallback, useState } from "react";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import type { WorkItem } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { Reveal } from "./home-motion";
import { PROJECT_SHEET_ID, ProjectSheet } from "./project-sheet";
import { WorkTile } from "./work-tile";

/**
 * Teaser Home: klik tile membuka project sheet (sama dengan Work index).
 * Tautan katalog tetap di “Semua proyek”.
 */
export function HomeWorkTeasers({
  locale,
  teasers,
}: {
  locale: Locale;
  teasers: readonly WorkItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeSheet = useCallback(() => setOpenId(null), []);
  const openItem = teasers.find((item) => item.id === openId) ?? null;

  return (
    <>
      <Grid
        columns={{ minWidth: 480, max: 2, repeat: "fit" }}
        gap={3}
        className="home-work-grid"
      >
        {teasers.map((item, index) => {
          const featured = index === 0;
          const tile = (
            <Reveal key={item.id} className="home-work-reveal">
              <WorkTile
                item={item}
                featured={featured}
                onSelect={() => setOpenId(item.id)}
                sheetOpen={openId === item.id}
                sheetPanelId={PROJECT_SHEET_ID}
              />
            </Reveal>
          );
          return featured ? (
            <GridSpan key={item.id} columns="full">
              {tile}
            </GridSpan>
          ) : (
            tile
          );
        })}
      </Grid>
      <ProjectSheet locale={locale} item={openItem} onClose={closeSheet} />
    </>
  );
}
