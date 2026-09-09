import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/[locale]/_components/json-ld-script";
import { WorkflowPage } from "@/app/[locale]/_components/workflow-page";
import { buildJsonLd } from "@/lib/json-ld";
import { LOCALES, isLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/page-metadata";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/workflow">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return pageMetadata(locale, "workflow", "workflow");
}

export default async function WorkflowRoute({
  params,
}: PageProps<"/[locale]/workflow">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <JsonLdScript data={buildJsonLd(locale, "workflow")} />
      <WorkflowPage locale={locale} />
    </>
  );
}
