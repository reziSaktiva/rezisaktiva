# Integration Layer

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-11). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan integrasi eksternal lean untuk website portofolio **rezisaktiva**.

---

# Overview

R1 **hampir tanpa integrasi runtime**. Tidak ada payment, CRM, auth provider, atau API bisnis. Integrasi = tautan & protokol browser plus (opsional) layanan edge/analytics yang tidak menjadi SoT produk.

---

# Purpose

* Mendaftar integrasi yang diizinkan di R1
* Menjaga Contact soft tanpa backend form
* Menyerahkan detail vendor ke Engineering bila perlu

---

# External Services / Integrations

| Integrasi | Jenis | R1 | Catatan |
| --------- | ----- | -- | ------- |
| **Email (mailto)** | Protokol klien | Must | Primer Contact (ADR-014) |
| **LinkedIn** | Tautan keluar | Must (satelit) | Bukan OAuth |
| **GitHub** | Tautan keluar | Must (satelit) | Bukti teknis; satelit |
| **Geo / locale redirect** | Edge atau hosting | Must fondasi | Aturan UX ADR-014; vendor di Eng |
| **Teaser bukti (repo/live)** | Tautan keluar | Should | Dari kartu teaser |
| **Analytics ringan** | Pihak ketiga opsional | Could | Privacy-aware; bukan SoT persona |
| Form backend / calendar | — | Out R1 | Could produk; butuh ADR bila Must |
| CMS / headless | — | Out | Opsi C ditolak |
| WA / Instagram API | — | Out R1 | ADR-014 |
| Auth provider | — | Out | ADR-011 |

---

# Anti-Corruption / Adapter Notes

* Tidak ada anti-corruption layer ke sistem bisnis — tidak ada domain transaksi.
* Satelit = **href** saja; jangan menyalin feed GitHub ke Home sebagai SoT narasi (kurasi sadar, UX7).
* Mailto gagal di perangkat tanpa klien email → salinan Contact tetap menampilkan alamat jelas (UX).

---

# Error Handling Strategy

| Kasus | Respons |
| ----- | ------- |
| Mailto tidak tersedia | Alamat email terlihat & bisa disalin |
| Tautan satelit/teaser mati | Jangan tampilkan item sampai URL diperbaiki (content readiness) |
| Geo deteksi gagal | Fallback `Accept-Language` → lalu `en` bila tidak ada sinyal ID (ADR-014) |
| Analytics gagal/diblokir | Situs tetap berfungsi penuh tanpa analytics |

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Integrasi R1 | Mailto + satelit + locale redirect (+ analytics opsional) |
| Backend form | Tidak di R1 |
| CMS | Tidak |

---

# Success Criteria

1. Inventory integrasi selaras soft CTA & i18n
2. Tidak mensyaratkan API server produk
3. Engineering punya daftar jelas apa yang boleh di-wire

---

# Related Documents

* `README.md`
* `application-layer.md`
* `auth-architecture.md`
* `../04-ux/information-architecture.md`
* `../03-user/insights.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
