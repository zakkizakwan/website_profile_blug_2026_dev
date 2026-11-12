"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createArtikel, deleteArtikel, updateArtikel, type ArtikelInput } from "@/lib/api";
import { requireSession } from "@/lib/session";

export type ArtikelFormState = {
  error?: string;
  fieldErrors?: Partial<Record<"judul" | "ringkasan" | "kategori" | "tanggal" | "gambar", string>>;
  values?: { judul: string; ringkasan: string; kategori: string; tanggal: string };
};

// Batas body Server Action bawaan Next.js = 1 MB, jadi gambar dibatasi di bawahnya.
const MAX_GAMBAR = 900 * 1024;
const TIPE_GAMBAR = ["image/png", "image/jpeg", "image/webp", "image/gif"];

/**
 * Validasi form. Mengembalikan input yang bersih, atau state error.
 * Gambar sementara disimpan sebagai data URL (mock). Saat backend sungguhan ada,
 * kirim file ke API upload lalu simpan URL yang dikembalikan.
 */
async function parseForm(
  formData: FormData,
): Promise<{ input: ArtikelInput } | { state: ArtikelFormState }> {
  const values = {
    judul: String(formData.get("judul") ?? "").trim(),
    ringkasan: String(formData.get("ringkasan") ?? "").trim(),
    kategori: String(formData.get("kategori") ?? "").trim(),
    tanggal: String(formData.get("tanggal") ?? "").trim(),
  };
  const fieldErrors: NonNullable<ArtikelFormState["fieldErrors"]> = {};

  if (!values.judul) fieldErrors.judul = "Judul wajib diisi.";
  else if (values.judul.length > 150) fieldErrors.judul = "Judul maksimal 150 karakter.";
  if (!values.ringkasan) fieldErrors.ringkasan = "Ringkasan wajib diisi.";
  if (!values.kategori) fieldErrors.kategori = "Tag wajib diisi.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(values.tanggal) || Number.isNaN(Date.parse(values.tanggal))) {
    fieldErrors.tanggal = "Tanggal tidak valid.";
  }

  let gambar = "";
  const file = formData.get("gambar");
  if (file instanceof File && file.size > 0) {
    if (!TIPE_GAMBAR.includes(file.type)) fieldErrors.gambar = "Gambar harus PNG, JPG, WEBP, atau GIF.";
    else if (file.size > MAX_GAMBAR) fieldErrors.gambar = "Ukuran gambar maksimal 900 KB.";
    else gambar = `data:${file.type};base64,${Buffer.from(await file.arrayBuffer()).toString("base64")}`;
  }

  if (Object.keys(fieldErrors).length > 0) return { state: { fieldErrors, values } };
  return { input: { ...values, gambar } };
}

/** Halaman publik + admin yang menampilkan daftar artikel. */
function segarkan() {
  revalidatePath("/artikel");
  revalidatePath("/admin/artikel");
}

export async function createArtikelAction(
  _prev: ArtikelFormState,
  formData: FormData,
): Promise<ArtikelFormState> {
  await requireSession();
  const parsed = await parseForm(formData);
  if ("state" in parsed) return parsed.state;

  await createArtikel(parsed.input);
  segarkan();
  redirect("/admin/artikel?info=dibuat");
}

export async function updateArtikelAction(
  id: number,
  _prev: ArtikelFormState,
  formData: FormData,
): Promise<ArtikelFormState> {
  await requireSession();
  const parsed = await parseForm(formData);
  if ("state" in parsed) return parsed.state;

  const hasil = await updateArtikel(id, parsed.input);
  if (!hasil) return { error: "Artikel tidak ditemukan. Mungkin sudah dihapus." };
  segarkan();
  redirect("/admin/artikel?info=diperbarui");
}

export async function deleteArtikelAction(id: number) {
  await requireSession();
  await deleteArtikel(id);
  segarkan();
}
