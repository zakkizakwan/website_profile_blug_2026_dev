# BLUG - Batam Linux User Group (Website Profile 2026) 🐧

Repositori resmi untuk pengembangan website profil **Batam Linux User Group (BLUG)** tahun 2026. Projek ini dibangun menggunakan teknologi web modern berbasis **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4**.

---

## 📋 Daftar Isi
- [Tentang Projek](#-tentang-projek)
- [Halaman & Fitur Utama](#-halaman--fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Arsitektur Data & Mock API](#-arsitektur-data--mock-api)
- [Prasyarat Sistem (Prerequisites)](#-prasyarat-sistem-prerequisites)
- [Panduan Setup & Menjalankan Projek (Step-by-Step)](#-panduan-setup--menjalankan-projek-step-by-step)
  - [1. Clone Repositori](#1-clone-repositori)
  - [2. Masuk ke Direktori Projek](#2-masuk-ke-direktori-projek)
  - [3. Install Dependensi (Wajib)](#3-install-dependensi-wajib)
  - [4. Jalankan Development Server](#4-jalankan-development-server)
  - [5. Buka di Browser](#5-buka-di-browser)
- [Daftar Perintah Tersedia (NPM Scripts)](#-daftar-perintah-tersedia-npm-scripts)
- [Struktur Direktori Projek](#-struktur-direktori-projek)
- [Solusi Masalah Umum (Troubleshooting)](#-solusi-masalah-umum-troubleshooting)
- [Panduan Kontribusi](#-panduan-kontribusi)

---

## 💡 Tentang Projek
Website ini merupakan website profil resmi dari komunitas **Batam Linux User Group (BLUG)**, sebuah komunitas pegiat Linux dan Open Source di Batam. Website ini memuat informasi profil organisasi, kampanye Open Source Camp (OSC) 2026, video profil, struktur divisi dan pengurus harian (BPH), visi misi, program kerja unggulan, publikasi artikel & workshop, serta formulir kontak.

---

## 🌐 Halaman & Fitur Utama

Website ini menggunakan sistem routing **Next.js App Router**:

| Rute | Halaman | Fitur & Komponen Utama |
| :--- | :--- | :--- |
| `/` | **Beranda** | • **Hero**: Sambutan, ajakan pendaftaran OSC 2026, logo Open Source Initiative.<br>• **Video Profile**: Tautan dan preview interaktif channel YouTube Batam Linux.<br>• **Logo Divisi**: Selektor interaktif 5 divisi (Inti, HRD, Siber, Programming, Medinfo) lengkap dengan foto ketua dan deskripsi divisi.<br>• **Pengurus**: Carousel 2 slide banner BPH BLUG 2026 berlatar tipografi Karantina dan foto bersama.<br>• **Tujuan BLUG**: Kutipan visi filosofis organisasi.<br>• **Visi & Misi**: Kartu interaktif flip/hover untuk membaca detail visi & misi.<br>• **Keseruan Belajar**: Program unggulan (Belajar Linux bareng Siber & Belajar Programming bareng BLUG). |
| `/tentang` | **Tentang Kami** | • **Tentang Hero**: Sambutan halaman tentang kami.<br>• **Who Are We**: Pengenalan identitas BLUG.<br>• **Sejarah**: Timeline & narasi kilas balik berdirinya komunitas di Politeknik Negeri Batam.<br>• **BPH Header**: Bagian pembuka struktur Badan Pengurus Harian. |
| `/artikel` | **Artikel & Workshop** | • **Artikel Hero**: Pengantar artikel.<br>• **Pencarian & Filter Kategori**: Filter kata kunci query `?q=` dan filter tag kategori `?tag=`.<br>• **Artikel Unggulan & Grid**: Daftar artikel dan workshop.<br>• **Paginasi**: Navigasi halaman `?page=`.<br>• **Suspense Streaming**: Pemuatan data berbasis Next.js Suspense. |
| `/kontak` | **Kontak Kami** | • **Kontak Info**: Informasi email, sosial media (Instagram, GitHub, YouTube), dan alamat sekretariat dengan kartu glassmorphism.<br>• **Kontak Form**: Formulir pesan langsung bagi pengunjung/mitra. |

---

## 🛠 Teknologi yang Digunakan
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library UI:** [React 19](https://react.dev/) & React DOM 19
- **Bahasa Pemrograman:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) dengan `@tailwindcss/turbopack`
- **Tipografi & Font:** Google Fonts via `next/font/google`:
  - `Inter` (Font teks utama)
  - `Montserrat` (Font judul & aksen)
  - `Karantina` (Font display khusus banner pengurus)
  - `Hanken Grotesk` (Font display)
- **Bundler:** Turbopack (kompilasi kilat untuk dev & build)

---

## 🔌 Arsitektur Data & Mock API (`lib/api.ts`)
Saat ini integrasi backend sungguhan masih dalam proses pengembangan. Untuk memastikan halaman seperti `/artikel` dapat bekerja secara dinamis dan realistis, projek ini menggunakan **abstraksi data layer** di file:
`lib/api.ts`

- `getArtikelList({ q, kategori })`: Mengambil daftar artikel dengan filter pencarian dan kategori.
- `getArtikelBySlug(slug)`: Mengambil artikel spesifik berdasarkan slug URL.
- `getKategori()`: Mengambil daftar kategori yang tersedia.

> 💡 **Untuk Tim Backend/Pengembang Selanjutnya:**  
> Ketika API backend resmi sudah siap, Anda cukup memperbarui isi fungsi di `lib/api.ts` dengan `fetch(...)` ke endpoint backend tanpa perlu merombak struktur komponen halaman.

---

## 💻 Prasyarat Sistem (Prerequisites)
Sebelum melakukan clone, pastikan komputer/laptop kamu sudah terpasang software berikut:

1. **Git**: Untuk mendownload/clone kode sumber dari GitHub.  
   Cek versi: `git --version`
2. **Node.js** (Rekomendasi: **Node.js v20.x atau versi LTS terbaru** / v22 / v24).  
   Cek versi: `node -v`
3. **NPM** (Bawaan instalasi Node.js).  
   Cek versi: `npm -v`
4. Code Editor: [VS Code](https://code.visualstudio.com/), Cursor, atau editor favorit kamu.

> ⚠️ **Catatan:** Projek ini menggunakan Next.js 16 dan React 19 yang memerlukan **Node.js minimal v20 ke atas**.

---

## 🚀 Panduan Setup & Menjalankan Projek (Step-by-Step)

Ikuti langkah-langkah berikut secara berurutan:

### 1. Clone Repositori
Buka terminal (Git Bash, Command Prompt, PowerShell, atau Terminal Linux/macOS), lalu jalankan:

```bash
git clone https://github.com/Wakaranai31/website_profile_blug_2026_dev.git
```

### 2. Masuk ke Direktori Projek
Pindah ke dalam folder projek yang baru saja di-clone:

```bash
cd website_profile_blug_2026_dev
```

### 3. Install Dependensi (Wajib)
> 💡 *Kenapa langkah ini wajib?*  
> Folder `node_modules` sengaja diabaikan oleh Git (ada di `.gitignore`) agar ukuran repositori tetap ringan. Semua pustaka/library yang dibutuhkan tercatat di file `package.json`.

Jalankan perintah berikut untuk mengunduh semua library yang diperlukan:

```bash
npm install
```

Tunggu proses instalasi hingga selesai dan folder `node_modules` berhasil dibuat secara otomatis.

### 4. Jalankan Development Server
Setelah instalasi selesai, jalankan server lokal:

```bash
npm run dev
```

Jika berhasil, terminal akan menampilkan pesan bahwa server siap, contoh:
```text
  ▲ Next.js 16.4.0 (Turbopack)
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000
```

### 5. Buka di Browser
Buka peramban (browser) favorit kamu dan akses URL berikut:
```text
http://localhost:3000
```

Kamu sekarang sudah bisa melihat tampilan website dan mulai menjelajahi halaman Beranda, Tentang, Artikel, maupun Kontak!

---

## 📜 Daftar Perintah Tersedia (NPM Scripts)

| Perintah | Fungsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server mode development (Hot-Reload & Turbopack aktif) |
| `npm run build` | Melakukan build & kompilasi aplikasi untuk mode production |
| `npm run start` | Menjalankan server lokal menggunakan hasil build production |
| `npm run lint` | Memeriksa kualitas kode & potensi error dengan ESLint |

---

## 📂 Struktur Direktori Projek

```text
website_profile_blug_2026_dev/
├── app/
│   ├── artikel/            # Rute /artikel (Pencarian, filter, dan kartu artikel)
│   ├── kontak/             # Rute /kontak (Informasi sekretariat & formulir pesan)
│   ├── tentang/            # Rute /tentang (Who We Are, Sejarah, Profil BPH)
│   ├── favicon.ico         # Icon browser
│   ├── globals.css         # Styling global & konfigurasi animasi kustom Tailwind
│   ├── layout.tsx          # Root layout utama (Font setup, Navbar, Footer)
│   └── page.tsx            # Halaman utama (Beranda)
├── components/
│   ├── layout/             # Komponen navigasi & footer global (Navbar, Footer)
│   ├── sections/           # Komponen section per fitur:
│   │   ├── artikel/        # Komponen khusus halaman artikel (Hero, Filter, Cards)
│   │   ├── kontak/         # Komponen khusus halaman kontak (KontakInfo, KontakForm)
│   │   ├── tentang/        # Komponen khusus halaman tentang (TentangHero, WhoAreWe, Sejarah)
│   │   ├── Hero.tsx        # Section Hero beranda & CTA OSC
│   │   ├── HomeGlow.tsx    # Efek cahaya latar belakang beranda
│   │   ├── KeseruanBelajar.tsx # Section program unggulan
│   │   ├── LogoDivisi.tsx  # Section selektor interaktif divisi BLUG
│   │   ├── Pengurus.tsx    # Section carousel banner BPH BLUG
│   │   ├── TujuanBlug.tsx  # Section kutipan & tujuan organisasi
│   │   ├── VideoProfile.tsx# Section video profil YouTube
│   │   └── VisiMisi.tsx    # Section flip card visi & misi
│   └── ui/                 # Komponen antarmuka yang dapat digunakan ulang (Reusable UI):
│       ├── ProgramCard.tsx # Kartu program kerja
│       └── SectionTitle.tsx# Judul section dengan border gradasi khas
├── lib/
│   └── api.ts              # Lapisan data / mock API artikel & kategori
├── public/                 # Asset statis publik:
│   └── images/
│       ├── artikel/        # Gambar thumbnail artikel & workshop
│       ├── divisi/         # Logo & foto ketua masing-masing divisi
│       ├── footer/         # Asset logo footer & icon
│       ├── hero/           # Maskot OSC & logo OSI
│       ├── pengurus/       # Foto pengurus BPH BLUG
│       ├── program/        # Icon & ilustrasi program unggulan
│       └── tentang/        # Foto sejarah & dokumentasi tentang kami
├── next.config.ts          # Konfigurasi Next.js (Turbopack, cacheComponents, partialPrefetching)
├── package.json            # Daftar dependensi dan scripts npm
├── tsconfig.json           # Konfigurasi TypeScript
└── README.md               # Dokumentasi panduan instalasi & penggunaan
```

---

## 🔧 Solusi Masalah Umum (Troubleshooting)

### 1. Error PowerShell di Windows (`npm.ps1 cannot be loaded`)
**Penyebab:** Kebijakan eksekusi skrip (*Execution Policy*) di PowerShell Windows secara default dibatasi.  
**Solusi:**
- Buka terminal **Git Bash** atau **Command Prompt (cmd)** sebagai alternatif.
- Atau, buka PowerShell sebagai Administrator dan jalankan:
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
  ```

### 2. Port `3000` Sudah Digunakan (`Port 3000 is already in use`)
**Penyebab:** Ada aplikasi lain yang sedang berjalan di port 3000.  
**Solusi:** Next.js otomatis menawarkan beralih ke port `3001`. Jika ingin menentukan port lain secara manual:
```bash
npm run dev -- -p 3005
```
Lalu buka `http://localhost:3005`.

### 3. Masalah Node.js Versi Usang
Jika kamu menemui error kompilasi paket atau sintaks modul Next.js / React 19:
- Cek versi Node.js kamu:
  ```bash
  node -v
  ```
- Jika versinya masih di bawah v20 (misal v16 atau v18 lama), silakan unduh dan pasang versi terbaru di [nodejs.org](https://nodejs.org/).

### 4. Membersihkan Cache Build Next.js
Jika terjadi perilaku aneh setelah update kode atau ganti branch:
```bash
# Hapus folder cache .next (Windows PowerShell)
Remove-Item -Recurse -Force .next

# Hapus folder cache .next (Linux / Git Bash)
rm -rf .next

# Jalankan ulang
npm run dev
```

---

## 🤝 Panduan Kontribusi
1. Fork repositori ini atau buat branch baru dari `main`:
   ```bash
   git checkout -b fitur/nama-fitur-kamu
   ```
2. Lakukan perubahan kode dan pastikan berjalan lancar secara lokal:
   ```bash
   npm run lint
   npm run build
   ```
3. Commit perubahan dengan pesan yang deskriptif:
   ```bash
   git commit -m "feat: tambahkan fitur xyz"
   ```
4. Push ke branch kamu:
   ```bash
   git push origin fitur/nama-fitur-kamu
   ```
5. Buat **Pull Request (PR)** ke branch `main`.

---

Selamat berkontribusi bersama **Batam Linux User Group**! 🐧🚀
