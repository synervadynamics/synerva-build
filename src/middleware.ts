import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const mobileUserAgentPattern =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

const mobileBasePaths = ["/offerings", "/systems", "/merch", "/dimensions"];

const isPathMatch = (pathname: string, basePath: string) =>
  pathname === basePath || pathname.startsWith(`${basePath}/`);

const isMobileUserAgent = (userAgent: string | null) =>
  Boolean(userAgent && mobileUserAgentPattern.test(userAgent));

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isMobileUserAgent(request.headers.get("user-agent"))) {
    return NextResponse.next();
  }

  const targetPath =
    pathname === "/"
      ? "/mobile1"
      : mobileBasePaths.some((basePath) => isPathMatch(pathname, basePath))
        ? `/mobile1${pathname}`
        : null;

  if (!targetPath) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = targetPath;
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/",
    "/offerings/:path*",
    "/systems/:path*",
    "/merch/:path*",
    "/dimensions/:path*",
  ],
};
