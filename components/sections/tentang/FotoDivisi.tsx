"use client";

import Image from "next/image";
import { useState } from "react";

/*
 * Carousel foto anggota per divisi (Frame 28 di Figma: 5 varian, tiap varian 2817 x 1654px).
 *
 * Tiap slide = SATU gambar utuh hasil ekspor varian Figma (sudah termasuk judul divisi,
 * logo, foto orang, dan label nama). Ekspor sebagai JPG skala 1x ke public/images/tentang/divisi/:
 *
 *   inti.jpg       -> varian "Property 1=Default"  (node 163:1703)
 *   medinfo.jpg    -> varian "Property 1=Variant2" (node 163:1859)
 *   programming.jpg-> varian "Property 1=Variant3" (node 165:1417)
 *   siber.jpg      -> varian "Property 1=Variant4" (node 163:4838)
 *   hrd.jpg        -> varian "Property 1=Variant5" (node 163:4953)
 *
 * Mau tambah/kurangi divisi? Cukup ubah daftar DIVISI di bawah.
 */
const DIVISI = [
  { nama: "Inti", gambar: "/images/tentang/divisi/inti.jpg" },
  { nama: "Medinfo", gambar: "/images/tentang/divisi/medinfo.jpg" },
  { nama: "Programming", gambar: "/images/tentang/divisi/programming.jpg" },
  { nama: "Siber", gambar: "/images/tentang/divisi/siber.jpg" },
  { nama: "HRD", gambar: "/images/tentang/divisi/hrd.jpg" },
];

function Panah({ arah, onClick }: { arah: "kiri" | "kanan"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={arah === "kiri" ? "Divisi sebelumnya" : "Divisi berikutnya"}
      onClick={onClick}
      className={`absolute top-1/2 z-20 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-[#f9d00a] text-[#1d1d1d] shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:size-14 ${
        arah === "kiri" ? "left-2 lg:left-6" : "right-2 lg:right-6"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5 lg:size-7">
        {arah === "kiri" ? (
          <polygon points="16,3 6,12 16,21" />
        ) : (
          <polygon points="8,3 18,12 8,21" />
        )}
      </svg>
    </button>
  );
}

export default function FotoDivisi() {
  const [index, setIndex] = useState(0);
  const [mulaiX, setMulaiX] = useState<number | null>(null);
  const total = DIVISI.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="pb-16 lg:pb-24">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Foto anggota per divisi"
        onTouchStart={(e) => setMulaiX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (mulaiX === null) return;
          const selisih = e.changedTouches[0].clientX - mulaiX;
          if (Math.abs(selisih) > 50) (selisih < 0 ? next : prev)();
          setMulaiX(null);
        }}
        className="relative aspect-[2817/1654] w-full overflow-hidden"
      >
        {DIVISI.map((d, i) => (
          <div
            key={d.nama}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${total}: Divisi ${d.nama}`}
            aria-hidden={i !== index}
            /* Fade: slide aktif muncul perlahan di atas slide lama; slide lama baru menghilang
               setelah slide baru penuh (delay-700), jadi tidak ada kedipan hitam di tengah. */
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              i === index ? "z-10 opacity-100" : "pointer-events-none opacity-0 delay-700"
            }`}
          >
            <Image
              src={d.gambar}
              alt={`Foto anggota Divisi ${d.nama} BLUG 2026`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        <Panah arah="kiri" onClick={prev} />
        <Panah arah="kanan" onClick={next} />
      </div>

      <div className="mt-5 flex justify-center gap-3">
        {DIVISI.map((d, i) => (
          <button
            key={d.nama}
            type="button"
            aria-label={`Tampilkan Divisi ${d.nama}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-3 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === index ? "w-8 bg-[#ffda23]" : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
