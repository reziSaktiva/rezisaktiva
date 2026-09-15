import type { Locale } from "@/lib/locale";
import { PROJECTS_CATALOG } from "./work";

/**
 * Kedalaman halaman case (ADR-046, T-058). Sheet tetap skim.
 * Fakta dari CV + copy yang dikunci; jangan dikarang.
 */

export interface WorkCaseCopy {
  periodLabel: string;
  stackLabel: string;
}

export interface WorkCaseSection {
  title?: string;
  stack: readonly string[];
  bullets: readonly string[];
}

export interface WorkCaseFields {
  period?: string;
  stack: readonly string[];
  sections: readonly WorkCaseSection[];
}

export const WORK_CASE_COPY: Record<Locale, WorkCaseCopy> = {
  id: {
    periodLabel: "Periode",
    stackLabel: "Stack",
  },
  en: {
    periodLabel: "Period",
    stackLabel: "Stack",
  },
};

export function getWorkCase(
  locale: Locale,
  id: string,
): WorkCaseFields | undefined {
  const row = PROJECTS_CATALOG.find((item) => item.id === id);
  if (!row || !("case" in row) || row.case == null) {
    return undefined;
  }
  const detail = row.case;
  return {
    period: detail.period?.[locale],
    stack: detail.stack ?? [],
    sections: detail.sections.map((section) => ({
      title: "title" in section ? section.title?.[locale] : undefined,
      stack: "stack" in section && section.stack ? section.stack : [],
      bullets: section.bullets[locale],
    })),
  };
}
