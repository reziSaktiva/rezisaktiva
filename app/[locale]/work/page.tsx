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

  return (
    <VStack gap={2} align="center" justify="center" padding={6} minHeight="60vh">
      <Heading level={1}>{copy.heading}</Heading>
      <Text color="secondary">{copy.text}</Text>
    </VStack>
  );
}
