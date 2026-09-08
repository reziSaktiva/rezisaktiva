# v19 — Latar hidup Motion di Workflow

Latar `/workflow` **bukan** foto, wallpaper, atau video. Latar hidup yang **berulang** (seperti loop video) dari **komponen asli** + **Motion** (`motion/react`), selaras identitas gothic-blood (**ADR-029**).

**Paket dikunci Boss Rezi (2026-09-08):** cabut semua wallpaper bitmap di Workflow (hasil masih blur). Berikutnya = Q&A motif, lalu island Motion. Bukan clip MP4 (itu pola Home T-042.1). Bukan library baru (Lottie, Three, particle pack).

---

## T-054 — Latar hidup `/workflow` (Motion, bukan video)

* **Status:** ⏳ Open — gerbang **T-054.1** (Q&A)
* **Domain:** Design / Engineering
* **Output:** Island latar di `/[locale]/workflow` yang terasa “hidup” dan loop; klaim tetap terbaca (UX1); `prefers-reduced-motion` = diam/instan; pita footer tanpa latar; stack Motion yang sudah ada (`lib/motion.ts`, ADR-017 / ADR-028)
* **Baca dulu:** ADR-029, ADR-042, T-038.1 (bukan gore / mall-goth), T-038.3 + T-043 (gerak + reduced-motion), `workflow-page.tsx`, `app/globals.css` (`.wf-*`), `.cursor/skills/motion/SKILL.md`, kode Home wallpaper **hanya** sebagai pola z-index/navbar/footer — **bukan** sebagai acuan MP4

### Maksud (dikunci chat 2026-09-08)

Seperti video yang **berulang terus**, tetapi yang bergerak adalah **lapisan UI yang kita tulis sendiri** (div / SVG / token), dianimasikan dengan Motion — bukan `<video>`, bukan `<img>` wallpaper.

### Kontrak

| Tetap | Dilarang |
| ----- | -------- |
| Rute, copy, IA Workflow (ADR-042) | Foto / damask / lukisan / MP4 di rute ini |
| Token palet T-039 (kanvas, vellum, wine) | Hex acak di JSX; StyleX |
| `"use client"` hanya island latar | Canvas/WebGL/Three kecuali Q&A mengunci |
| Footer `#contact-cta` tanpa latar | Splatter viewport (ADR-030 superseded) |
| Animate `transform` / `opacity` (bukan layout) | Loop yang memakan CPU di 320px |

### Subtasks

- [ ] **T-054.1** — Q&A motif (satu cluster): kabut wine pelan, filigree/SVG yang bernapas, mesh gradient, debu katedral, dsb. Kunci **satu** arah + apakah nempel viewport (`position: fixed`, pola Home) atau ikut dokumen. **Jangan kode** sebelum kunci chat.
- [ ] **T-054.2** — Island `workflow-*-background.tsx` (nama mengikuti kunci T-054.1): loop `repeat` / `repeatType`; veil token agar h1/lede terbaca; di belakang navbar, memudar atau tertutup di footer.
- [ ] **T-054.3** — `useReducedMotion`: tanpa loop, atau frame diam. Hormati overlay lock Lenis bila relevan. Tidak ada jank scroll.
- [ ] **T-054.4** — Verifikasi browser: `/id/workflow` + `/en/workflow`, 320 / 375 / desktop, reduced-motion, footer Contact, overlay Contact/QI. Bukan satu screenshot.
