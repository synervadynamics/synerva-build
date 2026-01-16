import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const mobileUserAgentPattern =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

const mobileRewriteMap: Record<string, string> = {
  "/": "/mobile1",
  "/offerings": "/mobile1/offerings",
  "/systems": "/mobile1/systems",
  "/merch": "/mobile1/merch",
  "/dimensions/quiet-divine": "/mobile1/dimensions/quiet-divine",
  "/dimensions/parallax-loom": "/mobile1/dimensions/parallax-loom",
};

const isMobileUserAgent = (userAgent: string | null) =>
  Boolean(userAgent && mobileUserAgentPattern.test(userAgent));

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isMobileUserAgent(request.headers.get("user-agent"))) {
    return NextResponse.next();
  }

  const targetPath = mobileRewriteMap[pathname];
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
    "/offerings",
    "/systems",
    "/merch",
    "/dimensions/:path*",
  ],
};
