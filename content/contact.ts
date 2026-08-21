import type { Locale } from "@/lib/locale";

/**
 * Copy Contact modal — terkunci T-021.4 (v10). Label/body form dikonfirmasi
 * apa adanya dari draf mockup (`design-mockups/shared.js`); email & URL
 * satelit (LinkedIn/GitHub) nyata. `cvLabel`/`cvDownload` + `CV_FILE_HREF`
 * adalah tambahan di luar mockup (diskusi 2026-08-21) — link unduh CV/
 * Portofolio (PDF di `public/`).
 */

export const CONTACT_EMAIL = "rezisaktiva08@gmail.com";

export const CONTACT_SOCIALS = {
  linkedin: {
    href: "https://www.linkedin.com/in/rezi-saktiva-bb89a12a1/",
    label: "LinkedIn",
  },
  github: { href: "https://github.com/reziSaktiva", label: "GitHub" },
} as const;

export const CV_FILE_HREF = "/Resume_rezi_updated_agustus_2026.pdf";

export interface ContactCopy {
  titleLead: string;
  titleAccent: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sent: string;
  close: string;
  detailsLabel: string;
  copyLabel: string;
  copied: string;
  socialsLabel: string;
  availability: string;
  cvLabel: string;
  cvDownload: string;
}

export const CONTACT_COPY: Record<Locale, ContactCopy> = {
  id: {
    titleLead: "Mari",
    titleAccent: "mengobrol.",
    emailLabel: "Email kamu",
    emailPlaceholder: "mail@mail.com",
    messageLabel: "Pesan",
    messagePlaceholder: "Ceritakan sedikit soal project kamu",
    submit: "Kirim",
    sent: "Terkirim",
    close: "Tutup",
    detailsLabel: "Detail kontak",
    copyLabel: "Salin email",
    copied: "Tersalin",
    socialsLabel: "Sosial",
    availability:
      "Terbuka untuk proyek terpilih dalam beberapa bulan ke depan.",
    cvLabel: "CV / Portofolio",
    cvDownload: "Unduh CV",
  },
  en: {
    titleLead: "Let's",
    titleAccent: "talk.",
    emailLabel: "Your email",
    emailPlaceholder: "mail@mail.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me more about your project",
    submit: "Submit",
    sent: "Sent",
    close: "Close",
    detailsLabel: "Contact details",
    copyLabel: "Copy email",
    copied: "Copied",
    socialsLabel: "Socials",
    availability: "Open to selected projects in the coming months.",
    cvLabel: "CV / Portfolio",
    cvDownload: "Download CV",
  },
};
