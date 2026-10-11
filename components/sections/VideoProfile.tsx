"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Di Figma, komponen ini punya dua keadaan: "Default" (elemen berada di luar kotak) dan
 * "Variant2" (susunan akhir). Susunan akhir dibuat di sini, dan perpindahan dari Default
 * dibuat sebagai animasi masuk saat bagian ini terlihat di layar.
 * Jarak geser (px) = selisih posisi Default dan Variant2 di Figma, dibagi 2.
 */

const shown = "opacity-100 translate-x-0 translate-y-0";
const anim = "transition-all duration-[900ms] ease-out motion-reduce:transition-none";

const hiddenYT = "opacity-0 translate-y-6 lg:-translate-x-[387px] lg:-translate-y-[6px]";
const hiddenBox = "opacity-0 translate-y-6 lg:translate-x-[581px] lg:translate-y-[118px]";
const hiddenTitle = "opacity-0 translate-y-6 lg:-translate-x-[24px] lg:-translate-y-[77px]";
const hiddenDesc = "opacity-0 translate-y-6 lg:translate-x-[587px] lg:translate-y-0";

export default function VideoProfile() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative px-6 pb-24 lg:px-0 lg:pb-[224px]">
      <div className="mx-auto grid max-w-[969px] items-start gap-8 lg:grid-cols-[371px_1fr] lg:gap-[28px]">
        {/* Kiri: kotak video YouTube */}
        <a
          href="#" // TODO: ganti dengan link channel YouTube Batam Linux
          className={`border-grad-yellow relative flex h-[196px] items-center justify-center rounded-[11px] lg:mt-[6px] ${anim} ${
            visible ? shown : hiddenYT
          }`}
        >
          <span className="text-[clamp(1.25rem,6vw,42px)] font-bold text-white">
            YT Batam Linux
          </span>
        </a>

        {/* Kanan: judul + deskripsi */}
        <div>
          <div className="relative h-[77px] w-full max-w-[488px]">
            <div
              className={`border-grad-red absolute inset-0 rounded-[11.5px] backdrop-blur-[15px] shadow-[0_2px_12px_-1px_rgba(0,0,0,0.25)] ${anim} ${
                visible ? shown : hiddenBox
              }`}
            />
            <h2
              className={`absolute inset-0 flex items-center justify-center text-[clamp(1.75rem,8vw,59px)] font-bold leading-none text-[#fff8d6] ${anim} ${
                visible ? shown : hiddenTitle
              }`}
            >
              VIDEO PROFILE
            </h2>
          </div>

          <p
            className={`mt-[10px] text-base font-semibold text-white lg:text-[20px] ${anim} ${
              visible ? shown : hiddenDesc
            }`}
          >
            Kenali lebih dekat perjalanan dan semangat kami dalam membangun
            ekosistem digital yang terbuka. Melalui video profil ini, temukan
            bagaimana kami berkolaborasi, berbagi wawasan, dan terus berinovasi
            bersama.
          </p>
        </div>
      </div>
    </section>
  );
}
