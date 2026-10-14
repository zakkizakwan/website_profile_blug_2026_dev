import Link from "next/link";
import { artikelHref } from "./href";

/*
 * Kotak pencarian + daftar tag (Rectangle 92–94 dan "Tags:" di Figma).
 * Murni server component: pencarian = form GET (?q=...), tag = link (?tag=...),
 * jadi alamat halamannya bisa dibagikan dan tidak perlu state di browser.
 */
export default function ArtikelFilter({
  q,
  tag,
  tags,
}: {
  q?: string;
  tag?: string;
  tags: string[];
}) {
  return (
    <div className="relative z-10 -mt-12 px-4 lg:-mt-[82px]">
      {/* Kotak pencarian: kapsul kuning 986 x 148,5 menimpa tepi bawah foto */}
      <form
        action="/artikel"
        method="get"
        role="search"
        className="mx-auto flex max-w-[986px] items-center gap-3 rounded-[40px] bg-[#ffe08c] p-4 shadow-[0_0_5px_rgba(0,0,0,0.25)] lg:h-[148.5px] lg:gap-[29px] lg:rounded-full lg:py-0 lg:pl-[52.5px] lg:pr-[68.5px]"
      >
        {tag && <input type="hidden" name="tag" value={tag} />}
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Intresting on some topic? find it..."
          aria-label="Cari artikel"
          className="h-12 min-w-0 flex-1 rounded-full border border-[#c89b00] bg-white px-5 text-[15px] text-black shadow-[0_0_5px_rgba(0,0,0,0.25)] outline-none placeholder:text-[#a6a6a6] focus-visible:ring-2 focus-visible:ring-[#8c6a00] sm:text-[18px] lg:h-[61px] lg:pl-[62px] lg:text-[24px]"
        />
        <button
          type="submit"
          className="h-12 shrink-0 cursor-pointer rounded-full border border-[#c89b00] bg-[#fcd205] px-5 text-[15px] font-semibold text-[#8c6a00] shadow-[0_0_5px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#f9d00a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6a00] sm:text-[18px] lg:h-[61px] lg:w-[169.5px] lg:text-[24px]"
        >
          Search
        </button>
      </form>

      {/* Tag */}
      <div className="mx-auto mt-10 max-w-[997.5px] lg:mt-[61px]">
        <p className="text-[clamp(1.5rem,6vw,2rem)] font-extrabold leading-[normal] text-white">Tags:</p>
        <ul className="mt-3 flex flex-wrap gap-4 lg:mt-[10.5px]">
          {["Semua", ...tags].map((name) => {
            const active = name === "Semua" ? !tag : tag === name;
            return (
              <li key={name}>
                <Link
                  href={artikelHref({ q, tag: name === "Semua" ? undefined : name })}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-[48px] items-center rounded-full px-7 text-[20px] font-bold transition-colors ${
                    active
                      ? "bg-[#fcd205] text-[#3f3d32]"
                      : "bg-[#fff8d6] text-[#f9d00a] hover:bg-[#fcd205] hover:text-[#3f3d32]"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
