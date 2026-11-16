# Code Discipline

> Status: **Baseline** — daily implementation playbook for `app/` (locked 2026-08-28, issue #52 / T-027; styling updated by **ADR-028** / T-037.4). Not a Living Document: it does not contain phase/progress. Material changes → new ADR + revision of this document.

This document is the “when to use what” reference when writing code. Required agent summary: `.cursor/rules/code-discipline.mdc`. Component conventions: `.cursor/rules/shadcn.mdc`.

Applies to **new work**. Clean up existing `app/` code only incrementally after this rule is locked — not as a big rewrite.

---

# Purpose

One reference for spacing, styling layers, Server/Client boundaries, and the Next.js render model — aligned with **ADR-015** (static-first SSG) and **ADR-028** (shadcn/ui + Tailwind CSS v4).

---

# 1. Spacing — gap / padding / margin

The CSS token scale is based on **4px** (`var(--spacing-*)` in `app/globals.css`). Tailwind `gap-*` utilities use the same scale (example: `gap-8` = `--spacing-8` = 32px). Not random px strings in JSX.

| Use | For | Do Not |
| --- | --- | ------ |
| **`gap`** | Space **between** children in one flex/grid (`gap-8`, `flex flex-col gap-3`) | `margin` on each child to spread siblings; **`space-y-*` / `space-x-*`** |
| **`padding`** | Inset **inside** one container (content vs edge) | `padding` on the parent **and** `margin` on the child for the same thing |
| **`margin`** | Rarely. Reset (`margin: 0`) or rhythm in overlay CSS that is **not** a stack child | Wrapping a component with `<div>` only to add margin |

Rhythm used in production code:

* Tight internal rhythm (icon + text, list item): `gap-2`
* Kicker + title: `gap-3`
* One section body (kicker → body → grid): `gap-8` on `flex flex-col` + `className="home-container"`
* Page sections: viewport rhythm in scoped CSS (`.about-section`, `.work-hero`) — `clamp()` / vw in scoped classes, not JSX

**Use this**

```tsx
<section className="about-section">
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-3">
      <p className="home-kicker">{kicker}</p>
      <h2 className="about-section-title">{title}</h2>
    </div>
  </div>
</section>
```

**Do not use this**

```tsx
<div style={{ marginBottom: 32 }}>
  <h2>{title}</h2>
</div>
<div className="space-y-8 p-[13px]">
```

In `globals.css`: prefer `var(--spacing-4)`, not random `16px` / `1rem`. `clamp()` / breakpoint values for page craft (Hess, overlay) are allowed when they are in scoped classes — not scattered hex/px in JSX.

---

# 2. Components vs Tailwind vs Custom CSS

Order (top = try first):

1. **Existing shadcn primitives** — `components/ui/` (Dialog, Sheet, Drawer, Button, …) already skinned to the **gothic-blood** palette (ADR-029). Check `pnpm exec shadcn docs <Name>` before inventing. Do not add catalog primitives (Sidebar, Chart, Sonner, …) without a task. **Not** yellow pills / cream trays as the identity contract (that is the T-038 archive; ADR-028 point 2 “not a redesign” clause has been replaced by ADR-029).
2. **Token-backed Tailwind layout** — `flex` / `flex-col` / `grid` / `gap-*` / `items-center`. Not `<div>` only for spacing. Not `space-y-*`.
3. **Scoped `className` + `app/globals.css`** — chrome, overlay, and craft where utilities are not enough. Prefix classes per surface (`.site-*`, `.ct-*`, `.qi-*`, `.ps-*`, `.home-*`, `.about-*`, `.page-vt-*`). Tokens: `var(--spacing-*)`, `var(--background)`, `var(--chip-*)` (elevated, not yellow), `var(--color-accent)`. `--elev-3d` may remain in CSS as craft residue, **not** an identity that must be copied.
4. **Theme tokens** — `:root` (light) and `.dark` in `globals.css` + `@theme inline`. `dark` class on `<html>` (`rz-theme` cookie). Not Astryx `theme/` files. Not default shadcn zinc palette overrides.
5. **StyleX / Astryx** — **forbidden.** The StyleX compiler is not wired (T-013.4); packages were removed in T-037. Do not import `@astryxdesign` / `@stylexjs`.
6. **Do not** use `style={{…}}` for layout/color. **Do not** use `!important` unless there is already a deliberate precedent in the same file (theme-independent Contact overlay).

Existing `style={{}}` exception: `colorScheme` on `<html>` (`app/layout.tsx`) — not component layout.

**Use this** (a file without hooks stays server-side):

```tsx
export function HomePageShell({ title }: { title: string }) {
  return (
    <div className="home-page flex flex-col">
      <h1 className="home-hero-heading">{title}</h1>
    </div>
  );
}
```

**Do not use this**

```tsx
import { css } from "@stylexjs/stylex";
<div className="space-y-4 p-[13px] bg-[#fff]">
<div style={{ gap: 16, background: "#fff" }}>
```

`<div>`: allowed as a DOM hook (portal root, Lenis target) or a flex/grid wrapper with layout `className`. If the only need is spacing or columns — use `flex` + `gap-*`, not an empty wrapper.

---

# 3. Server Components vs `"use client"` vs `"use server"`

Default Next App Router = **Server Component**. `"use client"` is an *opt-in* for interactivity, not the default for files in `_components/`.

| Type | When | Production examples |
| ---- | ---- | ------------------- |
| **Server** (no directive) | No hook, event, browser API, client context | `app/[locale]/page.tsx`, `workflow/page.tsx`, `home-page.tsx`, `about-page.tsx` (`AboutSection`), `overlay-icons.tsx`, `content/*.ts`, `content/data/*.json` |
| **`"use client"`** | `useState` / `useEffect` / context, event handler, Lenis, overlay (focus trap), theme toggle | `contact-modal.tsx`, `site-header.tsx`, `theme-toggle.tsx`, `page-transition.tsx` |
| **`"use server"`** | Server Actions (mutation functions called from the client) | **Not in `page.tsx`.** Contact = Route Handler + Resend (**ADR-047**), not an Action in a page route. `mailto:` remains the fallback. |

Boundaries:

* Routes (`page.tsx` / `layout.tsx`) **remain server-side**: `generateStaticParams`, `generateMetadata`, `params`. Client islands are imported from there (`<HomePage locale={locale} />`).
* Pure SVG/icon files **must not** be marked client — `overlay-icons.tsx`.
* Do not write `"use client"` only because a file imports shadcn. Primitives are RSC-on.
* New work: split islands (motion, overlay, toggle) from static blocks. Old code is cleaned gradually (T-028), not rewritten in one PR.

**Use this**

```tsx
// app/[locale]/about/page.tsx — server; redirect only (ADR-040)
export default async function AboutRoute({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  redirect(aboutHref(locale));
}

// About section lives on Home (`AboutSection` in `about-page.tsx`)
```

**Do not use this**

```tsx
"use client";
// page.tsx — metadata + generateStaticParams do not live in a client module
"use server";
export default async function Page() { /* this is NOT a Server Action */ }
```

---

# 4. Render Next.js (R1)

Product shape = **SSG + repo content** (ADR-015). Not default SSR, not CMS, not domain API.

| Mechanism | R1 |
| --------- | -- |
| **`generateStaticParams`** | Required in `[locale]` routes — `{ locale: "id" \| "en" }` |
| **Content** | `content/` files at build time, not runtime fetch |
| **`cookies()` / other cookie** | **Theme:** Next `cookies()` **only** in root `app/layout.tsx` (`rz-theme`, ADR-021). Trade-off: layout per-request — **not** permission for SSR-as-product. **Locale:** `proxy.ts` reads cookie `NEXT_LOCALE` + geo/`Accept-Language` headers **only** for the `/` redirect (ADR-014). Switcher writes that cookie on the client. Do not add Next `cookies()`/`headers()` to locale `page.tsx`/`layout.tsx`. Do not remove or “clean up” `proxy.ts` because of the theme playbook. |
| **ISR** (`revalidate`, `unstable_cache`) | Not default. Content changes through git + deploy. |
| **Streaming / `loading.tsx` / Suspense** | Not default. No `loading.tsx`. Pages are small, data is local. |
| **Server Actions** | Not default. See §3. |
| **`dynamic = "force-dynamic"`** / `connection()` | Do not add to page routes. |

`generateStaticParams` is still written even though `cookies()` in the root layout means the tree is not fully static-cacheable: that is the **shape** contract (known locale, repo content) — not a CDN-cache promise for every HTML response.

Changing the default to SSR, ISR, streaming, or an Action backend **requires a new ADR** (conflicts with ADR-015 / application-layer).

---

# Decision Log

| Decision | Choice |
| -------- | ------ |
| Daily reference | This document + `.cursor/rules/code-discipline.mdc` |
| Spacing | `gap` between children; `padding` as inset; token / `gap-*`; scoped CSS for clamp; not `space-y-*` |
| Visual override | shadcn primitives + Tailwind tokens + scoped className; **not** StyleX / Astryx |
| Tailwind | **Yes** — v4, one system with shadcn (**ADR-028**). Not an Astryx bridge. |
| Client | Interactivity only; routes remain server |
| `"use server"` / ISR / streaming | Not default. Contact = Route Handler (ADR-047), not Action in page |
| Next `cookies()` | Theme exception in root layout only |
| Locale `/` | `proxy.ts` + cookie `NEXT_LOCALE` (ADR-014) — not `cookies()` in page routes |
| Old code | Clean incrementally; new work follows the playbook |

---

# Related Documents

* `.cursor/rules/code-discipline.mdc` — required agent summary
* `.cursor/rules/shadcn.mdc` — shadcn CLI & primitives (ADR-028)
* `design-tokens.md` — tokens & implementation mapping
* `../05-architecture/application-layer.md` — SSG shape
* `../../project-os/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-os/decisions/ADR-018-astryx-replaces-tailwind-r1.md` — superseded by ADR-028
* `../../project-os/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-os/decisions/ADR-029-visual-identity-gothic-blood.md`
* `../../project-os/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-os/decisions/ADR-047-contact-form-resend.md`
* `../../project-os/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-os/PROJECT_STATE.md`
* `../../project-os/DECISIONS.md`
