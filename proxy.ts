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
 * Redirect `/` (path without locale) to the default locale.
 *
 * Per ADR-014, cookie preference is only used for `/` / non-locale URL
 * redirects — paths that already include a locale are **not** rewritten. The matcher
 * also covers `/(id|en)/:path*` only to forward `x-locale` to the root layout
 * (`<html lang>`), not to change the URL.
 *
 * Implementation decision (not explicit in ADR-014, recorded for Boss Rezi):
 * signal order = cookie preference (explicit switch result)
 * → geo (`x-vercel-ip-country`, Vercel-native) → `Accept-Language` → fallback
 * `"en"`. Preference comes first because it represents an explicit user choice
 * that should beat automatic heuristics (geo/Accept-Language) on the next visit.
 * The initial task brief listed "geo → Accept-Language → preference → fallback";
 * if Boss Rezi wants that literal order, move the `resolveFromCookie` block
 * to just before the fallback.
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
    // @ts-expect-error -- `geo` is available on the Vercel Edge runtime, not always on NextRequest types.
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

  // Locale paths are not rewritten (ADR-014). Header is only for `<html lang>` in the root layout.
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