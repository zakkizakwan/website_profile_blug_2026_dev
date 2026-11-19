import { NextResponse, type NextRequest } from "next/server";

/*
 * Next.js 16: proxy.ts menggantikan middleware.ts.
 * Penjagaan cepat: tanpa cookie sesi, /admin/* dilempar ke /login.
 * Validasi token yang sebenarnya ada di app/admin/layout.tsx dan di setiap Server Action
 * (lewat requireSession di lib/session.ts).
 */
export function proxy(request: NextRequest) {
  if (!request.cookies.has("admin_session")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
