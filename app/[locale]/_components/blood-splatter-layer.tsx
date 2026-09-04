"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SOURCE_SELECTOR = [
  ".site-nav-item[data-selected]",
  ".site-locale-switch-item[data-selected]",
  ".site-mobile-nav-item[data-selected]",
].join(",");

const MAX_DROPS = 220;
const MAX_STAINS = 90;

type Rgba = { r: number; g: number; b: number };

type Drop = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  rot: number;
  stretch: number;
  life: number;
  maxLife: number;
  color: Rgba;
  drip: boolean;
};

type Stain = {
  x: number;
  y: number;
  r: number;
  rot: number;
  stretch: number;
  color: Rgba;
  alpha: number;
  satellites: { dx: number; dy: number; r: number }[];
};

function hexToRgb(raw: string): Rgba {
  const hex = raw.trim();
  const short = /^#([\da-f]{3})$/i.exec(hex);
  if (short) {
    const n = short[1];
    return {
      r: Number.parseInt(n[0] + n[0], 16),
      g: Number.parseInt(n[1] + n[1], 16),
      b: Number.parseInt(n[2] + n[2], 16),
    };
  }
  const full = /^#([\da-f]{6})$/i.exec(hex);
  if (full) {
    const n = full[1];
    return {
      r: Number.parseInt(n.slice(0, 2), 16),
      g: Number.parseInt(n.slice(2, 4), 16),
      b: Number.parseInt(n.slice(4, 6), 16),
    };
  }
  const rgb = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i.exec(hex);
  if (rgb) {
    return {
      r: Number(rgb[1]),
      g: Number(rgb[2]),
      b: Number(rgb[3]),
    };
  }
  return { r: 107, g: 28, b: 35 };
}

function mix(a: Rgba, b: Rgba, t: number): Rgba {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  };
}

function fill(ctx: CanvasRenderingContext2D, c: Rgba, a: number) {
  ctx.fillStyle = `rgba(${c.r | 0},${c.g | 0},${c.b | 0},${a})`;
}

function drawBlob(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  rot: number,
  stretch: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(1, stretch);
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.bezierCurveTo(r * 0.85, -r * 0.7, r, -r * 0.15, r * 0.55, r * 0.35);
  ctx.bezierCurveTo(r * 0.2, r, -r * 0.15, r * 1.05, -r * 0.55, r * 0.4);
  ctx.bezierCurveTo(-r * 1.05, -r * 0.1, -r * 0.7, -r * 0.75, 0, -r);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawTear(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  rot: number,
  stretch: number,
) {
  const h = r * stretch;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.bezierCurveTo(r * 0.7, -h * 0.2, r * 0.85, h * 0.35, 0, h);
  ctx.bezierCurveTo(-r * 0.85, h * 0.35, -r * 0.7, -h * 0.2, 0, -h);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function isShown(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) {
    return false;
  }
  if (el.closest("[hidden]")) {
    return false;
  }
  const style = getComputedStyle(el);
  return style.visibility !== "hidden" && style.display !== "none";
}

function origins(): HTMLElement[] {
  const selected = Array.from(
    document.querySelectorAll<HTMLElement>(SOURCE_SELECTOR),
  ).filter(isShown);
  if (selected.length > 0) {
    return selected;
  }
  const fallback = document.querySelector(".site-nav-toggle");
  if (fallback instanceof HTMLElement && isShown(fallback)) {
    return [fallback];
  }
  return [];
}

function readPalette(): { clot: Rgba; arterial: Rgba; dark: Rgba } {
  const root = getComputedStyle(document.documentElement);
  const clot = hexToRgb(root.getPropertyValue("--color-accent") || "#6b1c23");
  const arterial = hexToRgb(
    root.getPropertyValue("--color-accent-muted") || "#8a242e",
  );
  return {
    clot,
    arterial,
    dark: mix(clot, { r: 18, g: 4, b: 6 }, 0.55),
  };
}

function pickColor(palette: ReturnType<typeof readPalette>): Rgba {
  const roll = Math.random();
  if (roll < 0.35) {
    return palette.dark;
  }
  if (roll < 0.75) {
    return palette.clot;
  }
  return palette.arterial;
}

/**
 * T-040.6 / ADR-030 — percikan selected ke seluruh viewport.
 * Wrapper selalu sama SSR/klien (anti hydration). Reduced-motion: canvas
 * tidak diisi; CSS juga `display: none`.
 */
export function BloodSplatterLayer() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const drops: Drop[] = [];
    const stains: Stain[] = [];
    let palette = readPalette();
    let sourceKey = "";
    let raf = 0;
    let last = performance.now();
    let emitAcc = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const sources = () => origins();

    const pushDrop = (drop: Drop) => {
      if (drops.length >= MAX_DROPS) {
        drops.shift();
      }
      drops.push(drop);
    };

    const pushStain = (stain: Stain) => {
      if (stains.length >= MAX_STAINS) {
        stains.shift();
      }
      stains.push(stain);
    };

    const splatAt = (x: number, y: number, scale: number) => {
      const satellites = Array.from({ length: 4 + (Math.random() * 5) | 0 }, () => {
        const ang = Math.random() * Math.PI * 2;
        const dist = 4 + Math.random() * 18 * scale;
        return {
          dx: Math.cos(ang) * dist,
          dy: Math.sin(ang) * dist * 1.15,
          r: 1.2 + Math.random() * 4 * scale,
        };
      });
      pushStain({
        x,
        y,
        r: 7 + Math.random() * 16 * scale,
        rot: Math.random() * Math.PI,
        stretch: 0.65 + Math.random() * 0.7,
        color: pickColor(palette),
        alpha: 0.55 + Math.random() * 0.35,
        satellites,
      });
    };

    const emitFromRect = (
      rect: DOMRect,
      kind: "burst" | "drip" | "spray",
    ) => {
      const cx = rect.left + rect.width * (0.25 + Math.random() * 0.5);
      const cy = rect.top + rect.height * (kind === "drip" ? 0.92 : Math.random());
      const color = pickColor(palette);
      if (kind === "burst") {
        const count = 22 + ((Math.random() * 14) | 0);
        for (let i = 0; i < count; i += 1) {
          const ang = -Math.PI * 0.15 + Math.random() * (Math.PI + 0.3);
          const speed = 2.2 + Math.random() * 7.5;
          pushDrop({
            x: cx + (Math.random() - 0.5) * rect.width,
            y: cy + (Math.random() - 0.5) * rect.height * 0.4,
            vx: Math.cos(ang) * speed,
            vy: Math.sin(ang) * speed * 0.45 + Math.random() * 2.4,
            r: 2.2 + Math.random() * 5.5,
            rot: ang,
            stretch: 1.4 + Math.random() * 1.8,
            life: 0,
            maxLife: 900 + Math.random() * 1400,
            color,
            drip: Math.random() < 0.35,
          });
        }
        splatAt(cx, cy + 6, 1.15);
        return;
      }
      if (kind === "spray") {
        const ang = Math.PI * 0.15 + (Math.random() - 0.5) * 1.4;
        const speed = 3 + Math.random() * 6;
        pushDrop({
          x: cx,
          y: cy,
          vx: Math.cos(ang) * speed * (Math.random() < 0.5 ? -1 : 1),
          vy: 1.2 + Math.random() * 3.5,
          r: 1.4 + Math.random() * 3.2,
          rot: ang,
          stretch: 1.6 + Math.random() * 1.4,
          life: 0,
          maxLife: 700 + Math.random() * 900,
          color,
          drip: false,
        });
        return;
      }
      pushDrop({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 0.45,
        vy: 0.35 + Math.random() * 0.9,
        r: 3.2 + Math.random() * 6.5,
        rot: 0,
        stretch: 1.8 + Math.random() * 2.4,
        life: 0,
        maxLife: 2200 + Math.random() * 1800,
        color,
        drip: true,
      });
    };

    const sourceSignature = (els: HTMLElement[]) =>
      els
        .map((el) => el.getAttribute("href") ?? el.textContent?.trim() ?? "")
        .join("|");

    const syncSources = (burst: boolean) => {
      palette = readPalette();
      const els = sources();
      const rects = els.map((el) => el.getBoundingClientRect());
      const key = sourceSignature(els);
      if (key !== sourceKey) {
        sourceKey = key;
        burst = true;
      }
      if (burst) {
        for (const rect of rects) {
          emitFromRect(rect, "burst");
        }
      }
      return rects;
    };

    const tick = (now: number) => {
      const dt = Math.min(32, now - last);
      last = now;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const rects = syncSources(false);

      emitAcc += dt;
      if (rects.length > 0 && emitAcc > 42) {
        emitAcc = 0;
        for (const rect of rects) {
          emitFromRect(rect, Math.random() < 0.55 ? "drip" : "spray");
          if (Math.random() < 0.18) {
            emitFromRect(rect, "drip");
          }
        }
      }

      ctx.clearRect(0, 0, w, h);

      for (let i = stains.length - 1; i >= 0; i -= 1) {
        const s = stains[i];
        s.alpha -= dt * 0.000055;
        if (s.alpha <= 0.02) {
          stains.splice(i, 1);
          continue;
        }
        fill(ctx, s.color, s.alpha);
        drawBlob(ctx, s.x, s.y, s.r, s.rot, s.stretch);
        for (const sat of s.satellites) {
          fill(ctx, s.color, s.alpha * 0.85);
          drawBlob(ctx, s.x + sat.dx, s.y + sat.dy, sat.r, s.rot, 0.8);
        }
      }

      for (let i = drops.length - 1; i >= 0; i -= 1) {
        const d = drops[i];
        d.life += dt;
        d.vy += d.drip ? 0.12 : 0.2;
        d.vx *= d.drip ? 0.988 : 0.994;
        d.vy *= d.drip ? 0.996 : 0.999;
        if (d.drip) {
          d.x += Math.sin((d.life + d.y) * 0.008) * 0.18;
        }
        d.x += d.vx * (dt / 16.67);
        d.y += d.vy * (dt / 16.67);
        d.stretch = Math.min(3.6, 1.1 + Math.abs(d.vy) * 0.22);
        d.rot = Math.atan2(d.vy, d.vx + 0.0001) - Math.PI / 2;

        const alpha = Math.max(0, 1 - d.life / d.maxLife) * 0.92;
        fill(ctx, d.color, alpha);
        if (d.drip) {
          drawTear(ctx, d.x, d.y, d.r, d.rot, d.stretch);
        } else {
          drawBlob(ctx, d.x, d.y, d.r, d.rot, Math.min(1.6, d.stretch * 0.55));
        }

        if (
          d.vy > 3.2 &&
          Math.random() < 0.018 &&
          d.y > 80
        ) {
          splatAt(d.x, d.y, 0.55 + Math.random() * 0.7);
          if (d.r > 4.5 && drops.length < MAX_DROPS - 4) {
            d.r *= 0.55;
            pushDrop({
              ...d,
              x: d.x + (Math.random() - 0.5) * 10,
              vx: d.vx + (Math.random() - 0.5) * 2.4,
              r: d.r * 0.7,
              life: 0,
              maxLife: d.maxLife * 0.6,
            });
          }
        }

        if (
          d.life >= d.maxLife ||
          d.y > h + 40 ||
          d.x < -40 ||
          d.x > w + 40
        ) {
          if (d.y <= h + 8 && d.y > 40) {
            splatAt(d.x, Math.min(d.y, h - 8), 0.7);
          }
          drops.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    syncSources(true);
    last = performance.now();
    raf = requestAnimationFrame(tick);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const observer = new MutationObserver(() => {
      syncSources(true);
    });
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["data-selected", "hidden"],
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="site-blood-splatter" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
