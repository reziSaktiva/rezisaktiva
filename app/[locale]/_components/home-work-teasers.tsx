"use client";

import { useCallback, useState } from "react";
import type { WorkItem } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";
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
      <div className="home-work-grid">
        {teasers.map((item, index) => {
          const featured = index === 0;
          return (
            <Reveal
              key={item.id}
              className={cn("home-work-reveal", featured && "col-span-full")}
            >
              <WorkTile
                item={item}
                featured={featured}
                onSelect={() => setOpenId(item.id)}
                sheetOpen={openId === item.id}
                sheetPanelId={PROJECT_SHEET_ID}
              />
            </Reveal>
          );
        })}
      </div>
      <ProjectSheet locale={locale} item={openItem} onClose={closeSheet} />
    </>
  );
}
