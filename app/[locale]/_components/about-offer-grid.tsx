import type { ComponentType, SVGProps } from "react";
import type { WorkflowOffer } from "@/content/workflow";
import { Card } from "@/components/ui/card";
import { Reveal } from "./home-motion";
import { LayersIcon, ProductIcon, SparkleIcon } from "./overlay-icons";

const OFFER_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  ProductIcon,
  LayersIcon,
  SparkleIcon,
];

export function AboutOfferGrid({
  offers,
}: {
  offers: readonly WorkflowOffer[];
}) {
  return (
    <div className="about-offer-grid grid gap-4">
      {offers.map((offer, index) => {
        const OfferIcon = OFFER_ICONS[index] ?? ProductIcon;
        return (
          <Reveal key={offer.num}>
            <Card className="about-offer-card gap-3 border border-border bg-card p-6 text-base text-foreground shadow-none ring-0">
              <span aria-hidden="true" className="about-offer-mark">
                {offer.num}
              </span>
              <div className="flex flex-col gap-3">
                <div className="about-offer-copy flex flex-col gap-4">
                  <OfferIcon className="about-offer-icon" />
                  <h3 className="about-card-title">{offer.title}</h3>
                </div>
                <p className="about-card-body">{offer.body}</p>
              </div>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
