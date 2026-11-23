import { WORK_ITEMS, WORK_PAGE_COPY } from "@/content/work";
import { WORK_CASE_COPY } from "@/content/work-case";
import type { Locale } from "@/lib/locale";
import { projectCaseHref } from "@/lib/site-url";
import { ProjectCard } from "./project-card";
import { SplitLines } from "./reveal";

/**
 * Work index (T-081.1): sticky giant title that the two-column card grid
 * scrolls over. Cards link straight to the case page (ADR-054 point 2).
 */
export function WorkPage({ locale }: { locale: Locale }) {
  const copy = WORK_PAGE_COPY[locale];
  const items = WORK_ITEMS[locale];
  const { viewLabel } = WORK_CASE_COPY[locale];

  return (
    <div className="monolith wk">
      <header className="wk-head">
        <h1 className="wk-title display">
          <SplitLines lines={[copy.h1.join(" ")]} immediate delay={0.2} />
        </h1>
        <p className="wk-lead copy">{copy.lead}</p>
      </header>

      <section className="wk-grid" aria-label={copy.h1.join(" ")}>
        {items.map((item, index) => (
          <ProjectCard
            key={item.id}
            href={projectCaseHref(locale, item.slug)}
            name={item.name}
            meta={`${item.year} · ${item.outcome}`}
            imageSrc={item.listImageSrc}
            eager={index < 2}
            cursorLabel={viewLabel}
            headingLevel="h2"
          />
        ))}
      </section>
    </div>
  );
}
