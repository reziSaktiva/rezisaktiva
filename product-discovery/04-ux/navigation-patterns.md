# Navigation Patterns

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan pola navigasi website portofolio **rezisaktiva**.

---

# Overview

Navigasi R1 **lean dan selalu tersedia**: destinasi konten + switcher bahasa berbasis path. Tidak ada mega-menu, tidak ada nav terpisah untuk hiring.

> **Override (2026-08-15, ADR-020):** dokumen ini di-override sebagian. Nav sekarang termasuk "Karya" (Work index, M9); Contact bukan lagi link nav melainkan tombol pembuka modal (ADR-019); pola mobile <1024px memakai hamburger (bukan selalu-terlihat penuh seperti semula). Bagian "Primary Navigation" dan "Mobile Considerations" di bawah dibaca dengan override ini.

---

# Purpose

* Menjamin F1–F6 tidak tersumbat chrome
* Menyelaraskan M5 (Language) & M6 (Site chrome) dengan IA
* Memberi acceptance mobile vs desktop tanpa visual token final

---

# Primary Navigation

| Item | Target | Catatan |
| ---- | ------ | ------- |
| Brand / nama | `/[id/en]/` (Home) | Selalu kembali ke Home locale aktif |
| Home | `/[id/en]/` | Boleh disembunyikan sebagai label jika brand = Home; tetap satu destinasi |
| About | `/[id/en]/about` | |
| Karya (Work index, M9) | `/[id/en]/work` | Ditambahkan via ADR-020 (2026-08-15); override ADR-010 |
| Contact | Tombol pembuka modal (ADR-019) | **Bukan link nav** (override ADR-020); selalu terlihat di luar hamburger, ≤1 ketukan dari halaman manapun |
| Language switcher | Sibling path locale | Label jelas `ID` / `EN` (atau setara); selalu terlihat; satu ketukan |

**Penempatan:** header/sticky top pada desktop; pola yang sama di mobile (lihat bawah).

**State:** halaman aktif ditandai (aria-current / gaya aktif — detail Eng).

---

# Secondary Navigation

| Area | Isi | Peran |
| ---- | --- | ----- |
| **In-page (Home)** | Tautan teks/section ke About & Contact | Memperkuat arah soft tanpa menambah item nav |
| **Footer** | Brand singkat · ulang About/Contact opsional · **LinkedIn** · **GitHub** · legal ringan | Satelit & hygiene; **bukan** pengganti Contact primer |
| **Teaser cards** | Tautan eksternal bukti (repo/live) | Keluar situs; buka tab baru bila perlu |
| **Tidak ada** | Nav Work, Blog, Services, Pricing, WA, Instagram | Out of scope R1 |

Switcher **bukan** secondary — ia bagian chrome primer (UX6).

---

# Language Switching Pattern

1. User di `/[id|en]/{page}` (path ber-locale)
2. Aktifkan switcher → navigasi ke sibling `/[en|id]/{page}` (page yang sama)
3. Jika page tidak ada di locale target (tidak diharapkan di R1) → fallback Home locale target
4. Preferensi setelah switch disimpan (cookie/local — Eng) dan **hanya** dipakai saat redirect `/` / URL tanpa locale — tidak rewrite URL ber-locale yang dibuka langsung
5. Konten harus tersedia di kedua locale dengan **makna setara**

---

# Mobile Considerations

> **Override (ADR-020, 2026-08-15)** — poin di bawah ini menggantikan aturan "selalu terlihat tanpa hamburger" untuk breakpoint <1024px.

* Breakpoint **<1024px**: nav halaman (Home/About/Karya) + language switcher masuk **hamburger menu** (drawer/panel).
* **Tetap selalu terlihat di luar hamburger** (tidak pernah tersembunyi): tombol Contact (pembuka modal, ADR-019) + toggle tema. Ini menjaga acceptance "Contact ≤ 1 ketukan" meski nav halaman lain di balik menu.
* ≥1024px (desktop): nav halaman, switcher, dan tombol Contact semua selalu terlihat di header — tidak ada hamburger.
* Footer satelit tetap ada sebagai pelengkap, bukan pengganti Contact.
* Target sentuh memadai; switcher tidak berbagi tap target dengan nav lain.

---

# Success Criteria

* Contact bisa dicapai **≤ satu ketukan** dari halaman mana pun (desktop & mobile) — tombol selalu di luar hamburger
* Home / About / Karya ≤1 ketukan di desktop; di mobile (<1024px) boleh lewat hamburger (1 ketukan buka menu + 1 ketukan item — override ADR-020)
* Switcher **selalu terlihat** di desktop; di mobile ikut masuk hamburger bersama nav halaman (override ADR-020)
* Footer tidak menggantikan peran Contact
* Tidak ada item nav untuk permukaan non-R1 di luar Karya (M9, sudah masuk R1 via ADR-020)

---

# Decision Rules

* Menambah item primary nav → tinjau Product scope + ADR bila material (Karya sudah ditambah via ADR-020)
* Memindahkan Email hanya ke footer tanpa halaman/modal Contact → ditolak (I4, ADR-010)

---

# Current Status

| Item | Status |
| ---- | ------ |
| Navigation Patterns | **Baseline v1.0** (dokumen ini) — override sebagian oleh ADR-020 (2026-08-15) |

---

# Related Documents

* `README.md`
* `ux-principles.md`
* `information-architecture.md`
* `user-flows.md`
* `key-screen-patterns.md`
* `../02-product/feature-modules.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
