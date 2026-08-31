import NextImage from "next/image";
import { AspectRatio } from "@astryxdesign/core/AspectRatio";
import { Badge } from "@astryxdesign/core/Badge";
import { Grid } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Icon } from "@astryxdesign/core/Icon";
import { Section } from "@astryxdesign/core/Section";
import { StatusDot } from "@astryxdesign/core/StatusDot";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { ABOUT_COPY, ABOUT_PORTRAIT_SRC } from "@/content/about";
import type { Locale } from "@/lib/locale";
import { AboutOfferGrid } from "./about-offer-grid";
import { AboutProcess } from "./about-process";
import { RestActive, RestActiveCard } from "./about-rest-active";
import { Reveal, WordReveal } from "./home-motion";

function splitQuotedValue(value: string): { heading: string; body: string } {
  const match = value.match(/^[“"](.+?)[”"]\s*(.*)$/u);
  if (!match) {
    return { heading: value, body: "" };
  }
  return { heading: match[1], body: match[2] };
}

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = ABOUT_COPY[locale];

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
                    label={copy.availabilityBadge}
                    isPulsing
                    aria-hidden
                  />
                }
              />
            </Reveal>
            <Heading level={1} className="about-h1">
              <WordReveal words={copy.h1} />
            </Heading>
            <Reveal>
              <RestActive
                className="about-lead"
                label={copy.lead2}
                rest={
                  <VStack gap={3}>
                    <Text
                      color="secondary"
                      display="block"
                      className="about-lead-rest"
                    >
                      {copy.lead1}
                    </Text>
                    <HStack className="about-lead-more" aria-hidden="true">
                      <Icon icon="chevronDown" size="sm" color="accent" />
                    </HStack>
                  </VStack>
                }
                active={
                  <Text color="secondary" display="block">
                    {copy.lead2}
                  </Text>
                }
              />
            </Reveal>
          </VStack>
          <Reveal>
            <AspectRatio ratio={4 / 5} fit="cover" className="about-portrait">
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
          <AboutOfferGrid offers={copy.offers} />
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
                    <RestActiveCard
                      variant="muted"
                      className="about-value-card"
                      label={heading}
                      rest={
                        <Heading level={3} className="about-value-title">
                          {heading}
                        </Heading>
                      }
                      active={
                        body ? (
                          <Text color="secondary" display="block" size="sm">
                            {body}
                          </Text>
                        ) : null
                      }
                    />
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
          <AboutProcess steps={copy.steps} />
        </VStack>
      </Section>
    </VStack>
  );
}
