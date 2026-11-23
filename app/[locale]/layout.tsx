import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locale";
import { MotionRuntime } from "./_components/motion-runtime";
import { SiteChrome } from "./_components/site-chrome";
import { SiteCursor } from "./_components/site-cursor";
import { SiteFooter } from "./_components/site-footer";

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
    <MotionRuntime>
      <SiteChrome locale={locale}>{children}</SiteChrome>
      <SiteFooter locale={locale} />
      <SiteCursor />
    </MotionRuntime>
  );
}
