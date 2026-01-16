import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const mobileBasePaths = ["/offerings", "/systems", "/merch", "/dimensions"];

const isPathMatch = (pathname: string, basePath: string) =>
  pathname === basePath || pathname.startsWith(`${basePath}/`);

const isStaticAssetPath = (pathname: string) =>
  /\.(png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|json|woff|woff2|ttf|eot)$/i.test(
    pathname,
  );

const isExcludedPath = (pathname: string) =>
  pathname.startsWith("/api/") ||
  pathname.startsWith("/_next/") ||
  pathname.startsWith("/mobile1") ||
  isStaticAssetPath(pathname);

const isMobileClientHint = (request: NextRequest) => {
  const chMobile = request.headers.get("sec-ch-ua-mobile");
  if (chMobile === "?1") {
    return true;
  }

  const chPlatform = request.headers.get("sec-ch-ua-platform");
  if (chPlatform) {
    if (/iOS/i.test(chPlatform)) {
      return true;
    }
    if (/macOS/i.test(chPlatform)) {
      return false;
    }
  }

  return false;
};

const isMobileUserAgent = (userAgent: string | null) => {
  if (!userAgent) {
    return false;
  }

  if (/iPhone|Android|Mobile/i.test(userAgent)) {
    return true;
  }

  if (/iPad/i.test(userAgent)) {
    return true;
  }

  if (/Macintosh/i.test(userAgent) && /Mobile/i.test(userAgent)) {
    return true;
  }

  if (
    /Macintosh/i.test(userAgent) &&
    /Safari/i.test(userAgent) &&
    !/iPad/i.test(userAgent)
  ) {
    return false;
  }

  if (
    /Macintosh/i.test(userAgent) &&
    /(CPU OS|like Mac OS X)/i.test(userAgent) &&
    !/(Chrome|CriOS|FxiOS|Firefox|Edg|EdgiOS|OPR)/i.test(userAgent)
  ) {
    return true;
  }

  return false;
};

const classifyDevice = (request: NextRequest) => {
  if (isMobileClientHint(request)) {
    return "mobile";
  }

  return isMobileUserAgent(request.headers.get("user-agent"))
    ? "mobile"
    : "desktop";
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isExcludedPath(pathname)) {
    const device = classifyDevice(request);
    const response = NextResponse.next();
    response.headers.set("x-synerva-mw", "1");
    response.headers.set("x-synerva-device", device);
    return response;
  }

  const device = classifyDevice(request);
  const isMobile = device === "mobile";

  const targetPath =
    isMobile && pathname === "/"
      ? "/mobile1"
      : isMobile && mobileBasePaths.some((basePath) => isPathMatch(pathname, basePath))
        ? `/mobile1${pathname}`
        : null;

  if (!targetPath) {
    const response = NextResponse.next();
    response.headers.set("x-synerva-mw", "1");
    response.headers.set("x-synerva-device", device);
    return response;
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = targetPath;
  const response = NextResponse.rewrite(rewriteUrl);
  response.headers.set("x-synerva-mw", "1");
  response.headers.set("x-synerva-device", device);
  response.headers.set("x-synerva-rewrite-to", targetPath);
  return response;
}

export const config = {
  matcher: [
    "/",
    "/offerings",
    "/offerings/:path((?!.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|json|woff|woff2|ttf|eot)$).*)",
    "/systems",
    "/systems/:path((?!.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|json|woff|woff2|ttf|eot)$).*)",
    "/merch",
    "/merch/:path((?!.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|json|woff|woff2|ttf|eot)$).*)",
    "/dimensions",
    "/dimensions/:path((?!.*\\.(?:png|jpg|jpeg|webp|gif|svg|ico|css|js|map|txt|xml|json|woff|woff2|ttf|eot)$).*)",
  ],
};
