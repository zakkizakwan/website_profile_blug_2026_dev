import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import ProgramCard, { type ProgramItem } from "@/components/ui/ProgramCard";

/*
 * Bagian "KESERUAN BELAJAR BARENG" + blok kuning "Program Unggulan" (node 360:187 di Figma).
 * Semua ukuran px di sini = nilai Figma dibagi 2 (frame desain 2797px = 1398,5px).
 *
 * Gambar (public/images/program/), diekspor dari Figma sebagai SVG:
 *   penguin.svg               -> layer "selfhst:linux"
 *   bintang.svg               -> layer "Vector" bintang kuning di pojok kanan atas blok
 *   ilustrasi-siber.svg       -> layer "Hacker-cuate 1"
 *   ilustrasi-programming.svg -> layer "Programming-cuate 1"
 *   icon-keamanan.svg         -> layer "ic:sharp-security"
 *   icon-pengguna.svg         -> layer "fa7-solid:users"
 */

const IMG = "/images/program";

const highlight = "text-[#fcd205]";

const PROGRAM: {
  pill: string;
  pillWidth: number;
  title: React.ReactNode;
  description: string;
  items: ProgramItem[];
  illustration: string;
  illustrationAlt: string;
  illustrationClassName: string;
}[] = [
    {
      pill: "Yuk, Kenal Linux Lebih Dalam!",
      pillWidth: 325,
      title: (
        <>
          Belajar <span className={highlight}>Linux</span> Bareng Siber
        </>
      ),
      description:
        "Divisi Siber mengajak kamu kenalan lebih dalam dengan Linux dan dunia keamanan siber lewat kegiatan seru.",
      items: [
        {
          icon: `${IMG}/icon-keamanan.svg`,
          label: "BLUGCamp:",
          text: "Belajar Linux dan dasar-dasar keamanan siber dari nol!",
        },
        {
          icon: `${IMG}/icon-pengguna.svg`,
          label: "BnB & Workshop:",
          text: "Ngulik topik keamanan siber bareng pemateri kece!",
        },
      ],
      illustration: `${IMG}/ilustrasi-siber.svg`,
      illustrationAlt: "Ilustrasi peretas dengan laptop dan gembok",
      illustrationClassName: "lg:top-[6px] lg:h-[313px] lg:w-[360px]",
    },
    {
      pill: "Pengen Belajar Buat Website? Yuk",
      pillWidth: 345,
      title: (
        <>
          Ngoding <span className={highlight}>Bareng</span> Programming
        </>
      ),
      // Teks ini disalin persis dari Figma (62:1256): masih teks Divisi Siber, kemungkinan salah tempel.
      description:
        "Divisi Siber mengajak kamu kenalan lebih dalam dengan Linux dan dunia keamanan siber lewat kegiatan seru.",
      items: [
        // Di Figma lingkaran ini masih kosong (ikon belum dipasang)
        {
          label: "BLUGCamp:",
          text: "Bootcamp internal buat kamu yang pengen jago ngoding!",
        },
        {
          icon: `${IMG}/icon-pengguna.svg`,
          label: "BnB & Workshop:",
          text: "Belajar ngoding dari pemateri berpengalaman!",
        },
      ],
      illustration: `${IMG}/ilustrasi-programming.svg`,
      illustrationAlt: "Ilustrasi programmer bekerja di meja dengan dua monitor",
      illustrationClassName: "lg:-top-px lg:h-[320px] lg:w-[430px]",
    },
  ];

/* Cahaya kuning kabur di belakang kartu (Ellipse 33 & 35 di Figma) */
const glow =
  "absolute rounded-full bg-[radial-gradient(closest-side,rgba(252,210,5,0.85),rgba(252,210,5,0))]";

export default function KeseruanBelajar() {
  return (
    <section className="relative z-10 overflow-x-clip">
      <div className="px-6">
        <SectionTitle
          width={723}
          className="mb-10 text-[clamp(1.125rem,4.6vw,32px)]! text-[#fff8d6]! lg:mb-[66px] lg:h-[71px]!"
        >
          KESERUAN BELAJAR BARENG
        </SectionTitle>
      </div>

      <div className="relative isolate rounded-t-[clamp(48px,8.4vw,118px)] bg-[#fff8d6] pb-16 pt-9 lg:pb-[82px] lg:pt-[36.5px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[inherit]">
          <div className={`${glow} -left-[280px] -top-[30px] h-[569px] w-[532px]`} />
          <div className={`${glow} -right-[270px] top-[510px] h-[485px] w-[532px]`} />
        </div>

        <Image
          src={`${IMG}/bintang.svg`}
          alt=""
          aria-hidden
          width={156}
          height={130}
          className="pointer-events-none absolute -right-3 -top-4 h-auto w-[84px] lg:-right-[18px] lg:-top-[22px] lg:w-[156px]"
        />

        <div className="relative mx-auto flex max-w-[735px] justify-center px-6 lg:justify-start lg:px-0">
          <h3 className="inline-flex items-center rounded-[12px] border-[7px] border-black bg-[#ffe08c] px-4 py-1 text-[clamp(1.5rem,6.5vw,46px)] font-bold leading-[normal] text-black [text-shadow:0_3px_3px_rgba(0,0,0,0.25)] lg:h-[76.5px] lg:w-[457.5px] lg:px-[11px] lg:py-0">
            Program Unggulan
          </h3>
        </div>

        <div className="relative mx-auto mt-8 flex max-w-[1184px] flex-col gap-10 px-4 lg:mt-12 lg:px-0">
          {PROGRAM.map((program) => (
            <ProgramCard key={program.pill} {...program} />
          ))}
        </div>

        {/* Maskot penguin menjorok sedikit ke footer */}
        <Image
          src={`${IMG}/penguin.svg`}
          alt=""
          aria-hidden
          width={239}
          height={239}
          className="pointer-events-none absolute -bottom-[29px] -left-[29px] z-10 hidden lg:block"
        />
      </div>
    </section>
  );
}
