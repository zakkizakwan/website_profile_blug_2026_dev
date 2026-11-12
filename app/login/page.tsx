import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import BackButton from "@/components/admin/BackButton";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = { title: "Login | BLUG Admin" };

function Bintang({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={`absolute text-[#fcd205] blur-[7px] ${className}`}>
      <path
        fill="currentColor"
        d="M50 0C53 31 69 47 100 50C69 53 53 69 50 100C47 69 31 53 0 50C31 47 47 31 50 0Z"
      />
    </svg>
  );
}

/** Sudah login? langsung ke panel. Membaca cookie => harus di dalam <Suspense>. */
async function SudahLogin() {
  if (await getSession()) redirect("/admin/artikel");
  return null;
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10 font-[family-name:var(--font-montserrat)]">
      <Suspense fallback={null}>
        <SudahLogin />
      </Suspense>

      {/* Cahaya latar */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-[radial-gradient(closest-side,#b88a00,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-48 size-[560px] rounded-full bg-[radial-gradient(closest-side,#b88a00,transparent)]"
      />

      <BackButton />

      <div className="relative w-full max-w-[420px]">
        <Bintang className="-left-16 -top-14 size-36" />
        <Bintang className="-bottom-14 -right-14 size-32" />

        <section className="relative rounded-3xl border border-white/25 bg-gradient-to-br from-[#5c5c5c]/90 to-[#2b2b2b]/90 px-8 pb-9 pt-8 shadow-2xl backdrop-blur-xl">
          <header className="text-center">
            <h1 className="text-[34px] font-extrabold leading-none tracking-wide text-[#fcd205]">LOGIN</h1>
            <p className="mt-1 text-[13px] text-white">Enter your account detail</p>
          </header>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}
