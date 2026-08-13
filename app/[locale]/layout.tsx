import { notFound } from "next/navigation";
import { HStack } from "@astryxdesign/core/HStack";
import { LOCALES, isLocale } from "@/lib/locale";
import { LocaleSwitcher } from "./_components/locale-switcher";

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
      <HStack justify="end" padding={4}>
        <LocaleSwitcher locale={locale} />
      </HStack>
      {children}
    </>
  );
}
