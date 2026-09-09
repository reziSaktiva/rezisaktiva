import { notFound, redirect } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locale";
import { aboutHref } from "@/lib/nav";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** ADR-040: `/about` bukan halaman — redirect ke Home `#about`. */
export default async function AboutRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  redirect(aboutHref(locale));
}
