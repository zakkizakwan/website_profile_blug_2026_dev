import Image from "next/image";
import Link from "next/link";

/*
 * Bagian paling atas halaman Artikel (Rectangle 82 di Figma): foto gedung + gradasi, sudut bawah
 * melengkung, tombol Login di kanan atas. Navbar sudah dari layout.
 *
 * Gambar (public/images/artikel/):
 *   hero-bg.png -> export node "Rectangle 82" (1:1777) di frame Artikel apa adanya
 */
export default function ArtikelHero() {
  return (
    <section className="relative">
      <div
        style={{ background: "linear-gradient(139.7deg, #f7f3f3 37%, #f9d00a 65.7%)" }}
        className="relative h-[360px] overflow-hidden rounded-b-[56px] sm:h-[460px] lg:h-[858px] lg:rounded-b-[118px]"
      >
        <Image
          src="/images/artikel/hero-bg.png"
          alt="Gedung Politeknik Negeri Batam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Tombol Login: 175 x 51,5 di Figma (÷2) */}
      <Link
        href="/admin" // TODO: sesuaikan dengan halaman login admin
        className="absolute right-4 top-[96px] flex h-10 w-[104px] items-center justify-center rounded-[12.5px] border border-black bg-white/45 text-[16px] font-normal text-black transition-colors hover:bg-white/70 lg:right-[124.5px] lg:top-[88.5px] lg:h-[51.5px] lg:w-[175px] lg:text-[24px]"
      >
        Login
      </Link>
    </section>
  );
}
