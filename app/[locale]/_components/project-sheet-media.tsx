"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import { workPhotoProps } from "@/lib/work-image";
import {
  isHttpLivePreviewUrl,
  isIframeFramingBlocked,
} from "@/lib/project-live-preview";
import { cn } from "@/lib/utils";
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
    <section className="ps-gallery" aria-label={label}>
      <div className="home-work-grid">
        {images.map((src, index) => {
          const spanFull = spanFullByIndex.get(String(index)) === true;
          const featured = index === 0;
          const wide = spanFull && !featured;
          const tile = (
            <div
              key={src}
              className={
                featured || wide
                  ? "home-work-tile home-work-tile--featured ps-reveal-media"
                  : "home-work-tile ps-reveal-media"
              }
            >
              <div className="home-work-tile-media">
                <NextImage
                  {...workPhotoProps(
                    src,
                    featured || wide
                      ? "(max-width: 767px) 100vw, 1400px"
                      : "(max-width: 767px) 100vw, 700px",
                  )}
                />
              </div>
            </div>
          );
          return spanFull ? (
            <div key={src} className="col-span-full">
              {tile}
            </div>
          ) : (
            tile
          );
        })}
      </div>
    </section>
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
    <section
      className={cn(
        "ps-preview",
        mode === "live" && "ps-preview--live",
      )}
      data-state={mode}
      aria-label={previewLabel}
      aria-hidden={mode === "probing" || undefined}
    >
      <div className="ps-preview-frame ps-reveal-media">
        <iframe
          ref={iframeRef}
          className="ps-preview-iframe"
          src={liveHref}
          title={previewTitle}
          onLoad={onIframeLoad}
        />
      </div>
    </section>
  );
}
