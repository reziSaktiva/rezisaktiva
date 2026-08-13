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
    heading: "rezisaktiva",
    text: "Stub locale ID — konten R1 menyusul.",
  },
  en: {
    heading: "rezisaktiva",
    text: "Locale EN stub — R1 content coming soon.",
  },
} as const;

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
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
