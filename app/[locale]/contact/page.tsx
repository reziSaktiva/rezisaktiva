import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPage } from "@/app/[locale]/_components/contact-page";
import { JsonLdScript } from "@/app/[locale]/_components/json-ld-script";
import { buildJsonLd } from "@/lib/json-ld";
import { LOCALES, isLocale } from "@/lib/locale";
import { pageMetadata } from "@/lib/page-metadata";
import { CONTACT_PATH } from "@/lib/site-url";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return pageMetadata(locale, "contact", CONTACT_PATH);
}

/** Contact page (T-083, ADR-052 point 5). SSG; the form posts to `/api/contact`. */
export default async function ContactRoute({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <JsonLdScript data={buildJsonLd(locale, "contact")} />
      <ContactPage locale={locale} />
    </>
  );
}
