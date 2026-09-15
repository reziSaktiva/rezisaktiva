import { notFound } from "next/navigation";
import {
  WORK_SHEET_COPY,
  getWorkSheet,
  projectActionHrefs,
  workSheetImages,
} from "@/content/work-sheet";
import { WORK_CASE_COPY, getWorkCase } from "@/content/work-case";
import type { Locale } from "@/lib/locale";
import type { WorkItem } from "@/content/work";
import { Reveal, WordReveal } from "./home-motion";
import { LinkedText } from "./linked-text";
import { ProjectSheetMedia } from "./project-sheet-media";
import { WorkLiveLinks } from "./work-live-links";

export function WorkCasePage({
  locale,
  item,
}: {
  locale: Locale;
  item: WorkItem;
}) {
  const labels = WORK_SHEET_COPY[locale];
  const caseCopy = WORK_CASE_COPY[locale];
  const sheet = getWorkSheet(locale, item.id);
  if (!sheet) {
    notFound();
  }
  const depth = getWorkCase(locale, item.id);
  const images = workSheetImages(item.id);
  const { liveHref, liveHrefs } = projectActionHrefs(locale, item);

  return (
    <div className="work-page case-page flex flex-col">
      <section className="work-hero">
        <div className="home-container flex flex-col gap-8">
          <h1 className="work-h1">
            <WordReveal words={[item.name]} variant="compact" />
          </h1>
          <Reveal>
            <p className="work-lead">{item.outcome}</p>
          </Reveal>
        </div>
      </section>

      <section className="work-grid-section case-body">
        <div className="home-container flex flex-col gap-8">
          <div className="qi-cols">
            <div className="flex flex-col gap-3">
              <p className="qi-label">{labels.servicesLabel}</p>
              <ul className="qi-list">
                {sheet.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="qi-label">{labels.locationLabel}</p>
              <p>{sheet.locationOrCompany}</p>
              <p className="qi-label">
                {depth?.period ? caseCopy.periodLabel : labels.yearLabel}
              </p>
              <p>{depth?.period ?? item.year}</p>
            </div>
          </div>

          {depth ? (
            <div className="flex flex-col gap-8 case-depth">
              {depth.stack.length > 0 ? (
                <div className="flex flex-col gap-3">
                  <p className="qi-label">{caseCopy.stackLabel}</p>
                  <ul className="case-stack">
                    {depth.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {depth.sections.map((section, index) => (
                <div
                  key={section.title ?? `section-${index}`}
                  className="flex flex-col gap-3"
                >
                  {section.title ? (
                    <h2 className="case-section-title">{section.title}</h2>
                  ) : null}
                  {section.stack.length > 0 ? (
                    <ul className="case-stack">
                      {section.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  ) : null}
                  <ul className="qi-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <LinkedText text={bullet} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p className="qi-label">{labels.descriptionLabel}</p>
              <p className="qi-bio ps-description">
                <LinkedText text={sheet.description} />
              </p>
            </div>
          )}

          <WorkLiveLinks hrefs={liveHrefs} label={labels.liveLabel} />

          <ProjectSheetMedia
            liveHref={liveHref}
            images={images}
            previewTitle={`${item.name} — ${labels.previewLabel}`}
            previewLabel={labels.previewLabel}
            imagesLabel={labels.imagesLabel}
          />
        </div>
      </section>
    </div>
  );
}
