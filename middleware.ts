import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isStaticAssetPath = (pathname: string) =>
  /\.(png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|json|woff|woff2|ttf|eot)$/i.test(
    pathname,
  );

const isExcludedPath = (pathname: string) =>
  pathname.startsWith("/api/") ||
  pathname.startsWith("/_next/") ||
  isStaticAssetPath(pathname);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") ?? "";

  if (isExcludedPath(pathname)) {
    const response = NextResponse.next();
    response.headers.set("x-synerva-mw", "1");
    response.headers.set("x-synerva-host", hostname);
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("x-synerva-mw", "1");
  response.headers.set("x-synerva-host", hostname);
  return response;
}

export const config = {
  matcher: ["/:path*"],
};
