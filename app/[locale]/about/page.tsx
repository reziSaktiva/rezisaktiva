import { notFound } from "next/navigation";
import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { LOCALES, isLocale } from "@/lib/locale";

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

  return (
    <VStack gap={2} align="center" justify="center" padding={6} minHeight="60vh">
      <Heading level={1}>{copy.heading}</Heading>
      <Text color="secondary">{copy.text}</Text>
    </VStack>
  );
}
