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

/** Data yang diisi admin saat menambah / mengubah artikel (id & slug dibuat oleh "backend"). */
export type ArtikelInput = Omit<Artikel, "id" | "slug">;

/** Gambar bawaan bila artikel dibuat tanpa gambar. */
export const GAMBAR_DEFAULT = "/images/artikel/placeholder.svg";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

const SEED: Artikel[] = [
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

// Disimpan di globalThis supaya perubahan (tambah/edit/hapus) tidak ter-reset oleh hot reload.
// Data mock tetap kembali ke awal bila server di-restart.
const store = globalThis as unknown as { __artikel?: Artikel[]; __artikelNextId?: number };
const ARTIKEL: Artikel[] = (store.__artikel ??= SEED.map((a) => ({ ...a })));
store.__artikelNextId ??= Math.max(...SEED.map((a) => a.id)) + 1;

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

/* ------------------------------------------------------------------ */
/* Tambahan untuk panel admin (mock)                                   */
/* ------------------------------------------------------------------ */

function buatSlug(judul: string, abaikanId?: number): string {
  const dasar =
    judul
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "artikel";
  let slug = dasar;
  let n = 2;
  while (ARTIKEL.some((a) => a.slug === slug && a.id !== abaikanId)) slug = `${dasar}-${n++}`;
  return slug;
}

/** Satu artikel berdasarkan id (untuk halaman edit admin). */
export async function getArtikelById(id: number): Promise<Artikel | null> {
  return ARTIKEL.find((a) => a.id === id) ?? null;
}

/** Tambah artikel baru. */
export async function createArtikel(input: ArtikelInput): Promise<Artikel> {
  const artikel: Artikel = {
    id: store.__artikelNextId!++,
    slug: buatSlug(input.judul),
    ...input,
    gambar: input.gambar || GAMBAR_DEFAULT,
  };
  ARTIKEL.push(artikel);
  return artikel;
}

/** Ubah artikel. Mengembalikan null bila id tidak ditemukan. Gambar kosong = pakai gambar lama. */
export async function updateArtikel(id: number, input: ArtikelInput): Promise<Artikel | null> {
  const idx = ARTIKEL.findIndex((a) => a.id === id);
  if (idx === -1) return null;
  const lama = ARTIKEL[idx];
  ARTIKEL[idx] = {
    ...lama,
    ...input,
    slug: input.judul === lama.judul ? lama.slug : buatSlug(input.judul, id),
    gambar: input.gambar || lama.gambar,
  };
  return ARTIKEL[idx];
}

/** Hapus artikel. Mengembalikan true bila ada yang terhapus. */
export async function deleteArtikel(id: number): Promise<boolean> {
  const idx = ARTIKEL.findIndex((a) => a.id === id);
  if (idx === -1) return false;
  ARTIKEL.splice(idx, 1);
  return true;
}

/* Autentikasi admin: akun & token palsu. Ganti dengan endpoint login sungguhan nanti. */
const MOCK_ADMIN = { username: "admin", password: "admin123" };
const MOCK_TOKEN = "mock-admin-session-token";

export type Session = { username: string };

/** Login admin. Mengembalikan token sesi, atau null bila username/password salah. */
export async function loginAdmin(
  username: string,
  password: string,
): Promise<{ token: string; username: string } | null> {
  if (username === MOCK_ADMIN.username && password === MOCK_ADMIN.password) {
    return { token: MOCK_TOKEN, username: MOCK_ADMIN.username };
  }
  return null;
}

/** Cek token sesi. Mengembalikan data admin, atau null bila token tidak valid. */
export async function verifySession(token: string): Promise<Session | null> {
  return token === MOCK_TOKEN ? { username: MOCK_ADMIN.username } : null;
}
