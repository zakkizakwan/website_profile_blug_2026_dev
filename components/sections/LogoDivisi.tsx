"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/*
 * Semua angka ukuran/posisi di bawah = nilai di Figma "Frame 29" dibagi 8
 * (komponen itu digambar 4x lebih besar dari kanvas, dan kanvas sendiri 2x dari ukuran layar).
 *
 * Gambar yang dibutuhkan (public/images/divisi/):
 *   logo-{slug}.png  -> gambar logo mentah (layer "image 19" / "image 18" di dalam kartu)
 *   foto-{slug}.png  -> foto ketua divisi tanpa latar (dipasang di atas kotak merah)
 * Warna gradasi kotak dibuat di sini dengan CSS, karena berubah merah -> kuning saat hover.
 */

type Slug = "inti" | "hrd" | "siber" | "programming" | "medinfo";

type Divisi = {
  slug: Slug;
  label: string;
  title: string;
  desc: string;
  // posisi kartu info di dalam panel (desktop)
  card: { left: number; right: number; top: number; height: number };
  // foto ketua divisi + kotak merah di belakangnya (desktop)
  photo: { left: number; top: number; width: number; height: number };
  block: { left: number; top: number };
};

const divisi: Divisi[] = [
  {
    slug: "inti",
    label: "INTI",
    title: "DIVISI INTI",
    desc: "Divisi inti adalah Divisi yang bertanggung jawab dalam menjaga organisasi tetap berjalan, mengurus administrasi dan kearsipan, serta menjaga permasalahan internal & eksternal.",
    card: { left: 48.25, right: 278.8, top: 372, height: 180 },
    photo: { left: 762, top: 296, width: 210, height: 329 },
    block: { left: 769, top: 356 },
  },
  {
    slug: "hrd",
    label: "HRD",
    title: "DIVISI HRD",
    desc: "Divisi HRD adalah Divisi yang menjaga hubungan antar-anggota sekaligus membangun relasi dengan pihak luar. HRD juga memastikan kerja sama dan suasana internal tetap solid, nyaman, dan harmonis.",
    card: { left: 281, right: 46, top: 372, height: 182 },
    photo: { left: 17.75, top: 302, width: 256, height: 321 },
    block: { left: 38.4, top: 354.4 },
  },
  {
    slug: "siber",
    label: "SIBER",
    title: "DIVISI SIBER",
    desc: "Divisi Siber adalah Divisi yang bergerak di bidang keamanan siber dan jaringan komputer. Fokusnya adalah memperluas wawasan, melatih keterampilan, dan membangun kesadaran tentang pentingnya keamanan digital.",
    card: { left: 284.5, right: 42.5, top: 372, height: 180 },
    photo: { left: 27.75, top: 278, width: 234, height: 345 },
    block: { left: 38.4, top: 354.4 },
  },
  {
    slug: "programming",
    label: "PROGRAMMING",
    title: "DIVISI PROGRAMMING",
    desc: "Divisi Programming adalah Divisi yang berfokus pada pengembangan kemampuan pemrograman bagi anggota BLUG maupun masyarakat umum. Programming menjadi wadah belajar, berbagi ilmu, dan mengembangkan project bersama di bidang software.",
    card: { left: 286, right: 41, top: 383, height: 175 },
    photo: { left: 20.75, top: 296, width: 225.6, height: 327 },
    block: { left: 38.4, top: 354.4 },
  },
  {
    slug: "medinfo",
    label: "MEDINFO",
    title: "DIVISI MEDINFO",
    desc: "Divisi Medinfo adalah Divisi yang mengelola media informasi BLUG, termasuk sosial media, konten publikasi, dan dokumentasi kegiatan. Medinfo menjadi wajah organisasi dalam menyampaikan informasi kepada publik.",
    card: { left: 285.4, right: 41.6, top: 383.4, height: 180 },
    photo: { left: 44.9, top: 317.5, width: 182.5, height: 308.6 },
    block: { left: 38.4, top: 354.4 },
  },
];

const gradRed = "bg-gradient-to-b from-[#ff1e1e] to-[#991212]";
const gradGold = "bg-gradient-to-b from-[#f9d00a] to-[#991212]";

/** Kartu info (logo + judul + deskripsi), dipakai di desktop dan HP */
function InfoCard({ d, className = "", style }: { d: Divisi; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      style={style}
      className={`flex gap-[13.1px] overflow-hidden rounded-[4.4px] border-[1.1px] border-[#fcd205] bg-[#1b1b1b] p-[14.2px] shadow-[0_2.2px_21.9px_2.7px_rgba(236,194,62,0.25)] ${className}`}
    >
      <div className="flex h-[129.5px] w-[134.4px] shrink-0 items-center justify-center rounded-[2.2px] border-[0.55px] border-[rgba(77,70,52,0.3)] bg-[#1f1f1f] max-lg:h-[96px] max-lg:w-[100px]">
        <div className="relative h-[97px] w-[99px] rounded-[2.2px] border-[0.55px] border-[rgba(252,210,5,0.4)] bg-[#2a2a2a] max-lg:h-[72px] max-lg:w-[74px]">
          <Image
            src={`/images/divisi/logo-${d.slug}.png`}
            alt=""
            fill
            sizes="100px"
            className="rounded-[1.6px] object-cover"
          />
        </div>
      </div>
      <div className="relative min-w-0 flex-1 font-[family-name:var(--font-hanken)]">
        <h3 className="flex h-[39px] items-center justify-center text-center text-[17px] font-semibold tracking-[0.52px] text-[#fff3dc] lg:mt-[5px] lg:text-[21.85px]">
          {d.title}
        </h3>
        <p className="mt-2 text-justify text-[12px] leading-[17px] tracking-[0.5px] text-[#d1c5ae] lg:mt-[22px] lg:px-3 lg:text-[13.1px] lg:leading-[19.1px] lg:tracking-[0.55px]">
          {d.desc}
        </p>
      </div>
    </div>
  );
}

export default function LogoDivisi() {
  const [active, setActive] = useState<Slug | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Ketuk di luar panel (HP) -> tutup kartu
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setActive(null);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  const current = divisi.find((d) => d.slug === active) ?? null;

  return (
    <section className="relative px-6 pb-24 lg:pb-[200px]">
      {/* Judul bagian: gaya garis gradasi merah-kuning, sama seperti kotak "VIDEO PROFILE" */}
      <h2 className="border-grad-red relative mx-auto mb-16 flex h-[72px] w-[min(100%,555px)] items-center justify-center rounded-[16px] text-[clamp(1.5rem,6vw,36px)] font-bold text-white backdrop-blur-[15px] lg:mb-[88px] lg:h-[88px]">
        LOGO DIVISI
      </h2>

      {/* Panel gelap ("Background Hitam" di Figma). Tingginya bertambah saat ada kotak yang aktif. */}
      <div
        ref={panelRef}
        onMouseLeave={() => setActive(null)}
        className={`relative mx-auto max-w-[1004px] rounded-[25px] bg-[#191818] p-6 transition-[height] duration-500 ease-out motion-reduce:transition-none lg:px-[38.3px] lg:pb-0 lg:pt-[63.6px] ${
          active ? "lg:h-[662px]" : "lg:h-[337px]"
        }`}
      >
        {/* Baris 5 kotak logo */}
        <ul className="grid grid-cols-2 items-start gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-[16.4px]">
          {divisi.map((d) => {
            const on = active === d.slug;
            return (
              <li key={d.slug} className="relative lg:h-[172px]">
                <button
                  type="button"
                  aria-label={`Lihat ${d.title}`}
                  aria-expanded={on}
                  onMouseEnter={() => setActive(d.slug)}
                  onFocus={() => setActive(d.slug)}
                  onClick={() => setActive(d.slug)}
                  className={`relative block aspect-[347/343] w-full cursor-pointer overflow-hidden rounded-[10px] transition-[height] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9d00a] motion-reduce:transition-none lg:aspect-auto ${
                    on ? "lg:h-[207px]" : "lg:h-[172px]"
                  }`}
                >
                  {/* Dua lapis gradasi (merah & kuning) yang saling memudar, karena gradasi CSS tidak bisa dianimasikan langsung */}
                  <span className={`absolute inset-0 ${gradRed}`} />
                  <span className={`absolute inset-0 transition-opacity duration-300 ${gradGold} ${on ? "opacity-100" : "opacity-0"}`} />
                  <Image
                    src={`/images/divisi/logo-${d.slug}.png`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 174px, 45vw"
                    className="object-cover mix-blend-darken"
                  />
                </button>

                {/* Label di bawah kotak aktif (desktop) */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 top-[217px] hidden h-[30px] items-center justify-center rounded-[5px] border-[1.4px] border-white text-[16px] font-semibold tracking-[1px] text-white transition-opacity duration-300 lg:flex ${
                    on ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {d.label}
                </span>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP: kartu info + foto, ditaruh dengan koordinat dari Figma */}
        <div aria-hidden={!active} className="pointer-events-none absolute inset-0 hidden lg:block">
          {divisi.map((d) => {
            const on = active === d.slug;
            return (
              <div
                key={d.slug}
                className={`absolute inset-0 transition duration-500 ease-out motion-reduce:transition-none ${
                  on ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {/* kotak merah di belakang foto */}
                <div
                  style={{ left: d.block.left, top: d.block.top }}
                  className={`absolute h-[268.5px] w-[196px] rounded-tl-[15px] ${gradRed}`}
                />
                {/* foto ketua divisi (tanpa latar) */}
                <div
                  style={{ left: d.photo.left, top: d.photo.top, width: d.photo.width, height: d.photo.height }}
                  className="absolute"
                >
                  <Image
                    src={`/images/divisi/foto-${d.slug}.png`}
                    alt={`Perwakilan ${d.title}`}
                    fill
                    sizes="260px"
                    className="object-contain object-bottom"
                  />
                </div>
                <InfoCard
                  d={d}
                  className="absolute"
                  style={{ left: d.card.left, right: d.card.right, top: d.card.top, height: d.card.height }}
                />
              </div>
            );
          })}
        </div>

        {/* HP / tablet: kartu muncul di bawah deretan kotak */}
        {current && (
          <div className="mt-6 flex flex-col items-center gap-4 lg:hidden">
            <div className="relative h-[150px] w-[130px]">
              <div className={`absolute bottom-0 left-0 right-0 h-[110px] rounded-tl-[15px] ${gradRed}`} />
              <Image
                src={`/images/divisi/foto-${current.slug}.png`}
                alt={`Perwakilan ${current.title}`}
                fill
                sizes="130px"
                className="object-contain object-bottom"
              />
            </div>
            <InfoCard d={current} className="w-full" />
          </div>
        )}
      </div>
    </section>
  );
}
