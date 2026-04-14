import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, locale } = request.nextUrl;

  // Obtener el header Accept-Language
  const acceptLanguage = request.headers.get("accept-language");

  // Si está en la raíz sin locale, forzar redirección a /es
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/es", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
