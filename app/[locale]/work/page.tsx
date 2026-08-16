import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locale";
import { StubPage } from "../_components/stub-page";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const COPY = {
  id: {
    heading: "Karya",
    text: "Stub Work index ID — katalog karya menyusul (T-019, M9 · ADR-020).",
  },
  en: {
    heading: "Work",
    text: "Work index EN stub — work catalog coming soon (T-019, M9 · ADR-020).",
  },
} as const;

export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = COPY[locale];

  return <StubPage heading={copy.heading} text={copy.text} />;
}
