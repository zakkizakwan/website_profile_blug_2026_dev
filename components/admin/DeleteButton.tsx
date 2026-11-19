"use client";

import { useEffect, useState, useTransition } from "react";
import { deleteArtikelAction } from "@/app/admin/artikel/actions";
import { TrashIcon } from "./icons";

export default function DeleteButton({ id, judul }: { id: number; judul: string }) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !pending) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, pending]);

  function konfirmasi() {
    startTransition(async () => {
      await deleteArtikelAction(id);
      setOpen(false);
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Hapus ${judul}`}
        title="Hapus"
        className="flex size-8 cursor-pointer items-center justify-center rounded-md border border-[#f6b8b8] bg-[#ffe3e3] text-[#c62828] transition hover:brightness-95"
      >
        <TrashIcon className="size-4" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => !pending && setOpen(false)}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="hapus-judul"
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="hapus-judul" className="text-lg font-bold text-[#6e5400]">
              Hapus artikel?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              “{judul}” akan dihapus permanen dan tidak bisa dikembalikan.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={pending}
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg border border-[#f1e2a3] px-4 py-2 text-sm font-semibold text-[#8c6a00] transition-colors hover:bg-[#fff9db] disabled:opacity-60"
              >
                Batal
              </button>
              <button
                type="button"
                disabled={pending}
                onClick={konfirmasi}
                className="cursor-pointer rounded-lg bg-[#c62828] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
              >
                {pending ? "Menghapus..." : "Ya, hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
