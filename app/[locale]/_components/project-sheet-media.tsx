"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { Center } from "@astryxdesign/core/Center";
import { Grid, GridSpan } from "@astryxdesign/core/Grid";
import { VStack } from "@astryxdesign/core/VStack";
import { workPhotoProps } from "@/lib/work-image";
import {
  isHttpLivePreviewUrl,
  isIframeFramingBlocked,
} from "@/lib/project-live-preview";
import { workTileLayout } from "./work-tile-layout";

const FRAME_PROBE_MS = 2500;

type MediaMode = "probing" | "live" | "gallery" | "empty";

function ProjectSheetGallery({
  images,
  label,
}: {
  images: readonly string[];
  label: string;
}) {
  const spanFullByIndex = new Map(
    workTileLayout(
      images.map((_, index) => ({
        id: String(index),
        featured: index === 0,
      })),
    ).map((slot) => [slot.id, slot.spanFull]),
  );

  return (
    <VStack as="section" gap={0} className="ps-gallery" aria-label={label}>
      <Grid
        columns={{ minWidth: 480, max: 2, repeat: "fit" }}
        gap={3}
        className="home-work-grid"
      >
        {images.map((src, index) => {
          const spanFull = spanFullByIndex.get(String(index)) === true;
          const featured = index === 0;
          const wide = spanFull && !featured;
          const tile = (
            <Center
              key={src}
              className={
                featured || wide
                  ? "home-work-tile home-work-tile--featured ps-reveal-media"
                  : "home-work-tile ps-reveal-media"
              }
            >
              <Center className="home-work-tile-media">
                <NextImage
                  {...workPhotoProps(
                    src,
                    featured || wide
                      ? "(max-width: 767px) 100vw, 1400px"
                      : "(max-width: 767px) 100vw, 700px",
                  )}
                />
              </Center>
            </Center>
          );
          return spanFull ? (
            <GridSpan key={src} columns="full">
              {tile}
            </GridSpan>
          ) : (
            tile
          );
        })}
      </Grid>
    </VStack>
  );
}

export function ProjectSheetMedia({
  liveHref,
  images,
  previewTitle,
  previewLabel,
  imagesLabel,
}: {
  liveHref: string | undefined;
  images: readonly string[];
  previewTitle: string;
  previewLabel: string;
  imagesLabel: string;
}) {
  const canProbe = liveHref != null && isHttpLivePreviewUrl(liveHref);
  const [mode, setMode] = useState<MediaMode>(() =>
    canProbe ? "probing" : images.length > 0 ? "gallery" : "empty",
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!canProbe || mode !== "probing") {
      return;
    }
    const timer = window.setTimeout(() => {
      const iframe = iframeRef.current;
      if (iframe && !isIframeFramingBlocked(iframe)) {
        setMode("live");
        return;
      }
      setMode(images.length > 0 ? "gallery" : "empty");
    }, FRAME_PROBE_MS);
    return () => window.clearTimeout(timer);
  }, [canProbe, mode, images.length, liveHref]);

  const onIframeLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe || mode !== "probing") {
      return;
    }
    if (isIframeFramingBlocked(iframe)) {
      return;
    }
    setMode("live");
  };

  if (mode === "gallery") {
    return <ProjectSheetGallery images={images} label={imagesLabel} />;
  }

  if (mode === "empty" || !canProbe || !liveHref) {
    return null;
  }

  return (
    <VStack
      as="section"
      gap={0}
      className={
        mode === "live" ? "ps-preview ps-preview--live" : "ps-preview"
      }
      data-state={mode}
      aria-label={previewLabel}
      aria-hidden={mode === "probing" || undefined}
    >
      <Center className="ps-preview-frame ps-reveal-media">
        <iframe
          ref={iframeRef}
          className="ps-preview-iframe"
          src={liveHref}
          title={previewTitle}
          onLoad={onIframeLoad}
        />
      </Center>
    </VStack>
  );
}
