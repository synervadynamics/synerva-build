import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const mobileUserAgentPattern =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet|Kindle|Silk|PlayBook|BB10|Windows Phone|Fennec|Nexus 7|Nexus 10|SM-T|GT-P|Xoom/i;

const mobileBasePaths = ["/offerings", "/systems", "/merch", "/dimensions"];

const isPathMatch = (pathname: string, basePath: string) =>
  pathname === basePath || pathname.startsWith(`${basePath}/`);

const isMobileUserAgent = (userAgent: string | null) => {
  if (!userAgent) {
    return false;
  }

  if (mobileUserAgentPattern.test(userAgent)) {
    return true;
  }

  return /Macintosh/i.test(userAgent) && /Mobile/i.test(userAgent);
};

const isMobileClientHint = (request: NextRequest) => {
  const chMobile = request.headers.get("sec-ch-ua-mobile");
  if (chMobile === "?1") {
    return true;
  }

  const chPlatform = request.headers.get("sec-ch-ua-platform");
  if (chPlatform && /Android|iOS/i.test(chPlatform)) {
    return true;
  }

  return false;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    !isMobileUserAgent(request.headers.get("user-agent")) &&
    !isMobileClientHint(request)
  ) {
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
