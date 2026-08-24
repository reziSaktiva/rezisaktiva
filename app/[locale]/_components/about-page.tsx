"use client";

import NextImage from "next/image";
import {
  useEffect,
  useId,
  useState,
  type ComponentType,
  type KeyboardEvent,
  type ReactNode,
  type SVGProps,
} from "react";
import { AspectRatio } from "@astryxdesign/core/AspectRatio";
import { Badge } from "@astryxdesign/core/Badge";
import { Card } from "@astryxdesign/core/Card";
import {
  Collapsible,
  CollapsibleGroup,
} from "@astryxdesign/core/Collapsible";
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
import { Reveal, WordReveal } from "./home-motion";
import {
  BuildIcon,
  DesignIcon,
  DiscoverIcon,
  LayersIcon,
  ProductIcon,
  ShipIcon,
  SparkleIcon,
} from "./overlay-icons";

const OFFER_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  ProductIcon,
  LayersIcon,
  SparkleIcon,
];

const STEP_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  DiscoverIcon,
  DesignIcon,
  BuildIcon,
  ShipIcon,
];

function splitQuotedValue(value: string): { heading: string; body: string } {
  const match = value.match(/^[“"](.+?)[”"]\s*(.*)$/u);
  if (!match) {
    return { heading: value, body: "" };
  }
  return { heading: match[1], body: match[2] };
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasFineHover(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * Rest = judul selalu terlihat; active = body via hover/focus (desktop)
 * atau klik (mobile). Reduced-motion: body selalu terlihat (ADR-025).
 */
function RestActive({
  rest,
  active,
  className,
  label,
}: {
  rest: ReactNode;
  active: ReactNode;
  className?: string;
  label: string;
}) {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [needsClick, setNeedsClick] = useState(false);

  useEffect(() => {
    const sync = () => {
      setNeedsClick(!prefersReducedMotion() && !hasFineHover());
    };
    sync();
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    hoverMq.addEventListener("change", sync);
    reduceMq.addEventListener("change", sync);
    return () => {
      hoverMq.removeEventListener("change", sync);
      reduceMq.removeEventListener("change", sync);
    };
  }, []);

  const classNames = [
    "about-rest-active",
    needsClick && isOpen ? "is-active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!needsClick) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((open) => !open);
    }
  };

  return (
    <VStack
      className={classNames}
      gap={3}
      tabIndex={needsClick ? 0 : undefined}
      role={needsClick ? "button" : undefined}
      aria-expanded={needsClick ? isOpen : undefined}
      aria-controls={needsClick ? panelId : undefined}
      aria-label={needsClick ? label : undefined}
      onClick={
        needsClick
          ? () => {
              setIsOpen((open) => !open);
            }
          : undefined
      }
      onKeyDown={onKeyDown}
    >
      {rest}
      <VStack id={panelId} className="about-rest-active-panel" gap={0}>
        {active}
      </VStack>
    </VStack>
  );
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
                  <Text color="secondary" display="block">
                    {copy.lead1}
                  </Text>
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
                  <Text aria-hidden="true" className="about-offer-mark">
                    {offer.num}
                  </Text>
                  <RestActive
                    className="about-offer-copy"
                    label={`${offer.num} ${offer.title}`}
                    rest={
                      <VStack gap={4}>
                        <Icon
                          icon={OFFER_ICONS[index] ?? ProductIcon}
                          size="lg"
                          color="accent"
                        />
                        <Heading level={3} className="about-card-title">
                          {offer.title}
                        </Heading>
                      </VStack>
                    }
                    active={
                      <Text color="secondary" display="block" size="sm">
                        {offer.body}
                      </Text>
                    }
                  />
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
                    <Card
                      variant="muted"
                      elevation="none"
                      padding={6}
                      className="about-value-card"
                    >
                      <RestActive
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
          <CollapsibleGroup
            type="single"
            defaultValue="01"
            hasDividers
            density="spacious"
          >
            {copy.steps.map((step, index) => (
              <Collapsible
                key={step.num}
                value={step.num}
                trigger={
                  <HStack
                    gap={4}
                    align="center"
                    className="about-process-trigger"
                  >
                    <Icon
                      icon={STEP_ICONS[index] ?? DiscoverIcon}
                      size="md"
                      color="accent"
                    />
                    <Text className="about-process-num" aria-hidden="true">
                      {step.num}
                    </Text>
                    <Text className="about-card-title">{step.title}</Text>
                  </HStack>
                }
              >
                <VStack className="about-process-panel" gap={0}>
                  <Text aria-hidden="true" className="about-process-mark">
                    {step.num}
                  </Text>
                  <Text
                    color="secondary"
                    display="block"
                    size="sm"
                    className="about-process-copy"
                  >
                    {step.body}
                  </Text>
                </VStack>
              </Collapsible>
            ))}
          </CollapsibleGroup>
        </VStack>
      </Section>
    </VStack>
  );
}
