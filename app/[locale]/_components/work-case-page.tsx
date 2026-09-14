import { notFound } from "next/navigation";
import {
  WORK_SHEET_COPY,
  getWorkSheet,
  projectActionHrefs,
  workSheetImages,
} from "@/content/work-sheet";
import type { Locale } from "@/lib/locale";
import type { WorkItem } from "@/content/work";
import { Reveal, WordReveal } from "./home-motion";
import { ProjectSheetMedia } from "./project-sheet-media";

export function WorkCasePage({
  locale,
  item,
}: {
  locale: Locale;
  item: WorkItem;
}) {
  const labels = WORK_SHEET_COPY[locale];
  const sheet = getWorkSheet(locale, item.id);
  if (!sheet) {
    notFound();
  }
  const images = workSheetImages(item.id);
  const { liveHref, repoHref } = projectActionHrefs(
    locale,
    item,
    sheet.gitHref,
  );

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
              <p className="qi-label">{labels.yearLabel}</p>
              <p>{item.year}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="qi-label">{labels.descriptionLabel}</p>
            <p className="qi-bio ps-description">{sheet.description}</p>
          </div>

          {liveHref || repoHref ? (
            <div className="qi-links">
              {liveHref ? (
                <a href={liveHref} target="_blank" rel="noopener noreferrer">
                  {labels.liveLabel}
                </a>
              ) : null}
              {repoHref ? (
                <a href={repoHref} target="_blank" rel="noopener noreferrer">
                  {labels.repoLabel}
                </a>
              ) : null}
            </div>
          ) : null}

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
