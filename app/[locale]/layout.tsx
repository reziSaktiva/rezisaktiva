import { notFound } from "next/navigation";
import { AppShell } from "@astryxdesign/core/AppShell";
import { LOCALES, isLocale } from "@/lib/locale";
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
    <>
      <AppShell
        variant="surface"
        height="auto"
        contentPadding={0}
        topNav={<SiteTopNav locale={locale} />}
        mobileNav={{
          breakpoint: "lg",
          content: <SiteMobileNav locale={locale} />,
        }}
      >
        {children}
      </AppShell>
      <SiteFooter locale={locale} />
    </>
  );
}
