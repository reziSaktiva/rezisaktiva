"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";
import { readWindowScrollY, subscribePageScroll } from "./smooth-scroll";

/**
 * Live wallpaper Home, nempel di viewport (T-042.1).
 * Opacity ikut posisi `#about`: penuh di hero, memudar saat scroll ke
 * About, kembali saat scroll ke hero. Poster selalu ada (CSS). Video
 * dipasang setelah mount supaya tidak hydration-mismatch.
 *
 * Jarak fade diukur saat resize saja — bukan getBoundingClientRect
 * di setiap frame Lenis (itu membuat scroll mentok di bawah).
 */
export function HomeHeroWallpaper() {
  const reduceMotion = useReducedMotion();
  const [allowVideo, setAllowVideo] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeRangeRef = useRef({ start: 0, end: Number.NaN });
  const hiddenRef = useRef(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setAllowVideo(reduceMotion === false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [reduceMotion]);

  useLayoutEffect(() => {
    const measureFadeRange = () => {
      const about = document.getElementById("about");
      if (!about) {
        fadeRangeRef.current = { start: 0, end: Number.NaN };
        return;
      }

      const documentTop = documentOffsetTop(about);
      const fadeStartsWhenAboutHits = window.innerHeight;
      const fadeEndsWhenAboutHits =
        Number.parseFloat(getComputedStyle(about).scrollMarginTop) || 0;
      fadeRangeRef.current = {
        start: documentTop - fadeStartsWhenAboutHits,
        end: documentTop - fadeEndsWhenAboutHits,
      };
    };

    const sync = () => {
      const node = rootRef.current;
      if (!node) {
        return;
      }

      const opacity = wallpaperOpacityFromScroll(
        readWindowScrollY(),
        fadeRangeRef.current,
      );
      node.style.opacity = String(opacity);

      const hide = opacity <= 0.02;
      if (hide === hiddenRef.current) {
        return;
      }
      hiddenRef.current = hide;
      node.style.visibility = hide ? "hidden" : "visible";

      const video = videoRef.current;
      if (!video) {
        return;
      }
      if (hide) {
        video.pause();
        return;
      }
      if (video.paused) {
        void video.play().catch(() => {
          /* Autoplay boleh ditolak browser; poster tetap terlihat. */
        });
      }
    };

    const onViewportChange = () => {
      measureFadeRange();
      sync();
    };

    measureFadeRange();
    sync();

    const unsubscribe = subscribePageScroll(sync);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", onViewportChange);
    window.addEventListener("hashchange", onViewportChange);

    const about = document.getElementById("about");
    const resizeObserver =
      typeof ResizeObserver === "function"
        ? new ResizeObserver(onViewportChange)
        : null;
    if (about) {
      resizeObserver?.observe(about);
    }

    return () => {
      unsubscribe();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("hashchange", onViewportChange);
      resizeObserver?.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    if (!allowVideo) {
      return;
    }
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = true;
    if (hiddenRef.current) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      /* Autoplay boleh ditolak browser; poster tetap terlihat. */
    });
  }, [allowVideo]);

  return (
    <div ref={rootRef} className="home-hero-wallpaper" aria-hidden="true">
      {allowVideo ? (
        <video
          ref={videoRef}
          className="home-hero-wallpaper-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/home-hero-live.jpg"
          disablePictureInPicture
          tabIndex={-1}
        >
          <source src="/media/home-hero-live.mp4" type="video/mp4" />
        </video>
      ) : null}
      <div className="home-hero-wallpaper-veil" />
    </div>
  );
}

function documentOffsetTop(element: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = element;
  while (node) {
    top += node.offsetTop;
    const parent = node.offsetParent;
    node = parent instanceof HTMLElement ? parent : null;
  }
  return top;
}

function wallpaperOpacityFromScroll(
  scrollY: number,
  range: { start: number; end: number },
): number {
  const span = range.end - range.start;
  if (!Number.isFinite(span) || span <= 0) {
    return 1;
  }

  const progress = (scrollY - range.start) / span;
  if (progress <= 0) {
    return 1;
  }
  if (progress >= 1) {
    return 0;
  }
  return 1 - progress;
}
