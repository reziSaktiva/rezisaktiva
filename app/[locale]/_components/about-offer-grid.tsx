"use client";

import type { ComponentType, SVGProps } from "react";
import { Grid } from "@astryxdesign/core/Grid";
import { Heading } from "@astryxdesign/core/Heading";
import { Icon } from "@astryxdesign/core/Icon";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import type { AboutOffer } from "@/content/about";
import { RestActiveCard } from "./about-rest-active";
import { Reveal } from "./home-motion";
import { LayersIcon, ProductIcon, SparkleIcon } from "./overlay-icons";

const OFFER_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  ProductIcon,
  LayersIcon,
  SparkleIcon,
];

export function AboutOfferGrid({ offers }: { offers: readonly AboutOffer[] }) {
  return (
    <Grid columns={3} gap={4} className="about-offer-grid">
      {offers.map((offer, index) => (
        <Reveal key={offer.num}>
          <RestActiveCard
            variant="default"
            className="about-offer-card"
            label={`${offer.num} ${offer.title}`}
            extra={
              <Text aria-hidden="true" className="about-offer-mark">
                {offer.num}
              </Text>
            }
            rest={
              <VStack gap={4} className="about-offer-copy">
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
        </Reveal>
      ))}
    </Grid>
  );
}
