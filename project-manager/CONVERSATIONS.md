# CONVERSATIONS

Log diskusi penting antar sesi. Append entri baru di bagian atas (setelah format).

## Format

```
## [YYYY-MM-DD] — [Topik Singkat]
**Phase:** [phase aktif]
**Summary:** [ringkasan 2-3 kalimat]
**Key Decision/Insight:** [jika ada]
**Impact:** [dokumen yang perlu diupdate?]
```

---

## [2026-09-01] — Minerank = migrasi + lelang + blog

**Phase:** Validation
**Summary:** Boss Rezi menggabungkan Minerank Blog, SMC Auction, dan SMC Migration menjadi satu karya web Minerank, urutan kerja migrasi database → auction → blog headless WordPress.
**Key Decision/Insight:** Bukan tiga tile terpisah. Teaser Home memakai Minerank menggantikan SMC Auction. Tautan Live sheet = blog Minerank; smc.auction tetap di deskripsi.
**Impact:** `content/data/projects.json`, tes JSON-LD (tidak ada lagi item tanpa href), T-021.2 / T-021.5.

---

## [2026-09-01] — Fakta profil ke JSON

**Phase:** Validation
**Summary:** Boss Rezi ingin projects, services, tools, email, dan links mudah diubah tanpa menyentuh TypeScript.
**Key Decision/Insight:** Fakta hidup di `content/data/*.json`. Copy UI (label, h1, modal) tetap `content/*.ts`. Bukan CMS/DB; tetap SSG dari repo.
**Impact:** `content/data/`, wrapper `work.ts` / `work-sheet.ts` / `contact.ts` / `quick-info.ts`, Quick Info / footer / Contact modal / JSON-LD iterate tautan.

---

## [2026-09-01] — Path katalog `/work` → `/projects`

**Phase:** Validation
**Summary:** Boss Rezi minta href halaman katalog mengikuti nama Proyek/Projects.
**Key Decision/Insight:** Route App Router `app/[locale]/projects`; `/id/work` dan `/en/work` redirect 308. Aset gambar `public/work/` tidak dipindah.
**Impact:** `lib/nav.ts`, `lib/site-url.ts`, `lib/site-routes.ts`, `lib/json-ld.ts`, `next.config.ts`, IA/nav, ADR-020.

---

## [2026-09-01] — Label halaman Karya/Work → Proyek/Projects

**Phase:** Validation
**Summary:** Boss Rezi ingin nama halaman katalog karya di chrome menjadi Proyek (ID) dan Projects (EN).
**Key Decision/Insight:** Hanya label; URL tetap `/[locale]/work`. Title meta sudah Proyek/Projects sejak T-021.7.
**Impact:** `lib/nav.ts`, `content/home.ts`, `content/quick-info.ts`, ADR-020, navigation-patterns, IA.

---

## [2026-09-01] — Teaser Home membuka project sheet

**Phase:** Validation
**Summary:** Boss Rezi ingin klik karya di Home membuka sheet yang sama dengan halaman Work, bukan langsung ke katalog.
**Key Decision/Insight:** Tile teaser = sheet M10; tautan “Semua karya” tetap ke `/[locale]/work`. Override sebagian ADR-027 poin 2 (update 2026-09-01).
**Impact:** `home-work-teasers.tsx`, ADR-027, IA, key-screen S4, F7, M4/M10, application-layer.

---

## [2026-08-31] — Metadata API penuh (ikon + media)

**Phase:** Validation
**Summary:** Boss Rezi tanya apakah metadata sudah ada, lalu minta task baru agar head lengkap (icons, media items, dll.) mengikuti generateMetadata Next.js. Yang sudah ada hanya teks destinasi (T-017 / T-021.7); favicon masih default scaffold; tidak ada og:image.
**Key Decision/Insight:** Jangan ulang title/canonical/JSON-LD/sitemap. Ikon + kartu share dari aset brand, bukan Unsplash. Bukan PWA penuh / App Store / keyword stuffing. Satu OG situs cukup untuk R1.
**Impact:** `tasks/v13-metadata.md` **T-031**; indeks TASKS; Snapshot fokus.

## [2026-08-31] — SEO 3 pilar (teknis / on-page / off-page)

**Phase:** Validation
**Summary:** Boss Rezi kirim kerangka SEO Website (Technical, On-Page, Off-Page). Dipetakan ke portofolio R1, bukan toko/blog. Yang masuk kode: sitemap, robots, `html lang`, ukur CWV, hygiene on-page tanpa copy baru. JSON-LD tetap T-029. Off-page = Search Console + tautan satelit (ops), bukan GBP/backlink-as-code.
**Key Decision/Insight:** Jangan rumus title “kata kunci di depan”. Jangan halaman Privacy Policy atau `/contact`. Jangan Google Business Profile. Alt/foto Unsplash tidak diklaim sebagai foto diri.
**Impact:** `tasks/v12-seo.md` **T-030**; indeks TASKS; Snapshot fokus.

## [2026-08-31] — Schema.org / JSON-LD untuk destinasi

**Phase:** Validation
**Summary:** Boss Rezi minta task schema Google. Schema.org punya ratusan tipe; yang masuk akal untuk portofolio pribadi R1 sedikit. Paket dikunci: WebSite + Person + ProfilePage (About) + WebPage/CollectionPage + BreadcrumbList + ItemList karya. JSON-LD harus digenerate dari `content/`, bukan file schema terpisah.
**Key Decision/Insight:** Home bukan ProfilePage (bukan halaman bio murni). Organization/LocalBusiness/FAQ/HowTo/ContactPage di luar. `Person.image` ditahan selama foto Unsplash. Karya di sheet M10 tidak punya URL sendiri — ItemList memakai `href` live/repo, omit url jika tidak ada.
**Impact:** `tasks/v11-structured-data.md` **T-029**; indeks TASKS; Snapshot fokus.

## [2026-08-31] — Cara rapikan kode + exit R1

**Phase:** Validation (setelah T-018)
**Summary:** Boss Rezi tanya cara merapikan seluruh kode setelah playbook T-027. Keputusan: **jangan big-bang**. T-018 (exit R1) diselesaikan dulu; rapikan `app/` lama jadi **T-028** bertahap (island server/client dulu).
**Key Decision/Insight:** Gap nyata = `"use client"` di hampir semua `_components/` (banyak sah: overlay/motion/tema; yang bisa dipecah: Home shell, Footer, sebagian Work/About). Bukan StyleX (sudah tidak dipakai). Bukan rewrite `globals.css` craft Hess. Verifikasi browser per batch.
**Impact:** T-018 ✅; T-028 ⏳ di v03; PROJECT_STATE → Validation.

## [2026-08-28] — Playbook disiplin kode dikunci (T-027 / #52)

**Phase:** Development R1
**Summary:** Setelah copy T-021 dikunci, playbook “kapan pakai apa” ditulis ke rule Cursor + `06-engineering/code-discipline.md`. Bukan rewrite `app/`. Gap StyleX vs Turbopack disebut eksplisit; `cookies()` tema tetap pengecualian anti-flash, bukan SSR-as-product.
**Key Decision/Insight:** Kerja baru wajib ikut playbook. Rapikan kode lama bertahap. Compiler StyleX = task terpisah nanti.
**Impact:** `code-discipline.md` + `.cursor/rules/code-discipline.mdc`; `xds.mdc`; `design-tokens.md`; `application-layer.md`; `AGENTS.md` / `PROJECT_RULES.md`; T-027.

## [2026-08-28] — Disiplin kode / best practice (styling + rendering)

**Phase:** Development R1
**Summary:** Boss Rezi ingin project punya aturan tegas: komponen, function, spacing (gap/padding/margin), dan kapan `"use server"` / streaming / SSG/ISR/SSR. Audit singkat: pengetahuan itu **belum** lengkap — yang ada kuat di proses/ADR/Astryx CLI, lemah di playbook kode.
**Key Decision/Insight:** **T-021.6 / T-021.7 dulu.** Playbook disiplin kode (rule Cursor + dokumen engineering, selaras ADR-015/018) menyusul setelah copy dikunci. Bukan rewrite besar `app/` sekarang; bukan aturan yang hanya hidup di chat.
**Impact:** Belum ada file baru. Nanti: rule/skill engineering + kemungkinan update `06-engineering/` (tanpa mengubah bentuk SSG ADR-015 tanpa ADR baru).

## [2026-08-27] — Project sheet = Quick Info dari bawah + galeri Hess

**Phase:** Development R1
**Summary:** Boss Rezi ingin sheet proyek sama persis dengan Quick Info, muncul dari bawah, lebar penuh; layout info di atas dan gambar di bawah; setelah sampai galeri, scroll ke bawah menggeser gambar ke samping (pola Recent Work karolinahess.com).
**Key Decision/Insight:** Astryx BottomSheet tidak punya prop lebar penuh — overlay custom (pola Quick Info). Frame galeri ekstra masih placeholder Unsplash sampai aset nyata ada.
**Impact:** `project-sheet.tsx`, `globals.css`, `content/work-sheet.ts`; T-026.5; `key-screen-patterns.md`.

## [2026-08-26] — T-026 sebelum exit R1

**Phase:** Development R1
**Summary:** Boss Rezi ingin sheet per proyek dikerjakan **sebelum** rencana exit R1 (bukan setelah T-018 / R2).
**Key Decision/Insight:** ADR-027 diubah: M10 overlay = Must R1; T-026 di v03; T-018 menunggu T-021 + T-026. ADR-026 tetap: tidak migrasi shadcn di R1.
**Impact:** TASKS/PROJECT_STATE/v03; product-discovery 02/04/05; copy sheet di T-026.1 (bukan v10 T-021).

## [2026-08-26] — Migrasi Astryx → shadcn (diskusi)

**Phase:** Development R1
**Summary:** Boss Rezi menilai Astryx terlalu kaku (contoh: BottomSheet hanya dari bawah; Quick Info tetap overlay custom). Tanya apakah migrasi ke shadcn memungkinkan.
**Key Decision/Insight:** Dikunci **ADR-026**: tetap Astryx sampai T-018; evaluasi shadcn hanya setelah exit R1. Hybrid ditolak.
**Impact:** ADR-026; dependency-strategy.md.

## [2026-08-26] — T-025.11: affordance lead About

**Phase:** Development R1
**Summary:** Boss Rezi tidak sadar lead About bisa diketuk. Minta pembeda visual **hanya** pada komponen itu, bukan kartu lain.
**Key Decision/Insight:** Bukan KI. Cue tanpa copy baru: underline titik pada `lead1` + chevron Astryx; berputar saat hover/focus/tap. Reduced-motion: cue disembunyikan (body sudah selalu terbuka).
**Impact:** T-025.11; `about-page.tsx` + `globals.css` `.about-lead-*`.

## [2026-08-26] — T-025.10: kedip mobile setelah scroll

**Phase:** Development R1
**Summary:** Kedip kecil halaman *masuk* di layout mobile jika user sudah scroll ke tengah/bawah lalu pindah halaman. Bukan View Transitions.
**Key Decision/Insight:** `translateY(100vh)` relatif ke dokumen, bukan viewport. Plus `scrollTo(0)` di iOS di awal enter = async → flash. Perbaikan: clone `translateY(-scrollY)`, freeze scroll ke 0 setelah clone, live `visibility:hidden` sampai enter; jarak `100dvh`.
**Impact:** T-025.10; `page-transition.tsx`, `smooth-scroll.tsx`, `globals.css`.

## [2026-08-26] — Handoff: kedip transisi halaman

**Phase:** Development R1
**Summary:** Boss Rezi minta catatan untuk chat baru: animasi pindah halaman masih kedip. T-025.7–T-025.9 sudah Done (snapshot CSS Hess, anti-kedip live-page, scrollbar track). Jangan View Transitions API.
**Key Decision/Insight:** Mekanisme = clone main+footer exit 1s + live diparkir `translateY(100vh)` sampai `page-vt-entering`. Kedip historis = halaman baru tampil sebelum enter, ID kembar clone/live, scrollbar hilang (sudah di T-025.8). Sisa yang perlu dicek: satu frame sebelum lock, `Reveal` restart, pill nav ganti `selected` di tengah exit, `finishEnter` vs clone masih 200ms, Lenis start ulang.
**Impact:** Chat baru; file `page-transition.tsx` + `globals.css` `.page-vt-*`. Jangan ubah palet / ritme token / T-025.8 overflow-y scroll. Acuan: karolinahess.com.

## [2026-08-26] — Domain production: rezisaktiva.space

**Phase:** Development R1
**Summary:** Boss Rezi mengunci URL situs publik production: `https://rezisaktiva.space` (bukan hostname Vercel default).
**Key Decision/Insight:** Canonical production = apex `https://rezisaktiva.space`. `NEXT_PUBLIC_SITE_URL` di Production harus nilai itu (OG/canonical). Tautan karya “Personal Portfolio” mengikuti domain ini.
**Impact:** `.env.example`; `deployment-infrastructure.md` § Domain; catatan T-017; `content/work.ts`; `environment-management.md` katalog `NEXT_PUBLIC_SITE_URL`.

## [2026-08-26] — T-025.9: scrollbar mengikuti tema

**Phase:** Development R1
**Summary:** Setelah T-025.8 (track tetap terlihat saat transisi), Boss Rezi minta tampilan scrollbar native (bentuk, warna, ketebalan) diselaraskan ke tema situs — bukan OS default.
**Key Decision/Insight:** Lanjut sebagai **T-025.9** di parent T-025 (bukan parent baru). Palet tetap `rezisaktiva` (ADR-025 / ADR-018), bukan Hess. Token CSS, light+dark, Firefox+WebKit. Jangan regresi T-025.8.
**Impact:** v03 T-025 dibuka lagi (T-025.9 open); TASKS Fokus; Snapshot PROJECT_STATE.

## [2026-08-24] — Handoff: transisi Hess, sisa scrollbar track

**Phase:** Development R1
**Summary:** Ritme transisi halaman (T-025.7) sudah hampir pas vs karolinahess.com (snapshot CSS, bukan View Transitions). Boss Rezi mengunci sisa: **selama animasi pindah halaman, scrollbar track tidak boleh hilang** — di Hess track tetap kelihatan. Dikerjakan di chat baru, bukan di sesi ini.
**Key Decision/Insight:** Branch kerja `feat/page-transition-hess-rhythm` (commit ritme + anti-kedip). Jangan mulai dari `main`. Jangan ubah palet; hanya perilaku scrollbar selama transisi.
**Impact:** T-025.8 (open) di v03; Snapshot PROJECT_STATE; lanjut dari `app/[locale]/_components/page-transition.tsx` + `app/globals.css` (kelas `page-vt-*`).

## [2026-08-24] — Transisi halaman = ritme Hess, bukan wipe cepat

**Phase:** Development R1
**Summary:** Wipe clip 300ms terasa kasar karena bukan transisi Hess. Bundle karolinahess.com: exit 1s `y:-100%` + `scale:.5`, enter 0.4s dari `y:100%` delay 0.4s, ease `[.65,0,.43,1]`. Warna celah tetap tema.
**Key Decision/Insight:** Token `--duration-page-*`; chrome tidak ikut scale. View Transitions API dibatalkan (timeout DOM update Next) → snapshot CSS.
**Impact:** `page-transition.tsx`, `globals.css`, ADR-025, design-tokens §Motion; T-025.7.

## [2026-08-24] — T-025.5 / T-025.6 Home-Work craft + QA

**Phase:** Development R1
**Summary:** Display type Home/Work dinaikkan; tile karya pakai `useContainerReveal` (caption + scrim, scale gambar). QA di `localhost:3001` (bukan 127.0.0.1 — Next block-cross-site-dev). Lenis, Contact/QI lock, theme, reduced-motion, mobile expand lulus.
**Key Decision/Insight:** Overlay Astryx tidak dipakai di tile tautan (touch toggle menunda navigasi); hook reveal lebih aman.
**Impact:** `work-tile.tsx`, `home-page.tsx`, `globals.css`; T-025 Done.

## [2026-08-24] — Craft pass Hess/Mazur (bukan palet)

**Phase:** Development R1
**Summary:** About tetap halaman sendiri; copy T-021 tidak ditulis ulang. Yang ditiru dari karolinahess.com dan mazurbartek.com: ritme layout, tipe oversized, rest/active, inertia scroll, transisi halaman, pita Contact menyatu footer — bukan palet, bukan menghapus teaser Home.
**Key Decision/Insight:** Perubahan material vs ADR-017 → ADR-025 + task T-025 (bukan selip T-021/T-024). Lenis pause saat Contact/Quick Info; off jika reduced-motion.
**Impact:** ADR-025; design-tokens §Motion; key-screen-patterns; competitor-analysis; T-025 di v03.

## [2026-08-24] — Gabung Proses Kerja ke Home?

**Phase:** Development R1
**Summary:** Diskusi (tidak dieksekusi): halaman `/about` (label nav Proses Kerja / How I Work) terasa tipis; usul pindahkan poin ke Home (kecuali hero foto) lalu hapus halaman itu.
**Key Decision/Insight:** Belum dikunci. Intuisi “halaman terlalu tipis untuk berdiri sendiri” valid, tapi dump seluruh About ke Home menabrak job Home (J1/J2, first viewport) dan mengorbankan J4 sebagai deepen opsional. “Poin” di halaman itu lebih dari 4 langkah proses (offers, approach, values). Opsi tengah: strip proses ringkas di Home, About tetap deepen — atau satu-pager hanya jika siap ADR IA.
**Impact:** Belum ada. Kalau dikunci: ADR + `information-architecture.md` / nav / jobs J4. Bukan polish copy T-021.

## [2026-08-24] — Locale switch: residual selected saat hover

**Phase:** Development R1
**Summary:** Saat hover bahasa non-selected, fill selected Astryx tertinggal di ID/EN yang aktif sementara pill custom sudah pindah. Override CSS hanya di `.site-locale-switch`; nav tidak disentuh.
**Key Decision/Insight:** Satu indikator saja — `.site-pill-indicator` — sama seperti nav.
**Impact:** `app/globals.css`; COMPLETE_TASK.

## [2026-08-24] — Elevasi 3D pada pill nav terpilih

**Phase:** Development R1
**Summary:** Boss Rezi minta item nav terpilih (Home) memakai effect 3D yang sama dengan segmen locale terpilih (ID). Token `--elev-3d` dipasang ke `.site-pill-indicator` agar mengikuti hover/aktif.
**Key Decision/Insight:** 3D di track kuning saja tidak cukup — pill gelap di dalam chip juga harus timbul.
**Impact:** `app/globals.css`; COMPLETE_TASK.

## [2026-08-23] — Perbaikan P2 review PR #42 (a11y badge + elevasi overlay)

**Phase:** Development R1
**Summary:** Setelah code review PR #42, dua P2 dikerjakan: StatusDot di badge About disembunyikan dari AT; tombol close/copy overlay tidak memakai timbul 3D; focus-visible Button pakai outline.
**Key Decision/Insight:** Timbul 3D tetap default Button berisi; overlay icon-only tetap datar.
**Impact:** `about-page.tsx`, `globals.css`.

## [2026-08-23] — Elevasi timbul 3D pada chrome + seluruh Button

**Phase:** Development R1
**Summary:** Boss Rezi minta kontrol chrome (nav chip, locale switch, theme toggle, Contact, tab Quick Info) terlihat timbul 3D lewat shadow/bevel — dan untuk Button, style itu berlaku ke seluruh instance, bukan hanya yang di header.
**Key Decision/Insight:** Token `--elev-3d` (highlight atas + bibir bawah + drop shadow). Chip scoped; `.astryx-button` global sadar (override blast-radius PR #28 khusus elevation).
**Impact:** `app/globals.css`, `product-discovery/06-engineering/design-tokens.md`.

## [2026-08-23] — Redesain visual About di kode produksi

**Phase:** Development R1
**Summary:** Setelah ADR-024, Boss Rezi memberi arahan layout About: hero 2 kolom, 3 Card offering, values bento, proses 2×2 dengan angka watermark, CTA terpusat. Dieksekusi di Next.js/Astryx (bukan Tailwind, bukan update mockup HTML). Copy T-021.3 tetap; badge availability memakai label pendek bilingual.
**Key Decision/Insight:** Iterasi visual pertama di bawah ADR-024. Token Astryx + CSS scoped; Grid Astryx di-override mobile-first ke 1 kolom.
**Impact:** `about-page.tsx`, `globals.css`, `content/about.ts`, `overlay-icons.tsx`, T-024 di `v03-development-r1.md`.

## [2026-08-21] — Mockup HTML di-deprecate sebagai acuan desain

**Phase:** Development R1
**Summary:** Boss Rezi ingin memperbaiki desain About. Karena seluruh desain mockup sudah di-port ke kode, HTML di `design-mockups/` tidak lagi jadi acuan utama. Dipilih deprecate **global**: SoT visual = kode produksi (Astryx) + arahan di chat; mockup jadi arsip. About adalah pekerjaan pertama dengan aturan baru.
**Key Decision/Insight:** ADR-024. Jangan update mockup HTML agar ikut desain baru. Jangan Figma-first. Bukan About-only.
**Impact:** `ADR-024`; `.cursor/rules/ui-ux-mockup-check.mdc` (isi dibalik); `ask-before-assuming.mdc`; skills navigator/clarification; `AGENTS.md`; `PROJECT_RULES.md`; `DEVELOPER_WORKFLOW.md`; `PROJECT_OVERVIEW.md`; `04-ux/` + `design-tokens.md`; `design-mockups/README.md`; `v03-development-r1.md` (catatan historis).

## [2026-08-20] — T-021.5 daftar karya kurasi dikunci (8 item)

**Phase:** Development R1
**Summary:** Daftar karya Work index ditarik dari resume Boss Rezi, bukan dikarang. 8 item: Social Media Management Platform, Cook It Real Good, Minerank — Blog, SMC Auction, Personal Portfolio (rezisaktiva), Gamestalgia, Curious, SMC Migration. Curious ditulis jujur sebagai project yang dihentikan product owner (bukan gagal teknis), sesuai keputusan Boss Rezi. SMC Migration tanpa tautan (tidak ada URL publik di resume).
**Key Decision/Insight:** `WorkItem` sekarang punya `href` eksternal (repo/live) — dipakai Work index untuk tile yang benar-benar bisa diklik (sebelumnya tidak ada tautan sama sekali di Work index). Home teaser tetap link ke `/work` (T-019.2), tidak berubah. `h1`/`lead`/CTA Work index masih **draf**, belum dikonfirmasi eksplisit seperti h1 Home.
**Impact:** `content/work.ts` (rewrite), `work-tile.tsx`, `work-page.tsx`. `content/home.ts` teaser otomatis ikut daftar baru (3 item pertama). `tasks/v10-page-copy.md` T-021.5 progres.

## [2026-08-20] — T-021.2 seksi karya + Contact Home dikunci

**Phase:** Development R1
**Summary:** Sisa slot Home (judul+CTA seksi karya, blok Contact) dikunci lewat diskusi. Nada tetap akrab/pede, konsisten dengan h1 dan Bukti yang sudah terkunci sebelumnya. Email/GitHub nyata juga dipasang ke `content/contact.ts` (dicontek dari resume): `rezisaktiva08@gmail.com`, `github.com/reziSaktiva`. LinkedIn masih placeholder.
**Key Decision/Insight:** ID `Beberapa yang udah dipakai orang.` / `Semua karya →`; Contact `Ada project?` / `Cerita bentar aja soal apa yang mau dibangun. Kalau cocok, kita lanjut.` / `Hubungi saya`. EN paralel makna, bukan terjemahan literal. T-021.2 tersisa hanya teaser (menunggu T-021.5).
**Impact:** `content/home.ts`, `content/contact.ts` (email/GitHub). `tasks/v10-page-copy.md` T-021.2 progres.

## [2026-08-20] — T-021.2 Bukti Home dikunci

**Phase:** Development R1
**Summary:** Copy blok Bukti Home dikunci. Argumen: AI bukan ancaman ke pekerjaan, AI menaikkan level kerja (developer → engineer ekosistem AI pribadi) — konsisten dengan skill "AI Ecosystem Building" di resume Boss Rezi.
**Key Decision/Insight:** ID `AI tidak menghilangkan pekerjaan saya. AI mengangkat status saya — dari developer, jadi engineer of my own AI ecosystem.` · EN `AI didn't take my job. It leveled me up — from developer to engineer of my own AI ecosystem.` (angka "~6 tahun" dilepas dari blok ini, tidak dipakai di klaim final).
**Impact:** `content/home.ts` (buktiEmphasis/buktiRest). T-021.2 masih terbuka — seksi karya + CTA contact.

## [2026-08-20] — T-021.2 h1 Home dikunci

**Phase:** Development R1
**Summary:** Copy h1 Home dikunci lewat diskusi (nada akrab, bukan tagline baku). Bukan klaim “website” atau “tanpa kode” di judul.
**Key Decision/Insight:** ID `Ceritamu` / `lewat produk.` · EN `Your story,` / `in the product.`
**Impact:** `content/home.ts` (h1). T-021.2 belum Done — Bukti, seksi karya, CTA contact, teaser masih terbuka.

## [2026-08-20] — Mockup mobile dikunci + T-022 antrian

**Phase:** Development R1
**Summary:** Mockup HTML dirapikan untuk iPhone SE (320/375) dan menu hamburger (item nav full-width, ID/EN compact). Dokumentasi UX diselaraskan. Task **T-022** ditambah untuk paritas kode Next.js — **jangan dikerjakan sekarang**; Boss Rezi ingin mengerjakannya nanti.
**Key Decision/Insight:** Mockup = SoT visual. Bukan ADR baru (tetap ADR-020 hamburger <1024). T-021 copy tetap jalur copy; T-022 independen dan boleh paralel nanti.
**Impact:** `navigation-patterns.md`, `key-screen-patterns.md`, `ux-principles.md`, `information-architecture.md`, `design-tokens.md`; `tasks/v03-development-r1.md` T-022; `TASKS.md`; `PROJECT_STATE.md`.

## [2026-08-19] — KI visual vs mockup sebelum merge PR #32

**Phase:** Development R1
**Summary:** Boss Rezi minta dua gap visual dicatat sebagai Known Issue sebelum merge: (1) warna tombol light/dark belum match mockup, (2) background halaman light mode belum match mockup.
**Key Decision/Insight:** Tidak diperbaiki di PR #32. **KI-001** + **KI-002** di `PROJECT_STATE.md`.
**Impact:** `PROJECT_STATE.md` (Known Issues), `TASKS.md` Fokus, `COMPLETE_TASK.md`.

## [2026-08-19] — T-018 ditunda sampai copy T-021

**Phase:** Development R1
**Summary:** Boss Rezi minta T-015–T-020. T-018 (exit R1) bentrok kontrak v10: baru boleh setelah T-021.1–T-021.7. Dipilih tunda T-018; UI About/Contact/Work/Quick Info/meta dikerjakan dulu.
**Key Decision/Insight:** Exit R1 / pindah Validation tidak ditandai sekarang. Copy tetap T-021 (diskusi, bukan AI mengarang).
**Impact:** `tasks/v03-development-r1.md` T-018 tetap ⏳; Snapshot/Fokus mengarah ke T-021 lalu T-018.

---

## [2026-08-18] — Subtask copy ditarik dari v03

**Phase:** Development R1
**Summary:** Boss Rezi: T-014.1 / T-014.3 (dan subtask “konten di content/” sejenis) tidak boleh ada di v03. Urusan copy hanya T-021 di v10.
**Key Decision/Insight:** v03 = layout/komponen. Parent UI Done tanpa menunggu copy. T-021 = kunci teks + tulis ke `content/` + pasang ke UI yang sudah ada. ID yang ditarik tidak didaur ulang.
**Impact:** `v03-development-r1.md` (T-014 ✅), `v10-page-copy.md`, `TASKS.md`, `PROJECT_STATE.md`.

## [2026-08-18] — v03 jangan campur catatan page-copy

**Phase:** Development R1
**Summary:** Boss Rezi minta dokumentasi v03 tidak mencampur urusan page-copy. Copy (kunci teks, sumber T-021, kontrak ke UI) hanya dicatat di v10.
**Key Decision/Insight:** v03 = fitur/UI. v10 = semua teks + kontrak kapan copy terpasang ke UI. Satu tautan dari v03 ke v10 cukup; jangan ulangi T-021.N di checklist v03.
**Impact:** `tasks/v03-development-r1.md`, `tasks/v10-page-copy.md`.

## [2026-08-18] — Perbaiki kontrak copy ↔ UI (review PR #30)

**Phase:** Development R1
**Summary:** Temuan review: T-014.3 bisa mengarang teaser; T-014 vs T-021 paralel tanpa aturan Done; T-021.1 mengubah chrome tanpa pasang ke kode; T-018 tidak menunggu T-021.
**Key Decision/Insight:** Layout boleh paralel + teks mockup sementara. Parent UI Done hanya setelah copy T-021 terpasang. T-021.1 = kunci + apply ke nav/footer. Exit R1 menunggu T-021.1–T-021.7.
**Impact:** `v03-development-r1.md`, `v10-page-copy.md`, `TASKS.md`, `PROJECT_STATE.md`.

## [2026-08-18] — Copy R1 memakai v10, bukan v03

**Phase:** Development R1
**Summary:** Boss Rezi minta file copy tidak jadi v03. Urutan v01–v06 tetap sesuai rencana rilis. File dipindah ke `tasks/v10-page-copy.md` (bukan v20 — v10 cukup menyisakan v04–v09).
**Key Decision/Insight:** T-021 tetap. Indeks TASKS: v0.1 / v0.2 / v0.3 utuh; v10 = page copy.
**Impact:** `tasks/v10-page-copy.md` (baru), `v03-page-copy.md` dihapus, `TASKS.md`, `PROJECT_STATE.md`, `v03-development-r1.md`, `content/README.md`.

## [2026-08-18] — Backlog copy semua teks (T-021), dikerjakan sambil diskusi

**Phase:** Development R1
**Summary:** Boss Rezi minta file task untuk mengisi seluruh teks tiap halaman (judul Home, body, label, form, meta, dst.), dikerjakan sambil berdiskusi — bukan AI mengarang copy sendiri.
**Key Decision/Insight:** Satu parent **T-021** di `tasks/v03-page-copy.md`. Placeholder mockup bukan copy final. Work case (M10) di luar. UI tetap T-014…T-020; subtask konten `*.1` memakai hasil T-021.
**Impact:** `tasks/v03-page-copy.md`, `v03-development-r1.md`, `TASKS.md`, `PROJECT_STATE.md`, `content/README.md`.

## [2026-08-18] — Tanya Boss Rezi hanya jika urgent

**Phase:** Development R1
**Summary:** Diskusi subagent berujung ke proses AI: jangan tanya ritual. AI wajib cek sendiri kelengkapan task dan mockup HTML. Tanya Boss Rezi hanya jika ada gap, salah tulis dokumen, atau hal di luar rencana.
**Key Decision/Insight:** Mockup yang sudah ada dan selaras task/ADR dipakai langsung (tanpa “pakai sekarang atau perbarui dulu?”). Ketidakyakinan yang bisa diselesaikan dengan membaca dokumen/kode/CLI bukan alasan tanya. Tidak memakai subagent kustom untuk project ini pada skala sekarang.
**Impact:** `.cursor/rules/ask-before-assuming.mdc`, `.cursor/rules/ui-ux-mockup-check.mdc`, `.cursor/skills/proactive-clarification/SKILL.md`, `.cursor/skills/project-os-navigator/SKILL.md`, `AGENTS.md`, `PROJECT_RULES.md`, `PROJECT_OVERVIEW.md`, `DEVELOPER_WORKFLOW.md`, `tasks/v03-development-r1.md`.

## [2026-08-15] — karolinahess.com & mazurbartek.com diformalkan sebagai referensi

**Phase:** Development R1
**Summary:** Boss Rezi minta referensi karolinahess.com dan mazurbartek.com yang selama ini disebut di sesi mockup (Quick info, layout About, arah seni Home) didokumentasikan resmi, bukan hanya di catatan sesi.
**Key Decision/Insight:** Ditambahkan sebagai referensi #6 dan #7 di `competitor-analysis.md` (Karolina = tier craft/tipografi-interaksi; Bartek = tier presence/tipografi-whitespace), memakai jalur yang sudah diizinkan dokumen itu sendiri untuk menambah named reference tanpa mengubah kerangka clarity → presence → craft. Dicatat sebagai **Update pada ADR-006** (bukan ADR baru).
**Impact:** `product-discovery/01-business/competitor-analysis.md`, `project-manager/decisions/ADR-006-...md` (+Update), `DECISIONS.md` (ringkasan ADR-006 diperbarui).

## [2026-08-15] — Contact jadi Dialog/Modal global + form (ADR-019)

**Phase:** Development R1
**Summary:** Boss Rezi minta Contact diubah dari halaman jadi Dialog/Modal (referensi screenshot: form email+message, detail kontak, sosial), warna disesuaikan tema project (ink gelap + kuning, bukan hijau/lime referensi), dan cursor-ring berubah jadi X saat kursor di scrim (luar dialog). `contact.html` dihapus.
**Key Decision/Insight:** Baseline S3 (`key-screen-patterns.md`, ADR-014) melarang form di Contact dan menganggap deretan ikon sosial setara Email sebagai anti-pattern. Boss Rezi diberi tahu konflik ini secara eksplisit dan memilih tetap pakai form — diformalkan sebagai **ADR-019** (override sebagian ADR-014; Email tetap tampil sebelum blok Socials untuk menjaga sebagian hierarki; calendar/WA/IG/pricing tetap dilarang).
**Impact:** `design-mockups/shared.css`, `shared.js`, `home.html`, `about.html`, `work.html`, `work-case.html` (tombol Contact/CTA jadi trigger modal, bukan link ke halaman); `design-mockups/contact.html` dihapus; `ADR-019`; `key-screen-patterns.md` (S3 catatan override); `tasks/v03-development-r1.md` T-016 (catatan: route vs modal-only belum diputuskan untuk kode produksi).

## [2026-08-15] — Navbar mobile/tablet: hamburger (menyimpang baseline)

**Phase:** Development R1
**Summary:** Boss Rezi minta desain navbar mobile karena versi desktop yang diperkecil tidak memadai. Dua baris ditolak; dipilih hamburger untuk nav halaman (Home / Proses Kerja / Karya) + switcher ID/EN. Contact dan tombol tema tetap di luar menu. Hamburger tampil di viewport <1024px (HP + tablet); desktop (≥1024px) tetap 3 grup dengan nav di tengah.
**Key Decision/Insight:** Mockup chrome sekarang hamburger di bawah `lg`. Ini menyimpang dari `navigation-patterns.md` + T-013.1 (nav + switcher selalu terlihat, tanpa hamburger, ≤1 ketukan). Belum ADR — keputusan mockup dulu; sebelum T-013 perlu pilih: ikut mockup (ADR) atau kembali ke baseline always-visible.
**Impact:** `design-mockups/` (semua halaman); catatan di `tasks/v03-development-r1.md` T-013.

## [2026-08-14] — Quick info: tab hilang, drawer full screen + close

**Phase:** Development R1
**Summary:** Boss Rezi koreksi interaksi Karolina: klik tab Quick info → tab menghilang; panel full screen geser dari kanan; rounded-xl di kiri atas & kiri bawah; tombol close kotak di pojok kiri header.
**Key Decision/Insight:** Tetap overlay custom di mockup (bukan pindah shadcn). Pola = Drawer full screen, bukan tab yang menempel panel.
**Impact:** `design-mockups/shared.css`, `shared.js`.

## [2026-08-14] — Tetap Astryx; Quick info bukan alasan pindah shadcn

**Phase:** Development R1
**Summary:** Boss Rezi lihat shadcn Drawer dan tidak menemukan padanan di Astryx. Diputuskan tidak pindah stack. Masalah visual hanya tinggi tab (jangan full) dan tab harus ikut geser saat panel terbuka.
**Key Decision/Insight:** ADR-018 tetap. Astryx tidak punya Drawer generik (paling dekat MobileNav/Dialog). Quick info = overlay custom di mockup. shadcn Drawer juga tidak memberi tab vertikal tepi kanan secara gratis.
**Impact:** `design-mockups/shared.css` — tab kompak menempel panel, geser bersama.

## [2026-08-14] — Tab Quick info diselaraskan ke Karolina

**Phase:** Development R1
**Summary:** Boss Rezi minta tombol Quick info di mockup lebih mirip karolinahess.com. Iterasi pertama: pill kompak putih, hover hijau gelap, panel terpisah. Iterasi kedua: tab tetap kompak tapi menempel panel dan ikut geser saat dibuka.
**Key Decision/Insight:** Bentuk tombol = Karolina (putih, kompak, hover hijau gelap). Bukan strip penuh. Tab mengikuti drawer.
**Impact:** `design-mockups/shared.css` (+ cache bust HTML).

## [2026-08-14] — Quick info drawer di mockup (kecuali work-case)

**Phase:** Development R1
**Summary:** Boss Rezi minta komponen Quick info sama seperti karolinahess.com di setiap halaman mockup kecuali work-case. Tab vertikal di tepi kanan membuka panel (bio, services, tools, works index, email, links).
**Key Decision/Insight:** Pola interaksi Karolina; warna tetap token mockup. Copy di dalam panel masih placeholder.
**Impact:** `design-mockups/shared.js`, `shared.css`; Home / About / Work / Contact.

## [2026-08-14] — Copy mockup masih placeholder

**Phase:** Development R1
**Summary:** Boss Rezi menegaskan seluruh teks di `design-mockups/` belum copy final — masih contoh untuk menampilkan layout, ritme, dan arah seni.
**Key Decision/Insight:** Jangan anggap copy mockup sebagai konten produksi. Saat implementasi R1 (T-013…T-016) atau revisi mockup berikutnya, copy harus dikonfirmasi dulu; layout/visual boleh lanjut terpisah dari teks.
**Impact:** Catatan sesi ini; baseline copy di `product-discovery/` tetap acuan isi resmi sampai Boss Rezi menulis/menyetujui teks mockup.

## [2026-08-14] — Copy About bergaya Karolina, layout tetap Bartek

**Phase:** Development R1
**Summary:** Layout About (sapaan + foto) dipertahankan. Isi penjelasan diganti ke ritme karolinahess.com/about: kalimat pendek, “yang bisa saya bantu” (Product / Fullstack / AI), approach, values.
**Key Decision/Insight:** Visual = Bartek; value content = Karolina. Blok S2 tetap, tapi tidak lagi esai defensif.
**Impact:** `design-mockups/about.html`, `shared.js`.

## [2026-08-14] — About mockup mengikuti mazurbartek.com/about

**Phase:** Development R1
**Summary:** Boss Rezi kurang suka About versi slogan. Referensi: split sapaan + foto potret, bio singkat, ketenangan whitespace. FAQ/afterhours tidak ditiru (di luar S2).
**Key Decision/Insight:** About = perkenalan orang, bukan landing kedua. Blok S2 tetap (narasi, fullstack, AI, proses, CTA).
**Impact:** `design-mockups/about.html`, `shared.css`, `shared.js`.

## [2026-08-14] — Paritas visual mockup About / Work / Contact

**Phase:** Development R1
**Summary:** Boss Rezi minta halaman About, Work, dan Contact diselaraskan ke arah seni Home (chrome tenang, type besar, ruang kosong, tanpa blob/kartu berbingkai). Work-case ikut diselaraskan supaya alur Karya tidak patah.
**Key Decision/Insight:** Satu bahasa visual di seluruh mockup R1; isi blok UX S2/S3 tetap.
**Impact:** `design-mockups/about.html`, `work.html`, `contact.html`, `work-case.html`, `shared.css`, `shared.js`.

## [2026-08-14] — Arah seni mockup Home (Karolina × Bartek)

**Phase:** Development R1
**Summary:** Boss Rezi menilai Home mockup masih biasa. Referensi mazurbartek.com (type + whitespace) dan karolinahess.com (type oversized menumpuk foto cutout). Dipilih hybrid: type + foto cutout, tenang, switcher ID/EN tetap.
**Key Decision/Insight:** Seni = yang dibuang (blob, chip, marquee, kartu berbingkai, rail). Blok R1 tetap (klaim → bukti → teaser 1–3 → Contact). Belum ADR — ini arah visual mockup, bukan ubah baseline UX.
**Impact:** `design-mockups/home.html`, `shared.css`, `shared.js`. Halaman lain belum diselaraskan.

## [2026-08-14] — Mockup halaman Karya (Work index)

**Phase:** Development R1
**Summary:** Boss Rezi minta halaman yang menampilkan seluruh hasil kerja, terarah dari tautan See all di section work Home. Dibuat `design-mockups/work.html` (indeks) dan `work-case.html` (cerita singkat Konteks → Pendekatan → Hasil per project).
**Key Decision/Insight:** Mockup M9+M10 dulu; belum menarik ke backlog kode R1 / belum ADR geser roadmap. Konten kartu masih placeholder.
**Impact:** `design-mockups/work.html`; nav Karya + See all mengarah ke halaman itu.

## [2026-08-14] — Alur wajib cek/buat mockup sebelum UI/UX

**Phase:** Development R1
**Summary:** Boss Rezi minta setiap pekerjaan UI/UX selalu cek mockup HTML dulu. Jika mockup sudah ada: jelaskan isinya, lalu tanya apakah dipakai yang sekarang. Jika belum ada: wajib beri tahu dan wajib buat mockup di `design-mockups/` sebelum implementasi kode — tidak ada opsi skip.
**Key Decision/Insight:** Mockup HTML adalah gerbang visual wajib; kode produksi tidak boleh dimulai tanpa mockup yang disetujui.
**Impact:** `.cursor/rules/ui-ux-mockup-check.mdc` dikencangkan; catatan di `tasks/v03-development-r1.md` diselaraskan.

## [2026-08-13] — Adopsi Astryx sebagai component library, replace Tailwind

**Phase:** Repository & Bootstrap (T-009 selesai, menjelang T-010)
**Summary:** Boss Rezi minta setup Astryx (`astryx.atmeta.com`) untuk component library R1. Setelah klarifikasi (integrasi replace penuh vs coexist Tailwind, pilihan theme, target agent docs), disepakati: Astryx **menggantikan** Tailwind + CSS variables sepenuhnya (bukan bridge), theme awal `@astryxdesign/theme-neutral`, agent docs Astryx digenerate ke project rule `.cursor/rules/xds.mdc` (bukan `AGENTS.md` yang jadi dokumen navigasi inti, bukan juga user rule global).
**Key Decision/Insight:** Astryx dipilih karena AI-friendly by design (CLI docs terstruktur, agent context generation) — selaras pola kerja project yang banyak dieksekusi AI agent. Diformalkan sebagai **ADR-018**.
**Impact:** `design-tokens.md`, `dependency-strategy.md` diperbarui; Tailwind di-uninstall; `app/globals.css`, `app/layout.tsx`, `app/page.tsx` migrasi ke Astryx; `v02-bootstrap.md` T-009.4 (baru) menggantikan T-009.2. Juga dibuat rule baru `.cursor/rules/ui-ux-mockup-check.mdc` (wajib cek mockup `design-mockups/` sebelum kerjakan task UI/UX) di sesi yang sama.

---

## [2026-08-12] — Pendekatan visualisasi design & motion sebagai identitas

**Phase:** Repository & Bootstrap (menjelang T-009.2 design tokens)
**Summary:** Diskusi cara merancang design tanpa Figma. Disepakati: mulai visualisasi dari mockup HTML/Tailwind statis (dibuka di browser, iteratif via obrolan) untuk Home saja dulu (one-screen proof), sebelum porting ke komponen Next.js asli. Font arah: General Sans (display) + Satoshi (body). Referensi visual dipertajam: cristianoronaldo.com untuk presence/identitas, p5aholic.me untuk teknik gerak/interaksi saja (bukan struktur playground-nya).
**Key Decision/Insight:** Motion R1 naik peran dari "Could minimal" menjadi bagian identitas visual, dengan clarity tetap prioritas tertinggi dan urutan clarity → presence → craft (ADR-006) tidak berubah — diformalkan sebagai **ADR-017**.
**Impact:** `design-tokens.md` (§Motion diperbarui), `DECISIONS.md` (+ADR-017). Langkah berikutnya: susun mockup HTML/Tailwind Home dengan token warna/font arah ini.

---

## [2026-08-12] — Iterasi mockup: 3 halaman, palet muted, toggle tema

**Phase:** Repository & Bootstrap (menjelang T-009.2 design tokens)
**Summary:** Mockup diperluas ke About & Contact (`design-mockups/`). Percobaan pertama mencampur band gelap/terang per section ternyata terasa mengganggu ("bikin sakit kepala") — direvisi menjadi satu sistem tema konsisten berbasis CSS variable (semantik: bg/fg/border/brand/accent + on-brand/on-accent) dengan **toggle dark/light** di header (localStorage, default light sesuai baseline). Referensi presence dikoreksi dari cristianoronaldo.com → **bepatrickdavid.com** (lihat Update di ADR-017), selaras kembali dengan pasangan referensi asli di `competitor-analysis.md`. Ditambah section baru "Cara Kerja" di About (4 langkah: Discover → Design → Build → Ship & Iterate) menjawab kebutuhan menunjukkan proses berpikir/bekerja secara scannable.
**Key Decision/Insight:** Sistem CSS variable (RGB triplet + Tailwind `rgb(var(...) / <alpha-value>)`) terbukti jadi cara bersih untuk toggle tema tanpa duplikasi class per section — pola ini relevan dipakai lagi saat implementasi token asli di T-009.2.
**Impact:** `ADR-017` (update referensi). Belum ada perubahan baseline lain; mockup masih di `design-mockups/` (di luar `app/`), menunggu approval sebelum porting ke komponen Next.js.

---

## 2026-08-11 — Exit Product Discovery (T-007) + review README

**Phase:** Exit Criteria → Repository & Bootstrap
**Summary:** Review walkthrough 01–06 sebelum exit. Tidak ada gap material. README 03–06 + Exit Criteria root dirapikan wording “sudah ditetapkan / sudah terpenuhi”, lalu T-007 ditutup dan state pindah ke Bootstrap.
**Key Decision/Insight:** Product Discovery resmi selesai; implementasi scaffold diizinkan di mode Bootstrap; baseline PD terkunci (perubahan material butuh ADR).
**Impact:** README 03–06 + `product-discovery/README.md`; PROJECT_STATE; TASKS; T-007 ✅.

## 2026-08-11 — Engineering Baseline v1.0 (T-006.10)

**Phase:** Phase 6 → Exit Criteria (T-007)
**Summary:** T-006 selesai. Seluruh `06-engineering/` dikunci Baseline v1.0: Next single-app + pnpm, Vercel, CI Actions + deploy Vercel, ESLint/Prettier, Dependabot, Tailwind tokens A+; auth/ORM N/A.
**Key Decision/Insight:** ADR-016; perubahan material engineering setelah ini butuh ADR baru; nilai visual token tetap boleh diiterasi.
**Impact:** `06-engineering/*`, ADR-016, PROJECT_STATE → fokus **T-007.1**.

## 2026-08-11 — Engineering T-006.7–T-006.9

**Phase:** Phase 6 — Engineering Planning
**Summary:** DX = ESLint + Prettier (bukan Biome); quality gate CI saja tanpa husky; test belum wajib. Dependency = pnpm tetap + lockfile + `^` + Dependabot. Tokens = Tailwind + CSS vars; light default; dark fondasi siap, toggle Later (A+).
**Key Decision/Insight:** Familiaritas Next menang vs Biome untuk R1; Bun ditolak sebagai pengganti pnpm; dark mode disiapkan tanpa wajib toggle di MVP.
**Impact:** `dx-tooling.md`, `dependency-strategy.md`, `design-tokens.md`; fokus **T-006.10**.

## 2026-08-11 — Engineering T-006.4–T-006.6

**Phase:** Phase 6 — Engineering Planning
**Summary:** DB/ORM = N/A. CI/CD dikunci opsi B (GitHub Actions lint/typecheck + Vercel Preview/Production). Env tipis: Local/Preview/Production; tanpa vault; tanpa secret DB/auth.
**Key Decision/Insight:** Quality gate di PR tanpa menduplikasi CD ke Actions; katalog env minimal (`SITE_URL`, analytics opsional).
**Impact:** `database-orm.md`, `cicd-pipeline.md`, `environment-management.md`; fokus **T-006.7**.

## 2026-08-11 — Engineering awal T-006.1–T-006.3

**Phase:** Phase 6 — Engineering Planning
**Summary:** Dikunci single-app di repo ini, Next.js (App Router, static-first), pnpm, hosting Vercel. Auth strategy R1 = N/A (sudah baseline arsitektur).
**Key Decision/Insight:** Bukan monorepo; bukan `output: 'export'` wajib — SSG di Vercel + Middleware untuk redirect locale. ADR formal menyusul di T-006.10.
**Impact:** `06-engineering/monorepo-setup.md`, `deployment-infrastructure.md`, `auth-strategy.md`; fokus **T-006.4**.

## 2026-08-11 — Architecture Baseline v1.0 (T-005)

**Phase:** Phase 5 → 6 — Architecture → Engineering Planning
**Summary:** T-005 selesai. Bentuk sistem dikunci **static-first SSG + konten di repo** (opsi A). Domain lean; application + integration tipis; DB/jobs/realtime/auth = N/A sadar.
**Key Decision/Insight:** ADR-015; SSR default & headless CMS ditolak untuk R1.
**Impact:** `05-architecture/*`, ADR-015, PROJECT_STATE → Phase 6; fokus **T-006.1**.

## 2026-08-10 — Review ketat T-003 / T-004 (hygiene)

**Phase:** Phase 5 — Architecture (docs User/UX)
**Summary:** Review defect-first terhadap baseline User & UX. Diperbaiki: overlap bukti Home, OQ2/SC Contact selaras ADR-014, acceptance meta/share + content readiness, README fase tanpa living status.
**Key Decision/Insight:** Tidak ada Must produk baru; klarifikasi credibility line ≠ work teaser; Email tetap primer.
**Impact:** `03-user/*`, `04-ux/*`, COMPLETE_TASK; lanjut **T-005.1**.

## 2026-08-10 — UX Baseline v1.0 (T-004)

**Phase:** Phase 4 → 5 — UX → Architecture
**Summary:** T-004 selesai. `04-ux/` dikunci: prinsip UX1–UX7, IA Hybrid lean + path `/id`/`/en`, flows F1–F6 (+ F7 Later), nav lean, pola layar S0–S3. Soft CTA: Email primer; LinkedIn/GitHub satelit; tanpa WA/IG di R1.
**Key Decision/Insight:** ADR-014; locale path prefix shareable; Contact lean opsi A.
**Impact:** `04-ux/*`, ADR-014, PROJECT_STATE → Phase 5; fokus T-005.1.

## 2026-08-07 — User Baseline v1.0 (T-003)

**Phase:** Phase 3 → 4 — User → UX Planning
**Summary:** T-003 selesai. Metode discovery: assumption-led + rencana riset ringan opsional (non-blocking). Journey: R1 Clarity primer + cabang sekunder tipis untuk hiring/klien. Dual persona primer setara tetap; tidak ada Must produk baru.
**Key Decision/Insight:** ADR-013; insight I1–I7 (clarity first visit; satu brand dua penekanan; teaser vs case; soft path; i18n sebagai journey).
**Impact:** `03-user/*`, ADR-013, PROJECT_STATE → Phase 4; fokus T-004.1.

## 2026-08-07 — Product Baseline v1.0 (T-002.8)

**Phase:** Phase 2 → 3 — Product → User Discovery
**Summary:** Seluruh `02-product/` dikunci Baseline v1.0: Hybrid lean, MoSCoW M1–M7 Must R1, roadmap R1→R2→R3, roles N/A.
**Key Decision/Insight:** ADR-012; tidak ada fork baru — paket ADR-010/011 sudah cukup.
**Impact:** Lanjut **T-003.1** isi `03-user/`.

## 2026-08-07 — Roles & permissions N/A (T-002.7)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Disepakati `roles-permissions.md` N/A: tidak ada login/RBAC/area member; file tetap diisi sebagai jejak (pola ADR-008). ADR-011.
**Key Decision/Insight:** Situs = read-only publik; authoring di luar permission in-app.
**Impact:** Lanjut **T-002.8** Baseline Product v1.0 + ADR.

## 2026-08-07 — Release + future roadmap (T-002.5 / T-002.6)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Rilis milestone R1 MVP Clarity → R2 Magnet ringan → R3 Presence/craft; future menampung writing/experiments/distribusi tanpa mengubah brand primer. Tanpa tanggal kalender spekulatif; tanpa ADR baru.
**Key Decision/Insight:** Milestone-based; R2 = aktivasi magnet ADR-007 setelah R1 exit.
**Impact:** Lanjut **T-002.7** `roles-permissions.md` (boleh N/A).

## 2026-08-07 — Feature priority MoSCoW (T-002.4)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Diisi `feature-priority.md`: Must = M1–M7; Should = poles clarity; Could = form/motion/early case; Won't MVP = M9–M12 + sales/CMS/blog berat. Selaras ADR-010 tanpa ADR baru.
**Key Decision/Insight:** Magnet (M9/M10) tetap Won't untuk rilis MVP.
**Impact:** Lanjut **T-002.5** `release-roadmap.md`.

## 2026-08-07 — MVP surface Hybrid lean (C)

**Phase:** Phase 2 — Product Discovery (02-product)
**Summary:** Disepakati struktur MVP Hybrid lean: Home + About + Contact; karya sebagai teaser di Home; case/Work detail menyusul setelah kerangka clarity. Draft T-002.1–T-002.3 + ADR-010.
**Key Decision/Insight:** Opsi C; bukan single-page (B) dan bukan case wajib di MVP (D).
**Impact:** Lanjut **T-002.4** `feature-priority.md`.

## 2026-08-07 — Success metrics dual north star + Business Baseline v1.0

**Phase:** Phase 1 — Business Discovery → Phase 2 (02-product)
**Summary:** Disepakati dual north star (brand recall + inbound berkualitas); vanity traffic bukan KPI. Seluruh `01-business/` dikunci Baseline v1.0.
**Key Decision/Insight:** Opsi C dual; ADR-009; T-001.7 + T-001.8 selesai.
**Impact:** Lanjut **T-002.1** `product-scope.md`.

## 2026-08-07 — Sinkron laporan ke ID subtask

**Phase:** Phase 1 — Business Discovery
**Summary:** Audit dan selaraskan semua dokumen laporan/aturan yang masih merujuk subtask tanpa kode `T-XXX.N`.
**Key Decision/Insight:** Satu konvensi di seluruh Project OS + Impact riwayat CONVERSATIONS.
**Impact:** Siap lanjut **T-001.7** tanpa ambigu.

## 2026-08-07 — Konvensi ID subtask T-XXX.N

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati subtask memakai kode turunan parent (`T-001.1`, `T-001.2`, …). Retrofit semua subtask di v01 + riwayat COMPLETE_TASK.
**Key Decision/Insight:** Opsi A — retrofit semua; format `T-XXX.N`; ID tidak didaur ulang.
**Impact:** Fokus sekarang = **T-001.7** `success-metrics.md`.

## 2026-08-07 — Pricing strategy N/A

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati pricing tidak relevan untuk situs; file tetap diisi N/A (bukan dihapus).
**Key Decision/Insight:** ADR-008; opsi 1 terkunci.
**Impact:** Lanjut **T-001.7** `success-metrics.md`.

## 2026-08-07 — Business model growth B

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati growth destination + magnet ringan (case/proses); tanpa revenue langsung di situs; soft inbound job/client.
**Key Decision/Insight:** ADR-007; opsi B terkunci.
**Impact:** Lanjut **T-001.6** `pricing-strategy.md` (kemungkinan N/A untuk situs).

## 2026-08-07 — Competitor analysis lens D

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati hybrid: lima referensi bernama + pesaing kategori; prioritas pelajaran clarity → presence → craft. Draft `competitor-analysis.md` v0.1.
**Key Decision/Insight:** ADR-006; opsi D terkunci.
**Impact:** Lanjut **T-001.5** `business-model.md` selaras ADR-002 / ADR-006.

## 2026-08-06 — Target market ICP

**Phase:** Phase 1 — Business Discovery
**Summary:** Diperdalam audiens primer founder/PO: dua archetipe setara (early founder/indie + PO perusahaan), fokus geo SEA, domain digital product/tech.
**Key Decision/Insight:** ADR-005; draft `target-market.md` v0.1.
**Impact:** Lanjut **T-001.4** `competitor-analysis.md` selaras ADR-002 / ADR-005.

## 2026-08-06 — Problem statement framing

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati framing dual (Rezi + founder/PO) dan rantai masalah visibility → narrative → evaluasi. Situasi saat ini: akun banyak platform ada, tetapi belum menonjol; aktif hampir hanya GitHub karena kerja.
**Key Decision/Insight:** ADR-004; draft `problem-statement.md` v0.1.
**Impact:** Lanjut **T-001.3** `target-market.md` selaras ADR-002 / ADR-004.

## 2026-08-06 — Public repo & privacy

**Phase:** Phase 1 — Business Discovery
**Summary:** Boss Rezi ingin repo bisa dilihat banyak orang tetapi khawatir privasi. Disepakati usulan: repo public, discovery tetap terbuka, materi sensitif di `private/` yang di-ignore.
**Key Decision/Insight:** ADR-003.
**Impact:** `.gitignore`, `README.md`, folder `private/`.

## 2026-08-06 — Product vision & positioning

**Phase:** Phase 1 — Business Discovery
**Summary:** Diskusi tujuan portofolio berujung Model A (brand primer, job/client soft), positioning berlapis (product builder / fullstack / AI edge), audiens primer founder/PO, dan bahasa bilingual geo-aware.
**Key Decision/Insight:** ADR-002; draft `product-vision.md` v0.1.
**Impact:** Lanjut **T-001.2** `problem-statement.md` dan **T-001.3** `target-market.md` selaras ADR-002.

## 2026-08-06 — Kickoff template Project OS

**Phase:** Phase 1 — Business Discovery
**Summary:** Disepakati membuat template Project OS untuk portofolio `rezisaktiva` (fase discovery 01–06), docs-only, skills di `.cursor/skills/`.
**Key Decision/Insight:** ADR-001 — pemisahan PD/PM; Cursor-first.
**Impact:** Scaffold selesai; sesi berikutnya **T-001.1** `product-vision.md`.
