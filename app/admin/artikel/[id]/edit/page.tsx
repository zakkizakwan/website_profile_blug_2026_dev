import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtikelById, getKategori } from "@/lib/api";
import AdminHeader from "@/components/admin/AdminHeader";
import ArtikelForm from "@/components/admin/ArtikelForm";
import { updateArtikelAction } from "../../actions";

export const metadata: Metadata = { title: "Edit Artikel | BLUG Admin" };

/* Tidak async: params dibaca di dalam <Suspense> (aturan `cacheComponents`). */
export default function EditArtikelPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <>
      <AdminHeader title="Edit Artikel" />
      <Suspense fallback={<p className="py-24 text-center text-[#8c6a00]">Memuat...</p>}>
        <Isi params={params} />
      </Suspense>
    </>
  );
}

async function Isi({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const angka = Number(id);
  if (!Number.isInteger(angka)) notFound();

  const [artikel, kategori] = await Promise.all([getArtikelById(angka), getKategori()]);
  if (!artikel) notFound();

  return (
    <ArtikelForm
      action={updateArtikelAction.bind(null, artikel.id)}
      artikel={artikel}
      kategori={kategori}
      submitLabel="Simpan Perubahan"
    />
  );
}
