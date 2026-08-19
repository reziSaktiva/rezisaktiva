import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/page-metadata";
import { AboutPage } from "../_components/about-page";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return pageMetadata(locale, "about", "about");
}

export default async function AboutRoute({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <AboutPage locale={locale} />;
}
