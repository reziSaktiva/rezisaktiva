import { notFound } from "next/navigation";
import { AppShell } from "@astryxdesign/core/AppShell";
import { ContactModalProvider } from "@/app/_components/contact-modal-provider";
import { LOCALES, isLocale } from "@/lib/locale";
import { ContactModal } from "./_components/contact-modal";
import { CursorRing } from "./_components/home-motion";
import { QuickInfo } from "./_components/quick-info";
import { SiteFooter } from "./_components/site-footer";
import { SiteMobileNav, SiteTopNav } from "./_components/site-header";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <ContactModalProvider>
      <AppShell
        variant="surface"
        height="auto"
        contentPadding={0}
        topNav={<SiteTopNav locale={locale} />}
        mobileNav={{
          breakpoint: "lg",
          // Toggle ditaruh manual di SiteTopNav (sebelum tombol Contact),
          // jadi auto-toggle bawaan AppShell dimatikan agar tidak dobel.
          hasToggle: false,
          content: <SiteMobileNav locale={locale} />,
        }}
      >
        {children}
      </AppShell>
      <SiteFooter locale={locale} />
      <ContactModal locale={locale} />
      <QuickInfo locale={locale} />
      <CursorRing />
    </ContactModalProvider>
  );
}
