"use client";

import { useCallback, useState } from "react";
import type { WorkItem } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
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
      <section className="work-grid-section">
        <div className="home-container">
          <div className="home-work-grid">
            {items.map((item) => {
              const spanFull = spanFullById.get(item.id) === true;
              const wide = spanFull && !item.featured;
              return (
                <Reveal
                  key={item.id}
                  className={cn(
                    "home-work-reveal",
                    spanFull && "col-span-full",
                  )}
                >
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
            })}
          </div>
        </div>
      </section>

      <ProjectSheet locale={locale} item={openItem} onClose={closeSheet} />
    </>
  );
}
