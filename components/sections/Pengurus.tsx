"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

const u = (n: number) => `calc(var(--u) * ${n})`;

const SLIDE_HEIGHT = [320.5, 484]; // tinggi tiap slide dalam satuan u

function Arrow({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir === "left" ? "Slide sebelumnya" : "Slide berikutnya"}
      onClick={onClick}
      style={{
        top: "60%",
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
  const total = 2;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const slideStyle = (i: number): React.CSSProperties => ({
    transform: `translateX(${(i - index) * 100}%)`,
  });

  return (
    <section className="relative pb-24 lg:pb-[200px]">
      <div className="px-6">
        <SectionTitle className="mb-4">PENGURUS</SectionTitle>
      </div>

      {/* Wadah ukuran: semua satuan "u" di bawah dihitung dari lebar wadah ini */}
      <div className="w-full [container-type:inline-size]">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Foto pengurus BPH BLUG"
          style={{ ["--u" as string]: "calc(100cqw / 1398.5)", height: u(SLIDE_HEIGHT[index]) }}
          className="relative overflow-hidden transition-[height] duration-700 ease-out motion-reduce:transition-none"
        >
          {/* SLIDE 1: "BPH BLUG 2026" + foto di depan teks */}
          <div
            aria-hidden={index !== 0}
            style={slideStyle(0)}
            className="absolute inset-0 transition-transform duration-700 ease-out motion-reduce:transition-none"
          >
            <div
              className="absolute inset-x-0 top-0"
              style={{
                height: u(320.5),
                background: "linear-gradient(to bottom, #ff1e1e 22.1%, #991212 94.7%)",
              }}
            />
            <p
              style={{ left: u(306.5), top: u(85), fontSize: u(178.8) }}
              className="absolute -translate-y-1/2 whitespace-nowrap font-[family-name:var(--font-karantina)] font-bold leading-none text-[#fff8d6]"
            >
              BPH BLUG
            </p>
            <p
              style={{ right: `calc(100% - ${u(1122)})`, top: u(85), fontSize: u(197.9) }}
              className="absolute -translate-y-1/2 whitespace-nowrap font-[family-name:var(--font-karantina)] font-bold leading-none text-[#fff8d6]"
            >
              2026
            </p>
            <div style={{ left: u(21.5), top: u(84), width: u(1367.5), height: u(237.5) }} className="absolute">
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

          {/* SLIDE 2: foto pengurus periode lain */}
          <div
            aria-hidden={index !== 1}
            style={slideStyle(1)}
            className="absolute inset-0 transition-transform duration-700 ease-out motion-reduce:transition-none"
          >
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(179.97deg, #ff1e1e 0%, #991212 88.4%)" }}
            />
            <div style={{ left: u(185.5), top: u(5), width: u(1027.7), height: u(484) }} className="absolute">
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
