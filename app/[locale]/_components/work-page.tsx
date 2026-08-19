"use client";

import { Button } from "@astryxdesign/core/Button";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { Icon } from "@astryxdesign/core/Icon";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import { WORK_ITEMS, WORK_PAGE_COPY } from "@/content/work";
import type { Locale } from "@/lib/locale";
import { Magnetic, Reveal, WordReveal } from "./home-motion";
import { ArrowRightIcon } from "./overlay-icons";
import { WorkTile } from "./work-tile";

export function WorkPage({ locale }: { locale: Locale }) {
  const copy = WORK_PAGE_COPY[locale];
  const items = WORK_ITEMS[locale];
  const { open } = useContactModal();

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

      <Section variant="transparent" padding={0} className="work-grid-section">
        <VStack className="home-container">
          <Grid
            columns={{ minWidth: 480, max: 2, repeat: "fit" }}
            gap={3}
            className="home-work-grid"
          >
            {items.map((item) => {
              const tile = (
                <Reveal key={item.id} className="home-work-reveal">
                  <WorkTile item={item} featured={item.featured} />
                </Reveal>
              );
              return item.featured ? (
                <GridSpan key={item.id} columns="full">
                  {tile}
                </GridSpan>
              ) : (
                tile
              );
            })}
          </Grid>
        </VStack>
      </Section>

      <Section variant="transparent" padding={0} className="about-cta">
        <Reveal>
          <Text color="secondary" display="block" className="about-cta-q">
            {copy.ctaQuestion}
          </Text>
        </Reveal>
        <Reveal>
          <Magnetic>
            <Button
              label={copy.ctaLink}
              variant="primary"
              size="lg"
              onClick={open}
              endContent={<Icon icon={ArrowRightIcon} />}
              className="home-contact-cta"
            />
          </Magnetic>
        </Reveal>
      </Section>
    </VStack>
  );
}
