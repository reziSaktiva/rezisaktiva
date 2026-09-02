import { WORK_ITEMS, WORK_PAGE_COPY } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { Reveal, WordReveal } from "./home-motion";
import { WorkIndexClient } from "./work-index-client";

export function WorkPage({ locale }: { locale: Locale }) {
  const copy = WORK_PAGE_COPY[locale];
  const items = WORK_ITEMS[locale];

  return (
    <div className="work-page flex flex-col">
      <section className="work-hero">
        <div className="home-container flex flex-col gap-8">
          <h1 className="work-h1">
            <WordReveal words={copy.h1} variant="compact" />
          </h1>
          <Reveal>
            <p className="work-lead">{copy.lead}</p>
          </Reveal>
        </div>
      </section>

      <WorkIndexClient locale={locale} items={items} />
    </div>
  );
}
