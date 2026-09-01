# Code Discipline

> Status: **Baseline** — playbook harian implementasi di `app/` (dikunci 2026-08-28, issue #52 / T-027). Bukan Living Document: tidak memuat phase/progress. Perubahan material → ADR baru + revisi dokumen ini.

Dokumen ini adalah acuan “kapan pakai apa” saat menulis kode. Ringkasan wajib untuk agent: `.cursor/rules/code-discipline.mdc`. Konvensi komponen Astryx: `.cursor/rules/xds.mdc`.

Berlaku untuk **kerja baru**. Rapikan `app/` yang sudah ada hanya bertahap, setelah aturan ini dikunci — bukan rewrite besar.

---

# Purpose

Satu acuan untuk spacing, lapisan styling, batas Server/Client, dan model render Next.js — selaras **ADR-015** (static-first SSG) dan **ADR-018** (Astryx, tanpa Tailwind).

---

# 1. Spacing — gap / padding / margin

Skala Astryx berbasis **4px**. Prop `gap` / `padding` pada `VStack` / `HStack` / `Grid` / `Section` memakai step: `0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10` (bukan string, bukan px). Token CSS: `var(--spacing-*)`.

| Pakai | Untuk | Jangan |
| ----- | ----- | ------ |
| **`gap`** | Jarak **antar** anak dalam satu stack/grid | `margin` di tiap anak untuk merenggangkan sibling |
| **`padding`** | Inset **di dalam** satu container (isi vs tepi) | `padding` di parent **dan** `margin` di anak untuk hal yang sama |
| **`margin`** | Jarang. Reset (`margin: 0`) atau ritme di CSS overlay yang **bukan** anak Stack | Membungkus komponen dengan `<div>` hanya untuk kasih margin |

Ritme yang dipakai di kode produksi:

* Internal rapat (ikon + teks, item list): `gap={2}` — `contact-modal.tsx`, `quick-info.tsx`
* Kicker + judul: `gap={3}` — `home-page.tsx`
* Isi kartu / kolom overlay: `gap={3}`–`{4}`
* Isi satu section (kicker → body → grid): `gap={8}` pada `VStack` + `className="home-container"`
* Section halaman: `padding={0}` pada `Section`, ritme viewport di CSS scoped (`.home-section`, `.about-section`) — Astryx scale tidak mengekspresikan `clamp()` / vw

**Pakai ini**

```tsx
<Section variant="transparent" padding={0} className="home-section">
  <VStack className="home-container" gap={8}>
    <VStack gap={3}>
      <Text type="label">{kicker}</Text>
      <Heading level={2}>{title}</Heading>
    </VStack>
  </VStack>
</Section>
```

**Jangan itu**

```tsx
<div style={{ marginBottom: 32 }}>
  <Heading level={2}>{title}</Heading>
</div>
<VStack gap={8} padding={8} className="p-[13px]">
```

Di `globals.css`: utamakan `var(--spacing-4)` bukan `16px` / `1rem` acak. Nilai `clamp()` / breakpoint untuk craft halaman (Hess, overlay) boleh, asal di class scoped — bukan hex/px tersebar di JSX.

---

# 2. Komponen vs CSS custom vs StyleX

Urutan (atas = coba dulu):

1. **Props Astryx** — `color`, `type`, `level`, `gap`, `padding`, `variant`. Cek `astryx component <Name>` sebelum mengarang.
2. **Layout Astryx** — `AppShell`, `Section`, `VStack` / `HStack` / `Grid` / `Center`. Bukan `<div>` untuk susun halaman.
3. **`className` scoped + `app/globals.css`** — chrome, overlay, craft yang props tidak cukup. Prefix class per permukaan (`.site-*`, `.ct-*`, `.qi-*`, `.ps-*`, `.home-*`, `.about-*`, `.page-vt-*`). Token: `var(--spacing-*)`, `var(--color-*)`, `var(--radius-*)`.
4. **Tema built** — `lib/astryx-theme.ts` + `pnpm theme:build`. Jangan override `--color-*` di `:root`.
5. **StyleX `xstyle` / `stylex.create()`** — **diblokir dulu.** Compiler StyleX (`@stylexjs/babel-plugin` + plugin bundler) **belum** wired ke Turbopack. Dicoba saat T-013.4: build gagal. ADR-018 sudah mencatat plugin belum di-setel. Jangan import `stylex.create` sampai ada task + keputusan (trade-off Turbopack vs webpack).
6. **Jangan** Tailwind / `tailwind-theme.css` (ADR-018, uninstall). **Jangan** `style={{…}}` untuk layout/warna. **Jangan** `!important` kecuali sudah ada preseden sadar di file yang sama (override Astryx yang tidak kena token).

Pengecualian `style={{}}` yang sudah ada: `colorScheme` di `<html>` (`app/layout.tsx`) — bukan layout komponen.

**Pakai ini** (island interaktif; file tanpa hook tetap server):

```tsx
import { VStack } from "@astryxdesign/core/VStack";
import { Heading } from "@astryxdesign/core/Heading";

export function HomePageShell({ title }: { title: string }) {
  return (
    <VStack className="home-page" gap={8}>
      <Heading level={1}>{title}</Heading>
    </VStack>
  );
}
```

**Jangan itu**

```tsx
import { css } from "@stylexjs/stylex"; // build gagal — compiler belum ada
<div className="flex gap-4 p-4">
<VStack style={{ gap: 16, background: "#fff" }}>
```

`<div>`: boleh hanya sebagai hook DOM yang Astryx tidak sediakan (akar portal, target Lenis). Kalau yang dibutuhkan cuma jarak atau kolom — `VStack` / `HStack` / `Grid`.

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
* Jangan tulis `"use client"` hanya karena file mengimpor Astryx. `home-page.tsx` / `site-footer.tsx` membuktikan komponen Astryx bisa server.
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
| Spacing | `gap` antar anak; `padding` inset; token / prop step; CSS scoped untuk clamp |
| Override visual | className + `globals.css` + token; **bukan** StyleX sampai compiler ada |
| Tailwind | Tetap tidak (ADR-018) |
| Client | Hanya interaktivitas; route tetap server |
| `"use server"` / ISR / streaming | Bukan default R1 |
| `cookies()` Next | Pengecualian tema di root layout saja |
| Locale `/` | `proxy.ts` + cookie `NEXT_LOCALE` (ADR-014) — bukan `cookies()` di route halaman |
| Kode lama | Rapikan bertahap; kerja baru ikut playbook |

---

# Related Documents

* `.cursor/rules/code-discipline.mdc` — ringkasan wajib agent
* `.cursor/rules/xds.mdc` — CLI & komponen Astryx (ADR-018)
* `design-tokens.md` — token & mapping implementasi
* `../05-architecture/application-layer.md` — bentuk SSG
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/decisions/ADR-018-astryx-replaces-tailwind-r1.md`
* `../../project-manager/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-manager/decisions/ADR-021-dark-mode-toggle-must-r1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
