import type { Metadata } from "next";
import KontakInfo from "@/components/sections/kontak/KontakInfo";
import KontakForm from "@/components/sections/kontak/KontakForm";

export const metadata: Metadata = {
  title: "Kontak | Batam Linux User Group",
};

/** Cahaya radial emas di pojok kanan atas (Ellipse 21 di Figma: 1631px, dibagi 2 = 815px) */
const glow =
  "radial-gradient(closest-side, rgba(200,155,0,1) 0%, rgba(200,155,0,.75) 25%, rgba(200,155,0,.5) 50%, rgba(200,155,0,.25) 75%, rgba(200,155,0,.125) 87.5%, rgba(200,155,0,0) 100%)";

/*
 * Halaman Kontak (frame "Kontak" 1:1687 di Figma).
 * Semua ukuran px di komponen kontak = nilai Figma dibagi 2 (frame desain 2797px = 1398,5px).
 * Navbar tidak dibuat di sini karena sudah ada di layout.
 */
export default function KontakPage() {
  return (
    <main className="relative overflow-hidden bg-black font-[family-name:var(--font-montserrat),Montserrat,sans-serif] text-white">
      <div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute -right-[342px] -top-[285px] hidden h-[815px] w-[815px] lg:block"
      />

      <div className="relative px-4 pb-24 pt-36 lg:px-6 lg:pb-[200px] lg:pt-[297px]">
        <h1 className="mb-8 text-center text-[clamp(1.75rem,6vw,32px)] font-bold leading-[39px] lg:mb-[26px]">
          Kontak Kami
        </h1>

        {/* Kartu kaca (info) menjorok ke kiri keluar dari kartu kuning (form) */}
        <div className="relative mx-auto max-w-[1127px] lg:h-[761px]">
          <KontakInfo />
          <KontakForm />
        </div>
      </div>
    </main>
  );
}
