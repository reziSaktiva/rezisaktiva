import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locale";
import { HomePage } from "./_components/home-page";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
