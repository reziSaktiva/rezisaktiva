"use client";

import NextImage from "next/image";
import { Button } from "@astryxdesign/core/Button";
import { Grid } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Icon } from "@astryxdesign/core/Icon";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import { ABOUT_COPY, ABOUT_PORTRAIT_SRC } from "@/content/about";
import type { Locale } from "@/lib/locale";
import { Magnetic, Reveal, WordReveal } from "./home-motion";
import { ArrowRightIcon } from "./overlay-icons";

function StepRow({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal>
      <HStack gap={6} align="start" className="about-step-row">
        <Text className="about-step-num">{num}</Text>
        <VStack gap={1}>
          <Heading level={3} className="about-step-title">
            {title}
          </Heading>
          <Text size="sm" color="secondary" display="block">
            {body}
          </Text>
        </VStack>
      </HStack>
    </Reveal>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = ABOUT_COPY[locale];
  const { open } = useContactModal();

  return (
    <VStack className="about-page">
      <Section variant="transparent" padding={0} className="about-hero">
        <Grid columns={2} gap={10} align="center" className="about-hero-grid">
          <VStack>
            <Heading level={1} className="about-h1">
              <WordReveal words={copy.h1} />
            </Heading>
            <VStack gap={5} className="about-lead">
              <Reveal>
                <Text color="secondary" display="block">
                  {copy.lead1}
                </Text>
              </Reveal>
              <Reveal>
                <Text color="secondary" display="block">
                  {copy.lead2}
                </Text>
              </Reveal>
            </VStack>
            <Reveal>
              <HStack gap={2} align="center" className="about-avail">
                <VStack className="avail-dot" aria-hidden="true" />
                <Text size="sm" color="secondary">
                  {copy.availability}
                </Text>
              </HStack>
            </Reveal>
          </VStack>
          <Reveal>
            <VStack className="about-portrait">
              <NextImage
                src={ABOUT_PORTRAIT_SRC}
                alt={copy.portraitAlt}
                fill
                sizes="(max-width: 1023px) 90vw, 45vw"
                priority
              />
            </VStack>
          </Reveal>
        </Grid>
      </Section>

      <Section variant="transparent" padding={0} className="about-section">
        <Grid
          columns={2}
          gap={10}
          align="start"
          className="about-split about-split--narrow"
        >
          <Reveal>
            <Heading level={2} className="about-section-title">
              {copy.helpTitle}
            </Heading>
          </Reveal>
          <VStack>
            {copy.offers.map((offer) => (
              <StepRow
                key={offer.num}
                num={offer.num}
                title={offer.title}
                body={offer.body}
              />
            ))}
          </VStack>
        </Grid>
      </Section>

      <Section variant="transparent" padding={0} className="about-section">
        <Grid columns={2} gap={10} className="about-split">
          <VStack gap={4}>
            <Reveal>
              <Text type="label" color="secondary" className="home-kicker">
                {copy.approachLabel}
              </Text>
            </Reveal>
            <Reveal>
              <Text display="block" className="about-pull">
                {copy.approachBody}
              </Text>
            </Reveal>
          </VStack>
          <VStack gap={4}>
            <Reveal>
              <Text type="label" color="secondary" className="home-kicker">
                {copy.valuesLabel}
              </Text>
            </Reveal>
            {copy.values.map((value) => (
              <Reveal key={value}>
                <Text display="block" className="about-pull">
                  {value}
                </Text>
              </Reveal>
            ))}
          </VStack>
        </Grid>
      </Section>

      <Section variant="transparent" padding={0} className="about-section">
        <Grid
          columns={2}
          gap={10}
          align="start"
          className="about-split about-split--narrow"
        >
          <VStack gap={4}>
            <Reveal>
              <Heading level={2} className="about-section-title">
                {copy.processTitle}
              </Heading>
            </Reveal>
            <Reveal>
              <Text color="secondary" display="block">
                {copy.processNote}
              </Text>
            </Reveal>
          </VStack>
          <VStack>
            {copy.steps.map((step) => (
              <StepRow
                key={step.num}
                num={step.num}
                title={step.title}
                body={step.body}
              />
            ))}
          </VStack>
        </Grid>
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
