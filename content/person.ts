/**
 * Identitas yang sudah tampil di UI (T-029.1).
 * `name` = h1 About (`ABOUT_COPY.h1`), bukan nama legal yang belum tertulis.
 * `jobTitle` = frasa yang sama di bio Quick Info — bukan string baru.
 * Email / sameAs dari `content/data/email.json` + `links.json`. JSON-LD tidak ditulis di file ini.
 */

export const PERSON = {
  name: "Rezi",
  alternateName: "rezisaktiva",
  jobTitle: "Fullstack Product Builder",
} as const;
