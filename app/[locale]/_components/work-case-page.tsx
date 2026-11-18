import NextImage from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { WORK_ITEMS, type WorkItem } from "@/content/work";
import {
  WORK_CASE_COPY,
  caseStack,
  getWorkCase,
  nextWorkItem,
  projectActionHrefs,
} from "@/content/work-case";
import { liveHostLabel } from "@/lib/linkify";
import type { Locale } from "@/lib/locale";
import { projectCaseHref } from "@/lib/site-url";
import { workPhotoProps } from "@/lib/work-image";
import { LinkedText } from "./linked-text";
import { ClipReveal, SplitLines } from "./reveal";
import { WorkCasePoint } from "./work-case-point";

/** Hero title lines: two words per line, like the mockup's manual breaks. */
function titleLines(name: string): string[] {
  const words = name.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 2) {
    lines.push(words.slice(i, i + 2).join(" "));
  }
  return lines;
}

/**
 * Case page (T-081.2, ADR-046): parallax hero, meta row, sticky lede with
 * highlighted points, stack chips, gallery with reveals, next-project link.
 * Live stays a secondary link in the meta row; no repo link (ADR-044).
 */
export function WorkCasePage({
  locale,
  item,
}: {
  locale: Locale;
  item: WorkItem;
}) {
  const copy = WORK_CASE_COPY[locale];
  const depth = getWorkCase(locale, item.id);
  if (!depth) {
    notFound();
  }
  const { liveHrefs } = projectActionHrefs(locale, item);
  const stack = caseStack(depth);
  const next = nextWorkItem(WORK_ITEMS[locale], item.id);

  return (
    <article className="monolith wcase" data-masthead="overlay">
      <section className="wcase-hero on-ink">
        <ClipReveal className="wcase-hero-media" parallax={0.08}>
          <NextImage
            {...workPhotoProps(item.imageSrc, "100vw")}
            className="wcase-hero-img"
            loading="eager"
            fetchPriority="high"
          />
        </ClipReveal>
        <div className="wcase-hero-in">
          <p className="small">{item.year}</p>
          <h1 className="display type-xl">
            <SplitLines lines={titleLines(item.name)} immediate delay={0.3} />
          </h1>
        </div>
      </section>

      <dl className="wcase-meta">
        <div className="wcase-meta-item">
          <dt className="small">{copy.servicesLabel}</dt>
          <dd>{depth.services.join(", ")}</dd>
        </div>
        <div className="wcase-meta-item">
          <dt className="small">{copy.locationLabel}</dt>
          <dd>{depth.locationOrCompany}</dd>
        </div>
        <div className="wcase-meta-item">
          <dt className="small">
            {depth.period ? copy.periodLabel : copy.yearLabel}
          </dt>
          <dd>{depth.period ?? item.year}</dd>
        </div>
        {liveHrefs.length > 0 ? (
          <div className="wcase-meta-item">
            <dt className="small">{copy.liveLabel}</dt>
            <dd className="flex flex-wrap gap-3">
              {liveHrefs.map((href) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wcase-tlink"
                >
                  {liveHostLabel(href)} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>

      <section className="wcase-body">
        <div className="wcase-lede">
          <h2 className="display type-md">{item.outcome}</h2>
        </div>
        <div className="wcase-points">
          {depth.sections.map((section, index) => (
            <div
              key={section.title ?? `section-${index}`}
              className="flex flex-col gap-3"
            >
              {section.title ? (
                <h3 className="small">{section.title}</h3>
              ) : null}
              <ol className="wcase-list">
                {section.bullets.map((bullet, bulletIndex) => (
                  <WorkCasePoint key={`${bulletIndex}-${bullet}`}>
                    <LinkedText text={bullet} />
                  </WorkCasePoint>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {stack.length > 0 ? (
        <section className="wcase-stack" aria-label={copy.stackLabel}>
          <h2 className="sr-only">{copy.stackLabel}</h2>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li key={tech} className="wcase-chip">
                {tech}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {depth.gallery.length > 0 ? (
        <section className="wcase-gallery" aria-label={copy.imagesLabel}>
          {depth.gallery.map((src) => (
            <ClipReveal key={src} className="wcase-shot">
              <NextImage
                {...workPhotoProps(
                  src,
                  "(max-width: 899px) 100vw, (max-width: 1400px) 75vw, 1100px",
                )}
                className="wcase-shot-img"
              />
            </ClipReveal>
          ))}
        </section>
      ) : null}

      {next ? (
        <NextLink
          href={projectCaseHref(locale, next.slug)}
          className="wcase-next"
          data-cursor={copy.nextCursorLabel}
        >
          <span className="small">{copy.nextLabel}</span>
          <span className="display type-xl">{next.name}</span>
        </NextLink>
      ) : null}
    </article>
  );
}
