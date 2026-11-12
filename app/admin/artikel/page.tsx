import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArtikelList } from "@/lib/api";
import { formatTanggal } from "@/components/sections/artikel/href";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminPagination from "@/components/admin/AdminPagination";
import DeleteButton from "@/components/admin/DeleteButton";
import { CheckCircleIcon, PencilIcon, PlusIcon, SearchIcon } from "@/components/admin/icons";

export const metadata: Metadata = { title: "Artikel | BLUG Admin" };

const PER_PAGE = 3;

const INFO: Record<string, string> = {
  dibuat: "Artikel berhasil ditambahkan.",
  diperbarui: "Artikel berhasil diperbarui.",
};

const kolom = "md:grid md:grid-cols-[minmax(0,2.4fr)_1fr_1fr_0.7fr] md:items-center";

type SearchParams = Promise<{ q?: string; page?: string; info?: string }>;

/* Tidak async: searchParams dibaca di dalam <Suspense> (aturan `cacheComponents`). */
export default function AdminArtikelPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <>
      <AdminHeader title="Artikel" />
      <Suspense fallback={<p className="py-24 text-center text-[#8c6a00]">Memuat artikel...</p>}>
        <DaftarArtikel searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function DaftarArtikel({ searchParams }: { searchParams: SearchParams }) {
  const { q = "", page: pageParam, info } = await searchParams;
  const keyword = q.trim();

  const semua = await getArtikelList({ q: keyword });
  const totalPages = Math.max(1, Math.ceil(semua.length / PER_PAGE));
  const page = Math.min(Math.max(Number(pageParam) || 1, 1), totalPages);
  const items = semua.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      {info && INFO[info] && (
        <p
          role="status"
          className="mb-4 flex items-center gap-2 rounded-lg border border-[#e3cf84] bg-[#fff9db] px-4 py-2.5 text-sm font-medium text-[#8a6a00]"
        >
          <CheckCircleIcon className="size-4" />
          {INFO[info]}
        </p>
      )}

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <form
          action="/admin/artikel"
          method="get"
          role="search"
          className="flex flex-1 items-center gap-3 sm:max-w-[470px]"
        >
          <label className="flex h-11 flex-1 items-center gap-3 rounded-full border border-[#e3cf84] bg-white px-4 shadow-sm focus-within:ring-2 focus-within:ring-[#fcd205]">
            <SearchIcon className="size-5 shrink-0 text-[#f2c400]" />
            <span className="sr-only">Cari artikel</span>
            <input
              type="search"
              name="q"
              defaultValue={keyword}
              placeholder="cari artikel..."
              className="w-full bg-transparent text-[15px] text-[#6e5400] placeholder:text-gray-400 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-[#e3cf84] bg-[#fcd205] px-5 text-sm font-bold text-[#8a6a00] shadow-sm transition hover:brightness-95"
          >
            <SearchIcon className="size-4" /> Search
          </button>
        </form>

        <Link
          href="/admin/artikel/baru"
          className="ml-auto flex h-10 items-center gap-2 rounded-lg border border-[#e3cf84] bg-[#fcd205] px-4 text-sm font-bold text-black shadow-sm transition hover:brightness-95"
        >
          <PlusIcon className="size-4" strokeWidth={2.5} /> Tambah
        </Link>
      </div>

      <section
        aria-label="Daftar artikel"
        className="overflow-hidden rounded-[28px] border border-[#e3cf84] bg-white/40"
      >
        <div className={`hidden border-b border-[#e3cf84] px-9 py-4 text-sm font-bold text-[#8a6a00] ${kolom}`}>
          <span>Artikel</span>
          <span>Tag</span>
          <span>Tanggal</span>
          <span>Aksi</span>
        </div>

        {items.length === 0 ? (
          <p className="px-9 py-16 text-center text-sm text-gray-500">
            {keyword ? `Tidak ada artikel untuk “${keyword}”.` : "Belum ada artikel."}
          </p>
        ) : (
          <ul>
            {items.map((a) => (
              <li
                key={a.id}
                className={`flex flex-col gap-3 border-b border-[#e3cf84] px-5 py-5 last:border-b-0 sm:px-9 ${kolom}`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={a.gambar}
                    alt={`Poster ${a.judul}`}
                    width={88}
                    height={108}
                    className="h-[108px] w-[88px] shrink-0 rounded-sm object-cover"
                  />
                  <div className="min-w-0 max-w-[290px]">
                    <h2 className="text-[13.5px] font-bold leading-snug text-[#8a6a00]">{a.judul}</h2>
                    <p className="mt-1.5 line-clamp-3 text-[11.5px] leading-snug text-gray-500">{a.ringkasan}</p>
                  </div>
                </div>

                <div>
                  <span className="inline-block rounded border border-[#f1e2a3] bg-[#fff9db] px-2.5 py-1 text-[13px] font-medium text-[#d9a400]">
                    {a.kategori}
                  </span>
                </div>

                <time dateTime={a.tanggal} className="text-sm font-bold text-gray-400">
                  {formatTanggal(a.tanggal)}
                </time>

                <div className="flex items-center gap-1.5">
                  <Link
                    href={`/admin/artikel/${a.id}/edit`}
                    aria-label={`Edit ${a.judul}`}
                    title="Edit"
                    className="flex size-8 items-center justify-center rounded-md border border-[#f1e2a3] bg-[#fff1b8] text-[#8a6a00] transition hover:brightness-95"
                  >
                    <PencilIcon className="size-4" />
                  </Link>
                  <DeleteButton id={a.id} judul={a.judul} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <AdminPagination page={page} totalPages={totalPages} q={keyword || undefined} />
    </>
  );
}
