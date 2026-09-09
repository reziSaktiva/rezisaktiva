# v20 — Polish visual navbar

Kulit header/navbar R1 **lebih rapi dan lebih selaras gothic-blood**, tanpa menambah halaman dan tanpa mengubah job chrome.

**Paket dikunci Boss Rezi (2026-09-09):** perbaiki navbar agar lebih bagus. Arah visual konkret dikunci di **T-055.1** (Q&A) sebelum kode — bukan big-bang restyle (ADR-029).

---

## T-055 — Polish visual navbar (kulit saja)

* **Status:** ⏳ Open — berikutnya **T-055.1**
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

### Subtasks

- [ ] **T-055.1** — Q&A kunci arah visual navbar (desktop + hamburger) terhadap kode T-040 yang sudah live. Kunci di chat: ritme, tipografi brand vs chip, selected/hover, panel mobile, Contact. **Jangan kode sebelum dikunci.**
- [ ] **T-055.2** — Kode desktop (≥1024px): brand, chip nav, locale, Contact. Token + class `.site-*`; primitif shadcn yang sudah di-skin. Acuan = kode + kunci T-055.1, bukan mockup HTML.
- [ ] **T-055.3** — Kode hamburger &lt;1024px: panel elevated; item nav selebar panel; switcher compact; Contact di luar; chrome **satu baris** di 320px dan 375px (ADR-020 / `navigation-patterns.md`).
- [ ] **T-055.4** — Verifikasi browser: Home, `#about`, `/workflow`, `/projects`, ID + EN; 320 / 375 / desktop; selected + hover; hamburger buka/tutup; Contact modal dari chrome; `prefers-reduced-motion`. Bukan satu screenshot.
