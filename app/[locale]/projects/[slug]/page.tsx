import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkCasePage } from "@/app/[locale]/_components/work-case-page";
import {
  getPublicProjectBySlug,
  publicProjectRows,
  toWorkItem,
} from "@/content/work";
import { LOCALES, isLocale } from "@/lib/locale";
import { casePageMetadata } from "@/lib/page-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    publicProjectRows().map((item) => ({ locale, slug: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const row = getPublicProjectBySlug(slug);
  if (!row) {
    return {};
  }
  return casePageMetadata(locale, row.slug, {
    name: row.name,
    description: row.outcome[locale],
  });
}

export default async function ProjectCaseRoute({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const row = getPublicProjectBySlug(slug);
  if (!row) {
    notFound();
  }

  return <WorkCasePage locale={locale} item={toWorkItem(row, locale)} />;
}
