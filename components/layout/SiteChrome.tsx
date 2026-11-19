"use client";

import { usePathname } from "next/navigation";

/*
 * Menyembunyikan Navbar & Footer situs publik di halaman /login dan /admin/*,
 * supaya panel admin tampil penuh tanpa menu website.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/login" || pathname.startsWith("/admin")) return null;
  return <>{children}</>;
}
