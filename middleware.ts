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

const isMobileRoute = (pathname: string) =>
  pathname === "/" || mobileBasePaths.some((basePath) => isPathMatch(pathname, basePath));

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") ?? "";

  if (isExcludedPath(pathname)) {
    const response = NextResponse.next();
    response.headers.set("x-synerva-mw", "1");
    response.headers.set("x-synerva-host", hostname);
    return response;
  }

  const shouldRewrite =
    hostname === "m.synervadynamics.com" && isMobileRoute(pathname);

  const targetPath = shouldRewrite
    ? pathname === "/"
      ? "/mobile1"
      : `/mobile1${pathname}`
    : null;

  if (!targetPath) {
    const response = NextResponse.next();
    response.headers.set("x-synerva-mw", "1");
    response.headers.set("x-synerva-host", hostname);
    return response;
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = targetPath;
  const response = NextResponse.rewrite(rewriteUrl);
  response.headers.set("x-synerva-mw", "1");
  response.headers.set("x-synerva-host", hostname);
  response.headers.set("x-synerva-rewrite", targetPath);
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
