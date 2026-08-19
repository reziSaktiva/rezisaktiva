"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { Button } from "@astryxdesign/core/Button";
import { Center } from "@astryxdesign/core/Center";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { Icon } from "@astryxdesign/core/Icon";
import { Link } from "@astryxdesign/core/Link";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import {
  HERO_PORTRAIT_SRC,
  HOME_COPY,
  type HomeTeaserItem,
} from "@/content/home";
import { CONTACT_TOOLTIP } from "@/lib/nav";
import type { Locale } from "@/lib/locale";
import { CursorRing, HeroWords, Magnetic, Reveal } from "./home-motion";

function handleContactClick() {
  // TODO(T-016): buka modal Contact (ADR-019). Sama dengan chrome T-013.
}

function WorkTile({
  item,
  href,
  featured = false,
}: {
  item: HomeTeaserItem;
  href: string;
  featured?: boolean;
}) {
  return (
    <Link
      as={NextLink}
      href={href}
      className={
        featured ? "home-work-tile home-work-tile--featured" : "home-work-tile"
      }
    >
      <Center className="home-work-tile-media">
        <NextImage
          src={item.imageSrc}
          alt=""
          fill
          sizes={featured ? "100vw" : "50vw"}
        />
      </Center>
      <VStack gap={1} className="home-work-tile-meta">
        <Heading level={3}>{item.name}</Heading>
        <Text size="sm">{item.outcome}</Text>
      </VStack>
    </Link>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];
  const workHref = `/${locale}/work`;

  return (
    <VStack className="home-page">
      <CursorRing />

      <Section
        variant="transparent"
        padding={0}
        className="home-hero"
        id="hero"
      >
        <Center className="home-hero-cutout" aria-hidden="true">
          <NextImage
            src={HERO_PORTRAIT_SRC}
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 70vw, 38vw"
          />
        </Center>
        <VStack className="home-hero-inner" justify="between">
          <Heading level={1} className="home-hero-heading">
            <HeroWords lines={copy.h1} />
          </Heading>
        </VStack>
      </Section>

      <Section
        variant="transparent"
        padding={0}
        className="home-section home-section--proof"
        id="credibility"
      >
        <VStack className="home-container" gap={8}>
          <Reveal>
            <Text type="label" color="secondary" className="home-kicker">
              {copy.buktiLabel}
            </Text>
          </Reveal>
          <Reveal>
            <Text display="block" className="home-proof-body">
              {copy.buktiEmphasis}
              {copy.buktiRest}
            </Text>
          </Reveal>
        </VStack>
      </Section>

      <Section
        variant="transparent"
        padding={0}
        className="home-section home-section--work"
        id="work"
      >
        <VStack className="home-container" gap={8}>
          <Reveal axis="horizontal">
            <VStack gap={3}>
              <Text type="label" color="secondary" className="home-kicker">
                {copy.workLabel}
              </Text>
              <Heading level={2} className="home-work-title">
                {copy.workTitle}
              </Heading>
            </VStack>
            <Link
              as={NextLink}
              href={workHref}
              color="secondary"
              className="home-cta-underline"
            >
              {copy.workAll}
            </Link>
          </Reveal>

          <Grid
            columns={{ minWidth: 480, max: 2, repeat: "fit" }}
            gap={3}
            className="home-work-grid"
          >
            {copy.teasers.map((item, index) => {
              const tile = (
                <Reveal key={item.id} className="home-work-reveal">
                  <WorkTile
                    item={item}
                    href={workHref}
                    featured={index === 0}
                  />
                </Reveal>
              );
              return index === 0 ? (
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

      <Section
        variant="transparent"
        padding={0}
        className="home-section home-section--contact"
        id="contact-cta"
      >
        <VStack className="home-container" gap={8}>
          <Reveal>
            <Text type="label" color="secondary" className="home-kicker">
              {copy.contactLabel}
            </Text>
          </Reveal>
          <Reveal>
            <Heading level={2} className="home-contact-title">
              {copy.contactTitle}
            </Heading>
          </Reveal>
          <Reveal>
            <Text
              color="secondary"
              display="block"
              className="home-contact-body"
            >
              {copy.contactBody}
            </Text>
          </Reveal>
          <Reveal>
            <Magnetic>
              <Button
                label={copy.contactCta}
                variant="primary"
                size="lg"
                onClick={handleContactClick}
                tooltip={CONTACT_TOOLTIP[locale]}
                endContent={<Icon icon="externalLink" />}
                className="home-contact-cta"
              />
            </Magnetic>
          </Reveal>
        </VStack>
      </Section>
    </VStack>
  );
}
