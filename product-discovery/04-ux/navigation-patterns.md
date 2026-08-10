# Navigation Patterns

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-10). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini menetapkan pola navigasi website portofolio **rezisaktiva**.

---

# Overview

Navigasi R1 **lean dan selalu tersedia**: tiga destinasi konten + switcher bahasa berbasis path. Tidak ada mega-menu, tidak ada nav terpisah untuk hiring.

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
| Contact | `/[id/en]/contact` | Jangan dikubur hanya di footer |
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

* R1 (hanya 3 destinasi + switcher): **primary nav dan switcher selalu terlihat** — sama dengan desktop; jangan taruh di balik hamburger/kontrol ringkas.
* Alasan: item sedikit; hamburger menambah ketukan dan bertentangan dengan acceptance “≤ satu ketukan” serta “switcher selalu visible” di `key-screen-patterns.md`.
* Footer satelit tetap ada; Email primer tetap di halaman Contact, bukan hanya ikon kecil di footer.
* Target sentuh memadai; switcher tidak berbagi tap target dengan nav lain.

---

# Success Criteria

* Dari halaman mana pun (desktop & mobile), user mencapai Home / About / Contact **≤ satu ketukan** nav (tanpa buka menu dulu)
* Switcher **selalu terlihat** di chrome dan memindahkan ke sibling path dalam satu ketukan
* Footer tidak menggantikan peran Contact
* Tidak ada item nav untuk permukaan non-R1

---

# Decision Rules

* Menambah item primary nav → tinjau Product scope + ADR bila material
* Memindahkan Email hanya ke footer tanpa halaman Contact → ditolak (I4, ADR-010)

---

# Current Status

| Item | Status |
| ---- | ------ |
| Navigation Patterns | **Baseline v1.0** (dokumen ini) |

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
