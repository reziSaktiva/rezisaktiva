# ARCHITECTURE OVERVIEW

> Static Reference — ringkasan visual high-level untuk orientasi. Source of Truth arsitektur tetap di `../product-discovery/05-architecture/` (Architecture Baseline v1.0, ADR-015).

## Ringkasan

* **Pola:** Static-first SSG (Next.js App Router) + konten disimpan di repo (`content/`) — bukan CMS/DB dinamis.
* **Single-app:** satu `package.json` di root, bukan monorepo workspace (ADR-016).
* **N/A sadar:** database, background jobs, realtime, dan auth area privat **tidak dibutuhkan** untuk skala portofolio ini (ADR-011, ADR-015) — didokumentasikan sebagai keputusan, bukan celah.
* **Styling:** Astryx design system, menggantikan Tailwind sebagai layer utama (ADR-018).
* Detail per lapisan: `../product-discovery/05-architecture/application-layer.md`, `domain-model.md`, `database-strategy.md`, `integration-layer.md`.

## Status

Baseline arsitektur sudah dikunci (ADR-015, ADR-016). Perubahan material membutuhkan ADR baru. Status/progress implementasi fase aktif ada di `PROJECT_STATE.md`, bukan di sini.

## Related Documents

* `../product-discovery/05-architecture/README.md`
* `PROJECT_STATE.md`
