import NextLink from "next/link";
import { HOME_COPY } from "@/content/home";
import { WORK_ITEMS } from "@/content/work";
import { WORK_CASE_COPY } from "@/content/work-case";
import type { Locale } from "@/lib/locale";
import { projectCaseHref, projectsHref } from "@/lib/site-url";
import { ProjectCard } from "./project-card";
import { SplitLines } from "./reveal";

/**
 * Home Work section (T-080.3, ADR-054 points 4 and 6): a sticky giant title
 * that the staggered project cards scroll over, then a link to the Work index.
 * Same public items and card as the Work index; cards open the case page.
 * Server shell; the reveals are client islands.
 */
export function HomeWork({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];
  const items = WORK_ITEMS[locale];
  const { viewLabel } = WORK_CASE_COPY[locale];

  return (
    <section id="work" aria-labelledby="home-work-title" className="home-work">
      <div className="home-work-sticky">
        <h2 id="home-work-title" className="home-work-title display">
          <SplitLines lines={copy.workTitle} />
        </h2>
      </div>

      <div className="home-work-cards">
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            href={projectCaseHref(locale, item.slug)}
            name={item.name}
            meta={`${item.year} · ${item.outcome}`}
            imageSrc={item.imageSrc}
            sizes="(max-width: 760px) 100vw, 45vw"
            cursorLabel={viewLabel}
            headingLevel="h3"
            className="home-work-card"
          />
        ))}
      </div>

      <div className="home-work-more">
        <NextLink href={projectsHref(locale)} className="home-pill">
          <span>{copy.workMore} →</span>
        </NextLink>
      </div>
    </section>
  );
}
