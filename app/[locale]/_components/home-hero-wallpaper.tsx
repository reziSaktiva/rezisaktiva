"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

/**
 * Live wallpaper di hero Home. Poster selalu ada (CSS).
 * Video dipasang setelah mount supaya tidak hydration-mismatch
 * (`useReducedMotion` beda di SSR vs klien).
 */
export function HomeHeroWallpaper() {
  const reduceMotion = useReducedMotion();
  const [allowVideo, setAllowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setAllowVideo(reduceMotion === false);
  }, [reduceMotion]);

  useEffect(() => {
    if (!allowVideo) {
      return;
    }
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.muted = true;
    void video.play().catch(() => {
      /* Autoplay boleh ditolak browser; poster tetap terlihat. */
    });
  }, [allowVideo]);

  return (
    <div className="home-hero-wallpaper" aria-hidden="true">
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
