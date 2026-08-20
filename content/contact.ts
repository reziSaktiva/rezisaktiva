import type { Locale } from "@/lib/locale";

/**
 * Copy Contact modal sementara dari mockup (`design-mockups/shared.js`).
 * Bukan copy final — kunci + ganti teks di T-021.4 (v10).
 *
 * Email & URL satelit masih placeholder mockup sampai T-021.4.
 */

export const CONTACT_EMAIL = "rezisaktiva08@gmail.com";

export const CONTACT_SOCIALS = {
  linkedin: { href: "#", label: "LinkedIn" },
  github: { href: "https://github.com/reziSaktiva", label: "GitHub" },
} as const;

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
  },
};
