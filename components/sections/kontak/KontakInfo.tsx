import type { ReactNode } from "react";

/* ---------- Data kontak: ubah di sini kalau ada pergantian pengurus ---------- */
const TELEPON = [
  { nama: "Terra - Sekretaris 1", tampil: "+62 823-8759-3452", href: "tel:+6282387593452" },
  { nama: "Tara - Sekretaris 2", tampil: "+62 822-8589-8311", href: "tel:+6282285898311" },
];
const EMAIL = "aibatamlinux@gmail.com";
const INSTAGRAM = { tampil: "@batamlinux", href: "https://www.instagram.com/batamlinux" };

/* ---------- Ikon (SVG sebaris, putih) ---------- */
function IconTelepon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" aria-hidden className="size-[34px]">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 28 22" fill="none" stroke="white" strokeWidth="2" aria-hidden className="h-[22px] w-[28px]">
      <rect x="1" y="1" width="26" height="20" />
      <path d="M1 1l13 11L27 1M1 21l9-10M27 21l-9-10" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="2.4" aria-hidden className="size-[28px]">
      <rect x="1.5" y="1.5" width="25" height="25" rx="7" />
      <circle cx="14" cy="14" r="6" />
      <circle cx="21.2" cy="6.8" r="1.2" fill="white" stroke="none" />
    </svg>
  );
}

function Baris({ ikon, href, children }: { ikon: ReactNode; href: string; children: ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-4 text-xl leading-[normal] decoration-[#fcd205] decoration-2 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none lg:gap-[39px]"
      >
        <span className="grid w-11 shrink-0 place-items-center">{ikon}</span>
        <span className="min-w-0 break-words">{children}</span>
      </a>
    </li>
  );
}

export default function KontakInfo() {
  return (
    <aside
      style={{
        backgroundImage:
          "linear-gradient(116.5deg, rgba(255,255,255,0.4) 1.8%, rgba(255,255,255,0.1) 100%)",
      }}
      className="relative z-10 rounded-[25px] border border-white/60 px-6 py-8 shadow-[0_2px_12px_-0.5px_rgba(0,0,0,0.25)] backdrop-blur-[15px] lg:absolute lg:left-0 lg:top-[29px] lg:h-[569.5px] lg:w-[472.5px] lg:px-[63.5px] lg:py-0 lg:pt-[49px]"
    >
      <p className="text-justify text-[clamp(1.125rem,4.6vw,25px)] font-normal leading-[normal]">
        Jika Anda memiliki pertanyaan atau ingin berdiskusi tentang proyek atau event, jangan ragu
        untuk menghubungi kami.
      </p>

      <ul className="mt-8 flex flex-col gap-[26px] lg:pl-[5px]">
        {TELEPON.map((t) => (
          <Baris key={t.href} ikon={<IconTelepon />} href={t.href}>
            <span className="block font-bold">{t.nama}</span>
            <span className="block font-normal">{t.tampil}</span>
          </Baris>
        ))}
        <Baris ikon={<IconEmail />} href={`mailto:${EMAIL}`}>
          <span className="font-bold">{EMAIL}</span>
        </Baris>
        <Baris ikon={<IconInstagram />} href={INSTAGRAM.href}>
          <span className="font-bold">{INSTAGRAM.tampil}</span>
        </Baris>
      </ul>
    </aside>
  );
}
