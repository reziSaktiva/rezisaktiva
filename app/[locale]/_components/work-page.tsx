import { Heading } from "@astryxdesign/core/Heading";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { WORK_ITEMS, WORK_PAGE_COPY } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { Reveal, WordReveal } from "./home-motion";
import { WorkIndexClient } from "./work-index-client";

export function WorkPage({ locale }: { locale: Locale }) {
  const copy = WORK_PAGE_COPY[locale];
  const items = WORK_ITEMS[locale];

  return (
    <VStack className="work-page">
      <Section variant="transparent" padding={0} className="work-hero">
        <VStack className="home-container" gap={8}>
          <Heading level={1} className="work-h1">
            <WordReveal words={copy.h1} variant="compact" />
          </Heading>
          <Reveal>
            <Text color="secondary" display="block" className="work-lead">
              {copy.lead}
            </Text>
          </Reveal>
        </VStack>
      </Section>

      <WorkIndexClient locale={locale} items={items} />
    </VStack>
  );
}
