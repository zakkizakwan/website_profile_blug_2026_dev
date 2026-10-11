# BLUG - Batam Linux User Group (Website Profile 2026) 🐧

Repositori resmi untuk pengembangan website profil **Batam Linux User Group (BLUG)** tahun 2026. Projek ini dibangun menggunakan teknologi web modern berbasis **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4**.

---

## 📋 Daftar Isi
- [Tentang Projek](#-tentang-projek)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
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

---

## 💡 Tentang Projek
Website ini memuat informasi profil organisasi, komunitas open-source Batam Linux User Group, kampanye Open Source Camp (OSC) 2026, profil video, informasi divisi, dan kegiatan komunitas.

---

## 🛠 Teknologi yang Digunakan
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library UI:** [React 19](https://react.dev/)
- **Bahasa Pemrograman:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) dengan `@tailwindcss/turbopack`
- **Font:** Google Fonts (`Inter` & `Montserrat`) melalui `next/font`
- **Bundler:** Turbopack

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

> ⚠️ **Catatan Penting:** Projek ini menggunakan Next.js 16 dan React 19 yang memerlukan Node.js versi modern (minimal Node.js v18.18+, disarankan **Node.js v20 ke atas**).

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

Kamu sekarang sudah bisa melihat tampilan website dan mulai berkontribusi! Perubahan kode yang kamu simpan akan otomatis ter-update secara real-time (*Fast Refresh*).

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
│   ├── favicon.ico         # Icon browser
│   ├── globals.css         # Styling global & konfigurasi animasi Tailwind
│   ├── layout.tsx          # Root layout utama (Navbar, Footer, Font setup)
│   └── page.tsx            # Halaman beranda utama
├── components/
│   ├── layout/             # Komponen tata letak (Navbar, Footer)
│   └── sections/           # Komponen bagian halaman (Hero, VideoProfile, HomeGlow)
├── public/                 # Asset statis publik (gambar mascot, logo, svg)
│   └── images/
│       └── hero/           # Asset gambar bagian hero (maskot OSC, logo OSI)
├── next.config.ts          # Konfigurasi Next.js & Turbopack
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
**Solusi:** Next.js biasanya otomatis menawarkan beralih ke port `3001`. Jika ingin menentukan port lain secara manual:
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

## 🤝 Kontribusi
1. Fork atau buat branch baru: `git checkout -b fitur-kamu`
2. Lakukan perubahan dan commit: `git commit -m 'feat: tambah fitur baru'`
3. Push ke branch kamu: `git push origin fitur-kamu`
4. Buat Pull Request (PR) ke branch `main`.

Selamat ngoding bersama Batam Linux User Group! 🚀
