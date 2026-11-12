import { Suspense } from "react";
import { requireSession } from "@/lib/session";

/*
 * Penjaga panel admin. Membaca sesi = membaca cookies, jadi dilakukan di komponen
 * di dalam <Suspense> (bukan di top-level layout) agar sesuai aturan `cacheComponents`.
 */
async function AuthGate({ children }: { children: React.ReactNode }) {
  await requireSession();
  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fffdf0] font-[family-name:var(--font-inter)] text-[#6e5400]">
      <div className="mx-auto w-full max-w-[1100px] px-4 pb-12 pt-8 sm:px-8">
        <Suspense fallback={<p className="py-24 text-center text-[#8c6a00]">Memuat...</p>}>
          <AuthGate>{children}</AuthGate>
        </Suspense>
      </div>
    </div>
  );
}
