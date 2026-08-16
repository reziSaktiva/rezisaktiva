import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locale";
import { StubPage } from "../_components/stub-page";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const COPY = {
  id: {
    heading: "Proses Kerja",
    text: "Stub About ID — narasi product builder menyusul (T-015).",
  },
  en: {
    heading: "Process",
    text: "About EN stub — product builder narrative coming soon (T-015).",
  },
} as const;

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = COPY[locale];

  return <StubPage heading={copy.heading} text={copy.text} />;
}
