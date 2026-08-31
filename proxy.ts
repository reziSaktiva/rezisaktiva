import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_REQUEST_HEADER,
  isLocale,
  localeFromPathname,
  type Locale,
} from "@/lib/locale";

/**
 * Redirect `/` (path tanpa locale) ke locale default.
 *
 * Sesuai ADR-014, preferensi cookie hanya dipakai untuk redirect `/` / URL
 * tanpa locale — path yang sudah ber-locale **tidak di-rewrite**. Matcher juga
 * mencakup `/(id|en)/:path*` hanya untuk meneruskan `x-locale` ke root layout
 * (`<html lang>`), bukan untuk mengubah URL.
 *
 * Keputusan implementasi (tidak eksplisit di ADR-014, dicatat untuk Boss Rezi):
 * urutan sinyal yang dipakai = preferensi cookie (hasil switch eksplisit)
 * → geo (`x-vercel-ip-country`, Vercel-native) → `Accept-Language` → fallback
 * "en". Preferensi diletakkan pertama karena merepresentasikan pilihan
 * eksplisit user yang seharusnya menang dibanding heuristik otomatis (geo/
 * Accept-Language) pada kunjungan berikutnya. Task brief awal menuliskan
 * urutan "geo → Accept-Language → preferensi → fallback"; jika Boss Rezi
 * ingin urutan literal tersebut, cukup pindahkan blok `resolveFromCookie`
 * ke akhir sebelum fallback.
 */
function resolveFromCookie(request: NextRequest): Locale | null {
  const cookieValue = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieValue && isLocale(cookieValue)) {
    return cookieValue;
  }
  return null;
}

function resolveFromGeo(request: NextRequest): Locale | null {
  const country =
    request.headers.get("x-vercel-ip-country") ??
    // @ts-expect-error -- `geo` tersedia di runtime Vercel Edge, tidak selalu di tipe NextRequest.
    request.geo?.country ??
    null;
  if (!country) return null;
  return country.toUpperCase() === "ID" ? "id" : "en";
}

function resolveFromAcceptLanguage(request: NextRequest): Locale | null {
  const header = request.headers.get("accept-language");
  if (!header) return null;
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);
  for (const lang of preferred) {
    const base = lang.split("-")[0];
    if (isLocale(base)) return base;
  }
  return null;
}

function resolveLocale(request: NextRequest): Locale {
  return (
    resolveFromCookie(request) ??
    resolveFromGeo(request) ??
    resolveFromAcceptLanguage(request) ??
    DEFAULT_LOCALE
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const locale = resolveLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Path ber-locale tidak di-rewrite (ADR-014). Header hanya untuk `<html lang>` di root layout.
  const locale = localeFromPathname(pathname);
  if (locale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_REQUEST_HEADER, locale);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/(id|en)/:path*"],
};
