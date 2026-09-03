# Code Discipline

> Status: **Baseline** — playbook harian implementasi di `app/` (dikunci 2026-08-28, issue #52 / T-027; styling diperbarui **ADR-028** / T-037.4). Bukan Living Document: tidak memuat phase/progress. Perubahan material → ADR baru + revisi dokumen ini.

Dokumen ini adalah acuan “kapan pakai apa” saat menulis kode. Ringkasan wajib untuk agent: `.cursor/rules/code-discipline.mdc`. Konvensi komponen: `.cursor/rules/shadcn.mdc`.

Berlaku untuk **kerja baru**. Rapikan `app/` yang sudah ada hanya bertahap, setelah aturan ini dikunci — bukan rewrite besar.

---

# Purpose

Satu acuan untuk spacing, lapisan styling, batas Server/Client, dan model render Next.js — selaras **ADR-015** (static-first SSG) dan **ADR-028** (shadcn/ui + Tailwind CSS v4).

---

# 1. Spacing — gap / padding / margin

Skala token CSS berbasis **4px** (`var(--spacing-*)` di `app/globals.css`). Utility Tailwind `gap-*` memakai skala yang sama (contoh: `gap-8` = `--spacing-8` = 32px). Bukan string px acak di JSX.

| Pakai | Untuk | Jangan |
| ----- | ----- | ------ |
| **`gap`** | Jarak **antar** anak dalam satu flex/grid (`gap-8`, `flex flex-col gap-3`) | `margin` di tiap anak untuk merenggangkan sibling; **`space-y-*` / `space-x-*`** |
| **`padding`** | Inset **di dalam** satu container (isi vs tepi) | `padding` di parent **dan** `margin` di anak untuk hal yang sama |
| **`margin`** | Jarang. Reset (`margin: 0`) atau ritme di CSS overlay yang **bukan** anak stack | Membungkus komponen dengan `<div>` hanya untuk kasih margin |

Ritme yang dipakai di kode produksi:

* Internal rapat (ikon + teks, item list): `gap-2`
* Kicker + judul: `gap-3` — `home-page.tsx`
* Isi satu section (kicker → body → grid): `gap-8` pada `flex flex-col` + `className="home-container"`
* Section halaman: ritme viewport di CSS scoped (`.home-section`, `.about-section`) — `clamp()` / vw di class scoped, bukan di JSX

**Pakai ini**

```tsx
<section className="home-section">
  <div className="home-container flex flex-col gap-8">
    <div className="flex flex-col gap-3">
      <p className="home-kicker">{kicker}</p>
      <h2 className="home-work-title">{title}</h2>
    </div>
  </div>
</section>
```

**Jangan itu**

```tsx
<div style={{ marginBottom: 32 }}>
  <h2>{title}</h2>
</div>
<div className="space-y-8 p-[13px]">
```

Di `globals.css`: utamakan `var(--spacing-4)` bukan `16px` / `1rem` acak. Nilai `clamp()` / breakpoint untuk craft halaman (Hess, overlay) boleh, asal di class scoped — bukan hex/px tersebar di JSX.

---

# 2. Komponen vs Tailwind vs CSS custom

Urutan (atas = coba dulu):

1. **Primitf shadcn yang sudah ada** — `components/ui/` (Dialog, Sheet, Drawer, Button, …) yang sudah di-skin ke palet rezisaktiva. Cek `pnpm exec shadcn docs <Name>` sebelum mengarang. Jangan menambah primitf katalog (Sidebar, Chart, Sonner, …) tanpa task.
2. **Layout Tailwind token-backed** — `flex` / `flex-col` / `grid` / `gap-*` / `items-center`. Bukan `<div>` hanya untuk spasi. Bukan `space-y-*`.
3. **`className` scoped + `app/globals.css`** — chrome, overlay, craft yang utility tidak cukup. Prefix class per permukaan (`.site-*`, `.ct-*`, `.qi-*`, `.ps-*`, `.home-*`, `.about-*`, `.page-vt-*`). Token: `var(--spacing-*)`, `var(--background)`, `var(--chip-*)`, `--elev-3d`.
4. **Token tema** — `:root` (light) dan `.dark` di `globals.css` + `@theme inline`. Class `dark` di `<html>` (cookie `rz-theme`). Bukan file `theme/` Astryx. Bukan override palet default shadcn zinc.
5. **StyleX / Astryx** — **dilarang.** Compiler StyleX tidak di-wire (T-013.4); paket dicabut di T-037. Jangan impor `@astryxdesign` / `@stylexjs`.
6. **Jangan** `style={{…}}` untuk layout/warna. **Jangan** `!important` kecuali sudah ada preseden sadar di file yang sama (overlay Contact theme-independent).

Pengecualian `style={{}}` yang sudah ada: `colorScheme` di `<html>` (`app/layout.tsx`) — bukan layout komponen.

**Pakai ini** (file tanpa hook tetap server):

```tsx
export function HomePageShell({ title }: { title: string }) {
  return (
    <div className="home-page flex flex-col">
      <h1 className="home-hero-heading">{title}</h1>
    </div>
  );
}
```

**Jangan itu**

```tsx
import { css } from "@stylexjs/stylex";
<div className="space-y-4 p-[13px] bg-[#fff]">
<div style={{ gap: 16, background: "#fff" }}>
```

`<div>`: boleh sebagai hook DOM (akar portal, target Lenis) atau wrapper flex/grid yang membawa `className` layout. Kalau yang dibutuhkan cuma jarak atau kolom — `flex` + `gap-*`, bukan wrapper kosong.

---

# 3. Server Components vs `"use client"` vs `"use server"`

Default Next App Router = **Server Component**. `"use client"` adalah *opt-in* untuk interaktivitas, bukan default file di `_components/`.

| Jenis | Kapan | Contoh produksi |
| ----- | ----- | ---------------- |
| **Server** (tanpa directive) | Tidak ada hook, event, browser API, context klien | `app/[locale]/page.tsx`, `about/page.tsx`, `home-page.tsx`, `overlay-icons.tsx`, `content/*.ts`, `content/data/*.json` |
| **`"use client"`** | `useState` / `useEffect` / context, event handler, Lenis, overlay (focus trap), theme toggle | `contact-modal.tsx`, `site-header.tsx`, `theme-toggle.tsx`, `page-transition.tsx` |
| **`"use server"`** | Server Actions (fungsi mutasi yang dipanggil dari klien) | **Tidak ada di R1.** Contact = `mailto:` + form klien (ADR-019). Jangan menambah Action “karena tren.” |

Batas:

* Route (`page.tsx` / `layout.tsx`) **tetap server**: `generateStaticParams`, `generateMetadata`, `params`. Island klien diimpor dari situ (`<HomePage locale={locale} />`).
* File SVG/ikon murni **jangan** ditandai client — `overlay-icons.tsx`.
* Jangan tulis `"use client"` hanya karena file mengimpor shadcn. Primitf RSC-on.
* Kerja baru: pecah island (motion, overlay, toggle) dari blok statis. Kode lama dirapikan bertahap (T-028), bukan rewrite satu PR.

**Pakai ini**

```tsx
// app/[locale]/about/page.tsx — server
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
export default async function AboutRoute({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}
```

**Jangan itu**

```tsx
"use client";
// page.tsx — metadata + generateStaticParams tidak hidup di client module
"use server";
export default async function Page() { /* ini BUKAN Server Action */ }
```

---

# 4. Render Next.js (R1)

Bentuk produk = **SSG + konten repo** (ADR-015). Bukan SSR default, bukan CMS, bukan API domain.

| Mekanisme | R1 |
| --------- | -- |
| **`generateStaticParams`** | Wajib di route `[locale]` — `{ locale: "id" \| "en" }` |
| **Konten** | File `content/` saat build, bukan fetch runtime |
| **`cookies()` / cookie lain** | **Tema:** `cookies()` Next **hanya** di root `app/layout.tsx` (`rz-theme`, ADR-021). Trade-off: layout per-request — **bukan** izin SSR-as-product. **Locale:** `proxy.ts` membaca cookie `NEXT_LOCALE` + header geo/`Accept-Language` **hanya** untuk redirect `/` (ADR-014). Switcher menulis cookie itu di klien. Jangan tambah `cookies()`/`headers()` Next di `page.tsx`/`layout.tsx` locale. Jangan hapus atau “merapikan” `proxy.ts` karena playbook tema. |
| **ISR** (`revalidate`, `unstable_cache`) | Bukan default. Konten berganti lewat git + deploy. |
| **Streaming / `loading.tsx` / Suspense** | Bukan default. Tidak ada `loading.tsx`. Halaman kecil, data lokal. |
| **Server Actions** | Bukan default. Lihat §3. |
| **`dynamic = "force-dynamic"`** / `connection()` | Jangan ditambah di route halaman. |

`generateStaticParams` tetap ditulis meski `cookies()` di root layout membuat tree tidak fully static-cacheable: itu kontrak **bentuk** (locale diketahui, konten repo) — bukan janji CDN-cache setiap HTML.

Mengubah default ke SSR, ISR, streaming, atau Action backend **memerlukan ADR baru** (bertentangan dengan ADR-015 / application-layer).

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Acuan harian | Dokumen ini + `.cursor/rules/code-discipline.mdc` |
| Spacing | `gap` antar anak; `padding` inset; token / `gap-*`; CSS scoped untuk clamp; bukan `space-y-*` |
| Override visual | primitf shadcn + Tailwind token + className scoped; **bukan** StyleX / Astryx |
| Tailwind | **Ya** — v4, satu sistem bersama shadcn (**ADR-028**). Bukan bridge Astryx. |
| Client | Hanya interaktivitas; route tetap server |
| `"use server"` / ISR / streaming | Bukan default R1 |
| `cookies()` Next | Pengecualian tema di root layout saja |
| Locale `/` | `proxy.ts` + cookie `NEXT_LOCALE` (ADR-014) — bukan `cookies()` di route halaman |
| Kode lama | Rapikan bertahap; kerja baru ikut playbook |

---

# Related Documents

* `.cursor/rules/code-discipline.mdc` — ringkasan wajib agent
* `.cursor/rules/shadcn.mdc` — CLI & primitf shadcn (ADR-028)
* `design-tokens.md` — token & mapping implementasi
* `../05-architecture/application-layer.md` — bentuk SSG
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/decisions/ADR-018-astryx-replaces-tailwind-r1.md` — superseded oleh ADR-028
* `../../project-manager/decisions/ADR-028-shadcn-tailwind-replaces-astryx.md`
* `../../project-manager/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
