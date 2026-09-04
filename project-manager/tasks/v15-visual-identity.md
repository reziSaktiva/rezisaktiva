# v15 — Identitas visual: absurdism / surrealism / Gothic Art / dark-blood

File task **tersendiri**. Keputusan material: **[ADR-029](../decisions/ADR-029-visual-identity-gothic-blood.md)**.

Bukan halaman baru. Bukan R2 `/work/[slug]`. Bukan tulis ulang copy T-021. Bukan ubah IA atau perilaku overlay. Bukan ganti stack (shadcn + Tailwind v4 tetap, ADR-028). Bukan mockup HTML (ADR-024).

**Paket dikunci Boss Rezi (2026-09-04):** ganti **kulit visual seluruh situs** ke arah seni absurdism, surrealism, Gothic Art, dark and blood. Metode = **tanya-jawab per permukaan, lalu implementasi**. Copy, IA, job overlay tetap.

**Status rilis:** ⏳ **Open**. **T-038** ✅. **T-039** ✅. **T-040** ✅ (incl. T-040.6). **T-041** ✅. **T-042…T-043** menunggu T-041. **T-031** ⏸️ sampai **T-043**.

---

## Kontrak yang tidak boleh pecah

| Area | Tetap | Berganti |
| ---- | ----- | -------- |
| Copy / konten | `content/*` T-021, Now, katalog karya | Tidak |
| IA / overlay **perilaku** | Contact modal (ADR-019), Quick Info kanan (ADR-022), sheet karya dari bawah (ADR-027), hamburger &lt;1024px (ADR-020), About = rute sendiri, footer = pita Contact (ADR-025) | Skin visual overlay/chrome |
| Stack | shadcn primitf yang sudah ada, Tailwind v4, Motion, Lenis, cookie `rz-theme`, anti-flash | Palet, tipe, mood, bahasa elevasi/chip |
| Render | SSG + `content/` + `generateStaticParams`; `"use client"` hanya island | Tidak |
| Clarity | UX1: first viewport tetap menjawab siapa & untuk siapa | Atmosfer membungkus klaim, tidak menelannya |
| Acuan visual | Bukan `design-mockups/` | Kode `app/` **sebelum** gelombang ini + arahan yang dikunci di chat per permukaan |

**Bukan gore medis / mall-goth / chaos acak** — dikunci **T-038.1**. Darah di permukaan umum = material/aksen (wine / clot / arterial). **Pengecualian selected chrome:** splatter yang mengalir ke halaman (**ADR-030**, T-040.6).

---

## Metode: tanya-jawab per permukaan

Ini **bukan** restyle diam-diam.

1. Agent mengajukan **satu** cluster (lihat urutan di bawah) dengan opsi konkret.
2. Boss Rezi mengunci.
3. Baru kode cluster itu. Verifikasi di browser (bukan satu screenshot).
4. Cluster berikutnya.

**Gate:** subtask implementasi **jangan** dikerjakan jika Q&A cluster itu belum dikunci di chat. Jangan merancang palet di JSX sebelum **T-039**.

---

## Pembacaan arah seni (**dikunci T-038.1**, 2026-09-04)

| Kata | Makna di UI ini | Bukan |
| ---- | ---------------------- | ----- |
| **Absurdism** | Portofolio yang menolak tropes “SaaS landing”; deadpan; satu objek/perilaku yang *salah dengan sengaja* | Meme, glitch acak, lelucon Comic Sans |
| **Surrealism** | Skala/justaposisi seperti mimpi yang diam; satu uncanny, bukan kolase | AI sludge, mata mengambang di mana-mana |
| **Gothic Art** | Vertikalitas, kontras tinggi, geometri lancip/travee sebagai struktur — jejak katedral & naskah, bukan stiker | Hot Topic, Halloween, vampir klise |
| **Dark and blood** | Kanvas rendah-cahaya; **satu** aksen darah (wine / clot / arterial) mengganti kuning chip; selected chrome = splatter (ADR-030) | Gore medis, NSFW, mall-goth; splatter di permukaan selain selected |

**Light mode (T-038.2):** **hold** — jangan hapus. Token light lama di-comment di T-039 (arsip). Bukan invert. Skin light gothic (vellum) **bukan** v15. Default ship = **dark**. Toggle chrome **disembunyikan** selama hold.

---

## Urutan gelombang

```
T-038 kunci arah  →  T-039 token  →  T-040 chrome  →  T-041 overlay  →  T-042 halaman  →  T-043 gerak sistem + docs
```

Jangan meloncat ke halaman sebelum chrome/overlay punya skin baru: header/footer terlihat di semua rute.

### Inventaris Q&A (cluster)

**T-038 — Kunci (bukan kode UI)**

1. Pembacaan empat kata (tabel di atas)
2. Default tema: **dark-first**; light hold/comment (**T-038.2** ✅)
3. Nasib bahasa chrome sekarang: **dikunci T-038.3** (bercak selected, tanpa nampan, tombol datar, transisi glitch horror)
4. Arah tipe: **dikunci T-038.4** — blackletter display (heading besar saja) + grotesk body

**T-040 — Chrome**

- Brand / wordmark di header
- Nav + sliding pill
- Locale switcher + theme toggle
- Hamburger sheet
- Footer pita + CTA 3D (bentuk boleh berubah; **job** tetap: buka modal Contact)

**T-041 — Overlay** (perilaku/sisi tetap)

- Contact (`Dialog`, kartu sekarang dark-ink tema-independen)
- Quick Info (`Sheet` kanan + tab tepi)
- Project sheet (`Drawer` bawah)

**T-042 — Halaman** (blok tetap)

- Home: hero klaim + Now, credibility, teaser
- About: hero + potret 4:5, offers, values, proses rest/active
- Work: index + tile (klik → sheet yang sama)

**T-043 — Sistem**

- Transisi halaman, scrollbar, fokus, cursor bila ada, `prefers-reduced-motion`
- Docs/token/rule yang masih menyebut pill kuning sebagai identitas

---

## Verifikasi tiap parent implementasi (wajib, rule UI)

Home / About / Work; **tema gelap yang di-ship** (light di-hold — jangan QA dual-theme untuk kulit baru); 320px + 375px + desktop ≥1024px; overlay Contact + Quick Info + project sheet; reduced-motion. Bukan satu screenshot. Bandingkan vs kode **sebelum** perubahan + arahan yang dikunci — bukan mockup HTML.

**Baca dulu (semua parent):** ADR-029, ADR-024, ADR-028 (stack), ADR-021 (sampai T-038.2), ADR-019/022/027, `04-ux/key-screen-patterns.md`, `06-engineering/design-tokens.md`, `app/globals.css`, `.cursor/rules/shadcn.mdc`, `.cursor/rules/code-discipline.mdc`, `.cursor/rules/ui-ux-mockup-check.mdc`.

---

## T-038 — Kunci arah seni (Q&A, bukan pixel)

* **Status:** ✅ **Done** (2026-09-04) — T-038.1–T-038.5 dikunci di chat
* **Domain:** Design
* **Output:** empat kunci di chat + follow-up ADR-029/ADR-021 bila T-038.2 mengubah default ship; matriks keep/change di COMPLETE_TASK
* **Keputusan paket:** ADR-029 poin 1–4; detail operasional = subtask ini

### Subtasks

- [x] **T-038.1** — Pembacaan absurdism / surrealism / Gothic Art / dark-and-blood **diterima** (tabel di atas, 2026-09-04). Dilarang: gore medis, mall-goth, chaos, NSFW. Splatter **hanya** selected chrome (ADR-030, 2026-09-04).
- [x] **T-038.2** — Default ship **dark**. Light **hold**: comment/arsip di T-039, jangan hapus, jangan invert. Toggle chrome **disembunyikan** selama hold (`theme-toggle.tsx` + cookie tetap). ADR-021 di-update 2026-09-04.
- [x] **T-038.3** — Bahasa chrome + transisi. **Cakupan:** satu keluarga — bukan tile/About.
  - **Selected (bukan tombol):** **bercak darah** 3D sebagai luka di label + **splatter mengalir ke halaman** (ADR-030 / T-040.6). Hanya penanda item aktif (nav + switcher). Mengikuti area label untuk luka; percikan tidak dibatasi chrome.
  - **Container** nampan kuning **dihilangkan**.
  - **Tombol** (Contact header/footer, kirim modal, hamburger): **polos/datar** — teks atau isi gelap + aksen darah tipis di hover/focus. Tanpa 3D, tanpa bercak.
  - Lembar hamburger = panel tetap, bukan lembar kuning (T-040.4).
  - **Transisi halaman:** **hard cut + stutter frame** (beberapa frame tersentak, hampir tanpa efek warna — ‘jump’ horror). Bukan Hess scale, bukan RGB/VHS. Reduced-motion = instan. Bukan View Transitions API. Bukan clip video. Durasi pendek (UX1). Implementasi **T-043.1**.
- [x] **T-038.4** — Display = **blackletter/gothic tajam hanya heading besar** (hero/h1/judul section). Body/nav/form = **grotesk readable**. Bukan Inter/Roboto/Arial. Bukan blackletter di chrome/tombol (clarity). Hindari costume (Pirata One dll.). Family konkret + lisensi = **T-039.2** (sekarang: General Sans / Satoshi / Figtree akan diganti). Jangan pasang font di T-038.
- [x] **T-038.5** — Matriks keep/change di COMPLETE_TASK (2026-09-04). ADR-021/029 tema sudah di-update. **T-031** ⏸️ sampai T-039.

* **Status:** ✅ **Done** (2026-09-04) — gerbang T-039 terbuka

---

## T-039 — Sistem token (setelah T-038)

* **Status:** ✅ **Done** (2026-09-04) — T-039.1–T-039.5
* **Domain:** Design / Engineering
* **Output:** `:root` aktif = palet gelap gothic-blood; blok light lama **di-comment** (arsip T-038.2); `design-tokens.md` selaras; belum restyle semua komponen
* **Keputusan paket:** satu aksen darah; netral gelap; kontras teks lolos a11y

### Subtasks

- [x] **T-039.1** — Palet gelap hidup. Dikunci: kanvas `#0B0B0D` · elevated `#141418` · vellum `#E8E4DC` · muted `#8F8A82` · border `#2C2C32` · darah `#6B1C23` · hover `#8A242E`. Light di-comment `LIGHT HOLD`. Ship memaksa gelap (`THEME_HOLD_FORCE_DARK`).
- [x] **T-039.2** — Tipe: **Texturina** (display, blackletter/textura OFL) + **Instrument Sans** (body/nav/form, grotesk OFL) via `next/font/google`. Bukan costume. Body inherit grotesk di 320px.
- [x] **T-039.3** — Chip: nampan `--chip-bg` elevated (bukan kuning); selected `--chrome-pill-*` wine/vellum. Scrollbar thumb darah. Hex `#fde047` overlay diarahkan ke `--color-accent`. `--elev-3d` versi gelap (untuk bercak selected).
- [x] **T-039.4** — `design-tokens.md` selaras T-039.1.
- [x] **T-039.5** — Browser `http://127.0.0.1:3001/id`: `data-theme=dark`, `html.dark`, kanvas `rgb(11,11,13)`, teks `rgb(232,228,220)`, `--color-accent` / pill `#6b1c23`, `--chip-bg` `#141418`, toggle tidak di DOM. **T-031** tetap ⏸️.

---

## T-040 — Chrome (setelah T-039)

* **Status:** ✅ **Done** (2026-09-04) — T-040.1–T-040.6
* **Domain:** Design / Engineering
* **Output:** header, hamburger, footer pita memakai token baru; job chrome tidak berubah; selected = splatter (ADR-030)
* **Baca dulu tambahan:** `site-header.tsx`, `site-footer.tsx`, `site-footer-cta.tsx`, `theme-toggle.tsx`, `locale-switcher.tsx`, `sliding-pill-group.tsx`, `blood-splatter-layer.tsx`, class `.site-*` di `globals.css`

### Subtasks

- [x] **T-040.1** — Wordmark grotesk + tracking; bar transparan; Contact/hamburger datar. Dikunci chat 2026-09-04 (ghost overlay).
- [x] **T-040.2** — Nav halaman desktop: nampan hilang; selected = bercak darah 3D (bukan pill). Dikunci chat 2026-09-04.
- [x] **T-040.3** — Locale switcher sama bahasa nav: tanpa nampan; selected = bercak 3D. Theme toggle tetap tidak tampil (hold T-038.2).
- [x] **T-040.4** — Lembar hamburger: panel elevated + selected bar stain. Item full-width; switcher compact; Contact di luar. Dikunci chat 2026-09-04.
- [x] **T-040.5** — Pita footer ghost; CTA teks datar + panah buka modal Contact yang sama. Dikunci chat 2026-09-04. Verifikasi Home/About/Work, desktop + 375.
- [x] **T-040.6** — Selected = blood splatter mengalir unbounded (ADR-030). Luka 3D di label tetap. Reduced-motion = tanpa percikan. Dikunci chat 2026-09-04.

---

## T-041 — Overlay (setelah T-040)

* **Status:** ✅ **Done** (2026-09-04) — T-041.1–T-041.3; gerbang T-042 terbuka
* **Domain:** Design / Engineering
* **Output:** Contact, Quick Info, project sheet di-skin; sisi/primitif/job tetap
* **Baca dulu tambahan:** `contact-modal.tsx`, `quick-info.tsx`, `project-sheet.tsx`, class `.ct-*` / `.qi-*` / `.ps-*`

### Subtasks

- [x] **T-041.1** — Q&A + kode: Contact `Dialog`. **Dikunci chat 2026-09-04:** kartu elevated token (`#141418` / `--chip-bg`, vellum, border `#2C2C32`) — keluarga hamburger T-040.4. Hex ink `#0a0f1a` hilang. Kirim datar (T-038.3). Email tetap primer vs satelit.
- [x] **T-041.2** — Q&A + kode: Quick Info `Sheet` kanan + tab tepi. **Dikunci chat 2026-09-04:** panel elevated `#141418` seperti Contact; tab datar (vellum + hairline, hover darah), bukan nampan wine.
- [x] **T-041.3** — Q&A + kode: project `Drawer` bawah (lebar penuh, live/repo di dalam). **Dikunci chat 2026-09-04:** elevated `#141418`, radius atas 1.15rem, scrim gelap token, close ghost. Verifikasi tiga overlay + `prefers-reduced-motion`.

---

## T-042 — Halaman (setelah T-041)

* **Status:** ⏳ Open — gerbang **T-041.3** ✅ + Q&A per halaman
* **Domain:** Design / Engineering
* **Output:** Home / About / Work memakai kulit baru; **blok dan copy sama**
* **Baca dulu tambahan:** `home-page.tsx`, `about-page.tsx`, `about-offer-grid.tsx`, `about-process.tsx`, `about-rest-active.tsx`, `work-page.tsx`, `work-tile.tsx`, `home-work-teasers.tsx`

### Subtasks

- [ ] **T-042.1** — Q&A + kode: Home (hero klaim dua baris + Now di first viewport, credibility, teaser). Tanpa potret. Tanpa menambah blok. **Dikunci chat 2026-09-04 (maju atas permintaan eksplisit, sebelum T-041):** wallpaper live `public/media/home-hero-live.mp4` di `.home-hero` + veil token agar klaim tetap terbaca. Sisa restyle blok Home tetap menunggu T-041.
- [ ] **T-042.2** — Q&A + kode: About (h1 + potret 4:5, offers, values, proses rest/active). Copy tidak dipotong.
- [ ] **T-042.3** — Q&A + kode: Work index + tile. Klik tetap buka sheet T-041.3. Verifikasi tiga rute, tema gelap yang di-ship, 320 / 375 / desktop.

---

## T-043 — Gerak sistem, a11y, docs (setelah T-042)

* **Status:** ⏳ Open — gerbang **T-042.3**
* **Domain:** Design / Engineering / Documentation
* **Output:** gerak sistem selaras T-038.3; docs/rule tidak lagi mewajibkan pill kuning sebagai identitas; a11y kontras + reduced-motion

### Subtasks

- [ ] **T-043.1** — Kode transisi halaman: **hard cut + stutter frame** (T-038.3). Pause overlay tetap. Reduced-motion = instan. Jangan View Transitions API. Jangan clip video. Durasi pendek (UX1). Lenis tetap.
- [ ] **T-043.2** — Scrollbar, fokus keyboard, cursor: token baru, kontras, target sentuh 320px. **Dikunci chat 2026-09-04 (maju atas permintaan eksplisit):** cursor desktop = pisau berdarah (`/cursors/bloody-knife.png`); native cursor disembunyikan; reduced-motion / sentuh = kursor sistem. Pisau tetap terlihat di atas overlay (Contact/QI/sheet) — bukan diganti X. Sisa scrollbar/fokus tetap di subtask ini.
- [ ] **T-043.3** — Docs: `design-tokens.md` (bila drift), `code-discipline.md`, `.cursor/rules/shadcn.mdc` / `code-discipline.mdc` (hapus “pill kuning” sebagai kontrak identitas). `04-ux/` hanya jika kalimat masih mengunci kuning sebagai Must visual — bukan rewrite prinsip.
- [ ] **T-043.4** — Verifikasi penuh R1 (tiga rute × tema yang hidup × overlay × reduced-motion). Update Snapshot: v15 Done. **T-031** kembali antrian bila masih ⏸️.
