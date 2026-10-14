import Image from "next/image";
import Link from "next/link";
import type { Artikel } from "@/lib/api";
import { artikelHref, formatTanggal } from "./href";

/* Artikel unggulan (kartu krem + teks di kanan, di atas latar hitam) */
export function ArtikelUnggulan({ artikel }: { artikel: Artikel }) {
  return (
    <div className="mx-auto flex max-w-[997.5px] flex-col items-center gap-8 md:flex-row md:items-start lg:gap-[45.5px]">
      <div className="w-full max-w-[404px] shrink-0 rounded-[10px] bg-[#fff8d6] px-5 py-[14.5px] shadow-[0_0_10px_5px_rgba(249,208,10,0.5)]">
        <div className="relative aspect-[728/912] w-full overflow-hidden">
          <Image
            src={artikel.gambar}
            alt={artikel.judul}
            fill
            priority
            sizes="(min-width: 768px) 364px, 90vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="min-w-0 md:pt-[51.5px]">
        <div className="flex flex-wrap gap-4">
          <span className="flex h-[36px] items-center rounded-full bg-[#fff8d6] px-[21.5px] text-[18px] font-bold text-[#8c6a00]">
            {artikel.kategori}
          </span>
          <span className="flex h-[36px] items-center rounded-full bg-[#fff8d6] px-[16.5px] text-[18px] font-bold text-[#8c6a00]">
            {formatTanggal(artikel.tanggal)}
          </span>
        </div>
        <h2 className="mt-2 text-[clamp(1.5rem,5vw,2rem)] font-extrabold leading-[normal] text-[#ffe08c]">
          {artikel.judul}
        </h2>
        <p className="mt-1 max-w-[548px] text-[clamp(1rem,3.4vw,1.5rem)] leading-[normal] text-[#f7f3f3]">
          {artikel.ringkasan}
        </p>
        <Link
          href={`/artikel/${artikel.slug}`}
          className="mt-6 inline-flex h-[41px] items-center rounded-[20px] bg-[#f9d00a] px-[19px] text-[18px] font-semibold text-black transition-colors hover:bg-[#fcd205] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:mt-[22px]"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
}

/* Kartu artikel putih di panel krem */
export function ArtikelKartu({ artikel }: { artikel: Artikel }) {
  return (
    <article className="flex flex-col rounded-[25px] bg-white px-[27.5px] pb-[45.5px] pt-[29px] shadow-[0_0_5px_2.5px_rgba(0,0,0,0.25)] lg:min-h-[972.5px]">
      <div className="relative aspect-[878/1159] w-full overflow-hidden rounded-t-[25px]">
        <Image
          src={artikel.gambar}
          alt={artikel.judul}
          fill
          sizes="(min-width: 1024px) 439px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>

      <div className="mt-[35.5px] flex flex-wrap gap-4">
        <span className="flex h-[36px] items-center rounded-full border border-[#c89b00] bg-[#fff8d6] px-[21.5px] text-[18px] font-bold text-[#8c6a00]">
          {artikel.kategori}
        </span>
        <span className="flex h-[36px] items-center rounded-full border border-[#c89b00] bg-[#fff8d6] px-[16.5px] text-[18px] font-bold text-[#8c6a00]">
          {formatTanggal(artikel.tanggal)}
        </span>
      </div>

      <h3 className="mt-1.5 text-[clamp(1.25rem,4.6vw,2rem)] font-extrabold leading-[normal] text-[#8c6a00]">
        {artikel.judul}
      </h3>
      <p className="mt-2.5 line-clamp-4 text-[18px] leading-[normal] text-[#1b1b1b]">{artikel.ringkasan}</p>

      <div className="mt-auto flex justify-center pt-6">
        <Link
          href={`/artikel/${artikel.slug}`}
          className="flex h-[50px] w-[180px] items-center justify-center rounded-[20px] bg-[#f9d00a] text-[20px] font-semibold text-black shadow-[0_2px_2px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#fcd205] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6a00]"
        >
          Selengkapnya
        </Link>
      </div>
    </article>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 35 35"
      width="16"
      height="16"
      fill="none"
      stroke="#1e1e1e"
      strokeWidth="5"
      aria-hidden
      style={{ transform: dir === "left" ? "rotate(-90deg)" : "rotate(90deg)" }}
    >
      <path d="M0 17.5L17.5 0L35 17.5M17.5 35V0" />
    </svg>
  );
}

/* Penomoran halaman (kapsul putih: < 1 >) */
export function Paginasi({
  page,
  totalPages,
  q,
  tag,
}: {
  page: number;
  totalPages: number;
  q?: string;
  tag?: string;
}) {
  const circle =
    "flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8d6] transition-colors hover:bg-[#fcd205]";
  const prev = page > 1;
  const next = page < totalPages;

  return (
    <nav aria-label="Halaman artikel" className="mt-12 flex justify-center lg:mt-[101.5px]">
      <ul className="flex items-center gap-3 rounded-full bg-white px-[17.5px] py-[7px] shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
        <li>
          {prev ? (
            <Link href={artikelHref({ q, tag, page: page - 1 })} aria-label="Halaman sebelumnya" className={circle}>
              <Arrow dir="left" />
            </Link>
          ) : (
            <span aria-disabled className={`${circle} opacity-40 hover:bg-[#fff8d6]`}>
              <Arrow dir="left" />
            </span>
          )}
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            {n === page ? (
              <span
                aria-current="page"
                className="flex h-[56px] w-[55px] items-center justify-center rounded-full bg-[#fcd205] text-[24px] font-bold text-white"
              >
                {n}
              </span>
            ) : (
              <Link
                href={artikelHref({ q, tag, page: n })}
                aria-label={`Halaman ${n}`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[16px] font-bold text-[#8c6a00] transition-colors hover:bg-[#fff8d6]"
              >
                {n}
              </Link>
            )}
          </li>
        ))}
        <li>
          {next ? (
            <Link href={artikelHref({ q, tag, page: page + 1 })} aria-label="Halaman berikutnya" className={circle}>
              <Arrow dir="right" />
            </Link>
          ) : (
            <span aria-disabled className={`${circle} opacity-40 hover:bg-[#fff8d6]`}>
              <Arrow dir="right" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
