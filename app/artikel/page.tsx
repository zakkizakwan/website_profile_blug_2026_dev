import { Suspense } from "react";
import type { Metadata } from "next";
import { getArtikelList, getKategori } from "@/lib/api";
import ArtikelHero from "@/components/sections/artikel/ArtikelHero";
import ArtikelFilter from "@/components/sections/artikel/ArtikelFilter";
import { ArtikelKartu, ArtikelUnggulan, Paginasi } from "@/components/sections/artikel/ArtikelCards";
import Sparkle from "@/components/sections/artikel/Sparkle";

export const metadata: Metadata = {
  title: "Artikel | Batam Linux User Group",
};

const PER_PAGE = 4;

/** Cahaya radial emas (Ellipse 19 / 20 di Figma: 750 x 750px) di atas latar hitam */
const glowGelap =
  "radial-gradient(closest-side, rgba(200,155,0,1) 0%, rgba(200,155,0,.75) 25%, rgba(200,155,0,.5) 50%, rgba(200,155,0,.25) 75%, rgba(200,155,0,.125) 87.5%, rgba(200,155,0,0) 100%)";
/** Cahaya radial kuning (Ellipse 31 / 32) di atas panel krem */
const glowTerang =
  "radial-gradient(closest-side, rgba(249,208,10,1) 0%, rgba(249,208,10,.976) 25%, rgba(249,208,10,.5) 50%, rgba(249,208,10,.25) 75%, rgba(249,208,10,.125) 87.5%, rgba(249,208,10,0) 100%)";

type SearchParams = Promise<{ q?: string; tag?: string; page?: string }>;

/*
 * Halaman ini sengaja TIDAK async dan TIDAK meng-await searchParams.
 * Dengan `cacheComponents: true`, membaca searchParams (dan mengambil data dari API)
 * harus terjadi di dalam <Suspense>. Bagian statis (latar, cahaya, hero) ikut
 * dirender lebih dulu, sedangkan isi yang bergantung pada pencarian dimuat setelahnya.
 */
export default function ArtikelPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="relative overflow-hidden bg-black font-[family-name:var(--font-inter)] text-white">
      {/* Cahaya latar (di belakang foto atas) */}
      <div
        aria-hidden
        style={{ background: glowGelap }}
        className="pointer-events-none absolute -left-[440px] top-[660px] hidden h-[750px] w-[750px] lg:block"
      />
      <div
        aria-hidden
        style={{ background: glowGelap }}
        className="pointer-events-none absolute -right-[402px] top-[1335px] hidden h-[750px] w-[750px] lg:block"
      />

      <ArtikelHero />

      <Suspense
        fallback={
          <p className="min-h-[70vh] px-6 pt-24 text-center text-lg text-[#ffe08c]">
            Memuat artikel...
          </p>
        }
      >
        <ArtikelIsi searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

/** Bagian yang bergantung pada ?q=, ?tag=, ?page= dan data dari API */
async function ArtikelIsi({ searchParams }: { searchParams: SearchParams }) {
  const { q, tag, page: pageParam } = await searchParams;

  const [semua, kategori] = await Promise.all([
    getArtikelList({ q, kategori: tag }),
    getKategori(),
  ]);

  // Artikel terbaru = unggulan (di atas); sisanya masuk daftar kartu 4 per halaman
  const [unggulan, ...sisa] = semua;
  const totalPages = Math.max(1, Math.ceil(sisa.length / PER_PAGE));
  const page = Math.min(Math.max(Number(pageParam) || 1, 1), totalPages);
  const tampil = sisa.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <ArtikelFilter q={q} tag={tag} tags={kategori} />

      {/* Artikel unggulan */}
      <div className="relative px-6 pb-16 pt-12 lg:pb-[108.5px] lg:pt-[126px]">
        {unggulan ? (
          <ArtikelUnggulan artikel={unggulan} />
        ) : (
          <p className="mx-auto max-w-[997.5px] text-center text-xl text-[#ffe08c]">
            Belum ada artikel yang cocok dengan pencarianmu.
          </p>
        )}
      </div>

      {/* Panel krem berisi kartu-kartu artikel */}
      <section className="relative overflow-hidden rounded-t-[56px] bg-[#fff8d6] px-6 pb-20 pt-14 text-black lg:rounded-t-[118px] lg:pb-[186px] lg:pt-[179px]">
        <div
          aria-hidden
          style={{ background: glowTerang }}
          className="pointer-events-none absolute -left-[66px] top-[37px] hidden h-[750px] w-[750px] lg:block"
        />
        <div
          aria-hidden
          style={{ background: glowTerang }}
          className="pointer-events-none absolute left-[704px] top-[1621px] hidden h-[750px] w-[750px] lg:block"
        />
        <Sparkle className="left-[18px] top-[90px] hidden h-[177px] w-[193px] lg:block" />
        <Sparkle className="bottom-[302px] right-[21px] hidden h-[177px] w-[193px] lg:block" />

        <div className="relative mx-auto max-w-[1074px]">
          {tampil.length > 0 ? (
            <ul className="grid gap-8 sm:grid-cols-2 lg:gap-x-[87px] lg:gap-y-[126px]">
              {tampil.map((a) => (
                <li key={a.id} className="flex">
                  <div className="flex w-full flex-col [&>article]:flex-1">
                    <ArtikelKartu artikel={a} />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-10 text-center text-lg text-[#8c6a00]">
              {unggulan ? "Belum ada artikel lainnya." : "Tidak ada artikel."}
            </p>
          )}

          {totalPages > 1 || tampil.length > 0 ? (
            <Paginasi page={page} totalPages={totalPages} q={q} tag={tag} />
          ) : null}
        </div>
      </section>
    </>
  );
}
