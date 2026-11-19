"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import type { Artikel } from "@/lib/api";
import type { ArtikelFormState } from "@/app/admin/artikel/actions";
import { ImagePlusIcon } from "./icons";

type Action = (prev: ArtikelFormState, formData: FormData) => Promise<ArtikelFormState>;

const field =
  "w-full rounded-lg border border-[#e3cf84] bg-white px-3.5 py-2.5 text-[15px] text-[#6e5400] placeholder:text-gray-400 focus:border-[#f2c400] focus:outline-none focus:ring-2 focus:ring-[#fcd205]/60";
const label = "mb-2 block text-sm font-bold text-[#8a6a00]";

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} className="mt-1 text-[13px] font-medium text-[#c62828]">
      {msg}
    </p>
  ) : null;
}

export default function ArtikelForm({
  action,
  artikel,
  kategori,
  submitLabel,
}: {
  action: Action;
  artikel?: Artikel;
  kategori: string[];
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState<ArtikelFormState, FormData>(action, {});
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const v = state.values;
  const fe = state.fieldErrors ?? {};
  const tampil = preview ?? artikel?.gambar ?? null;

  return (
    <form
      action={formAction}
      className="rounded-[28px] border border-[#e3cf84] bg-white/60 p-6 sm:p-9"
      noValidate
    >
      {state.error && (
        <p
          role="alert"
          className="mb-5 rounded-lg border border-[#f6b8b8] bg-[#ffe3e3] px-4 py-2.5 text-sm font-medium text-[#c62828]"
        >
          {state.error}
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <div>
          <span className={label}>Gambar</span>
          <label className="flex aspect-[4/5] w-full cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed border-[#e3cf84] bg-[#fff9db] text-center text-sm text-[#8a6a00] transition-colors hover:bg-[#fff1b8] focus-within:ring-2 focus-within:ring-[#fcd205]">
            {tampil ? (
              <Image
                src={tampil}
                alt="Pratinjau gambar"
                width={220}
                height={275}
                unoptimized
                className="size-full object-cover"
              />
            ) : (
              <>
                <ImagePlusIcon className="size-8" />
                <span className="px-3 font-medium">Klik untuk pilih gambar</span>
              </>
            )}
            <input
              type="file"
              name="gambar"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="sr-only"
              aria-describedby="err-gambar"
              onChange={(e) => {
                const f = e.target.files?.[0];
                setPreview(f ? URL.createObjectURL(f) : null);
              }}
            />
          </label>
          <p className="mt-1.5 text-xs text-gray-500">
            PNG/JPG/WEBP/GIF, maks. 900 KB.
            {artikel && " Kosongkan untuk tetap memakai gambar lama."}
          </p>
          <Err id="err-gambar" msg={fe.gambar} />
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="judul" className={label}>
              Judul
            </label>
            <input
              id="judul"
              name="judul"
              defaultValue={v?.judul ?? artikel?.judul}
              maxLength={150}
              placeholder="Judul artikel"
              aria-invalid={!!fe.judul}
              aria-describedby="err-judul"
              className={field}
            />
            <Err id="err-judul" msg={fe.judul} />
          </div>

          <div>
            <label htmlFor="ringkasan" className={label}>
              Ringkasan
            </label>
            <textarea
              id="ringkasan"
              name="ringkasan"
              rows={5}
              defaultValue={v?.ringkasan ?? artikel?.ringkasan}
              placeholder="Ringkasan singkat artikel"
              aria-invalid={!!fe.ringkasan}
              aria-describedby="err-ringkasan"
              className={field}
            />
            <Err id="err-ringkasan" msg={fe.ringkasan} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="kategori" className={label}>
                Tag
              </label>
              <input
                id="kategori"
                name="kategori"
                list="daftar-kategori"
                defaultValue={v?.kategori ?? artikel?.kategori}
                placeholder="mis. Workshop"
                aria-invalid={!!fe.kategori}
                aria-describedby="err-kategori"
                className={field}
              />
              <datalist id="daftar-kategori">
                {kategori.map((k) => (
                  <option key={k} value={k} />
                ))}
              </datalist>
              <Err id="err-kategori" msg={fe.kategori} />
            </div>

            <div>
              <label htmlFor="tanggal" className={label}>
                Tanggal
              </label>
              <input
                id="tanggal"
                name="tanggal"
                type="date"
                defaultValue={v?.tanggal ?? artikel?.tanggal}
                aria-invalid={!!fe.tanggal}
                aria-describedby="err-tanggal"
                className={field}
              />
              <Err id="err-tanggal" msg={fe.tanggal} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <Link
          href="/admin/artikel"
          className="flex h-10 items-center rounded-lg border border-[#e3cf84] px-5 text-sm font-semibold text-[#8a6a00] transition-colors hover:bg-[#fff9db]"
        >
          Batal
        </Link>
        <button
          type="submit"
          disabled={pending}
          className="h-10 cursor-pointer rounded-lg border border-[#e3cf84] bg-[#fcd205] px-6 text-sm font-bold text-black shadow-sm transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Menyimpan..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
