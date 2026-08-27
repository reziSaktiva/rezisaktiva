"use client";

import { useEffect } from "react";
import NextImage from "next/image";
import { BottomSheet } from "@astryxdesign/core/BottomSheet";
import { Button } from "@astryxdesign/core/Button";
import { Center } from "@astryxdesign/core/Center";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Icon } from "@astryxdesign/core/Icon";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import type { WorkItem } from "@/content/work";
import {
  WORK_SHEET_COPY,
  getWorkSheet,
} from "@/content/work-sheet";
import type { Locale } from "@/lib/locale";
import { CloseIcon } from "./overlay-icons";

function isRepoUrl(url: string): boolean {
  return url.includes("github.com");
}

export function ProjectSheet({
  locale,
  item,
  onClose,
}: {
  locale: Locale;
  item: WorkItem | null;
  onClose: () => void;
}) {
  const labels = WORK_SHEET_COPY[locale];
  const sheet = item ? getWorkSheet(locale, item.id) : undefined;
  const isOpen = item != null && sheet != null;
  const images = item ? [item.imageSrc] : [];

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    window.dispatchEvent(new Event("rz-project-sheet-open"));
    document.documentElement.classList.add("ps-lock");
    return () => {
      document.documentElement.classList.remove("ps-lock");
    };
  }, [isOpen]);

  useEffect(() => {
    const close = () => onClose();
    window.addEventListener("rz-contact-open", close);
    window.addEventListener("rz-quick-info-open", close);
    return () => {
      window.removeEventListener("rz-contact-open", close);
      window.removeEventListener("rz-quick-info-open", close);
    };
  }, [onClose]);

  const liveHref =
    item?.href && !isRepoUrl(item.href) ? item.href : undefined;
  const repoHref =
    item?.href && isRepoUrl(item.href) ? item.href : sheet?.gitHref;

  return (
    <BottomSheet
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
      purpose="info"
      height="tall"
      label={item?.name ?? labels.close}
    >
      {item && sheet ? (
        <VStack gap={4} padding={4} className="ps-body">
          <HStack align="center" justify="between">
            <Heading level={2} className="ps-title">
              {item.name}
            </Heading>
            <Button
              label={labels.close}
              variant="ghost"
              size="sm"
              isIconOnly
              icon={<Icon icon={CloseIcon} />}
              onClick={onClose}
            />
          </HStack>
          {images.map((src) => (
            <Center key={src} className="ps-media">
              <NextImage
                src={src}
                alt=""
                fill
                sizes="100vw"
              />
            </Center>
          ))}
          <HStack gap={6} wrap="wrap" className="ps-meta">
            <VStack gap={1}>
              <Text size="sm" color="secondary" className="ps-label">
                {labels.servicesLabel}
              </Text>
              {sheet.services.map((service) => (
                <Text key={service}>{service}</Text>
              ))}
            </VStack>
            <VStack gap={1}>
              <Text size="sm" color="secondary" className="ps-label">
                {labels.locationLabel}
              </Text>
              <Text>{sheet.locationOrCompany}</Text>
            </VStack>
            <VStack gap={1}>
              <Text size="sm" color="secondary" className="ps-label">
                {labels.yearLabel}
              </Text>
              <Text>{item.year}</Text>
            </VStack>
          </HStack>
          <VStack gap={1}>
            <Text size="sm" color="secondary" className="ps-label">
              {labels.descriptionLabel}
            </Text>
            <Text display="block" className="ps-description">
              {sheet.description}
            </Text>
          </VStack>
          {liveHref || repoHref ? (
            <HStack gap={5} wrap="wrap">
              {liveHref ? (
                <Link href={liveHref} target="_blank">
                  {labels.liveLabel}
                </Link>
              ) : null}
              {repoHref ? (
                <Link href={repoHref} target="_blank">
                  {labels.repoLabel}
                </Link>
              ) : null}
            </HStack>
          ) : null}
        </VStack>
      ) : null}
    </BottomSheet>
  );
}
