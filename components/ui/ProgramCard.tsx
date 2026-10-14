import Image from "next/image";
import type { ReactNode } from "react";

export type ProgramItem = {
  /** ikon di lingkaran kiri (path di /public). Kosongkan untuk lingkaran polos. */
  icon?: string;
  /** teks tebal berwarna kuning, mis. "BLUGCamp:" */
  label: string;
  text: string;
};

type ProgramCardProps = {
  /** teks di pil kuning muda di atas judul */
  pill: string;
  /** lebar pil pada layar besar (px), mengikuti Figma */
  pillWidth: number;
  title: ReactNode;
  description: string;
  items: ProgramItem[];
  illustration: string;
  illustrationAlt: string;
  /** ukuran & posisi ilustrasi pada layar besar (lg ke atas) */
  illustrationClassName: string;
};

/*
 * Kartu putih "Program Unggulan" (Group 250 / Group 265 di Figma).
 * Ukuran di bawah = nilai Figma dibagi 2 (frame desain lebarnya 2797px = 1398,5px).
 * Di layar kecil isi kartu ditumpuk dan ilustrasi pindah ke bawah teks.
 */
export default function ProgramCard({
  pill,
  pillWidth,
  title,
  description,
  items,
  illustration,
  illustrationAlt,
  illustrationClassName,
}: ProgramCardProps) {
  return (
    <article className="relative rounded-[24px] bg-white px-7 py-8 shadow-[0_6px_0_rgba(0,0,0,0.25)] lg:h-[324px] lg:p-0 lg:pl-10 lg:pt-[39px]">
      {/* garis kuning di tepi kiri kartu */}
      <span
        aria-hidden
        className="absolute -bottom-[3px] -top-[3px] left-0 w-[10px] rounded-full bg-[#fcd205]"
      />

      <p
        style={{ ["--pill-w" as string]: `${pillWidth}px` }}
        className="inline-flex h-[36.5px] items-center justify-center rounded-full border border-black bg-[#ffe08c] px-4 text-base font-bold leading-[normal] text-black lg:w-[var(--pill-w)] lg:px-0"
      >
        {pill}
      </p>

      <h3 className="mt-3 text-2xl font-bold leading-[normal] text-black lg:mt-[12.5px]">{title}</h3>

      <p className="mt-1.5 max-w-[448px] text-xs leading-[normal] text-black">{description}</p>

      <ul className="mt-[14.5px] flex flex-col gap-[7.5px]">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-[9px]">
            <span className="grid size-[52.5px] shrink-0 place-items-center rounded-full bg-[#ffe08c]">
              {item.icon && <Image src={item.icon} alt="" aria-hidden width={32} height={32} />}
            </span>
            <p className="mt-[23px] flex flex-wrap items-baseline gap-x-1 text-xs leading-[normal] text-black">
              <span className="text-base font-bold text-[#fcd205]">{item.label}</span>
              <span>{item.text}</span>
            </p>
          </li>
        ))}
      </ul>

      <div
        className={`relative ml-auto mt-6 aspect-[719/626] w-full max-w-[360px] overflow-hidden rounded-[25px] lg:absolute lg:right-0 lg:ml-0 lg:mt-0 lg:aspect-auto lg:max-w-none lg:rounded-l-none ${illustrationClassName}`}
      >
        <Image
          src={illustration}
          alt={illustrationAlt}
          fill
          sizes="(min-width: 1024px) 430px, 360px"
          className="object-contain"
        />
      </div>
    </article>
  );
}
