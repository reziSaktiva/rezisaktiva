"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Contour-field background (T-079.3, ADR-052): a single full-screen fragment
 * shader drawn with raw WebGL. No three.js or other library.
 *
 * Behavior contract:
 * - Client-only and lazy: nothing touches WebGL until the canvas is near the
 *   viewport, so first paint is never blocked (the wrapper paints a static
 *   CSS contour pattern straight from SSR).
 * - Pauses when off-screen or when the tab is hidden (no rAF while idle).
 * - Reacts to a fine pointer (ripple of sharper contour lines near it).
 * - `prefers-reduced-motion`: one static frame, no loop, no pointer.
 * - No WebGL (or context lost): the static CSS fallback stays visible.
 */

const VERTEX_SOURCE =
  "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

// Source: design-mockups/shared.js (v5) contour field, trimmed to one tone.
const FRAGMENT_SOURCE = [
  "precision highp float;",
  "uniform vec2 R;uniform float T;uniform vec2 M;uniform float A;uniform float D;uniform float S;",
  "float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}",
  "float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}",
  "float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.02+7.1;a*=.5;}return v;}",
  "void main(){vec2 uv=gl_FragCoord.xy/R;float asp=R.x/R.y;vec2 p=vec2(uv.x*asp,uv.y);float t=T*.05;",
  "vec2 q=vec2(fbm(p*1.5+t),fbm(p*1.5-t+3.));",
  "float ht=fbm(p*1.6+q*1.4+vec2(t,-t)+S*.15);",
  "vec2 m=vec2(M.x*asp,M.y);float d=distance(p,m);float mask=smoothstep(.30,.0,d)*A;",
  "ht+=mask*.045*sin(d*26.-T*1.2);",
  "float f=fract(ht*15.);float dl=abs(f-.5);",
  "float sharp=1.-smoothstep(.015,.05,dl);float soft=1.-smoothstep(.0,.5,dl);",
  "float li=mix(soft*.07,sharp*.9,mask);",
  "float tone=.80+.17*fbm(p*.7+q*.9);",
  "vec3 lc=vec3(tone)-li*vec3(.72);",
  "vec3 dc=vec3(.012+.03*fbm(p*.9+q))+li*vec3(.55);",
  "vec3 c=mix(lc,dc,D);",
  "c+=(h(gl_FragCoord.xy+fract(T))-.5)*.05;",
  "gl_FragColor=vec4(c,1.);}",
].join("");

/** Time offset used for the single reduced-motion frame. */
const STATIC_TIME = 40;
/** Render scale vs CSS pixels: the field is soft, so 0.75x is enough. */
const RENDER_SCALE = 0.75;
const MAX_DPR = 1.5;

function compile(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

export function ContourField({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapNode = wrapRef.current;
    const canvasNode = canvasRef.current;
    if (!wrapNode || !canvasNode) {
      return;
    }
    // Aliases keep the narrowed types inside hoisted inner functions.
    const wrap: HTMLDivElement = wrapNode;
    const canvas: HTMLCanvasElement = canvasNode;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const darkValue = tone === "dark" ? 1 : 0;

    let teardown: (() => void) | null = null;
    let started = false;

    const start = () => {
      if (started) {
        return;
      }
      started = true;

      const gl = canvas.getContext("webgl", {
        antialias: false,
        alpha: false,
        powerPreference: "low-power",
      });
      if (!gl) {
        return;
      }
      const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SOURCE);
      const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SOURCE);
      const program = gl.createProgram();
      if (!vs || !fs || !program) {
        return;
      }
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        return;
      }
      gl.useProgram(program);

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW,
      );
      const position = gl.getAttribLocation(program, "p");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      const uniform = {
        R: gl.getUniformLocation(program, "R"),
        T: gl.getUniformLocation(program, "T"),
        M: gl.getUniformLocation(program, "M"),
        A: gl.getUniformLocation(program, "A"),
        D: gl.getUniformLocation(program, "D"),
        S: gl.getUniformLocation(program, "S"),
      };

      let visible = false;
      let raf = 0;
      let startedAt = 0;
      let pointerX = 0.5;
      let pointerY = 0.5;
      let smoothX = 0.5;
      let smoothY = 0.5;
      let pointerInside = false;
      let influence = 0;

      const isStatic = () => reducedQuery.matches;

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.max(2, Math.round(rect.width * dpr * RENDER_SCALE));
        canvas.height = Math.max(
          2,
          Math.round(rect.height * dpr * RENDER_SCALE),
        );
        gl.viewport(0, 0, canvas.width, canvas.height);
      };

      const draw = (time: number) => {
        gl.uniform2f(uniform.R, canvas.width, canvas.height);
        gl.uniform1f(uniform.T, time);
        gl.uniform2f(uniform.M, smoothX, smoothY);
        gl.uniform1f(uniform.A, influence);
        gl.uniform1f(uniform.D, darkValue);
        gl.uniform1f(uniform.S, window.scrollY / window.innerHeight);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      };

      const frame = (now: number) => {
        raf = 0;
        if (!visible || document.hidden || isStatic()) {
          return;
        }
        smoothX += (pointerX - smoothX) * 0.09;
        smoothY += (pointerY - smoothY) * 0.09;
        influence += ((pointerInside ? 1 : 0) - influence) * 0.06;
        draw((now - startedAt) / 1000);
        raf = requestAnimationFrame(frame);
      };

      const sync = () => {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
        if (!visible || document.hidden) {
          return;
        }
        if (isStatic()) {
          draw(STATIC_TIME);
          return;
        }
        if (!startedAt) {
          startedAt = performance.now();
        }
        raf = requestAnimationFrame(frame);
      };

      const onPointerMove = (event: PointerEvent) => {
        if (isStatic() || !finePointer.matches || !visible) {
          return;
        }
        const rect = wrap.getBoundingClientRect();
        pointerInside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        pointerX = Math.min(
          1,
          Math.max(0, (event.clientX - rect.left) / rect.width),
        );
        pointerY = Math.min(
          1,
          Math.max(0, 1 - (event.clientY - rect.top) / rect.height),
        );
      };

      const onContextLost = (event: Event) => {
        event.preventDefault();
        cleanup();
        wrap.dataset.glReady = "false";
      };

      const observer = new IntersectionObserver((entries) => {
        visible = entries[entries.length - 1]?.isIntersecting ?? false;
        sync();
      });
      const resizeObserver = new ResizeObserver(() => {
        resize();
        if (visible && isStatic()) {
          draw(STATIC_TIME);
        }
      });

      const onVisibility = () => sync();
      const onMotionChange = () => sync();

      function cleanup() {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
        observer.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", onVisibility);
        reducedQuery.removeEventListener("change", onMotionChange);
        canvas.removeEventListener("webglcontextlost", onContextLost);
      }

      resize();
      wrap.dataset.glReady = "true";
      observer.observe(wrap);
      resizeObserver.observe(canvas);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      reducedQuery.addEventListener("change", onMotionChange);
      canvas.addEventListener("webglcontextlost", onContextLost);

      teardown = () => {
        cleanup();
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    };

    // Lazy start: only touch WebGL once the field is close to the viewport.
    const gate = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          gate.disconnect();
          start();
        }
      },
      { rootMargin: "300px 0px" },
    );
    gate.observe(wrap);

    return () => {
      gate.disconnect();
      teardown?.();
    };
  }, [tone]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={cn(
        // Static fallback: faint concentric contour lines on ink. Stays visible
        // until the canvas is ready (data-gl-ready) so first paint has a field.
        "group/field pointer-events-none absolute inset-0 overflow-hidden",
        tone === "dark"
          ? "bg-ink bg-[repeating-radial-gradient(circle_at_28%_18%,transparent_0_34px,var(--color-rule-inv)_34px_35px)]"
          : "bg-paper bg-[repeating-radial-gradient(circle_at_28%_18%,transparent_0_34px,var(--color-rule)_34px_35px)]",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-700 group-data-[gl-ready=true]/field:opacity-100"
      />
    </div>
  );
}
