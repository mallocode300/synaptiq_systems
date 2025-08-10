import { NextResponse, NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const locales = ["en", "fr"] as const;
const defaultLocale = "en" as const;

function getLocale(request: NextRequest): string {
  // Manual override via cookie takes precedence
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as any)) return cookieLocale;

  // Detect from Accept-Language header
  const accept = request.headers.get("accept-language") || "";
  const preferred = accept.split(",")[0]?.split("-")[0];
  if (preferred && locales.includes(preferred as any)) return preferred;
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip next internals and public files
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already has a locale
  const pathLocale = pathname.split("/")[1];
  if (locales.includes(pathLocale as any)) {
    return NextResponse.next();
  }

  // Redirect to detected locale
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};


