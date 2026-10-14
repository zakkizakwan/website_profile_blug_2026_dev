/*
 * Satu-satunya pintu data ke "backend".
 *
 * Backend (dari tim lain) belum ada, jadi sementara datanya palsu (mock) di bawah ini.
 * Semua komponen/halaman HARUS mengambil data lewat fungsi-fungsi di file ini, jangan langsung
 * membaca array ARTIKEL. Nanti saat API sungguhan sudah jadi, cukup isi ulang fungsi-fungsi ini
 * dengan fetch(...) tanpa menyentuh halaman/komponen.
 *
 * Gambar: file di public/images/artikel/ (nanti berupa URL dari server).
 */

export type Artikel = {
  id: number;
  slug: string;
  judul: string;
  ringkasan: string;
  kategori: string;
  /** format ISO: 2025-08-23 */
  tanggal: string;
  gambar: string;
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

const ARTIKEL: Artikel[] = [
  {
    id: 1,
    slug: "bnb-programming-react-js",
    judul: "Bnb Programming React JS",
    ringkasan: LOREM,
    kategori: "Workshop",
    tanggal: "2025-08-23",
    gambar: "/images/artikel/react-js.png",
  },
  {
    id: 2,
    slug: "bnb-siber-attacks-on-firewall-using-an-ai-bot",
    judul: "Bnb Siber Attack’s On Firewall Using An A.I Bot",
    ringkasan: LOREM,
    kategori: "Workshop",
    tanggal: "2025-08-09",
    gambar: "/images/artikel/siber-firewall.png",
  },
  {
    id: 3,
    slug: "bnb-programming-front-end-web-dengan-nextjs",
    judul: "Bnb Programming Front-End Web dengan NEXT.js",
    ringkasan: LOREM,
    kategori: "Workshop",
    tanggal: "2025-07-26",
    gambar: "/images/artikel/nextjs.png",
  },
  {
    id: 4,
    slug: "bnb-programming-mvc-konsep-mvc-pada-laravel",
    judul: "BnB Programming MVC: Mengenal Konsep MVC pada laravel",
    ringkasan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    kategori: "Workshop",
    tanggal: "2025-06-28",
    gambar: "/images/artikel/laravel-mvc.png",
  },
  {
    id: 5,
    slug: "bnb-siber-getting-started-with-cybersecurity",
    judul: "Bnb Siber Getting Started with Cybersecurity",
    ringkasan: LOREM,
    kategori: "Workshop",
    tanggal: "2025-06-28",
    gambar: "/images/artikel/siber-cybersecurity.png",
  },
];

/** Daftar artikel, terbaru dulu. q = kata kunci (judul / ringkasan), kategori = filter tag. */
export async function getArtikelList(
  opts: { q?: string; kategori?: string } = {},
): Promise<Artikel[]> {
  const q = opts.q?.trim().toLowerCase();
  return ARTIKEL.filter((a) => {
    if (opts.kategori && a.kategori !== opts.kategori) return false;
    if (q && !`${a.judul} ${a.ringkasan}`.toLowerCase().includes(q)) return false;
    return true;
  }).sort((a, b) => b.tanggal.localeCompare(a.tanggal));
}

/** Satu artikel berdasarkan slug (untuk halaman detail nanti). */
export async function getArtikelBySlug(slug: string): Promise<Artikel | null> {
  return ARTIKEL.find((a) => a.slug === slug) ?? null;
}

/** Daftar kategori/tag yang ada (tanpa "Semua"). */
export async function getKategori(): Promise<string[]> {
  return [...new Set(ARTIKEL.map((a) => a.kategori))];
}
