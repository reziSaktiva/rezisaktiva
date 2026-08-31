import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/[locale]/_components/json-ld-script";
import { buildJsonLd } from "@/lib/json-ld";
import { LOCALES, isLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/page-metadata";
import { HomePage } from "./_components/home-page";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return pageMetadata(locale, "home");
}

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <JsonLdScript data={buildJsonLd(locale, "home")} />
      <HomePage locale={locale} />
    </>
  );
}
