"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "@/lib/motion";
import { subscribePageScroll } from "./smooth-scroll";

/**
 * Live wallpaper Home, nempel di viewport (T-042.1).
 * Opacity ikut posisi `#about`: penuh di hero, memudar saat scroll ke
 * About, kembali saat scroll ke hero. Poster selalu ada (CSS). Video
 * dipasang setelah mount supaya tidak hydration-mismatch.
 */
export function HomeHeroWallpaper() {
  const reduceMotion = useReducedMotion();
  const [allowVideo, setAllowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const opacity = useMotionValue(1);

  useEffect(() => {
    setAllowVideo(reduceMotion === false);
  }, [reduceMotion]);

  useLayoutEffect(() => {
    const sync = () => {
      opacity.set(wallpaperOpacityFromAbout());
    };

    sync();
    const unsubscribe = subscribePageScroll(sync);
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, [opacity]);

  useLayoutEffect(() => {
    if (!allowVideo) {
      return;
    }
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = true;

    const syncPlayback = (value: number) => {
      if (value <= 0.02) {
        video.pause();
        return;
      }
      if (video.paused) {
        void video.play().catch(() => {
          /* Autoplay boleh ditolak browser; poster tetap terlihat. */
        });
      }
    };

    syncPlayback(opacity.get());
    return opacity.on("change", syncPlayback);
  }, [allowVideo, opacity]);

  return (
    <motion.div
      className="home-hero-wallpaper"
      style={{ opacity }}
      aria-hidden="true"
    >
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
    </motion.div>
  );
}

function wallpaperOpacityFromAbout(): number {
  const about = document.getElementById("about");
  if (!about) {
    return 1;
  }

  const top = about.getBoundingClientRect().top;
  const start = window.innerHeight;
  const end = Number.parseFloat(getComputedStyle(about).scrollMarginTop) || 0;
  const span = start - end;
  if (span <= 0) {
    return top > end ? 1 : 0;
  }

  const progress = (start - top) / span;
  if (progress <= 0) {
    return 1;
  }
  if (progress >= 1) {
    return 0;
  }
  return 1 - progress;
}
