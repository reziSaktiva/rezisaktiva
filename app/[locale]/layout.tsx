import { notFound } from "next/navigation";
import { ContactModalProvider } from "@/app/_components/contact-modal-provider";
import { LOCALES, isLocale } from "@/lib/locale";
import { ContactModal } from "./_components/contact-modal";
import { CursorRing } from "./_components/home-motion";
import { MotionRuntime } from "./_components/motion-runtime";
import { QuickInfo } from "./_components/quick-info";
import { SiteChrome } from "./_components/site-chrome";
import { SiteFooter } from "./_components/site-footer";
import { SiteFooterSlot } from "./_components/site-footer-slot";

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
      <MotionRuntime>
        <SiteChrome locale={locale}>{children}</SiteChrome>
        <SiteFooterSlot>
          <SiteFooter locale={locale} />
        </SiteFooterSlot>
        <ContactModal locale={locale} />
        <QuickInfo locale={locale} />
        <CursorRing />
      </MotionRuntime>
    </ContactModalProvider>
  );
}
