"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

/*
 * Banner "BPH BLUG" berupa carousel 2 slide (Frame 42 di Figma, node 509:922: Default & Variant2).
 *
 * Banner ini selebar halaman, jadi ukurannya mengikuti lebar layar:
 *   1 satuan "u" = 1px pada lebar desain 1398,5px (Figma 2797px dibagi 2), tapi dihitung
 *   dari lebar wadah (cqw), jadi seluruh banner membesar/mengecil secara proporsional.
 *
 * Kedua slide punya tinggi latar yang SAMA (968px di Figma = 484u). Di Figma latar slide 1
 * menjulur 132px ke atas dari kotak slide-nya; semua posisi slide 1 sudah dihitung ulang
 * (ditambah 132px) agar pas di kotak 484u.
 *
 * Animasi (urutannya sama di slide 1 dan slide 2):
 *   1. Foto fade in halus.
 *   2. Setelah foto penuh, tulisan muncul dari BELAKANG foto:
 *        slide 1: "BPH BLUG 2026" naik dari bawah ke atas
 *        slide 2: "BLUG" keluar ke kiri, "2025" keluar ke kanan
 * Slide 1 diputar pertama kali saat banner terlihat di layar (IntersectionObserver).
 * Saat panah ditekan, foto lama fade out, foto baru fade in, lalu tulisannya muncul.
 * Kalau pengunjung mematikan animasi di sistemnya, semuanya langsung tampil tanpa gerak.
 *
 * Gambar (public/images/pengurus/):
 *   foto-1.png -> layer "Copy of Feed IG BPH (3) 1" (foto BPH berlatar transparan, slide 1)
 *   foto-2.png -> layer "BPH BLUG Periode 25 2"      (foto slide 2)
 */

const u = (n: number) => `calc(var(--u) * ${n})`;

const SLIDE_HEIGHT = 484; // tinggi banner dalam satuan u (Figma 968 / 2), sama untuk kedua slide

/* ---------- Pengaturan waktu animasi (ms): ubah di sini kalau mau lebih cepat/lambat ---------- */
const FOTO_MASUK = 700; // lama foto fade in
const FOTO_KELUAR = 500; // lama foto lama fade out
const FOTO_JEDA = 400; // foto baru menunggu foto lama hampir hilang
const TEKS_JEDA = FOTO_JEDA + FOTO_MASUK; // tulisan mulai bergerak setelah foto penuh
const TEKS_GERAK = 900; // lama tulisan bergerak ke tempatnya

/* Posisi awal tulisan (tersembunyi di belakang foto / di bawah banner) */
const DARI_BAWAH = `translateY(${u(460)})`; // cukup jauh supaya keluar dari bawah banner
const DARI_KANAN = `translateX(${u(160)})`; // "BLUG" mulai dari dalam foto, bergerak ke kiri
const DARI_KIRI = `translateX(${u(-160)})`; // "2025" mulai dari dalam foto, bergerak ke kanan

/** Foto: fade. Foto baru menunggu sebentar supaya tidak bertumpuk lama dengan foto lama. */
const animFoto = (aktif: boolean): React.CSSProperties => ({
  opacity: aktif ? 1 : 0,
  transitionProperty: "opacity",
  transitionDuration: `${aktif ? FOTO_MASUK : FOTO_KELUAR}ms`,
  transitionDelay: aktif ? `${FOTO_JEDA}ms` : "0ms",
  transitionTimingFunction: "ease-in-out",
});

/**
 * Tulisan: muncul bergerak dari posisi `dari` ke tempatnya setelah foto penuh.
 * Saat slide ditinggalkan, tulisan memudar bersama foto, lalu posisinya di-reset
 * (tanpa terlihat) supaya bisa bergerak lagi waktu slide ini muncul kembali.
 */
const animTeks = (aktif: boolean, dari: string): React.CSSProperties => ({
  opacity: aktif ? 1 : 0,
  transform: aktif ? "translate(0, 0)" : dari,
  transitionProperty: "opacity, transform",
  transitionDuration: aktif ? `300ms, ${TEKS_GERAK}ms` : `${FOTO_KELUAR}ms, 0ms`,
  transitionDelay: aktif ? `${TEKS_JEDA}ms, ${TEKS_JEDA}ms` : `0ms, ${FOTO_KELUAR + 100}ms`,
  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
});

const FONT_KARANTINA =
  "font-[family-name:var(--font-karantina),Impact,Haettenschweiler,sans-serif] font-bold text-[#fff8d6]";

/** Teks tegak: tiap huruf/angka di barisnya sendiri (seperti "BLUG" dan "2025" di slide 2) */
function TeksTegak({
  teks,
  className,
  style,
  aktif,
  dari,
}: {
  teks: string;
  className: string;
  style: React.CSSProperties;
  aktif: boolean;
  dari: string;
}) {
  return (
    <p
      aria-hidden={!aktif}
      style={{ ...style, ...animTeks(aktif, dari) }}
      className={`absolute flex -translate-y-1/2 flex-col motion-reduce:transition-none! ${FONT_KARANTINA} ${className}`}
    >
      <span className="sr-only">{teks}</span>
      {teks.split("").map((c, i) => (
        <span key={i} aria-hidden>
          {c}
        </span>
      ))}
    </p>
  );
}

function Arrow({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir === "left" ? "Slide sebelumnya" : "Slide berikutnya"}
      onClick={onClick}
      style={{
        top: "50%", // Figma: panah selalu di tengah tinggi banner
        [dir]: u(dir === "left" ? 7 : 3.5),
        width: u(56),
        height: u(60),
        marginTop: u(-30),
      }}
      className="absolute z-10 flex cursor-pointer items-center justify-center transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9d00a]"
    >
      <svg
        viewBox="0 0 39 40"
        style={{ width: u(39), height: u(40) }}
        fill="#1d1d1d"
        aria-hidden
      >
        {dir === "left" ? <polygon points="0,20 39,0 39,40" /> : <polygon points="39,20 0,0 0,40" />}
      </svg>
    </button>
  );
}

export default function Pengurus() {
  const [index, setIndex] = useState(0);
  const [muncul, setMuncul] = useState(false); // sudah pernah terlihat di layar?
  const regionRef = useRef<HTMLDivElement>(null);
  const total = 2;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Mulai animasi pertama kali saat banner masuk ke layar (cukup sekali)
  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMuncul(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const aktif1 = muncul && index === 0;
  const aktif2 = muncul && index === 1;

  return (
    <section className="relative pb-24 lg:pb-[200px]">
      <div className="px-6">
        <SectionTitle className="mb-4">PENGURUS</SectionTitle>
      </div>

      {/* Wadah ukuran: semua satuan "u" di bawah dihitung dari lebar wadah ini */}
      <div className="w-full [container-type:inline-size]">
        <div
          ref={regionRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Foto pengurus BPH BLUG"
          style={{ ["--u" as string]: "calc(100cqw / 1398.5)", height: u(SLIDE_HEIGHT) }}
          className="relative overflow-hidden"
        >
          {/* LATAR: dua gradasi merah yang saling memudar, selalu terlihat (tidak ikut animasi masuk) */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, #ff1e1e 22.1%, #cb1818 59.4%, #991212 94.7%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none"
            style={{
              opacity: index === 1 ? 1 : 0,
              background: "linear-gradient(179.97deg, #ff1e1e 0%, #991212 88.4%)",
            }}
          />

          {/* SLIDE 1: "BPH BLUG 2026" naik dari bawah, di BELAKANG foto (foto ada setelahnya) */}
          <div aria-hidden={index !== 0} className="absolute inset-0">
            <p
              style={{
                left: u(122.5),
                top: u(193.25),
                fontSize: u(250),
                ...animTeks(aktif1, DARI_BAWAH),
              }}
              className={`absolute -translate-y-1/2 whitespace-nowrap leading-none motion-reduce:transition-none! ${FONT_KARANTINA}`}
            >
              BPH BLUG
            </p>
            <p
              style={{
                right: `calc(100% - ${u(1276.5)})`,
                top: u(182.75),
                fontSize: u(292.5),
                ...animTeks(aktif1, DARI_BAWAH),
              }}
              className={`absolute -translate-y-1/2 whitespace-nowrap leading-none motion-reduce:transition-none! ${FONT_KARANTINA}`}
            >
              2026
            </p>
            <div
              style={{
                left: u(15.5),
                top: u(246.5),
                width: u(1367.5),
                height: u(237.5),
                ...animFoto(aktif1),
              }}
              className="absolute motion-reduce:transition-none!"
            >
              <Image
                src="/images/pengurus/foto-1.png"
                alt="Foto bersama pengurus BPH BLUG 2026"
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* SLIDE 2: "BLUG" keluar ke kiri & "2025" keluar ke kanan dari BELAKANG foto */}
          <div aria-hidden={index !== 1} className="absolute inset-0">
            <TeksTegak
              teks="BLUG"
              aktif={aktif2}
              dari={DARI_KANAN}
              style={{ left: u(128.5), top: u(241.75), fontSize: u(115) }}
              className="leading-[1.02]"
            />
            <TeksTegak
              teks="2025"
              aktif={aktif2}
              dari={DARI_KIRI}
              style={{ right: `calc(100% - ${u(1270.5)})`, top: u(235.25), fontSize: u(132.5) }}
              className="items-end leading-[0.88] tracking-[-0.05em]"
            />
            <div
              style={{
                left: u(185.5),
                top: u(5),
                width: u(1027.7),
                height: u(484),
                ...animFoto(aktif2),
              }}
              className="absolute motion-reduce:transition-none!"
            >
              <Image
                src="/images/pengurus/foto-2.png"
                alt="Foto bersama pengurus BLUG"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <Arrow dir="left" onClick={prev} />
          <Arrow dir="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}
