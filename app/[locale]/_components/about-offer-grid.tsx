"use client";

import type { ComponentType, SVGProps } from "react";
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
    <div className="about-offer-grid grid gap-4">
      {offers.map((offer, index) => {
        const OfferIcon = OFFER_ICONS[index] ?? ProductIcon;
        return (
          <Reveal key={offer.num}>
            <RestActiveCard
              variant="default"
              className="about-offer-card"
              label={`${offer.num} ${offer.title}`}
              extra={
                <span aria-hidden="true" className="about-offer-mark">
                  {offer.num}
                </span>
              }
              rest={
                <div className="about-offer-copy flex flex-col gap-4">
                  <OfferIcon className="about-offer-icon" />
                  <h3 className="about-card-title">{offer.title}</h3>
                </div>
              }
              active={
                <p className="about-card-body">{offer.body}</p>
              }
            />
          </Reveal>
        );
      })}
    </div>
  );
}
