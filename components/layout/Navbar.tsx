"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const leftLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
];

const rightLinks = [
  { label: "Artikel", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
];

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`text-base text-black decoration-[#f3c803] decoration-2 underline-offset-[5px] md:text-[11px] ${
        active ? "font-bold underline" : "font-normal hover:underline"
      }`}
    >
      {label}
    </Link>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="BLUG - Batam Linux User Group"
      className="flex shrink-0 items-center gap-1.5"
    >
      <Image src="/images/footer/logo-mascot.svg" alt="" width={33} height={30} priority />
      <Image
        src="/images/footer/logo-text.svg"
        alt="BLUG Batam Linux User Group"
        width={69}
        height={23}
        priority
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 font-[family-name:var(--font-inter)] md:top-9">
      {/* Animasi masuk dari atas (keyframes `navbar-in` ada di globals.css) */}
      <div className="relative w-full max-w-[511px] animate-[navbar-in_1.75s_cubic-bezier(0,0,0.085,1.004)_both] motion-reduce:animate-none">
        <nav
          aria-label="Navigasi utama"
          className="flex h-16 items-center justify-between rounded-full border border-black bg-[#f7f3f3] px-5 shadow-[2px_2px_2px_rgba(0,0,0,0.25)] md:h-[70px] md:px-[30px]"
        >
          {/* Desktop: Beranda, Tentang, logo, Artikel, Kontak */}
          <div className="hidden flex-1 items-center justify-between md:flex">
            <div className="flex flex-1 items-center justify-around">
              {leftLinks.map((l) => (
                <NavLink key={l.href} {...l} />
              ))}
            </div>
            <div className="px-3">
              <Logo />
            </div>
            <div className="flex flex-1 items-center justify-around">
              {rightLinks.map((l) => (
                <NavLink key={l.href} {...l} />
              ))}
            </div>
          </div>

          {/* Mobile: logo + tombol hamburger */}
          <div className="flex w-full items-center justify-between md:hidden">
            <Logo />
            <button
              type="button"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="p-2"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-3 flex flex-col items-center gap-5 rounded-3xl border border-black bg-[#f7f3f3] py-6 shadow-[2px_2px_2px_rgba(0,0,0,0.25)] md:hidden">
            {[...leftLinks, ...rightLinks].map((l) => (
              <NavLink key={l.href} {...l} onClick={close} />
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
