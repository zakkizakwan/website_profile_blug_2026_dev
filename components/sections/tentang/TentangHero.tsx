import Image from "next/image";
import Link from "next/link";

/*
 * Bagian paling atas halaman Tentang (Rectangle 82 di Figma): foto gedung dengan lapisan gradasi,
 * sudut bawah melengkung, tombol OSC di kanan atas. Navbar sudah dari layout.
 *
 * Gambar (public/images/tentang/):
 *   hero-bg.png -> export node "Rectangle 82" (140:622) apa adanya (sudah termasuk gradasi + foto)
 * Tombol OSC memakai gambar maskot yang sama dengan beranda (public/images/hero/osc-mascot.png).
 */
export default function TentangHero() {
  return (
    <section className="relative">
      <div
        style={{ background: "linear-gradient(130deg, #f7f3f3 48%, #ffe08c 75.6%, #f9d00a 103%)" }}
        className="relative h-[360px] overflow-hidden rounded-b-[56px] sm:h-[460px] lg:h-[858px] lg:rounded-b-[118px]"
      >
        <Image
          src="/images/tentang/hero-bg.png"
          alt="Gedung Politeknik Negeri Batam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Tombol Daftar OSC: 249,5 x 144,6 di Figma (÷2) */}
      <Link
        href="#" // TODO: ganti dengan link pendaftaran OSC
        aria-label="Daftar OSC 2026"
        className="absolute right-3 top-[92px] block h-[144.6px] w-[249.5px] origin-top-right scale-75 lg:right-[60px] lg:top-[41.5px] lg:scale-100"
      >
        <span className="absolute left-[60px] top-[40px] flex h-[64px] w-[189.5px] items-center justify-center rounded-[13px] bg-[#e9672d] text-[16px] font-bold text-white">
          DAFTAR OSC 2026
        </span>
        <Image
          src="/images/hero/osc-mascot.png"
          alt=""
          width={99}
          height={145}
          className="absolute left-0 top-0"
        />
      </Link>
    </section>
  );
}
