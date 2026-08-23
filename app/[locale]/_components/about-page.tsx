"use client";

import NextImage from "next/image";
import type { ComponentType, SVGProps } from "react";
import { AspectRatio } from "@astryxdesign/core/AspectRatio";
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
import { Center } from "@astryxdesign/core/Center";
import { Grid } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { Icon } from "@astryxdesign/core/Icon";
import { Section } from "@astryxdesign/core/Section";
import { StatusDot } from "@astryxdesign/core/StatusDot";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { useContactModal } from "@/app/_components/contact-modal-provider";
import { ABOUT_COPY, ABOUT_PORTRAIT_SRC } from "@/content/about";
import type { Locale } from "@/lib/locale";
import { Magnetic, Reveal, WordReveal } from "./home-motion";
import {
  ArrowRightIcon,
  LayersIcon,
  ProductIcon,
  SparkleIcon,
} from "./overlay-icons";

const OFFER_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  ProductIcon,
  LayersIcon,
  SparkleIcon,
];

function splitQuotedValue(value: string): { heading: string; body: string } {
  const match = value.match(/^[“"](.+?)[”"]\s*(.*)$/u);
  if (!match) {
    return { heading: value, body: "" };
  }
  return { heading: match[1], body: match[2] };
}

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = ABOUT_COPY[locale];
  const { open } = useContactModal();

  return (
    <VStack className="about-page">
      <Section variant="transparent" padding={0} className="about-hero">
        <Grid columns={2} gap={8} align="center" className="about-hero-grid">
          <VStack gap={4}>
            <Reveal>
              <Badge
                variant="green"
                label={copy.availabilityBadge}
                icon={
                  <StatusDot
                    variant="success"
                    label={copy.availability}
                    isPulsing
                  />
                }
              />
            </Reveal>
            <Heading level={1} className="about-h1">
              <WordReveal words={copy.h1} />
            </Heading>
            <VStack gap={3} className="about-lead">
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
          </VStack>
          <Reveal>
            <AspectRatio
              ratio={4 / 5}
              fit="cover"
              className="about-portrait"
            >
              <NextImage
                src={ABOUT_PORTRAIT_SRC}
                alt={copy.portraitAlt}
                width={900}
                height={1125}
                sizes="(max-width: 1023px) 90vw, 45vw"
                priority
              />
            </AspectRatio>
          </Reveal>
        </Grid>
      </Section>

      <Section variant="transparent" padding={0} className="about-section">
        <VStack gap={8}>
          <Reveal>
            <Heading level={2} className="about-section-title">
              {copy.helpTitle}
            </Heading>
          </Reveal>
          <Grid columns={3} gap={4} className="about-offer-grid">
            {copy.offers.map((offer, index) => (
              <Reveal key={offer.num}>
                <Card
                  variant="default"
                  elevation="none"
                  padding={6}
                  className="about-offer-card"
                >
                  <VStack gap={4}>
                    <Icon
                      icon={OFFER_ICONS[index] ?? ProductIcon}
                      size="lg"
                      color="accent"
                    />
                    <Heading level={3} className="about-card-title">
                      {offer.title}
                    </Heading>
                    <Text color="secondary" display="block" size="sm">
                      {offer.body}
                    </Text>
                  </VStack>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </VStack>
      </Section>

      <Section variant="transparent" padding={0} className="about-values-band">
        <VStack gap={8} className="about-section about-values-inner">
          <VStack gap={4}>
            <Reveal>
              <Text type="label" color="secondary" className="home-kicker">
                {copy.approachLabel}
              </Text>
            </Reveal>
            <Reveal>
              <Text display="block" className="about-approach">
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
            <Grid columns={3} gap={4} className="about-values-grid">
              {copy.values.map((value) => {
                const { heading, body } = splitQuotedValue(value);
                return (
                  <Reveal key={value}>
                    <Card variant="muted" elevation="none" padding={6}>
                      <VStack gap={3}>
                        <Heading level={3} className="about-value-title">
                          {heading}
                        </Heading>
                        {body ? (
                          <Text color="secondary" display="block" size="sm">
                            {body}
                          </Text>
                        ) : null}
                      </VStack>
                    </Card>
                  </Reveal>
                );
              })}
            </Grid>
          </VStack>
        </VStack>
      </Section>

      <Section variant="transparent" padding={0} className="about-section">
        <VStack gap={8}>
          <VStack gap={4}>
            <Reveal>
              <Heading level={2} className="about-section-title">
                {copy.processTitle}
              </Heading>
            </Reveal>
            <Reveal>
              <Text
                color="secondary"
                display="block"
                className="about-process-note"
              >
                {copy.processNote}
              </Text>
            </Reveal>
          </VStack>
          <Grid columns={2} gap={4} className="about-process-grid">
            {copy.steps.map((step) => (
              <Reveal key={step.num}>
                <Card
                  variant="muted"
                  elevation="none"
                  padding={6}
                  className="about-process-card"
                >
                  <Text aria-hidden="true" className="about-process-mark">
                    {step.num}
                  </Text>
                  <VStack gap={3} className="about-process-copy">
                    <Heading level={3} className="about-card-title">
                      {step.title}
                    </Heading>
                    <Text color="secondary" display="block" size="sm">
                      {step.body}
                    </Text>
                  </VStack>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </VStack>
      </Section>

      <Section
        variant="transparent"
        padding={0}
        className="about-cta about-cta--page"
      >
        <Center axis="horizontal">
          <VStack gap={6} align="center">
            <Reveal>
              <Heading level={2} className="about-cta-heading">
                {copy.ctaQuestion}
              </Heading>
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
          </VStack>
        </Center>
      </Section>
    </VStack>
  );
}
