# Integration Layer

> Status: **Baseline v1.0** — ditetapkan bersama Boss Rezi (2026-08-11). Perubahan material setelah ini memerlukan ADR baru.

Dokumen ini mendefinisikan integrasi eksternal lean untuk website portofolio **rezisaktiva**.

---

# Overview

R1 **hampir tanpa integrasi runtime**. Tidak ada payment, CRM, auth provider, atau API bisnis. Integrasi = tautan & protokol browser plus (opsional) layanan edge/analytics yang tidak menjadi SoT produk.

---

# Purpose

* Mendaftar integrasi yang diizinkan di R1
* Menjaga Contact soft: form mengantar lewat Resend (ADR-047); `mailto:` cadangan; tanpa CRM/calendar
* Menyerahkan detail vendor ke Engineering bila perlu

---

# External Services / Integrations

| Integrasi | Jenis | R1 | Catatan |
| --------- | ----- | -- | ------- |
| **Email (mailto)** | Protokol klien | Must | Primer visual + cadangan (ADR-014 / ADR-047) |
| **LinkedIn** | Tautan keluar | Must (satelit) | Bukan OAuth |
| **GitHub** | Tautan keluar | Must (satelit) | Bukti teknis; satelit |
| **Geo / locale redirect** | Edge atau hosting | Must fondasi | Aturan UX ADR-014; vendor di Eng |
| **Bukti karya (repo/live)** | Tautan keluar | Should | Dari sheet M10, bukan teaser Home (ADR-032) |
| **Analytics ringan** | Pihak ketiga opsional | Could | Privacy-aware; bukan SoT persona |
| **Resend** | API transactional email | Must (Validation, ADR-047) | Form modal → Route Handler; kunci server |
| Form modal client-side | Overlay UI | Must (ADR-019) | Submit mengantar lewat Resend (ADR-047) |
| Form backend berat / calendar | — | Out | Calendar tetap Could; form Resend bukan CRM |
| CMS / headless | — | Out | Opsi C ditolak |
| WA / Instagram API | — | Out R1 | ADR-014 |
| Auth provider | — | Out | ADR-011 |
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
| Resend / Handler gagal | Form tampilkan gagal; `mailto:` + salin tetap |
| Tautan satelit/sheet mati | Jangan tampilkan item sampai URL diperbaiki (content readiness) |
| Geo deteksi gagal | Fallback `Accept-Language` → lalu `en` bila tidak ada sinyal ID (ADR-014) |
| Analytics gagal/diblokir | Situs tetap berfungsi penuh tanpa analytics |

---

# Decision Log

| Keputusan | Pilihan |
| --------- | ------- |
| Integrasi R1 | Mailto + satelit + locale redirect (+ analytics opsional) |
| Form Contact | Resend + Route Handler (ADR-047); bukan CMS |
| Backend form / calendar | Calendar tidak; form Resend bukan CRM |
| CMS | Tidak |

---

# Success Criteria

1. Inventory integrasi selaras soft CTA & i18n
2. Tidak mensyaratkan API server **produk** (Contact Resend = pengecualian infrastruktur, ADR-047)
3. Engineering punya daftar jelas apa yang boleh di-wire

---

# Related Documents

* `README.md`
* `application-layer.md`
* `auth-architecture.md`
* `../04-ux/information-architecture.md`
* `../03-user/insights.md`
* `../../project-manager/decisions/ADR-015-architecture-baseline-v1-static-first.md`
* `../../project-manager/decisions/ADR-047-contact-form-resend.md`
* `../../project-manager/decisions/ADR-014-ux-baseline-v1.md`
* `../../project-manager/decisions/ADR-019-contact-modal-with-form-override.md`
* `../../project-manager/PROJECT_STATE.md`
* `../../project-manager/DECISIONS.md`
