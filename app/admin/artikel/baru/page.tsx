import { Suspense } from "react";
import type { Metadata } from "next";
import { getKategori } from "@/lib/api";
import AdminHeader from "@/components/admin/AdminHeader";
import ArtikelForm from "@/components/admin/ArtikelForm";
import { createArtikelAction } from "../actions";

export const metadata: Metadata = { title: "Tambah Artikel | BLUG Admin" };

export default function TambahArtikelPage() {
  return (
    <>
      <AdminHeader title="Tambah Artikel" />
      <Suspense fallback={<p className="py-24 text-center text-[#8c6a00]">Memuat...</p>}>
        <Isi />
      </Suspense>
    </>
  );
}

async function Isi() {
  const kategori = await getKategori();
  return <ArtikelForm action={createArtikelAction} kategori={kategori} submitLabel="Simpan" />;
}
