# v20 — Polish visual navbar

Kulit header/navbar R1 **lebih rapi dan lebih selaras gothic-blood**, tanpa menambah halaman dan tanpa mengubah job chrome.

**Paket dikunci Boss Rezi (2026-09-09):** perbaiki navbar agar lebih bagus. Arah visual konkret dikunci di **T-055.1** (Q&A) sebelum kode — bukan big-bang restyle (ADR-029).

---

## T-055 — Polish visual navbar (kulit saja)

* **Status:** ✅ **Done** (2026-09-11) — T-055.1–T-055.4
* **Domain:** Design / Engineering
* **Output:** header desktop + hamburger &lt;1024px terasa lebih baik vs T-040, tetap scan-able (UX1); verifikasi browser bukan satu screenshot
* **Baca dulu:** ADR-020, ADR-021 (toggle hold T-038.2), ADR-024, ADR-029, ADR-031, ADR-034, ADR-035, ADR-040, `product-discovery/04-ux/navigation-patterns.md`, `product-discovery/06-engineering/code-discipline.md`, `app/[locale]/_components/site-header.tsx`, `sliding-pill-group.tsx`, `locale-switcher.tsx`, `overlay-icons.tsx`, `lib/nav.ts`, class `.site-*` di `app/globals.css`, `.cursor/rules/shadcn.mdc`, `.cursor/rules/code-discipline.mdc`, `.cursor/rules/ui-ux-mockup-check.mdc`

### Kontrak

| Tetap | Dilarang |
| ----- | -------- |
| Chip: Tentang / Proses Kerja / Proyek; nama = tautan Home; pekerjaan bukan tautan (ADR-034 / ADR-035 / ADR-040) | Chip Home; About sebagai rute terpisah |
| Contact = tombol modal di **luar** hamburger (ADR-019 / ADR-020) | Contact hanya di dalam menu |
| Hamburger &lt;1024px; ≥1024px semua terlihat | Mega-menu, nav baru, halaman baru |
| Selected = outline darah + teks aksen (ADR-031) | Splatter (ADR-030 superseded); pill kuning; nampan krem; elevasi 3D sebagai identitas |
| Token gothic-blood T-039; toggle tema **tersembunyi** (hold T-038.2) | Hex/px acak di JSX; StyleX; `design-mockups/` sebagai target |
| Spacing: `gap` / padding container, bukan `margin` sibling / `space-y-*` | `"use server"`; `"use client"` di `page.tsx` |
| Copy label chrome T-021 / `NAV_LABELS` | Tulis ulang copy nav tanpa ADR |

Perilaku overlay (Contact / Quick Info / project sheet) **tidak** diubah di task ini. Ubah IA atau job chrome → **ADR baru**, jangan diam-diam.

### Dikunci chat T-055.1 (2026-09-09)

- **Paling atas (`scrollY = 0`):** bar tanpa latar (tetap ghost T-040).
- **Setelah scroll (`scrollY > 0`):** kaca — wash gelap tipis + `backdrop-blur`, **hairline bawah** `--color-border`. Kanvas halaman masih sedikit kelihatan.
- **Motion:** fade **opacity** kaca + hairline (pendek). Blur **on/off langsung** (bukan interpolasi blur). `prefers-reduced-motion` = cut instan, tanpa fade.
- **Bukan kaca:** isi solid elevated, hairline-only tanpa wash, spring/overshoot, interpolasi progress 0–80px.
- **Chrome lain tetap T-040:** brand display + role, chip outline (ADR-031), locale, Contact datar, panel hamburger elevated. Polish ini **bukan** restyle chip/Contact/panel.

### Subtasks

- [x] **T-055.1** — Q&A kunci arah visual navbar (desktop + hamburger) terhadap kode T-040 yang sudah live. Dikunci chat 2026-09-09: kaca on-scroll (lihat blok di atas). **Jangan kode sebelum dikunci.**
- [x] **T-055.2** — Kode desktop (≥1024px): kaca on-scroll + hairline (kunci T-055.1); brand/chip/locale/Contact **tetap** T-040. Token + class `.site-*`; primitif shadcn yang sudah di-skin. Bukan mockup HTML.
- [x] **T-055.3** — Kode hamburger &lt;1024px: kaca yang sama di bar; panel elevated T-040 tidak di-restyle; item nav selebar panel; switcher compact; Contact di luar; chrome **satu baris** di 320px dan 375px (ADR-020 / `navigation-patterns.md`).
- [x] **T-055.4** — Verifikasi browser: Home, `#about`, `/workflow`, `/projects`, ID + EN; 320 / 375 / desktop; selected + hover; hamburger buka/tutup; Contact modal dari chrome; `prefers-reduced-motion`. Bukan satu screenshot. **2026-09-11** `http://127.0.0.1:3001`: desktop 1440 — kaca opacity 0 di puncak, opacity 1 + `blur(12px)` + hairline `--color-border` setelah scroll; selected = outline darah + teks aksen (Tentang / Proses Kerja / Proyek; EN About / How I Work / Projects). Compact 375/320: hamburger + Contact di luar (tap 44px), chrome `nowrap` satu baris, panel elevated `#141418`, item selebar panel, switcher compact; Contact modal dari chrome (desktop + compact). Reduced-motion: tanpa Lenis; kaca cut on/off (bukan fade 400ms). Hover chip: CSS `--color-accent-muted` pada `:hover:not([data-selected])`.
