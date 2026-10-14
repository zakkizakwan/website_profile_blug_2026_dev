/** Bangun alamat /artikel?q=...&tag=...&page=... (parameter kosong dibuang) */
export function artikelHref(p: { q?: string; tag?: string; page?: number }) {
  const sp = new URLSearchParams();
  if (p.q) sp.set("q", p.q);
  if (p.tag) sp.set("tag", p.tag);
  if (p.page && p.page > 1) sp.set("page", String(p.page));
  const s = sp.toString();
  return s ? `/artikel?${s}` : "/artikel";
}

/** 2025-08-23 -> "23 Agustus 2025" */
export function formatTanggal(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
