"use client";

import Link from "next/link";
import { useRef, useState } from "react";

/*
 * Kotak VISI / MISI (komponen "Group 237" di Figma, varian Default & Variant2).
 *  - Default : tulisan besar "VISI" + label "BATAM LINUX USER GROUP"
 *  - Variant2: kartu putih berisi teks meluncur masuk dari kiri (menutupi judul)
 * Sesuai prototype: kartu muncul saat kursor diarahkan (hover) dan kembali saat kursor pergi.
 * Di layar sentuh (tidak ada hover) kotak diketuk untuk berganti; keyboard: Enter / Space.
 * Ukuran = Figma dibagi 2 (lebar 515,5px), dihitung proporsional terhadap lebar kotak (cqw).
 */

const u = (n: number) => `calc(var(--u) * ${n})`;

function FlipCard({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  // jenis input terakhir: "mouse" -> hover yang mengatur, selain itu (sentuh / keyboard) -> klik berganti
  const lastPointer = useRef<string>("keyboard");

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-label={`Tampilkan ${title.toLowerCase()} BLUG`}
      onPointerDown={(e) => {
        lastPointer.current = e.pointerType;
      }}
      onPointerEnter={(e) => {
        lastPointer.current = e.pointerType;
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
      onClick={() => {
        if (lastPointer.current !== "mouse") setOpen((o) => !o);
        lastPointer.current = "keyboard";
      }}
      onBlur={() => setOpen(false)}
      className="relative aspect-[1031/751] w-full max-w-[515.5px] cursor-pointer overflow-hidden [container-type:inline-size] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9d00a]"
    >
      <span
        className="absolute inset-0 block"
        style={{ ["--u" as string]: "calc(100cqw / 515.5)" }}
      >
        {/* Muka depan: judul besar + label */}
        <span
          style={{ top: "26.46%", fontSize: u(146.4) }}
          className="absolute inset-x-0 text-center font-bold leading-[normal] text-[#fcd205]"
        >
          {title}
        </span>
        <span
          style={{ top: u(248.9), width: u(289.5), height: u(32), borderRadius: u(7), borderWidth: 1 }}
          className="absolute left-1/2 -translate-x-1/2 border-solid border-white"
        />
        <span
          style={{ top: u(264.6), fontSize: u(14.3) }}
          className="absolute inset-x-0 -translate-y-1/2 text-center font-bold leading-none text-[#f7f3f3]"
        >
          BATAM LINUX USER GROUP
        </span>

        {/* Kartu putih: meluncur dari kiri saat hover (0,9 detik di Figma) */}
        <span
          aria-hidden={!open}
          style={{
            transform: open ? "translateX(0)" : "translateX(-103%)",
            transitionTimingFunction: "cubic-bezier(0, 0, 0, 1)",
          }}
          className="absolute inset-0 block transition-transform duration-[900ms] motion-reduce:transition-none"
        >
          <span
            style={{ top: "1.76%", bottom: "1.76%", borderRadius: u(10.5) }}
            className="absolute inset-x-0 bg-white"
          />
          {/* garis kuning di sisi kiri */}
          <span
            style={{ width: u(14.4) }}
            className="absolute inset-y-0 left-0 rounded-full bg-[#fcd205]"
          />
          <span
            style={{
              left: "8.34%",
              right: "5.63%",
              top: `calc(50% - ${u(106.8)})`,
              height: u(213.5),
              fontSize: u(25),
            }}
            className="absolute flex items-center justify-center text-center font-semibold leading-[normal] text-black"
          >
            {text}
          </span>
        </span>
      </span>
    </button>
  );
}

export default function VisiMisi() {
  return (
    <section className="relative px-6 pb-24 lg:pb-[150px]">
      {/* Kotak judul (Rectangle 4285 di Figma): 288,5 x 77,5, sudut 25, garis gradasi 1px */}
      <h2 className="border-grad-red relative mx-auto flex h-[64px] w-[min(100%,288.5px)] items-center justify-center rounded-[25px] text-[clamp(1.5rem,6vw,45px)] font-bold text-[#fff8d6] shadow-[0_2px_12px_-0.5px_rgba(0,0,0,0.25)] backdrop-blur-[15px] lg:h-[77.5px]">
        VISI &amp; MISI
      </h2>

      <div className="mx-auto mt-10 flex max-w-[1173px] flex-col items-center justify-center gap-10 lg:mt-9 lg:flex-row lg:gap-[143px]">
        <FlipCard
          title="VISI"
          text="Menjadikan BLUG sebagai organisasi yang memprioritaskan kepedulian terhadap setiap anggota, membantu mereka berkembang dalam hard skill & soft skill, serta memberikan kontribusi yang bermakna bagi masyarakat luas."
        />
        <FlipCard
          title="MISI"
          text="Melibatkan semua anggota dalam kolaborasi setiap kegiatan BLUG, aktif dalam pengembangan mutu anggota, dan memberikan kontribusi yang bermanfaat bagi masyarakat luas, terutama di kalangan Mahasiswa Politeknik Negeri Batam"
        />
      </div>

      {/* Tombol "Lihat Lebih Lanjut" (Rectangle 116 di Figma): 234 x 65, bulat penuh, garis kuning 3,5px, isi #333 */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/tentang"
          className="flex h-[56px] w-[min(100%,234px)] items-center justify-center rounded-full border-[3.5px] border-[#fcd205] bg-[#333333] text-[15px] font-bold text-[#fcd205] shadow-[0_2px_2px_rgba(0,0,0,0.25),0_2px_2px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#fcd205] hover:text-[#191818] lg:h-[65px]"
        >
          Lihat Lebih Lanjut
        </Link>
      </div>
    </section>
  );
}
