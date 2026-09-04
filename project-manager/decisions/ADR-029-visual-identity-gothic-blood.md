# Decision ADR-029

### Title

Migrasi identitas visual R1 ke absurdism, surrealism, Gothic Art, dark and blood (kulit visual; IA/copy tetap)

### Status

Accepted

### Date

2026-09-04

### Decision

1. **Identitas visual produksi diganti.** Arah seni baru = **absurdism**, **surrealism**, **Gothic Art**, **dark and blood**. Pembacaan operasional dikunci **T-038.1** (tabel di v15): deadpan menolak tropes SaaS; satu justaposisi sureal yang diam; gothic sebagai struktur (katedral/naskah), bukan stiker; darah = satu aksen wine/clot — bukan splatter, mall-goth, gore, NSFW, chaos acak. Ini mengganti kulit visual yang sekarang hidup di kode (kanvas krem, chip kuning `--chip-bg`, elevasi 3D `--elev-3d`, bahasa chrome Hess/Mazur) — bukan ganti produk, bukan halaman baru.
2. **Hanya kulit visual.** Yang **tetap**: copy T-021, IA dan pola layar (`04-ux/`), perilaku overlay (Contact = Dialog, Quick Info dari kanan, project sheet dari bawah, hamburger &lt;1024px), stack shadcn/ui + Tailwind v4 (ADR-028), SSG + `content/` (ADR-015), Motion + Lenis sebagai fondasi gerak (bukan library baru), SoT visual = kode produksi + arahan chat (ADR-024). Yang **berganti**: palet, tipe, mood, skin chrome, dan bahasa gerak *visual* (bukan job/alur).
3. **Metode kerja = tanya-jawab per permukaan, lalu kode.** Tidak ada big-bang restyle. Urutan: kunci arah seni → token → chrome → overlay → halaman → gerak sistem + docs. Setiap cluster komponen dibahas dulu di chat, dikunci, baru diimplementasi. Inventaris dan gate ada di [`tasks/v15-visual-identity.md`](../tasks/v15-visual-identity.md) (**T-038** … **T-043**).
4. **Clarity tetap mengikat (UX1).** Atmosfer gothic/sureal **membingkai** klaim first viewport, tidak menyembunyikannya. ICP founder/PO SEA dan north star recall “product builder” tidak diganti. Bukan horror splatter, bukan mall-goth klise, bukan chaos acak yang merusak scan.
5. **Klausul “bukan redesain” di ADR-028 poin 2 tidak berlaku lagi untuk bentuk visual.** Stack, primitf, dan kontrak tema-mekanisme (class `dark`, cookie `rz-theme`, anti-flash) **tetap** ADR-028. Palet `rezisaktiva` krem + kuning + 3D **bukan** kontrak lagi.
6. **Default ship = dark; light di-hold.** Dikunci **T-038.2**: identitas baru dikerjakan gelap. Light **tidak dihapus** — token lama di-comment di T-039 (arsip). Toggle chrome **disembunyikan** selama hold (komponen + cookie tetap). Bukan dark-only permanen. Detail mekanisme: update [ADR-021](ADR-021-dark-mode-toggle-must-r1.md) 2026-09-04.
7. **T-031 metadata mengantri** sampai token baru ada (**T-039**). Ikon, kartu share, dan `themeColor` harus ikut arah seni baru, bukan palet lama.

### Reason

- Boss Rezi mengunci arah seni (absurdism / surrealism / Gothic Art / dark and blood) dan batas “kulit visual saja” (2026-09-04). Brainstorm tema keseluruhan hari yang sama sudah meminta validasi mood sebelum kode; mood sekarang cukup untuk ADR.
- ADR-028 sengaja membekukan bentuk visual agar migrasi Astryx → shadcn tidak menjadi redesain terselubung. Migrasi stack **selesai** (T-037). Redesain sekarang adalah keputusan produk terpisah, bukan selip ke polish R1.
- Metode Q&A per permukaan mencegah big-bang yang sulit di-review dan menjaga Documentation First: yang dikunci di chat masuk task/ADR follow-up sebelum pixel menyebar.
- UX1 + ADR-002 tetap: situs ini rumah evaluasi product builder, bukan gallery horror. Arah seni yang lebih gelap tetap harus lolos first-viewport clarity.

### Alternatives Considered

- Tetap palet krem + kuning; hanya naikkan motion — ditolak; Boss Rezi minta ganti tema seluruh situs.
- Tulis ulang copy dan/atau IA bersamaan — ditolak; dikunci “kulit visual saja”.
- Big-bang restyle semua halaman dalam satu PR tanpa Q&A — ditolak; metode yang diminta = tanya-jawab per komponen.
- Ganti stack (cabut shadcn, WebGL penuh, library tema baru) — ditolak; ADR-028 tetap untuk sistem komponen.
- Dark-only tanpa jejak light — ditolak; Boss Rezi minta light di-hold/di-comment, jangan hilang.
- Light-first tetap (ADR-021 lama) — ditolak untuk pass ini; ship gelap.
- Toggle tetap terlihat, light = palet krem lama — ditolak; menabrak identitas baru.

### Impact / Follow-up

- Backlog: [`tasks/v15-visual-identity.md`](../tasks/v15-visual-identity.md) (**T-038** … **T-043**).
- ADR-028: stack tetap; poin 2 “bentuk visual tetap” **diganti** oleh ADR ini. Update singkat di file ADR-028.
- ADR-025: pola UX yang tetap (About halaman sendiri, rest/active, pita Contact, Lenis, reduced-motion). Bahasa visual chrome 3D + palet lama **tidak** lagi diwajibkan.
- ADR-006 / acuan Hess–Mazur: tetap sah sebagai *ritme* layout yang sudah jadi pola UX; **bukan** acuan palet atau chrome kuning.
- ADR-021: di-update 2026-09-04 (dark-first + light hold + toggle tersembunyi).
- `product-discovery/06-engineering/design-tokens.md` + `app/globals.css` di **T-039**. Rule `.cursor/rules/shadcn.mdc` / `code-discipline.mdc` (sebutan pill kuning) di **T-043**.
- `04-ux/` tidak diubah kecuali catatan visual yang menabrak (pill kuning sebagai kontrak) — itu follow-up T-043, bukan rewrite IA.
- **T-031** ⏸️ sampai T-039 (aset ikon/OG/`themeColor`).
