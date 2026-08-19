import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/page-metadata";
import { WorkPage } from "../_components/work-page";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return pageMetadata(locale, "work", "work");
}

export default async function WorkRoute({
  params,
}: PageProps<"/[locale]/work">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <WorkPage locale={locale} />;
}
