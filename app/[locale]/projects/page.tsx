import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/[locale]/_components/json-ld-script";
import { buildJsonLd } from "@/lib/json-ld";
import { LOCALES, isLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/page-metadata";
import { WorkPage } from "../_components/work-page";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return pageMetadata(locale, "work", "projects");
}

export default async function WorkRoute({
  params,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <JsonLdScript data={buildJsonLd(locale, "work")} />
      <WorkPage locale={locale} />
    </>
  );
}
