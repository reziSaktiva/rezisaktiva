import type { Locale } from "@/lib/locale";
import email from "./data/email.json";
import links from "./data/links.json";

/**
 * Contact modal copy. Email & satellite links from
 * `content/data/email.json` + `content/data/links.json`.
 */

export const CONTACT_EMAIL = email.address;

export type ContactLink = {
  id: string;
  href: string;
  label: string;
};

export const CONTACT_LINKS: readonly ContactLink[] = links;

export interface ContactCopy {
  titleLead: string;
  titleAccent: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  sent: string;
  failed: string;
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
    sending: "Mengirim…",
    sent: "Terkirim",
    failed: "Tidak terkirim. Salin email di samping, atau coba lagi.",
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
    sending: "Sending…",
    sent: "Sent",
    failed: "Not sent. Copy the email beside this, or try again.",
    close: "Close",
    detailsLabel: "Contact details",
    copyLabel: "Copy email",
    copied: "Copied",
    socialsLabel: "Socials",
    availability: "Open to selected projects in the coming months.",
  },
};
