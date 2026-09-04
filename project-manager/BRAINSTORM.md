# BRAINSTORM

Bank ide spekulatif. Append entri baru di bagian atas.

## Format

```
## [YYYY-MM-DD] — [Topik Brainstorm]
**Phase:** [phase aktif]
**Context:** [mengapa topik ini didiskusikan]
**Ideas:**
- [ide 1]
**Evaluation:** [selaras / bertentangan / perlu ADR / perlu validasi]
**Next Action:** [discard / simpan untuk fase X / buat ADR / validasi dulu]
```

---

## [2026-09-04] — Arah seni gothic-blood (dikunci; eksekusi Q&A)

**Phase:** Validation
**Context:** Lanjutan brainstorm “ganti tema keseluruhan”. Boss Rezi mengunci empat kata: absurdism, surrealism, Gothic Art, dark and blood. Metode kerja: tanya-jawab tiap komponen/layout. Scope: kulit visual saja.
**Ideas:**
- Pembacaan operasional (masih usulan T-038.1): absurd = deadpan menolak tropes SaaS; sureal = satu justaposisi diam, bukan kolase; gothic = vertikalitas/travee sebagai struktur, bukan stiker; blood = satu aksen wine/clot mengganti kuning — bukan splatter.
- Light mode jika hidup: vellum bernoda, bukan invert.
- Urutan aman: kunci → token → chrome (terlihat di semua rute) → overlay → halaman → gerak sistem.
**Evaluation:** Selaras permintaan; **perlu ADR** (material vs ADR-028 “bukan redesain” dan palet ADR-025). Tidak bertentangan dengan UX1 jika atmosfer membungkus klaim, tidak menelannya. Default tema masih gap (T-038.2).
**Next Action:** ADR-029 dibuat; backlog v15 T-038…T-043. Mulai T-038.1–T-038.2 di chat. Jangan ganti `globals.css` sebelum T-038 selesai.

## [2026-09-04] — Ganti tema keseluruhan (belum dikunci)

**Phase:** Validation
**Context:** Boss Rezi menilai tema produksi (kanvas krem + pill kuning + elevasi 3D) membosankan. Ingin ganti tema **seluruh** situs, tapi pikirkan matang dulu. **Bukan ADR.** Bukan eksekusi kode.
**Ideas:**
- Bedakan **tema** (mood: kanvas, aksen, bahasa chrome, default light/dark) dari **IA/copy/overlay** (tetap R1) dan dari **gerak** (ADR-017, boleh naik kadar tanpa ganti palet).
- Catatan jujur: `design-tokens.md` sudah mengarah **ink + satu aksen tenang**, dan Karolina **jangan** dibawa palet cream/terracotta. Produksi sekarang = cream `#edeae1` + chip `#fde047` — itu jejak mockup/craft, bukan arah token awal.
- Tiga keluarga mood untuk dibahas (spekulatif, belum dipilih): (1) ink sunyi / presence lewat restraint, (2) malam + craft (risiko creative-dev, ICP founder/PO), (3) satu material/grafis khas tanpa WebGL copy p5aholic.
- Light dan dark harus dipikirkan berpasangan, atau dark jadi turunan jelek.
**Evaluation:** Selaras keinginan Boss Rezi; **bertentangan** dengan “bentuk visual tetap” di ADR-028 bila dieksekusi tanpa ADR baru. Perlu validasi mood sebelum palet. Perlu ADR **nanti** jika satu arah dikunci (palet/default tema = material).
**Next Action:** selesai 2026-09-04 — mood dikunci (gothic-blood) + ADR-029 + v15. Jejak sebelum kunci; lihat entri di atas.

---

_(Entri di atas adalah yang pertama.)_
