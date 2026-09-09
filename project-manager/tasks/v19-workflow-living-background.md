# v19 — Latar hidup Motion di Workflow

Latar `/workflow` **bukan** foto, wallpaper, atau video. Latar hidup yang **berulang** (seperti loop video) dari **komponen asli** + **Motion** (`motion/react`), selaras identitas gothic-blood (**ADR-029**).

**Paket dikunci Boss Rezi (2026-09-08):** cabut semua wallpaper bitmap di Workflow. Latar hidup = **debu katedral** mote individual, `position: fixed` seperti wallpaper Home. Gerbang tracery dan bunga filigree **dicabut**. Bukan clip MP4. Bukan library baru.

---

## T-054 — Latar hidup `/workflow` (Motion, bukan video)

* **Status:** ⏳ Open — **T-054.1–T-054.3** ✅; berikutnya **T-054.4**
* **Domain:** Design / Engineering
* **Output:** Island latar di `/[locale]/workflow` yang terasa “hidup” dan loop; klaim tetap terbaca (UX1); `prefers-reduced-motion` = diam/instan; pita footer tanpa latar; stack Motion yang sudah ada (`lib/motion.ts`, ADR-017 / ADR-028)
* **Baca dulu:** ADR-029, ADR-042, T-038.1 (bukan gore / mall-goth), T-038.3 + T-043 (gerak + reduced-motion), `workflow-page.tsx`, `app/globals.css` (`.wf-*`), `.cursor/skills/motion/SKILL.md`, kode Home wallpaper **hanya** sebagai pola z-index/navbar/footer — **bukan** sebagai acuan MP4

### Maksud (dikunci chat 2026-09-08)

Seperti video yang **berulang terus**, tetapi yang bergerak adalah **lapisan UI yang kita tulis sendiri** (div / SVG / token) — bukan `<video>`, bukan `<img>` wallpaper.

### Keputusan T-054.1 (dikunci ulang 2026-09-08)

**Debu katedral saja:** banyak mote individual berterbangan acak, `position: fixed` seperti wallpaper Home, warna samar. Gerbang tracery dan bunga filigree tidak dilanjutkan. Kabut blob wine tidak dilanjutkan.

### Kontrak

| Tetap | Dilarang |
| ----- | -------- |
| Rute, copy, IA Workflow (ADR-042) | Foto / damask / lukisan / MP4 di rute ini |
| Token palet T-039 (kanvas, vellum, wine) | Hex acak di JSX; StyleX |
| `"use client"` hanya bila island butuh hook | Canvas/WebGL/Three kecuali Q&A mengunci |
| Footer `#contact-cta` tanpa latar | Splatter viewport (ADR-030 superseded) |
| Animate `transform` / `opacity` (bukan layout) | Loop yang memakan CPU di 320px |

### Subtasks

- [x] **T-054.1** — Q&A motif dikunci ulang: **debu katedral** mote individual `position: fixed` (wallpaper). Gerbang dan filigree dicabut. Bukan kabut blob.
- [x] **T-054.2** — Island `workflow-cathedral-breath-background.tsx`: debu mote individual (CSS `transform`/`opacity`, loop); `fixed` di belakang navbar, tertutup footer.
- [x] **T-054.3** — `prefers-reduced-motion` = diam. Overlay lock (`ct-lock` / `qi-lock` / `ps-lock` / `page-vt-lock`) menjeda debu. Tidak ada jank scroll.
- [ ] **T-054.4** — Verifikasi browser: `/id/workflow` + `/en/workflow`, 320 / 375 / desktop, reduced-motion, footer Contact, overlay Contact/QI. Bukan satu screenshot.
