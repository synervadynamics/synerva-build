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

  if (hostname === "m.synervadynamics.com" && pathname.startsWith("/mobile1")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname =
      pathname === "/mobile1" ? "/" : pathname.replace(/^\/mobile1/, "");
    const response = NextResponse.redirect(redirectUrl);
    response.headers.set("x-synerva-mw", "1");
    response.headers.set("x-synerva-host", hostname);
    return response;
  }

  if (isExcludedPath(pathname)) {
    const response = NextResponse.next();
    response.headers.set("x-synerva-mw", "1");
    response.headers.set("x-synerva-host", hostname);
    return response;
  }

  const shouldRewrite = hostname === "m.synervadynamics.com";

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
  matcher: ["/:path*"],
};
