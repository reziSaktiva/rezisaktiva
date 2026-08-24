"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { Center } from "@astryxdesign/core/Center";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { Link } from "@astryxdesign/core/Link";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { HERO_PORTRAIT_SRC, HOME_COPY } from "@/content/home";
import type { Locale } from "@/lib/locale";
import { HeroWords, Magnetic, Reveal } from "./home-motion";
import { WorkTile } from "./work-tile";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];
  const workHref = `/${locale}/work`;

  return (
    <VStack className="home-page">
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
          <Reveal axis="horizontal" className="home-work-head">
            <VStack gap={3}>
              <Text type="label" color="secondary" className="home-kicker">
                {copy.workLabel}
              </Text>
              <Heading level={2} className="home-work-title">
                {copy.workTitle}
              </Heading>
            </VStack>
            <Magnetic>
              <Link
                as={NextLink}
                href={workHref}
                color="secondary"
                className="home-cta-underline"
              >
                {copy.workAll}
              </Link>
            </Magnetic>
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
    </VStack>
  );
}
