# COMPLETE TASK

⚠️ **Peringatan untuk AI:** Jangan membaca riwayat di bawah kecuali Boss Rezi memerintahkan secara eksplisit. Selalu **append entri baru di bagian paling atas** (setelah header ini).

Format entri:

```
## [YYYY-MM-DD]
### Added
- ...
### Changed
- ...
### Fixed
- ...
```

## [2026-08-26]
### Added
- (tidak ada)
### Changed
- **T-025.9 follow-up** — thumb scrollbar = kuning `--chip-bg` (`.site-nav-chip`) di light dan dark. Latar track muted tetap.
### Fixed
- (tidak ada)

## [2026-08-26]
### Added
- (tidak ada)
### Changed
- **T-025.9** — scrollbar dokumen (track + thumb) mengikuti tema `rezisaktiva`: thin, pill, `--rz-scrollbar-*` (muted / text-secondary / text-primary). Light+dark. Firefox `scrollbar-color` + WebKit. Tidak diterapkan ke `.ct-panel` (ink tetap). T-025.8 tidak diubah.
- T-025 parent ✅ Done (T-025.1–T-025.9). Catatan singkat di `design-tokens.md`. Snapshot / TASKS / v03: next = T-021.6.
### Fixed
- Scrollbar native masih gaya OS default (abu-abu) setelah track dipertahankan di T-025.8.

## [2026-08-26]
### Added
- **T-025.9** (open) — tampilan scrollbar native (track + thumb: bentuk, warna, ketebalan) mengikuti tema `rezisaktiva`; token CSS; light/dark; Firefox + WebKit; jangan regresi T-025.8.
### Changed
- T-025 parent ⏳ In Progress lagi (T-025.1–T-025.8 tetap ✅). Snapshot / TASKS / v03: T-025.9 boleh paralel dengan T-021.6.
### Fixed
- (tidak ada)

## [2026-08-26]
### Added
- (tidak ada)
### Changed
- **T-025.8** — scrollbar track tetap terlihat selama transisi halaman. `Lenis.stop()` masih pause inersia; CSS `html.page-vt-lock` / `html.lenis.page-vt-lock.lenis-stopped` memakai `overflow-y: scroll` supaya `.lenis-stopped { overflow: clip }` tidak menelan track. Ritme exit-enter dan palet tidak diubah. Branch `feat/page-transition-hess-rhythm`.
- T-025 parent ✅ Done (T-025.1–T-025.8). Snapshot / TASKS / v03: next = T-021.6.
### Fixed
- Scrollbar track hilang saat pindah halaman karena `overflow: clip` dari Lenis stopped.

## [2026-08-24]
### Added
- (tidak ada)
### Changed
- (tidak ada)
### Fixed
- **PR #44 review (3–6)** — Back/Forward ikut transisi (Navigation API snapshot; fallback enter-only). Live main/footer `inert` + `aria-hidden` saat diparkir. Clone hanya main+footer, input/media dibersihkan. rAF di-cancel saat unmount idle (in-flight dibiarkan karena Strict Mode / ganti locale). T-025.8 belum disentuh.

## [2026-08-24]
### Added
- (tidak ada)
### Changed
- (tidak ada)
### Fixed
- **PR #44 review** — transisi halaman: `isBusy` tidak lagi macet jika `router.push` gagal/redirect (timeout pengaman + enter saat pathname sudah meninggalkan halaman asal); klik selama transisi diantrikan (klik terakhir) bukan dibuang. Branch `feat/page-transition-hess-rhythm`. T-025.8 belum disentuh.

## [2026-08-24]
### Added
- **T-025.8** (open) — handoff chat baru: scrollbar track tetap terlihat selama transisi halaman, acuan karolinahess.com. Branch `feat/page-transition-hess-rhythm`.
### Changed
- Snapshot / TASKS / v03: T-025 bukan fully Done sampai T-025.8.
### Fixed
- (tidak ada)

## [2026-08-24]
### Fixed
- Kedip transisi halaman: halaman baru sempat tampil penuh sebelum enter; clone ikut kena CSS karena ID kembar; clone dihapus sebelum exit selesai. Live page diparkir `translateY(100vh)` sampai enter; clone tanpa ID; clone dibiarkan sampai 1s.
### Added
- (tidak ada)
### Changed
- (tidak ada)

## [2026-08-24]
### Fixed
- Transisi halaman: View Transitions API di-drop — `TimeoutError: Transition was aborted because of timeout in DOM update` saat Next belum selesai ganti DOM. Diganti snapshot CSS (clone exit + enter `100vh`).
### Added
- (tidak ada)
### Changed
- (tidak ada)

## [2026-08-24]
### Added
- **T-025.7** — Transisi halaman memakai ritme karolinahess.com (exit 1s naik+scale 0.5, enter 0.4s dari bawah, delay 0.4s, easing `.65,0,.43,1`).
### Changed
- ADR-025 + `design-tokens.md` §Motion: overlay wipe `--duration-medium` diganti token `--duration-page-*` / `--ease-page-transition`. Warna celah tetap `--color-background-body`.
### Fixed
- Transisi pindah halaman yang terasa terlalu cepat/kasar (wipe 300ms setelah rute sudah berganti).

## [2026-08-24]
### Added
- (tidak ada)
### Changed
- (tidak ada)
### Fixed
- **T-025.4 follow-up (PR #43 review)** — About rest/active: desktop keyboard bisa Tab ke lead/kartu lalu body muncul via `:focus-within`; sentuh membuka dari seluruh kartu (watermark/padding), bukan hanya judul.

## [2026-08-24]
### Added
- **T-025.5** — Home/Work display type lebih besar (`home-work-title`, proof body, Work h1); tile hover playable via `useContainerReveal` (caption + scrim; scale gambar); Magnetic pada CTA “lihat semua” Home. Chrome 3D + Quick Info tidak diubah.
- **T-025.6** — QA browser (`localhost:3001`): 3 rute; Lenis on; Contact/`ct-lock` + Quick Info/`qi-lock`; page-wipe; theme light/dark; reduced-motion (Lenis off, About body visible); mobile caption + About expand klik; hamburger + elevasi 3D.
### Changed
- (tidak ada)
### Fixed
- (tidak ada)

## [2026-08-24]
### Added
- **T-025.3** — pita Contact di `SiteFooter` (heading/body/CTA dari `HOME_COPY`, buka modal yang sama); section `#contact-cta` / CTA halaman dihapus dari Home, About, Work.
- **T-025.4** — About rest/active: hero lead2, offer body, value explanation (hover desktop / klik mobile); proses 4 langkah `CollapsibleGroup` + watermark + ikon langkah; tipe display lebih besar. `content/about.ts` tidak diubah.
### Changed
- Footer legal + satelit di bawah pita Contact; divider footer longgar (tanpa garis section terpisah di atas pita).
### Fixed
- (tidak ada)

## [2026-08-24]
### Added
- **T-025.1** — ADR-025 (craft Hess/Mazur, bukan palet): About tetap M2; copy T-021 tidak diubah; Lenis + page overlay diizinkan; footer = pita Contact. Indeks DECISIONS; update `design-tokens.md` §Motion, `key-screen-patterns.md` (rest/active + footer band), `competitor-analysis.md`; task T-025 di v03 + TASKS.
- **T-025.2** — Lenis window scroll di locale layout (pause `ct-lock`/`qi-lock`, off `prefers-reduced-motion`) + overlay wipe keyed pathname (`--duration-medium`, `pointer-events: none` saat idle).
### Changed
- ADR-017 / ADR-006: pointer ke ADR-025. Contact modal + Quick Info: `data-lenis-prevent`.
### Fixed
- (tidak ada)

## [2026-08-24]
### Fixed
- Locale switch: fill/shadow selected + overlay hover bawaan SegmentedControl Astryx dinonaktifkan, supaya hanya satu pill yang geser (seperti nav). Nav tidak diubah.
### Changed
- Pill aktif chrome (Home/About/Karya + ID/EN) memakai token `--elev-3d` yang sama dengan chip locale, supaya item terpilih timbul 3D bukan hanya track kuningnya.

## [2026-08-23]
### Fixed
- Review PR #42 (P2): StatusDot badge About tidak lagi mengekspos teks `availability` panjang ke screen reader (`aria-hidden` + label = badge). Close/copy Contact dan close Quick Info dikecualikan dari elevasi 3D; `.astryx-button:focus-visible` memakai outline agar cincin fokus tidak kalah `box-shadow`.

## [2026-08-23]
### Added
- Elevasi timbul 3D pada chip chrome (nav, locale) dan seluruh `.astryx-button` (Contact, theme toggle, hamburger, Quick Info, CTA, close/copy modal). Token `--elev-3d` / hover / pressed di `app/globals.css`; tab Quick Info tidak lagi `box-shadow: none`.
### Changed
- `product-discovery/06-engineering/design-tokens.md` — elevation halaman tetap minimal; kontrol + Button memakai timbul 3D.

## [2026-08-23]
### Fixed
- Grid Karya: tile setengah lebar yang sendirian (sebelum featured atau di akhir daftar) tidak lagi meninggalkan sel kosong di kanan; tile itu merentang penuh dengan rasio featured.

## [2026-08-23]
### Changed
- **About hero (lanjutan T-024):** judul & paragraf diperbesar (kata H1 sempat tertahan di ukuran body Astryx; sekarang ikut skala heading). Padding atas diperketat — `min-height: 100svh` dan 6–8rem dihapus, ganti token spasi yang lebih rapat.

## [2026-08-23]
### Added
- **T-024** — redesain visual About di kode produksi (ADR-024). Hero 2 kolom: Badge hijau availability + H1 + dua lead | foto rounded + shadow. Tiga Card offering (ikon, H3, body, hover halus). Values di pita latar muted (3 Card, judul tebal dari kutipan T-021.3). Proses grid 2×2 dengan angka watermark. CTA terpusat + Button primary besar. Mobile-first: grid 1 kolom <768px. Copy body T-021.3 tidak diubah; hanya label badge pendek bilingual.
### Changed
- `app/[locale]/_components/about-page.tsx`, `app/globals.css` (About), `content/about.ts` (`availabilityBadge`), ikon offering di `overlay-icons.tsx`. Task dicatat di `v03-development-r1.md`.

## [2026-08-21]
### Added
- **ADR-024** — kode produksi (Astryx) menggantikan mockup HTML sebagai sumber kebenaran visual. `design-mockups/` jadi arsip; `design-mockups/README.md` menjelaskan itu. Pekerjaan desain pertama dengan aturan baru: halaman About (belum ada task backlog sampai dikunci).
### Changed
- Rule `.cursor/rules/ui-ux-mockup-check.mdc` dibalik isinya (nama file tetap): pelajari `app/`, bukan HTML mockup; verifikasi vs kode + arahan Boss Rezi.
- Pointer di `AGENTS.md`, `PROJECT_RULES.md`, `ask-before-assuming.mdc`, skills `project-os-navigator` / `proactive-clarification`, `DEVELOPER_WORKFLOW.md`, `PROJECT_OVERVIEW.md`, `04-ux/` (IA, key screens, nav), `design-tokens.md`, catatan historis di `v03-development-r1.md`, Snapshot `PROJECT_STATE.md`.

## [2026-08-21]
### Changed
- **Fitur unduh CV/Portofolio dipisah jadi task baru T-023 (⏸️ Deferred).** Saat code review PR T-021.4 ditemukan gap: CV yang tersedia sepenuhnya berbahasa Indonesia, tapi link yang sama akan tampil juga di locale EN — berpotensi melanggar paritas ID/EN. Boss Rezi memutuskan tunda sampai CV Inggris siap. Kode implementasi (`content/contact.ts` field CV, blok UI di `contact-modal.tsx`, `DownloadIcon`, style `.ct-cv-*`, file PDF, `ADR-023` sebagai file) **di-revert** dari branch `feat/contact-modal-cv-download` (commit revert eksplisit, bukan force-push). `ADR-023` ditulis ulang: status "Accepted (implementasi ditunda)" — keputusan penempatan (Contact modal, bukan Quick Info/route baru) tetap berlaku, hanya eksekusi yang ditunda ke T-023. `feature-modules.md` M3, `TASKS.md`, `PROJECT_STATE.md`, `DECISIONS.md`, dan `v10-page-copy.md` (T-021.4 completion note + section T-023 baru) disesuaikan agar tidak menyatakan fitur ini "selesai".
- Fix kontras light mode Contact modal (lihat entri Fixed di bawah) **tidak di-revert** — tetap dipakai karena independen dari fitur CV.

## [2026-08-21]
### Added
- **T-021.4** (Contact modal copy) selesai — semua label/body form Contact modal dikonfirmasi apa adanya dari draf mockup dan dikunci di `content/contact.ts` (`titleLead`/`titleAccent`, email/pesan, submit/sent, close, detailsLabel/copyLabel/copied, socialsLabel, availability).
- **Fitur baru (ADR-023):** tautan unduh CV/Portofolio (PDF nyata `public/Resume_rezi_updated_agustus_2026.pdf`) di Contact modal — `CV_FILE_HREF` + `cvLabel`/`cvDownload` (ID/EN) di `content/contact.ts`; blok baru (label-caps + `HStack` ikon+link) di `contact-modal.tsx` setelah Sosial, sebelum availability; `DownloadIcon` baru di `overlay-icons.tsx`. Di luar draf mockup awal, dikunci lewat diskusi + ADR terpisah karena menyentuh baseline `feature-modules.md` (M3).
### Changed
- `product-discovery/02-product/feature-modules.md` M3 Contact — tambah baris tautan unduh CV/Portofolio (cite ADR-023).
### Fixed
- **Bug kontras Contact modal di light mode**: teks "Mari", availability line, "Detail Kontak", "Sosial" tak terbaca (dark-on-dark) karena komponen `Text`/`Heading` Astryx menimpa warna lewat token tema (`--color-text-primary`) dengan CSS specificity yang dinaikkan sengaja (`:not(#\#)` x3 di `astryx.css`), padahal panel modal ini theme-independent (selalu dark-ink, lihat komentar `.ct-panel`). Fix: `className` dedicated baru (`ct-title-lead`, `ct-availability-text`) + `!important` pada rule warna `.ct-title`, `.ct-title .ct-accent`, `.ct-label`, `.ct-label-caps`, `.ct-email-link`, `.ct-socials a` di `app/globals.css`. Diverifikasi via screenshot browser di light & dark mode, ID & EN.

## [2026-08-20]
### Fixed
- Temuan code review PR #40: title meta About EN ikut nav baru ("How I Work", bukan "My Process" lama); `content/site-meta.ts` description About sekarang string dedicated pendek (bukan reuse `ABOUT_COPY.lead1` yang sudah jadi paragraf panjang T-021.3, supaya tidak terpotong di hasil pencarian); footer LinkedIn/GitHub sekarang pakai prop `isExternalLink` Astryx (ikon + label a11y "opens in new tab") — `work-tile.tsx` tetap pakai `target`/`rel` manual (sengaja, `isExternalLink` akan render ikon nyangkut di atas gambar tile).

## [2026-08-20]
### Added
- **T-021.3** — copy About / Proses Kerja ditulis ulang total (bukan salinan mockup) ke `content/about.ts`, dikunci lewat diskusi (Boss Rezi menulis sendiri revisinya): h1 tetap "Halo, saya Rezi.", lead + 3 offer (Product/Fullstack/**AI & Orchestration**) + Approach + 3 Values + note proses + 4 langkah (Discover/Design/Build/Ship & Iterate) + CTA "Penasaran gimana detailnya?" — semua menonjolkan orkestrasi tim AI subagent, pipeline discovery→arsitektur→build→ship, dan keputusan terdokumentasi via ADR. EN ditulis sebagai adaptasi makna, bukan terjemahan literal.
### Verified
- Render HTML `/id/about` dan `/en/about` dicek langsung (curl dev server) — teks kunci (lead, judul offer "AI & Orchestration", CTA) tampil persis.

## [2026-08-20]
### Added
- **T-021.1** — copy chrome bersama terkunci: nav EN About → "How I Work" (`lib/nav.ts`, ganti dari "Process"); tombol Contact "Kontak" (ID) / "Contact" (EN); URL LinkedIn nyata (`https://www.linkedin.com/in/rezi-saktiva-bb89a12a1/`) dipasang ke `content/contact.ts` + `site-footer.tsx` (sebelumnya placeholder `#`).
- `MENU_TOGGLE_LABEL` baru di `lib/nav.ts` — aria-label hamburger toggle sesuai state buka/tutup ("Buka menu"/"Tutup menu", "Open menu"/"Close menu"), dipasang ke `MobileNavToggle` di `site-header.tsx` (sebelumnya statis "Menu", tidak sesuai mockup).
- **T-021.5** — copy Work index terkunci: `h1` (ID "Proyek / saya." — EN "My / Projects", mixed-language dikunci eksplisit oleh Boss Rezi, bukan terjemahan literal), `lead`, dan CTA (`ctaQuestion`/`ctaLink`) ditulis ke `content/work.ts` menggantikan draf sementara.
### Changed
- `site-footer.tsx` sekarang membaca `CONTACT_SOCIALS` dari `content/contact.ts` (satu sumber kebenaran URL sosial untuk footer + Contact modal), bukan hardcode `#` terpisah.
- `v10-page-copy.md`, `TASKS.md`, `PROJECT_STATE.md` diselaraskan: T-021.1 dan T-021.5 Done.
### Verified
- Render HTML `/id/work` dan `/en/work` dicek langsung (curl dev server) — h1, lead, CTA, label nav, dan href LinkedIn/GitHub tampil persis sesuai yang dikunci.

## [2026-08-20]
### Fixed
- Panel hamburger mobile tidak bisa ditutup: `display: flex` dari Astryx Stack mengalahkan atribut HTML `hidden`, jadi lembar menu tetap terlihat meski state sudah tertutup. `.site-mobile-nav[hidden]` sekarang `display: none !important`.

## [2026-08-20]
### Fixed
- ESLint `react-hooks/refs`: jangan assign `closeMobileNavRef.current` saat render di `site-header.tsx` (CI / lint-typecheck PR #39).

## [2026-08-20]
### Fixed
- Panel hamburger mobile bukan lagi `<dialog>` modal Astryx — chrome Contact/tema/brand tetap bisa di-tap saat menu terbuka (PR #39 review). Tutup via hamburger, Escape, atau tap di luar panel.

## [2026-08-20]
### Added
- **T-022.1–T-022.4** — paritas desain mobile mockup → kode Next.js (chrome hamburger, Home/About/Work, Contact modal, Quick info).
### Changed
- Chrome <1024px: header satu baris; panel menu kuning (MobileNav Astryx di-restyle jadi dropdown, bukan drawer samping); item nav full-width termasuk state aktif; switcher ID/EN compact.
- Home: hero clamp mengikuti mockup (tidak overflow-x); teaser judul + “lihat semua” stack di <640px; tile featured `4/3` di ponsel sempit (bukan strip 16:8).
- About/Work/Contact/Quick info: ukuran 320/375 (modal muat viewport; tab Quick info lebih kecil agar tidak menabrak judul).
### Fixed
- Header mobile tidak wrap; hero “Membangun / produk.” muat di 320–375px.

**Gap Astryx (tidak 1:1, T-022.4):** panel hamburger tetap `<dialog>` native (focus trap / Escape / klik di luar) dengan backdrop transparan — mockup panel `position: absolute` tanpa scrim. Compiler StyleX belum wired; override scoped CSS seperti T-013.

## [2026-08-20]
### Added
- **T-022** — penyesuaian desain mobile (paritas mockup → kode Next.js); subtask T-022.1–T-022.4; status Todo antrian, jangan dikerjakan sampai Boss Rezi minta.
### Changed
- Dokumentasi desain diselaraskan mockup mobile 2026-08-20: `navigation-patterns.md` (komposisi hamburger, lantai 320px), `key-screen-patterns.md` (responsive SE/hero/teaser/modal/QI), `ux-principles.md` (target sentuh chrome), `information-architecture.md` (chrome mobile), `design-tokens.md` (layout lantai 320px).
- Mockup menu mobile: item halaman (termasuk state aktif) `width: 100%`; switcher ID/EN compact, tidak meregang penuh.
- Mockup HTML: layout mobile (terutama iPhone SE 320/375) dirapikan di `design-mockups/` — chrome, hero, menu hamburger, kartu karya, modal Contact, tab Quick info. Bukan task backlog bernomor; permintaan langsung Boss Rezi. App Next.js belum diubah (masih mengikuti mockup sebelumnya sampai ada task follow-up).
### Fixed
- Hero Home “Membangun” tidak lagi terpotong di lebar 320–375px; header Contact/tema/hamburger disejajarkan (target sentuh 36px); menu mobile satu lembar kuning; tile karya featured lebih tinggi di ponsel; modal Contact muat di viewport SE.

## [2026-08-19]
### Changed
- CI menjalankan `pnpm theme:check` supaya `theme/` tidak drift dari `lib/astryx-theme.ts`.
### Fixed
- CTA halaman (`.home-contact-cta`) memakai brand + hover aksen seperti mockup, bukan `variant="primary"` teal.
- Kanvas `html`/`body` memakai `light-dark()` dari `color-scheme` SSR supaya first paint dark tidak cream.

## [2026-08-19]
### Added
- Tema built `rezisaktiva` (`lib/astryx-theme.ts` → `theme/astryx-theme.css` + `theme/rezisaktiva.js`), extends theme-neutral, nilai `--c-*` dari `design-mockups/shared.css`.
### Changed
- `app/globals.css` impor tema built (bukan `theme-neutral/theme.css`); `ThemeModeProvider` pakai `rezisaktivaTheme`; chip pill `#edeae1` (on-brand mockup).
- `design-tokens.md` mapping kustomisasi tema sudah dieksekusi; Snapshot/TASKS Known Issues dikosongkan.
### Fixed
- **KI-001** — tombol theme toggle (dan Contact chrome) default `bg-brand` / hover `bg-accent`, termasuk state pressed toggle.
- **KI-002** — kanvas light `#edeae1` (`--c-bg`); dark `#0a0f1a`; text/border/accent ikut mockup.

## [2026-08-19]
### Added
- **KI-001** — warna tombol light/dark mode berbeda dari mockup.
- **KI-002** — background halaman light mode berbeda dari mockup.
### Changed
- `PROJECT_STATE.md` Known Issues; Snapshot + `TASKS.md` Fokus merujuk KI (tidak blocker merge PR #32).

## [2026-08-19]
### Fixed
- Hover navbar mengikuti mockup: sliding pill (`initPillGroups`) di chip Home/About/Karya + ID/EN; magnetic + hover kuning pada Contact dan theme toggle.

## [2026-08-19]
### Fixed
- Code review PR #32: cursor ring pakai delegasi `mouseover`/`mouseout` supaya tautan/tombol baru setelah client navigation tetap dapat `is-hover`.
- `getSiteUrl()` menolak `NEXT_PUBLIC_SITE_URL` kosong / bukan http(s) — fallback localhost, `metadataBase` tidak throw.
- Timer Salin/Kirim di modal Contact di-`clearTimeout` (klik beruntun + unmount/tutup).

## [2026-08-19]
### Added
- **T-015.2** — halaman `/[locale]/about` sesuai `design-mockups/about.html` (hero, offers, approach/values, proses, CTA Contact).
- **T-016.2** — modal Contact global (ADR-019): form email+message, mailto primer, tanpa route `/contact`; wired ke nav + CTA Home/About/Work.
- **T-017.2** — title/description/OG + canonical/hreflang dari `NEXT_PUBLIC_SITE_URL` (`lib/page-metadata.ts`).
- **T-019.2** — halaman `/[locale]/work` sesuai `design-mockups/work.html` (6 tile); tidak ada route Work case (M10/R2).
- **T-020.2** — Quick Info overlay (ADR-022): tab tepi kanan → drawer, focus trap, bukan form Contact.
### Changed
- Branch kerja: `feat/r1-about-work-contact-meta`.
- **T-018** ditunda (keputusan Boss Rezi 2026-08-19): exit R1 menunggu copy T-021.1–T-021.7 terkunci (kontrak v10).
### Fixed
- Tombol Contact chrome tidak lagi tooltip “segera hadir” — modal T-016 sudah hidup.

---

## [2026-08-18]

### Changed

- Subtask copy ditarik dari v03 (tidak didaur ulang): T-014.1, T-014.3, T-015.1, T-016.1, T-017.1, T-019.1, T-020.1. Kunci + tulis teks hanya **T-021** di v10. **T-014** ✅ Done (T-014.2). Parent UI v03 tidak menunggu copy.

---

## [2026-08-18]

### Changed

- Dokumentasi v03 dipisah dari page-copy: checklist/kontrak T-021 tidak lagi di `v03-development-r1.md`. Kontrak copy ↔ UI pindah utuh ke `v10-page-copy.md`. v03 hanya tautan satu baris ke v10.

---

## [2026-08-18]

### Added

- **T-014.2** — halaman Home `/[locale]` (bukan stub): hero cutout + word reveal, credibility line, work teaser 3 tile (1 featured + 2 kolom), contact CTA; motion ADR-017 (reveal, cursor ring, magnetic); teks sementara dari mockup di `content/home.ts`.

### Changed

- Header AppShell transparan + z-index di atas hero supaya first viewport overlay seperti `design-mockups/home.html`. Tile teaser link ke Work index (`/[locale]/work`), bukan work-case M10.

### Fixed

- (none)

---

## [2026-08-18]

### Fixed

- Temuan review PR #30: kontrak copy ↔ UI — T-014.3 sumber T-021.2/T-021.5 (jangan mengarang); layout boleh paralel, parent tidak Done sebelum copy terpasang; T-021.1 wajib pasang chrome ke `lib/nav.ts` + footer; T-018.1 prasyarat T-021.1–T-021.7.

## [2026-08-18]

### Changed

- File copy R1 dipindah dari `tasks/v03-page-copy.md` ke **`tasks/v10-page-copy.md`**. v01–v06 tetap urutan rilis yang direncanakan; copy tidak memakai slot v03/v04–v06. ID task tetap **T-021**.

## [2026-08-18]

### Added

- **T-021** — backlog copy semua teks R1 (`tasks/v03-page-copy.md`): chrome, Home, About, Contact modal, Work index, Quick Info, meta. Dikerjakan sambil diskusi dengan Boss Rezi; output ke `content/`. Subtask `T-014.1` … `T-020.1` + `T-017.1` menunjuk ke T-021.N.

### Changed

- `TASKS.md`, `PROJECT_STATE.md` (fokus T-021.2 + T-014), `v03-development-r1.md`, `content/README.md`.

## [2026-08-18]

### Changed

- Kebijakan kolaborasi AI: **cek dulu, tanya hanya jika urgent** (gap, salah dokumen, atau hal di luar rencana). Tanya ritual dihapus — termasuk “mau pakai mockup yang sekarang atau perbarui dulu?” jika mockup sudah ada dan selaras.
- `.cursor/rules/ask-before-assuming.mdc` — kewajiban cek kelengkapan task/mockup/dokumen; tanya hanya kondisi urgent; “tidak yakin” yang bisa diselesaikan dengan membaca bukan alasan tanya.
- `.cursor/rules/ui-ux-mockup-check.mdc` — mockup yang ada dipakai langsung; tanya hanya jika mockup hilang, konflik, atau unplanned.
- Skill `proactive-clarification` + `project-os-navigator`; `AGENTS.md`; `PROJECT_RULES.md`; `PROJECT_OVERVIEW.md`; `DEVELOPER_WORKFLOW.md`; catatan gate di `tasks/v03-development-r1.md`.
- Dicatat di `CONVERSATIONS.md` (2026-08-18).

## [2026-08-16]

### Fixed

- **T-013.4 — Bug flash tema dark/light saat reload (Major Bug).** Root cause: `lib/theme-mode.ts` `getThemeModeServerSnapshot()` hardcode `"light"` (ADR-021 poin 2, "default ship tetap light"), sementara preferensi asli hanya ada di `localStorage` (tidak terbaca server). Karena komponen `Theme` bawaan Astryx (`@astryxdesign/core/theme`) mengikat warna semua komponen ke atribut `data-theme`/`color-scheme` pada sebuah `<div>` yang di-render React sendiri (bukan cuma CSS statis) dan juga men-sync ulang atribut itu ke `<html>` lewat `useLayoutEffect` (`useRootThemeSync`), React **wajib** merender pass pertama pakai server snapshot ("light") untuk match SSR sesuai kontrak `useSyncExternalStore`, lalu memicu render koreksi sinkron begitu `useSyncExternalStore` mendeteksi mismatch client vs server. Ada browser paint nyata di antara dua render itu → user preferensi "dark" selalu lihat flash terang→gelap sesaat setiap reload. Script anti-flash blocking yang sudah ada di `app/layout.tsx` (`themeInitScript`) tidak menyelesaikan ini karena cuma menyentuh atribut `<html>`, sedangkan sumber flash sebenarnya adalah `mode` React yang salah di render pertama — efeknya malah ditimpa balik oleh layout effect Astryx sendiri.
- **Fix:** preferensi sekarang JUGA disimpan sebagai cookie (`rz-theme`, di-set `lib/theme-mode.ts` `writeStoredThemeMode()` bersamaan dengan localStorage saat toggle). `app/layout.tsx` (sekarang Server Component `async`) membaca cookie ini lewat `cookies()` dari `next/headers` (request-scoped, aman untuk concurrent request — **bukan** disimpan ke variable module-level, supaya tidak ada risiko preferensi user A "bocor" ke response user B) dan mengalirkannya sebagai prop `initialMode` ke `ThemeModeProvider`. `ThemeModeProvider` (`app/_components/theme-mode-provider.tsx`) memakai `initialMode` ini untuk `getServerSnapshot` DAN sebagai fallback `getSnapshot` client — server & client snapshot render pertama jadi selalu identik, sehingga tidak ada lagi render koreksi `useSyncExternalStore` sama sekali (bukan cuma dipercepat/disamarkan). Default tetap "light" kalau cookie belum ada (user baru) — tidak mengubah keputusan ADR-021 poin 2. Script blocking `themeInitScript` di `layout.tsx` dipertahankan sebagai lapis pertahanan tambahan (mis. kalau cookie ke-strip proxy/CDN tapi localStorage masih ada), bukan lagi mekanisme utama.
- **Trade-off yang perlu diketahui:** karena `app/layout.tsx` sekarang memanggil `cookies()`, seluruh app otomatis keluar dari static rendering (Next.js selalu render dinamis per-request untuk route yang pakai layout ini) — konsekuensi inheren dari pendekatan cookie-based SSR-theme, bukan sesuatu yang bisa dihindari selama preferensi tema harus diketahui server sebelum render pertama.
- Diverifikasi manual di browser (klik tombol toggle asli, bukan set localStorage manual): reload di kondisi dark → langsung dark dari awal (HTML SSR mentah sudah `data-theme="dark"` sebelum JS jalan), reload di kondisi light → langsung light dari awal. Tidak ada flash di kedua arah.

### Fixed (lanjutan, sama hari — sisa flash pada chip "selected")

- Setelah fix di atas, Boss Rezi masih melihat kedipan spesifik pada chip nav-item/locale-switch yang `selected` (background hitam pekat) — bukan pada konten lain. Diinvestigasi langsung pakai CDP (`Page.addScriptToEvaluateOnNewDocument` merekam `getComputedStyle` tiap `requestAnimationFrame` sejak awal load): terbukti frame 1–5 menunjukkan warna chip **TERBALIK** (`rgb(237,233,225)` bg / `rgb(10,15,26)` teks — persis nilai `light-dark()` versi DARK), lalu ber-**animasi** (interpolasi warna kontinu, dikonfirmasi lewat `CSS.getMatchedStylesForNode`: elemen ini punya `transition-property: background-color, color` bawaan Astryx untuk efek hover) ke warna final yang benar.
- **Root cause:** `--chrome-pill-bg`/`--chrome-pill-fg` (`app/globals.css`) didefinisikan lewat CSS `light-dark()` di `:root`, mewarisi `color-scheme` dari wrapper `<div>` Astryx yang jauh di atasnya di DOM tree. Browser sempat resolve `light-dark()` ini 1 pass memakai skema yang salah (mengikuti preferensi OS, bukan preferensi app) sebelum "settle" ke yang benar setelah kalkulasi style penuh — dan `transition` bawaan Astryx pada elemen chip membuat koreksi 1-pass itu tampak sebagai animasi warna, bukan snap instan. Fix cookie-SSR sebelumnya tidak menyentuh mekanisme ini sama sekali karena itu murni soal render React, sedangkan ini soal timing resolusi CSS `light-dark()` di browser.
- **Fix:** hilangkan ketergantungan pada `light-dark()`/`color-scheme` CSS untuk 2 token ini sepenuhnya. `useChipColorVars()` (hook baru, `app/_components/theme-mode-provider.tsx`) menghitung warna chip langsung dari `mode` React (satu-satunya sumber kebenaran, sudah dijamin identik server & client oleh fix sebelumnya) dan disuntikkan sebagai inline `style` di elemen wrapper (`site-header.tsx` — `.site-nav-chip` & `.site-mobile-nav-chip`, `locale-switcher.tsx` — `.site-locale-switch`). `app/globals.css` `:root` sekarang cuma fallback statis default-light (bukan lagi `light-dark()`).
- Diverifikasi via CDP frame-by-frame logger: warna chip di light mode & dark mode masing-masing konsisten sejak frame pertama (`readyState: "loading"`) sampai frame ke-60 — cuma 1 nilai unik per mode, tidak ada lagi swap/animasi.

## [2026-08-16] (11)

### Fixed

Temuan code review PR #28 (`/code-review`) + warning dev console diperbaiki:

- **Blast radius theme override (High)** — `lib/theme.ts` (custom `defineTheme` `components` override) dihapus total. Styling chip/pill chrome (nav pill, locale switch, mobile drawer, tombol Contact, theme toggle) dipindah ke `app/globals.css` sebagai CSS biasa yang di-scope lewat class wrapper (`.site-nav-chip`, `.site-locale-switch`, `.site-mobile-nav-chip`, `.site-contact-button`, `.site-theme-toggle`) + selector `[data-selected]` — bukan lagi override global yang berpotensi bocor ke `TopNavItem`/`SegmentedControl`/`SideNavItem`/`Button` lain di halaman masa depan (T-014 dst).
- **Duplikasi warna hex (Medium)** — `CHIP_BG`/`CHIP_FG` yang dulu ada di dua tempat (`lib/theme.ts` + `app/globals.css`) sekarang cuma satu sumber: `:root { --chip-bg; --chip-fg; }` di `app/globals.css`.
- **Warning console "Theme ... using runtime style injection"** — hilang otomatis karena tidak lagi pakai `defineTheme` custom (kembali ke `neutralTheme` bawaan, yang sudah pre-built).
- **Flash tema untuk user dark mode (Medium)** — `app/layout.tsx` ditambah blocking script (`next/script` `beforeInteractive`) yang set `data-theme` di `<html>` dari localStorage sebelum React hydrate, sesuai pola yang direkomendasikan Astryx sendiri untuk SSR.

### Catatan

Sempat dicoba pendekatan `astryx theme build` (built theme, bukan runtime injection) sebagai fix warning — berhasil dan valid, tapi ditinggalkan karena solusi CSS-scoped di atas sekaligus menyelesaikan temuan blast-radius (High) juga, jadi satu perubahan untuk dua temuan.

## [2026-08-16] (10)

### Added

- **`.cursor/rules/ask-before-assuming.mdc`** (baru, `alwaysApply: true`) — atas permintaan Boss Rezi: wajib tanya (via `AskQuestion`) kalau AI menemukan **gap** (bagian tidak lengkap/tidak konsisten), **hal belum terdokumentasi** (butuh konteks yang belum ada di baseline manapun), atau **tidak diketahui/tidak yakin** (AI sendiri tidak tahu jawaban yang benar) — berlaku untuk semua jenis pekerjaan, bukan cuma UI/UX. Melarang eksplisit: berasumsi lalu jalan terus, mengarang jawaban, diam-diam memilih opsi, melaporkan "selesai" padahal ada bagian yang belum yakin/dicek.

### Changed

- `.cursor/skills/proactive-clarification/SKILL.md` — prinsip dasar diperluas: bukan cuma "fork keputusan" (pilihan valid setara), tapi juga gap/belum terdokumentasi/tidak tahu, dengan pointer ke rule baru.
- `AGENTS.md`, `PROJECT_RULES.md` — pointer ke `ask-before-assuming.mdc` ditambahkan di daftar rule dan Aturan Keras / AI Collaboration Rules.

### Catatan

Ditaruh sebagai rule terpisah (bukan digabung ke `ui-ux-mockup-check.mdc`) karena cakupannya umum, bukan spesifik UI/UX — mengikuti pola pemisahan satu rule per topik yang sudah ada (`xds.mdc`, `no-ai-attribution-git.mdc`, `ui-ux-mockup-check.mdc`). Alasan pakai rule `alwaysApply: true` (bukan cuma skill) sama seperti entri (9): rule di-inject otomatis tiap turn, skill butuh AI memilih untuk membaca.

## [2026-08-16] (9)

### Changed

Atas permintaan Boss Rezi (setelah beberapa kali koreksi ketidaksesuaian navbar vs mockup): **`.cursor/rules/ui-ux-mockup-check.mdc` diperkuat jadi aturan keras** —

1. Mockup HTML (`design-mockups/`) = **desain resmi/source of truth**, bukan sekadar referensi.
2. Wajib benar-benar mempelajari mockup (layout, warna, komponen, ukuran, state) sebelum eksekusi kode UI/UX — bukan cuma cek file-nya ada.
3. Konflik mockup vs dokumentasi (`design-tokens.md`, `product-discovery/`, ADR) → **mockup menang**, tapi dokumen tidak boleh diubah diam-diam — wajib persetujuan eksplisit Boss Rezi dulu.
4. Hasil kode UI/UX wajib **100% akurat** ke mockup (ukuran, padding, gap, radius, font, state) — ditambah kewajiban verifikasi (screenshot/computed-style) sebelum melaporkan task selesai.

Ditaruh di rule `alwaysApply: true` (bukan skill/AGENTS.md saja) karena rule jenis ini di-inject otomatis ke setiap turn percakapan AI — mekanisme paling tidak mungkin "terlewat" dibanding skill (butuh trigger) atau AGENTS.md (dibaca sekali di awal sesi). `AGENTS.md` dan `PROJECT_RULES.md` diupdate jadi pointer singkat ke rule ini (governance tetap satu sumber kebenaran, `ui-ux-mockup-check.mdc`).

## [2026-08-16] (8)

### Fixed

Separator "/" antara ID dan EN di locale switch (`locale-switcher.tsx`) — hilang dibanding mockup (`.locale-switch span.opacity-40`). Ditambahkan `<span aria-hidden>` di antara `SegmentedControlItem` + class `.locale-switch-separator` (`app/globals.css`, opacity 0.4, warna ink sama seperti teks chip).

## [2026-08-16] (7)

### Fixed

Follow-up kedua Boss Rezi: bagian `header-tools` (locale switch ID/EN, theme toggle, tombol Kontak) masih belum sama ukurannya — dikoreksi dengan computed-style diff yang sama (`lib/theme.ts`):

- Locale switch (`segmented-control`): height 28px → **40px**, padding 6px/12px, gap 4px (dulu default Astryx, sekarang persis mockup `.locale-switch--bar`).
- Item locale (`segmented-control-item`): padding dikoreksi jadi 2px/8px.
- Tombol Kontak (`button` `variant:primary+size:sm`): height 28px → **32px**, padding 6px/16px (radius pill sudah dibenarkan di entri sebelumnya).
- Theme toggle (`toggle-button`): 28px → **36px** persegi/lingkaran.
- Gap antar elemen di `header-tools` (`site-header.tsx` endContent `HStack`): 8px → **12px** (`md:gap-3` mockup).

Hasil sudah diverifikasi lewat computed-style browser — seluruh nilai (height/padding/gap/radius) sekarang cocok dengan mockup.

## [2026-08-16] (6)

### Fixed

Follow-up review Boss Rezi (bandingkan langsung DOM mockup vs Next.js): tinggi & bentuk navbar belum sesuai mockup — diperbaiki dengan computed-style diff presisi (`design-mockups/home.html` vs implementasi):

- Tinggi header 48px → **80px**, padding-inline 8px → **40px** (`lib/theme.ts`, override component `top-nav`).
- Nav pill tadinya 3 chip kuning terpisah (tiap link py sendiri, radius penuh) → jadi **satu bar kuning menyatu** (`app/globals.css` class `.site-nav-chip`, dipasang di `HStack` centerContent `site-header.tsx`) — item aktif ("Home") tampil sebagai pill ink di dalam bar tsb, item lain transparan di atas kuning. Radius dikoreksi dari pill penuh (9999px) ke **16px** (`rounded-2xl` mockup, dikonfirmasi lewat computed style, bukan pill).
- Tombol Contact & theme toggle: radius dikoreksi jadi pill penuh (`--radius-full`) — sebelumnya ikut radius default Button/ToggleButton Astryx (10px, kotak membulat).
- Brand heading "rezisaktiva": font-weight 400 → 600 (`top-nav-heading` override) sesuai mockup.

### Catatan

Wrapper `.site-nav-chip` pakai `className` + CSS plain di `app/globals.css` (bukan `xstyle`) karena compiler StyleX masih belum wired — konsisten dengan catatan gap di entri (5) di bawah.

## [2026-08-16] (5)

### Added

- **T-013.4** — komponen theme toggle di chrome (ADR-021): `app/[locale]/_components/theme-toggle.tsx` + `theme-toggle-icons.tsx` (ikon sun/moon, path sama dengan mockup), `app/_components/theme-mode-provider.tsx` (mode `light`/`dark` via `useSyncExternalStore` — bukan `useState`+`useEffect`, supaya tidak ada hydration mismatch atau lint `set-state-in-effect`), `lib/theme-mode.ts` (persist localStorage `rz-theme`, pola mockup). Default ship tetap light; toggle selalu terlihat di luar hamburger bersama tombol Contact.
- **Style navbar disamakan mockup** (chip kuning theme-independent + pill aktif ink, keputusan Boss Rezi via pertanyaan terstruktur — pilih fidelity penuh): `lib/theme.ts` — custom Astryx theme (`defineTheme`, `extends: neutralTheme`) dengan override `components` untuk `top-nav-item`, `segmented-control` + `segmented-control-item`, `side-nav-item` (base = chip kuning `#FDE047` + teks ink fixed; state `selected` = pill ink/brand `light-dark()`, mengikuti arah brand `design-tokens.md`).

### Changed

- `app/layout.tsx` — `<Theme mode="light">` statis diganti `<ThemeModeProvider>` (client) supaya mode bisa berubah lewat toggle.
- `app/[locale]/_components/site-header.tsx` — tambah `<ThemeToggle>` di `endContent` (antara hamburger dan tombol Contact).
- `project-manager/tasks/v03-development-r1.md` — T-013 (T-013.1–T-013.4) ditandai selesai penuh.
- `PROJECT_STATE.md` — fokus lanjut ke T-014; T-013.4 dihapus dari daftar backlog terbuka.

### Catatan (gap engineering ditemukan, belum ada ADR)

Saat implementasi ini, `xstyle`/`stylex.create()` (jalur styling custom yang direkomendasikan `.cursor/rules/xds.mdc`) dicoba untuk chip nav pill — **build langsung gagal** ("Unexpected 'stylex.create' call at runtime. Styles must be compiled by '@stylexjs/babel-plugin'."). Investigasi menunjukkan compiler StyleX (`@stylexjs/babel-plugin` + `@stylexjs/postcss-plugin`, lihat contoh resmi `apps/example-nextjs-stylex` Astryx) **belum pernah di-wire** ke build project ini (Turbopack, bukan Babel/webpack) — sejak ADR-018 mengunci Astryx+StyleX, belum ada komponen yang benar-benar memakai `xstyle` custom sampai task ini. Semua styling chip di atas akhirnya memakai `defineTheme` `components` (di-generate & di-inject Astryx sendiri, tidak butuh compiler tambahan) sebagai jalan keluar — bukan pelanggaran `xds.mdc` (masih "token Astryx langsung", bukan raw hex di komponen), tapi `xstyle` sendiri tetap non-fungsional untuk kebutuhan lain ke depan. Perlu keputusan Boss Rezi: setup compiler StyleX (berarti pindah dari Turbopack ke Babel/webpack untuk build, trade-off dev experience) — belum dieksekusi, belum ada ADR.

## [2026-08-16] (4)

### Fixed

Follow-up dari code review PR audit dokumentasi (#27): perjelas wording R3 motion di `release-roadmap.md` (bukan mengulang klaim identitas R1); samakan terminologi "final" (bukan "override") untuk Contact modal di `v03-development-r1.md` T-016; lengkapi daftar dokumen terdampak di catatan Update ADR-019 (tambah `integration-layer.md`, `ux-principles.md`, `user-flows.md`, `user-journey.md`).

## [2026-08-16] (3)

### Fixed

Audit konsistensi dokumentasi menyeluruh (`project-manager/`, `product-discovery/`, `.cursor/skills/`, `.cursor/rules/`, `AGENTS.md`) atas permintaan Boss Rezi — 85 temuan mentah dari 3 audit paralel, dikonsolidasi & diperbaiki:

- **Static Reference project-manager stale** (masih ber-frame Product Discovery padahal Active Mode = Development): `PROJECT_OVERVIEW.md`, `DEVELOPER_WORKFLOW.md`, `ARCHITECTURE_OVERVIEW.md` diisi ulang; `PROJECT_RULES.md` diperbaiki (klaim "arsitektur belum dikunci", larangan kode pre-discovery usang, referensi `SKILL.md` salah path).
- **Kontradiksi governance** `TASKS.md` vs `PROJECT_RULES.md` soal lokasi status — diselaraskan (checklist detail di `tasks/vXX-*.md`, ringkasan di `PROJECT_STATE.md`).
- **Keputusan Contact = modal-only final** (T-016 selesai, sesuai ADR-019): route `/contact` dihapus dari `information-architecture.md`, `key-screen-patterns.md`, `application-layer.md`, `domain-model.md`; ADR-019 ditambah Update note.
- **Sinkronisasi ADR-020/021/022 ke baseline produk**: `product-scope.md`, `feature-modules.md` (kontradiksi internal M9), `mvp-definition.md`, `roles-permissions.md`, `03-user/user-journey.md`, `03-user/insights.md`, `04-ux/user-flows.md`, `04-ux/ux-principles.md`, `05-architecture/*` diperbarui agar konsisten dengan Work index Must R1, Contact modal, theme toggle, Quick Info panel.
- **Motion priority** (keputusan Boss Rezi: ADR-017 menang) — `mvp-definition.md` & `feature-priority.md` naikkan motion dari Could Have ke Should Have/identitas R1.
- **`xds.mdc` stale** (masih rujuk Tailwind/`main.tsx` padahal ADR-018 replace penuh) — ditambah Project Override section.
- **`AGENTS.md` navigasi**: path `TASKS.md`/`tasks/` diberi prefix `project-manager/`; `.cursor/rules/` dan `design-mockups/` diindeks; `ui-ux-mockup-check.mdc` contoh `contact.html` usang diperbaiki.
- **06-engineering** (`README.md`, `dependency-strategy.md`, `design-tokens.md`) — sisa referensi Tailwind diganti Astryx (ADR-018).
- **Misc**: `DECISIONS.md` ADR-016 diberi catatan superseded; `competitor-analysis.md` "lima acuan" diperbaiki jadi 7 (5 awal + 2 referensi desain); heading ADR-017/018 diseragamkan ke `# Decision ADR-XXX`; `v02-bootstrap.md` catatan dark mode ditandai superseded; ADR-021/ADR-022 ditambah Update note task ID (T-013.4, T-020); `success-metrics.md` "Phase aktif metrik" direformulasi agar tidak duplikasi `PROJECT_STATE.md`.

Tidak ada ADR baru dibuat — seluruh perbaikan menyelaraskan dokumen ke ADR yang sudah *Accepted* (bukan keputusan baru), kecuali resolusi Contact modal-only dan motion priority yang sudah eksplisit dikonfirmasi Boss Rezi pada sesi ini.

## [2026-08-16]
### Added
- **ADR-021** — dark mode toggle UI naik Must R1 (default ship tetap light; persist preferensi). Subtask baru **T-013.4** di `tasks/v03-development-r1.md`.
- **ADR-022** — modul baru **M13 Quick Info panel** (overlay global, bukan route; exclude Work case). Task baru **T-020** (T-020.1 konten, T-020.2 overlay).
- Propagasi label lokal About = "Proses Kerja"/"Process" (ADR-020 poin 3) ke `04-ux/` + `02-product/` — tanpa ADR baru.
### Changed
- `product-discovery/04-ux/` (navigation, IA, key screens, UX principles), `02-product/` (modules, MVP, priority, roadmap), `06-engineering/design-tokens.md`: theme toggle + M13 masuk Must R1.
- `TASKS.md` + Snapshot: indeks T-013…T-020; fokus halaman berikutnya tetap **T-014**; T-013.4 / T-020 masuk backlog.
- T-013 status dibuka kembali untuk T-013.4; "Dark mode toggle UI (Should/Later)" dihapus dari daftar yang tidak masuk backlog R1.
### Fixed
- Audit mockup vs docs: tiga gap (label nav About, toggle yang sudah hidup di mockup tapi Should/Later di docs, Quick Info yang belum pernah masuk baseline) ditutup di dokumentasi + backlog.

## [2026-08-15] (2)
### Added
- **T-013 — Site chrome R1 selesai** (T-013.1, T-013.2, T-013.3): `app/[locale]/_components/site-header.tsx` (TopNav desktop + MobileNav drawer via `AppShell`, breakpoint lg/1024px), `site-footer.tsx`, `locale-switcher.tsx` (di-upgrade ke `SegmentedControl` ID/EN), `lib/nav.ts`. Stub `app/[locale]/about/page.tsx` dan `app/[locale]/work/page.tsx` ditambah agar nav tidak 404 sebelum T-015/T-019 digarap.
### Changed
- Nav mengikuti ADR-020: Home · About · Karya sebagai link; Contact jadi tombol (belum wired ke modal, menyusul T-016); <1024px nav+switcher masuk hamburger, Contact-button tetap di luar.
### Fixed
- Tidak memakai kelas Tailwind (`hidden lg:flex`) untuk responsive show/hide karena Tailwind sudah digantikan penuh oleh Astryx (ADR-018) dan tidak terpasang di project — diganti dengan hook `useAppShellMobile()` (Astryx-native) untuk conditional render.

## [2026-08-15]
### Added
- ADR-020: Work index (M9) naik jadi Must R1 + nav mobile pakai hamburger — override sebagian ADR-010/ADR-012 dan `navigation-patterns.md`. Keputusan diambil Boss Rezi lewat proactive clarification saat memulai T-013.
- Task baru **T-019 — Work index R1 (M9)** di `tasks/v03-development-r1.md` (T-019.1 konten, T-019.2 halaman `/[locale]/work`).
### Changed
- `feature-modules.md`, `feature-priority.md`, `mvp-definition.md`, `release-roadmap.md`: M9 dipindah dari Post-MVP/Won't ke Must R1 (M10 tetap Post-MVP/R2).
- `information-architecture.md`, `navigation-patterns.md`: site map + primary nav tambah "Karya" (M9) sebagai link; Contact jadi tombol modal (bukan link nav); mobile <1024px pakai hamburger untuk nav+switcher (Contact-button tetap di luar hamburger).
- `T-013.1`/`T-013.2` di `tasks/v03-development-r1.md` direvisi mengikuti ADR-020 (catatan konflik mockup sebelumnya sudah resolved).

## [2026-08-15] (6)

### Fixed

- Temuan code review PR #24 (`design-mockups/shared.js`):
  - Form Contact tidak lagi menampilkan status "Terkirim" saat field kosong — `novalidate` sekarang dikombinasikan dengan `form.checkValidity()`/`reportValidity()` manual di handler submit sebelum menganggap submit berhasil.
  - Pill indikator nav & locale switch di dalam dropdown hamburger sekarang direfresh (`pillGroups[].refresh()`) saat menu dibuka — sebelumnya posisinya dihitung sekali saat elemen masih `display:none`, jadi kemungkinan tidak terlihat sampai user hover/resize.
  - Tombol "Salin email" tidak lagi menampilkan status sukses (`is-copied`) jika `navigator.clipboard.writeText` gagal — sebelumnya class itu ditambahkan tanpa syarat di luar try/catch.

## [2026-08-15] (5)

### Added

- Referensi bernama **karolinahess.com** dan **mazurbartek.com** diformalkan di `product-discovery/01-business/competitor-analysis.md` (baris #6, #7) — sebelumnya hanya disebut di `CONVERSATIONS.md`/sesi mockup. Dicatat sebagai Update pada ADR-006 (bukan ADR baru); ringkasan di `DECISIONS.md` diperbarui.

## [2026-08-15] (4)

### Added

- Mockup Contact sebagai Dialog/Modal global (`design-mockups/shared.js`, `shared.css`): form email + message, blok "Detail kontak" (email + tombol copy), blok "Sosial" (LinkedIn/GitHub), availability line. Warna theme-independent (ink gelap + kuning, pola sama seperti `.qi-tab`). Cursor-ring berubah jadi ikon X saat kursor di scrim (luar kartu dialog) selama modal terbuka.
- ADR-019 (override sebagian ADR-014 — form diizinkan di Contact).

### Changed

- Semua tombol/link "Contact" (nav) dan CTA "Hubungi saya"/"Ke halaman Contact" di `home.html`, `about.html`, `work.html`, `work-case.html` diubah dari `<a href="contact.html">` menjadi `<button data-contact-open>` yang membuka modal. Copy `home.contact.link` / `work.cta.link` diperbarui ("Hubungi saya" / "Get in touch") karena teks lama ("Ke halaman Contact") tidak lagi akurat. Copy `contact.lead` dirapikan (hapus klaim "tidak ada form" yang sudah tidak berlaku).

### Removed

- `design-mockups/contact.html` dihapus — Contact tidak lagi halaman terpisah di mockup.

### Fixed

- `applyLocale()` di `shared.js` sekarang juga menerjemahkan atribut `placeholder` lewat `data-i18n-placeholder` (dibutuhkan form Contact baru).

## [2026-08-15] (3)

### Changed

- Mockup navbar mobile/tablet (`design-mockups/`): hamburger di viewport <1024px — menu berisi Home / Proses Kerja / Karya + ID/EN; Contact dan tombol tema tetap visible. Desktop (≥1024px) tetap 3 grup, chip nav di tengah. Menyimpang dari T-013.1 / `navigation-patterns.md` (tanpa hamburger); catatan di `tasks/v03-development-r1.md`.

## [2026-08-15] (2)

### Fixed

- Mockup navbar (`design-mockups/`) — hasil code review PR redesign pill:
  - **Overflow header mobile**: tombol tema & Contact ter-clip/tidak bisa diklik di viewport ≤~405px (mencakup hampir semua ponsel — iPhone SE/12/13, Pixel, Galaxy S). Dirapatkan padding/gap chip di tier mobile + ditambahkan `flex-wrap` sebagai fallback (header pecah jadi 2 baris tanpa clipping) untuk perangkat ultra-sempit (≤~340px). Terverifikasi tidak overflow di 320px & 375px, dan tampilan desktop/tablet tidak berubah.
  - **Aksesibilitas keyboard**: pill preview di nav & locale switch sekarang juga muncul saat item di-fokus lewat Tab (`focus`/`blur`), sebelumnya hanya lewat mouse hover. Ditambahkan `aria-current="page"` pada link nav yang aktif.
  - **Deteksi item aktif diperkuat**: `initPillGroups` (`shared.js`) sebelumnya mendeteksi item aktif lewat class presentasi `bg-brand` (rapuh — bisa rusak diam-diam kalau class itu dipakai untuk keperluan styling lain). Sekarang pakai atribut `data-active` sebagai sumber kebenaran, `bg-brand`/`text-on-brand` tetap disinkronkan untuk graceful degradation tanpa JS. Ditambahkan guard idempotency (`data-pill-group-ready`).
  - Dihapus dead code: key i18n yatim (`home.kicker`, `home.sub`, `home.lead`, `home.available`, `home.cta.talk`, `home.cta.work`, `page.process`) dan CSS `.about-rule` yang tidak lagi dipakai sejak konten terkait dihapus di iterasi sebelumnya.

## [2026-08-15]

### Changed

- Mockup navbar (`design-mockups/`, referensi untuk T-013.1 nav & T-013.2 locale switcher — belum implementasi kode): header dipecah jadi 3 grup — nav halaman (Home/Proses Kerja/Karya), locale switch (ID/EN), dan tema+Contact — masing-masing chip terpisah dengan `rounded-2xl`.
- Ditambahkan link "Home" ke nav.
- State selected pada nav & locale switch pakai pill indicator (`bg-brand`/`text-on-brand`) yang geser smooth (CSS transition + `shared.js` `initPillGroups`) saat hover/klik, teks tidak bold.
- Tombol tema disamakan gaya dan animasi magnetic-nya dengan button Contact.
- Spacing mobile dirapatkan agar header tidak overflow di viewport sempit.
- Fix: rule `.chip-fixed-text` di `shared.css` sekarang mengecualikan elemen `.text-on-brand` agar teks tidak hilang saat pill aktif/hover.

## [2026-08-14]

### Changed

- Laporan sesi mockup Quick info: tab kompak di tepi kanan (rounded kiri), hilang halus saat dibuka; drawer geser dari kanan dengan close kotak di header; full lebar di bawah md, ~38rem di atas md. Stack tetap Astryx (ADR-018), bukan shadcn.

## [2026-08-14] (2)

### Changed

- Mockup Quick info: tab rounded kiri (bukan atas); drawer full lebar di bawah md, di atas md lebar ~38rem.

## [2026-08-14] (2)

### Changed

- Mockup Quick info: tab fade+geser halus saat drawer buka; radius atas 0.75rem (setara rounded-xl drawer, karena tab diputar).

## [2026-08-14] (2)

### Fixed

- Mockup Quick info: tab tetap pill kompak (bukan tinggi penuh) dan menempel panel sehingga ikut geser saat drawer dibuka.

## [2026-08-14] (2)

### Changed

- Mockup Quick info: tab kanan jadi pill kompak putih (bukan strip gelap penuh), hover hijau gelap, panel buka terpisah dari tab.

## [2026-08-14] (2)

### Added

- Mockup Quick info (pola karolinahess.com): tab kanan + drawer di Home, Proses Kerja, Karya, Contact — tidak di work-case.

## [2026-08-14] (3)

### Changed

- Catatan: seluruh copy di `design-mockups/` masih contoh/placeholder — bukan teks yang diinginkan untuk produksi (`CONVERSATIONS.md`).

## [2026-08-14] (4)

### Changed

- Mockup Home diarahkan ulang (Karolina type+cutout × Bartek quiet): hero dua kata oversized + foto cutout, chrome tenang, karya sebagai tile gambar.
- Mockup About, Work, Contact, dan work-case diselaraskan ke arah yang sama.
- Mockup About diubah mengikuti pola mazurbartek.com/about: sapaan + foto potret, bukan headline slogan.
- Copy About disesuaikan ke gaya karolinahess.com/about: kalimat pendek, “yang bisa saya bantu”, approach, values.

### Added

- `design-mockups/work.html` — mockup indeks seluruh karya (dari See all / nav Karya).
- `design-mockups/work-case.html` — mockup cerita singkat per project (dari Baca cerita).

### Changed

- `.cursor/rules/ui-ux-mockup-check.mdc` — jika mockup ada: jelaskan lalu tanya pakai/perbarui; jika belum ada: wajib buat mockup HTML dulu (tidak boleh skip ke kode).
- `project-manager/tasks/v03-development-r1.md` — catatan pra-eksekusi UI/UX diselaraskan.
- `project-manager/CONVERSATIONS.md` — alur mockup wajib.
- `design-mockups/` — switcher ID/EN berfungsi di Home, Proses Kerja, Contact (copy paritas + locale tersimpan); See all + nav Karya → `work.html`.

## [2026-08-13] (6)

### Added

- `project-manager/tasks/v03-development-r1.md` — backlog Development R1 (T-013 chrome, T-014 Home+teaser, T-015 About, T-016 Contact, T-017 meta, T-018 exit R1).

### Changed

- `project-manager/TASKS.md`, `project-manager/PROJECT_STATE.md` — indeks v0.3; Fokus/Top Next Task = **T-013**.

## [2026-08-13] (5)

### Fixed

- README Static Reference tidak lagi menanam status fase hidup: `product-discovery/03-user/README.md`, `04-ux/README.md`, `05-architecture/README.md` (hapus “(saat ini Repository & Bootstrap)”); `06-engineering/README.md` + `product-discovery/README.md` memakai rumusan urutan historis + rujuk `PROJECT_STATE.md`.

## [2026-08-13] (4)

### Changed

- **T-012.1** — Exit Bootstrap diverifikasi: `pnpm lint` + `typecheck` + `build` hijau lokal (route `/id`/`/en` SSG + Proxy); CI Actions hijau di PR #20 dan push `main`; Vercel Preview + Production success; struktur (`app/` `content/` `public/`), token Astryx (ADR-018), locale `/[locale]` + `proxy.ts` sesuai baseline.
- **T-012.2** — `PROJECT_STATE.md` → fase **Development**; Active Mode fitur R1 (M1–M7); Top Next Task = susun backlog Development R1 (v0.3).
- **T-012.3** — `tasks/v02-bootstrap.md` T-012 ✅ Done; `TASKS.md` Fokus + indeks v0.2 ✅ Done.

## [2026-08-13] (3)

### Changed

- **T-011.2** — Project Vercel dihubungkan (import repo GitHub, Production Branch, env var) oleh Boss Rezi secara manual di dashboard Vercel; deploy pertama berhasil. `tasks/v02-bootstrap.md` T-011 ditandai ✅ Done penuh (T-011.1/.2/.3 selesai).
- `project-manager/TASKS.md`, `project-manager/PROJECT_STATE.md` — Fokus/Snapshot/Current Focus diupdate: T-011 selesai, Top Next Task berikutnya **T-012** (Exit Bootstrap → siap Development), Blocker dikosongkan.

## [2026-08-13] (2)

### Added

- **T-010.1** — App Router locale skeleton: `lib/locale.ts` (`LOCALES`, `DEFAULT_LOCALE`, `isLocale`), `app/[locale]/page.tsx` (stub `id`/`en`, `generateStaticParams` untuk SSG, `notFound()` untuk locale lain sesuai ADR-015 static-first).
- **T-010.2** — `proxy.ts` (root) redirect `/` → locale default; matcher hanya `/` (path ber-locale tidak pernah disentuh, sesuai ADR-014). File dibuat sebagai `middleware.ts` lalu di-rename ke `proxy.ts` (+ fungsi `proxy`) mengikuti konvensi Next.js 16.3 (menghindari warning deprecation).
- **T-010.3** — `app/[locale]/layout.tsx` + `app/[locale]/_components/locale-switcher.tsx`: stub switcher tipis (Astryx `Link`) yang link ke sibling path locale dan set cookie `NEXT_LOCALE` saat diklik.
- **T-011.1** — `.github/workflows/ci.yml`: GitHub Actions (`pull_request` + `push` ke `main`) — checkout, `pnpm/action-setup`, `actions/setup-node` (cache pnpm), `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`. Tanpa `next build` di Actions (build produksi tetap di Vercel, sesuai `cicd-pipeline.md`).
- **T-011.3** — `.env.example` (`NEXT_PUBLIC_SITE_URL` + komentar tier Local/Preview/Production, referensi ke `environment-management.md`). `.gitignore` diverifikasi sudah meng-ignore `.env` / `.env.*` kecuali `.env.example`.

### Changed

- `app/page.tsx` — jadi stub root (komentar dijelaskan: tidak pernah diakses langsung karena `proxy.ts` selalu redirect `/`).
- `project-manager/tasks/v02-bootstrap.md` — T-010 ditandai ✅ Done (semua subtask); T-011 subtask T-011.1/T-011.3 ✅, T-011.2 tetap ⏳ (butuh aksi manual Boss Rezi di dashboard Vercel — langkah manual didokumentasikan di file task).
- `project-manager/TASKS.md`, `project-manager/PROJECT_STATE.md` — update Fokus/Snapshot/Current Focus mencerminkan T-010 selesai dan T-011 menunggu Vercel manual.

### Fixed

- (tidak ada)

### Catatan keputusan implementasi (bukan ADR — untuk konfirmasi Boss Rezi bila perlu)

- **Urutan resolusi locale di `proxy.ts`:** brief task menuliskan urutan "geo → Accept-Language → preferensi cookie → fallback". Diimplementasikan dengan urutan **cookie preferensi → geo (`x-vercel-ip-country`) → Accept-Language → fallback `en`**, karena preferensi hasil switch eksplisit user seharusnya menang di kunjungan berikutnya dibanding heuristik otomatis. ADR-014 sendiri tidak eksplisit menentukan urutan antara ketiganya. Jika Boss Rezi ingin urutan literal sesuai brief, tinggal pindah blok `resolveFromCookie` ke posisi sebelum fallback di `proxy.ts` (komentar sudah dicatat di file).
- **`middleware.ts` → `proxy.ts`:** repo pakai Next.js 16.3 yang sudah men-deprecate konvensi `middleware.ts` (rename resmi jadi `proxy.ts` + fungsi `proxy`). Dokumen `deployment-infrastructure.md`/ADR-014 menyebut "Edge Middleware" secara konseptual; nama file diimplementasikan sesuai versi Next.js yang terpasang agar tidak ada warning deprecation saat build.

---

## [2026-08-13] (1)

### Added

- Rule `.cursor/rules/ui-ux-mockup-check.mdc` — AI wajib cek ketersediaan mockup (`design-mockups/`) dan tanya user sebelum eksekusi task UI/UX.
- Dependency Astryx (`@astryxdesign/core`, `@stylexjs/stylex`, `@astryxdesign/theme-neutral`, `@astryxdesign/cli`) sebagai component library + sistem styling R1 (**T-009.4**, **ADR-018**).
- `.cursor/rules/xds.mdc` — agent docs Astryx (konvensi wajib AI saat menulis komponen), `alwaysApply: true`.
- Script `astryx` di `package.json` untuk invocation CLI reliable.
- `app/layout.tsx` membungkus subtree dengan `<Theme theme={neutralTheme} mode="light">`; `app/page.tsx` migrasi ke komponen Astryx (`Heading`, `Text`, `VStack`).

### Changed

- `design-tokens.md`, `dependency-strategy.md` diperbarui: kontrak styling pindah dari Tailwind + CSS variables ke Astryx (ADR-018).
- `app/globals.css` — import Astryx reset/theme CSS, hapus setup Tailwind (`@import "tailwindcss"` dst).
- `v02-bootstrap.md` — T-009.2 ditandai superseded oleh T-009.4 baru (bukan didaur ulang, sesuai aturan ID subtask).

### Fixed

- (tidak ada)

---

## 2026-08-12
### Added
- Prettier (`.prettierrc.json`, `.prettierignore`) + `eslint-config-prettier` terpasang di ESLint flat config (**T-009.1**)
- Script `format` / `format:check` di `package.json` (**T-009.1**)
- Tailwind CSS v4 (`@tailwindcss/postcss`, `postcss.config.mjs`) + CSS variables token (brand/accent/bg/fg/border/focus/danger/success) di `app/globals.css`, light default + fondasi `.dark` class strategy via `@custom-variant dark` (**T-009.2**)
- `.github/dependabot.yml` — ekosistem `npm` (grouping patch/minor) + `github-actions`, update mingguan (**T-009.3**)
### Changed
- `app/page.tsx` — stub memakai utility Tailwind + token (`font-display`, `text-brand`, `text-fg-muted`) sebagai bukti kontrak token jalan
- `tasks/v02-bootstrap.md` — **T-009.1** … **T-009.3** ✅; parent **T-009** ✅ Done
- `TASKS.md` — Fokus → **T-010**
- `PROJECT_STATE.md` — Snapshot/Fokus → next **T-010**

---

## 2026-08-12
### Added
- `content/README.md` — folder SoT konten situs berdampingan `app/` + `public/` + docs (**T-008.2**)
- Script `typecheck` (`tsc --noEmit`) di `package.json` (**T-008.3**)
- Stub halaman minimal di `app/` agar `pnpm build` hijau (**T-008.4**)
### Changed
- `package.json` — scripts lengkap: `dev`, `build`, `start`, `lint`, `typecheck` (**T-008.3**)
- `app/page.tsx`, `app/layout.tsx`, `app/globals.css` — stub bootstrap (hapus `page.module.css` create-next-app)
- `README.md` — tabel struktur app Bootstrap
- `tasks/v02-bootstrap.md` — **T-008.2** … **T-008.4** ✅; parent **T-008** ✅ Done
- `TASKS.md` — Fokus → **T-009.1**
- `PROJECT_STATE.md` — Snapshot/Fokus → next **T-009.1**

---

## 2026-08-12
### Added
- Scaffold Next.js App Router + TypeScript (`strict`) + pnpm di root (**T-008.1**): `package.json`, `pnpm-lock.yaml`, `packageManager`, `app/`, `public/`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`
### Changed
- `tasks/v02-bootstrap.md` — centang **T-008.1**; parent T-008 tetap ⏳
- `TASKS.md` — Fokus → **T-008.2**
- `PROJECT_STATE.md` — Snapshot/Fokus → next **T-008.2**
- `README.md` / `AGENTS.md` — status stack diselaraskan (bukan docs-only lagi)

---

## 2026-08-11
### Added
- `project-manager/tasks/v02-bootstrap.md` — backlog release Bootstrap (T-008…T-012 + subtasks, mengikuti Engineering Baseline ADR-016)
### Changed
- `TASKS.md` — indeks release v0.2 Bootstrap; Fokus → **T-008.1**
- `PROJECT_STATE.md` — Snapshot/Fokus: backlog Bootstrap sudah ada, next = eksekusi T-008.1

---

## 2026-08-11
### Fixed
- Review PR #10: Decision Rules `03–05` arahkan ke `PROJECT_STATE.md` (bukan “lanjut isi” discovery)
- Review PR #10: Exit Criteria root `product-discovery/README.md` kembali definisi (tanpa stamp status T-007)
- Review PR #10: commit PR tanpa trailer atribusi AI

---

## 2026-08-11
### Added
- **T-007.1** — Exit criteria Product Discovery diverifikasi & disetujui (baseline 01–06 + ADR-001…016)
### Changed
- **T-007.2** — `PROJECT_STATE.md` → fase **Repository & Bootstrap**; Active Mode Bootstrap
- T-007 ✅ Done; v0.1 Product Discovery release ✅; Fokus → backlog Bootstrap + scaffold Next
### Fixed
- Wording README fase **03–06** + `product-discovery/README.md` Exit Criteria selaras baseline (sudah ditetapkan / sudah terpenuhi)

---

## 2026-08-11
### Added
- **T-006.10** / **ADR-016** — Engineering Baseline v1.0 untuk seluruh `06-engineering/`
### Changed
- Status semua dokumen `06-engineering/` → Baseline v1.0 (`auth-strategy.md`, `database-orm.md` tetap N/A)
- T-006 ✅ Done; Fokus → **T-007.1** Exit criteria Product Discovery

---

## 2026-08-11
### Added
- **T-006.7** — `dx-tooling.md` (ESLint + Prettier; tanpa husky; test belum wajib)
- **T-006.8** — `dependency-strategy.md` (pnpm lockfile + `^` + Dependabot; Bun ditolak)
- **T-006.9** — `design-tokens.md` (Tailwind + CSS vars; light default; dark fondasi A+)
### Changed
- Fokus → **T-006.10** Baseline Engineering v1.0 + ADR

---

## 2026-08-11
### Added
- **T-006.4** — `database-orm.md` (N/A — selaras ADR-015; konten di repo)
- **T-006.5** — `cicd-pipeline.md` (opsi B: GitHub Actions lint/typecheck + Vercel deploy)
- **T-006.6** — `environment-management.md` (Local/Preview/Production; env tipis; secret di Vercel)
### Changed
- Fokus → **T-006.7** `dx-tooling.md`

---

## 2026-08-11
### Added
- **T-006.1** — `monorepo-setup.md` (single-app di repo ini; Next.js App Router SSG; pnpm; bukan monorepo)
- **T-006.2** — `deployment-infrastructure.md` (Vercel; Preview PR; Middleware locale `/`)
- **T-006.3** — `auth-strategy.md` (N/A — selaras ADR-011/015)
### Changed
- T-006 → 🔄 In Progress; Fokus → **T-006.4** `database-orm.md`

---

## 2026-08-11
### Fixed
- PR #7 review: Entry Points `application-layer.md` selaras path locale ADR-014 (`/[id|en]/…`, bukan `/about` tanpa prefix)

---

## 2026-08-11
### Added
- **T-005.1** — `domain-model.md` (lean content model; DDD N/A)
- **T-005.2** — `database-strategy.md` (N/A — konten di repo)
- **T-005.3** — `application-layer.md` (static-first SSG)
- **T-005.4** — `integration-layer.md` (mailto + satelit + locale redirect)
- **T-005.5** — `background-jobs.md` (N/A)
- **T-005.6** — `realtime-strategy.md` (N/A)
- **T-005.7** — `auth-architecture.md` (N/A)
- **T-005.8** / **ADR-015** — Architecture Baseline v1.0 (opsi A: SSG + konten repo)
### Changed
- T-005 ✅ Done; Fokus → **T-006.1** `monorepo-setup.md`
- `PROJECT_STATE.md` → Phase 6 — Engineering Planning (06-engineering)
- `TASKS.md` / `tasks/v01-product-discovery.md` / `DECISIONS.md`

---

## 2026-08-10
### Changed
- **T-005 / T-006** subtasks dipecah per dokumen (pola T-001/T-002): 1 file = 1 subtask + baseline/ADR di akhir
- T-005: `T-005.1`…`T-005.7` dokumen architecture; `T-005.8` Baseline + ADR (N/A diizinkan per file)
- T-006: `T-006.1`…`T-006.9` dokumen engineering; `T-006.10` Baseline + ADR
- `TASKS.md` / `PROJECT_STATE.md` Fokus → **T-005.1** `domain-model.md`

---

## 2026-08-10
### Fixed
- Review ketat T-003/T-004: bedakan Home **credibility line** (1 klaim non-kartu) vs **work teaser** (1–3 kartu karya) — IA, key screens, flows, journey
- Tutup handoff User→UX: **OQ2** Closed (Email primer ADR-014); OQ5 Closed di lapisan UX; SC1/SC2/SC5 selaras Email primer
- README `03-user/` & `04-ux/` — hapus living status / “lanjut Phase X”; arahkan ke PROJECT_STATE + DECISIONS
### Added
- IA: **Share & Meta Hygiene** (title/description/OG per locale) + **Content readiness** (jangan ship tanpa teaser Home + Email Contact)
### Changed
- `insights.md` assumption A3: saluran Contact dikunci Email primer; inbound tetap provisional
- Fokus tetap **T-005.1** (tidak ada perubahan phase)

---

## 2026-08-10
### Fixed
- Review UX baseline: nav+switcher always-visible mobile R1 (hilangkan opsi hamburger yang bentrok acceptance ≤1 ketukan)
- Preferensi locale hanya untuk redirect `/` — tidak rewrite URL `/id|en/...` eksplisit
- Notasi route diseragamkan ke `/[id/en]/...` di IA, nav, key screens; ADR-014 diperjelas

---

## 2026-08-10
### Changed
- `04-ux/information-architecture.md` — Site Map memakai notasi param `/[id/en]/...` (setara path prefix; bukan query)

---

## 2026-08-10
### Added
- **T-004.1** — Seluruh dokumen `04-ux/` Baseline v1.0 (ux-principles → key-screen-patterns)
- **T-004.2** / **ADR-014** — UX Baseline v1.0 (path locale `/id`/`/en` + geo default + switcher; Contact Email primer; LinkedIn/GitHub satelit; tanpa WA/IG R1)
### Changed
- T-004 ✅ Done; Fokus → **T-005.1** isi `05-architecture/`
- `PROJECT_STATE.md` → Phase 5 — Architecture (05-architecture)
- `TASKS.md` / `tasks/v01-product-discovery.md` / `DECISIONS.md`

---

## 2026-08-07
### Fixed
- **T-003** review: PP9 → Should (tipis); social jobs `S1–S3` → `SJ1–SJ3`; prioritas segmen `Pri-0/1/2`; I3 case → Later (R2 magnet)

---

## 2026-08-07
### Added
- **T-003.1** — Seluruh dokumen `03-user/` Baseline v1.0 (discovery-plan → insights)
- **T-003.2** / **ADR-013** — User Baseline v1.0 (assumption-led + riset ringan opsional; journey R1 primer + sekunder tipis)
### Changed
- T-003 ✅ Done; Fokus → **T-004.1** isi `04-ux/`
- `PROJECT_STATE.md` → Phase 4 — UX Planning (04-ux)
- `TASKS.md` / `tasks/v01-product-discovery.md` / `DECISIONS.md` / `03-user/README.md`

---

## 2026-08-07
### Added
- **T-002.8** / **ADR-012** — Product Baseline v1.0 untuk seluruh `02-product/`
### Changed
- Status semua dokumen `02-product/` → Baseline v1.0 (`roles-permissions.md` tetap N/A)
- T-002 ✅ Done; Fokus → **T-003.1** isi `03-user/`
- `PROJECT_STATE.md` → Phase 3 — User Discovery (03-user)

---

## 2026-08-07
### Added
- **T-002.7** — `roles-permissions.md` **N/A** (situs publik tanpa auth/RBAC)
- **ADR-011** — Roles & permissions N/A; file tetap ada
### Changed
- Fokus → **T-002.8** Baseline Product v1.0 + ADR
- `PROJECT_STATE.md` / `TASKS.md` / `DECISIONS.md` / `v01` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-002.5** — `release-roadmap.md` Draft v0.1 (R1 Clarity → R2 Magnet → R3 Presence/craft)
- **T-002.6** — `future-roadmap.md` Draft v0.1 (peluang M11/M12, distribusi, batas ekspansi)
### Changed
- Fokus → **T-002.7** `roles-permissions.md`
- `PROJECT_STATE.md` / `TASKS.md` / `v01` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-002.4** — `feature-priority.md` Draft v0.1 (MoSCoW M1–M12 untuk rilis MVP)
### Changed
- Fokus → **T-002.5** `release-roadmap.md`
- `PROJECT_STATE.md` / `TASKS.md` / `v01` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-002.1** — `product-scope.md` Draft v0.1 (Hybrid lean)
- **T-002.2** — `mvp-definition.md` Draft v0.1
- **T-002.3** — `feature-modules.md` Draft v0.1 (M1–M12)
- **ADR-010** — MVP surface Hybrid lean (opsi C)
### Changed
- T-002 → 🟡 In progress; Fokus → **T-002.4** `feature-priority.md`
- `PROJECT_STATE.md` / `TASKS.md` / `DECISIONS.md` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Added
- **T-001.7** — `success-metrics.md` Draft→Baseline: dual north star (brand recall + inbound berkualitas)
- **T-001.8** / **ADR-009** — Business Baseline v1.0 untuk seluruh `01-business/`
### Changed
- Status semua dokumen `01-business/` → Baseline v1.0 (`pricing-strategy.md` tetap N/A)
- T-001 ✅ Done; Fokus → **T-002.1** `product-scope.md`
- `PROJECT_STATE.md` — Phase 2 (02-product); `TASKS.md` / `DECISIONS.md` / `CONVERSATIONS.md` diselaraskan

---

## 2026-08-07
### Changed
- Sinkron referensi kode subtask `T-XXX.N` di laporan/aturan: `CONVERSATIONS.md`, `PROJECT_RULES.md`, `AGENTS.md`, `DEVELOPER_WORKFLOW.md`, `PROJECT_STATE.md` (Overall Progress), `pricing-strategy.md`, ADR-008, navigator skill
### Fixed
- Impact lama di `CONVERSATIONS.md` dan rujukan “Subtask T-001” tanpa nomor anak diselaraskan ke `T-001.N`

## 2026-08-07
### Changed
- Konvensi ID subtask `T-XXX.N` (contoh T-001.1) — retrofit semua subtask di `tasks/v01-product-discovery.md`
- `TASKS.md` — aturan ID subtask; Fokus sekarang `T-001.7`
- `PROJECT_STATE.md` — Top Next / Current Focus pakai kode subtask
- `.cursor/skills/project-os-navigator/SKILL.md` — rujuk `T-XXX.N`
- Riwayat COMPLETE_TASK di bawah diselaraskan ke kode subtask (atas perintah Boss Rezi)

## 2026-08-07
### Added
- `product-discovery/01-business/pricing-strategy.md` N/A v0.1 (tidak relevan untuk situs; file tetap)
- `project-manager/decisions/ADR-008-pricing-strategy-na-for-portfolio-site.md`
### Changed
- `DECISIONS.md` — indeks ADR-008
- `01-business/README.md` — pricing dicatat N/A
- **T-001.6** dicentang (N/A); fokus lanjut **T-001.7** `success-metrics.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.7

## 2026-08-07
### Added
- `product-discovery/01-business/business-model.md` draft v0.1 (brand + soft inbound; growth destination + magnet ringan)
- `project-manager/decisions/ADR-007-business-model-brand-soft-inbound-growth-magnet.md`
### Changed
- `DECISIONS.md` — indeks ADR-007
- **T-001.5** dicentang; fokus lanjut **T-001.6** `pricing-strategy.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.6

## 2026-08-07
### Added
- `product-discovery/01-business/competitor-analysis.md` draft v0.1 (referensi bernama + pesaing kategori; prioritas clarity → presence → craft)
- `project-manager/decisions/ADR-006-competitor-reference-lens-clarity-presence-craft.md`
### Changed
- `DECISIONS.md` — indeks ADR-006
- **T-001.4** dicentang; fokus lanjut **T-001.5** `business-model.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.5

## 2026-08-06
### Added
- `product-discovery/01-business/target-market.md` draft v0.1 (ICP hybrid founder/PO setara; SEA; digital product/tech)
- `project-manager/decisions/ADR-005-target-market-icp-sea-tech.md`
### Changed
- `DECISIONS.md` — indeks ADR-005
- **T-001.3** dicentang; fokus lanjut **T-001.4** `competitor-analysis.md`
- `TASKS.md` / `PROJECT_STATE.md` — fokus berikutnya T-001.4

## 2026-08-06
### Added
- `product-discovery/01-business/problem-statement.md` draft v0.1 (framing dual; rantai visibility → narrative → evaluasi)
- `project-manager/decisions/ADR-004-problem-statement-dual-chain.md`
### Changed
- `DECISIONS.md` — indeks ADR-004
- **T-001.2** dicentang; fokus lanjut **T-001.3** `target-market.md`
- `PROJECT_STATE.md` / `TASKS.md` — fokus & progress diselaraskan

## 2026-08-06

### Added

- ADR-003 — repo publik + folder `private/` untuk materi sensitif
- `private/README.md` (isi folder di-ignore Git)

### Changed

- `.gitignore` — `/private/*` (kecuali README); `product-discovery/` tetap di-track
- `README.md` — catatan privasi repo publik

## 2026-08-06

### Added

- `product-discovery/01-business/product-vision.md` draft v0.1
- ADR-002 — visi portofolio (brand primer, positioning, audiens, bahasa geo-aware)

### Changed

- **T-001.1** dicentang; fokus lanjut **T-001.2** `problem-statement.md`
- `TASKS.md`, `PROJECT_STATE.md`, `DECISIONS.md`, `CONVERSATIONS.md` diselaraskan

## 2026-08-06

### Added

- Scaffold Project OS: `product-discovery/` 01–06 (placeholder), `project-manager/`, `.cursor/skills/` (3 process skills), `AGENTS.md`, `.cursorignore`
- ADR-001 — pemisahan PD/PM + skills Cursor
