"use client";

import type { ComponentType, SVGProps } from "react";
import { Collapsible, CollapsibleGroup } from "@astryxdesign/core/Collapsible";
import { HStack } from "@astryxdesign/core/HStack";
import { Icon } from "@astryxdesign/core/Icon";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import type { AboutStep } from "@/content/about";
import { BuildIcon, DesignIcon, DiscoverIcon, ShipIcon } from "./overlay-icons";

const STEP_ICONS: readonly ComponentType<SVGProps<SVGSVGElement>>[] = [
  DiscoverIcon,
  DesignIcon,
  BuildIcon,
  ShipIcon,
];

export function AboutProcess({ steps }: { steps: readonly AboutStep[] }) {
  return (
    <CollapsibleGroup
      type="single"
      defaultValue="01"
      hasDividers
      density="spacious"
    >
      {steps.map((step, index) => (
        <Collapsible
          key={step.num}
          value={step.num}
          trigger={
            <HStack gap={4} align="center" className="about-process-trigger">
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
  );
}
