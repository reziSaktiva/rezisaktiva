import NextImage from "next/image";
import { Center } from "@astryxdesign/core/Center";
import { Heading } from "@astryxdesign/core/Heading";
import { Link } from "@astryxdesign/core/Link";
import { Section } from "@astryxdesign/core/Section";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import { HERO_PORTRAIT_SRC, HOME_COPY } from "@/content/home";
import { PERSON, PERSON_WORKPLACE_COPY } from "@/content/person";
import type { Locale } from "@/lib/locale";
import { projectsHref } from "@/lib/site-url";
import { HeroWords, Reveal } from "./home-motion";
import { HomeWorkAllLink } from "./home-work-all-link";
import { HomeWorkTeasers } from "./home-work-teasers";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = HOME_COPY[locale];
  const workHref = projectsHref(locale);

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
        className="home-section home-section--now"
        id="now"
      >
        <VStack className="home-container" gap={8}>
          <Reveal>
            <Text type="label" color="secondary" className="home-kicker">
              {copy.nowLabel}
            </Text>
          </Reveal>
          <Reveal>
            <Heading level={2} className="home-now-title">
              {PERSON_WORKPLACE_COPY[locale].prefix}{" "}
              <Link
                href={PERSON.worksFor.url}
                isExternalLink
                hasUnderline
                newTabLabel={PERSON_WORKPLACE_COPY[locale].newTab}
              >
                {PERSON.worksFor.name}
              </Link>
            </Heading>
          </Reveal>
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
            <HomeWorkAllLink href={workHref} label={copy.workAll} />
          </Reveal>

          <HomeWorkTeasers locale={locale} teasers={copy.teasers} />
        </VStack>
      </Section>
    </VStack>
  );
}
