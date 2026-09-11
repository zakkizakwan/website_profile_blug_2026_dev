import { intiLogo, ProgramingLogo, SiberLogo, MedinfoLogo, hrdLogo } from "../assets/Pengurus/ModalPengurus";
import { bayuMaulana, mirza, aurel, kayla, sonya, naylah } from "../assets/Pengurus/ModalPengurus";
import {bagas, afif, alif, andika, elisya, lintang, michael, rafif, rendi, zaky, hafiz, tomi} from "../assets/Pengurus/ModalPengurus"
import { shafiq, adam, akbar, aldy, bayu, fadlan, farhan, kelvin, nabila, nohiro, numa, salahudin, syahdan
} from "../assets/Pengurus/ModalPengurus"
import { enru, felda, latifa, mifta, rafika, ririn } from "../assets/Pengurus/ModalPengurus"
import { rahel, ibnu, adib, alifstarboy, chiril, fuad, aziz, nazhwa, risi, yerico } from "../assets/Pengurus/ModalPengurus"

export const pengurusDetail = {
    inti: {
      logoDivisi: intiLogo,
      deskripsi: "Divisi yang bertanggung jawab dalam menjaga organisasi tetap berjalan, mengurus administrasi dan kearsipan, serta menjaga permasalahan internal & eksternal.",
      anggota: [
        { nama: "Bayu Maulana", jabatan: "Ketua Umum", foto: bayuMaulana },
        { nama: "Mirza Ardanas", jabatan: "Wakil Ketua Umum", foto: mirza },
        { nama: "Aurel Anatasya", jabatan: "Sekretaris 1", foto: aurel },
        { nama: "Amatullah Nurkayla", jabatan: "Sekretaris 2", foto: kayla },
        { nama: "Sonya Alya", jabatan: "Bendahara 1", foto: sonya },
        { nama: "Naylah Amirah", jabatan: "Bendahara 2", foto: naylah },
      ],
      bullet: [
        "Administrasi & Kearsipan",
        "Rapat Koordinasi",
        "Manajemen Organisasi"
      ],
      bulletDesc: [
        "Mengurus dokumen, surat, arsip organisasi, serta hal administrasi lainnya.",
        "Koordinasi rutin untuk memastikan divisi berjalan selaras.",
        "Mengatur jalannya organisasi agar tetap tertib dan terarah."
      ]
    },
    programming: {
      logoDivisi: ProgramingLogo,
      deskripsi: "Divisi yang berfokus pada pengembangan kemampuan pemrograman bagi anggota BLUG maupun masyarakat umum. Programming menjadi wadah belajar, berbagi ilmu, dan mengembangkan project bersama di bidang software.",
      anggota: [
        { nama: "Bagas Satrio", jabatan: "Kepala Divisi", foto: bagas },
        { nama: "M. Afif Al Fawaz", jabatan: "Wakil Kepala Divisi", foto: afif },
        { nama: "Alif Fajriadi", jabatan: "Anggota", foto: alif },
        { nama: "Rafif Ihsan Syahwali", jabatan: "Anggota", foto: rafif },
        { nama: "Tomingse Lingga", jabatan: "Anggota", foto: tomi },
        { nama: "Elisya Ananda Putri", jabatan: "Anggota", foto: elisya },
        { nama: "Lintang", jabatan: "Anggota", foto: lintang },
        { nama: "Hafiz Zaky Alfarizi", jabatan: "Anggota", foto: zaky },
        { nama: "Hafiz Atama", jabatan: "Anggota", foto: hafiz },
        { nama: "Michael Lee", jabatan: "Anggota", foto: michael },
        { nama: "Rendi Sinaga", jabatan: "Anggota", foto: rendi },
        { nama: "Andika Fathan", jabatan: "Anggota", foto: andika },
      ],
      bullet: [
        "BLUGCamp Programming",
        "BnB Programming",
        "Workshop Programming"
      ],
      bulletDesc: [
        "Pelatihan programming untuk anggota.",
        "Belajar dan Berbagi bersama Programming.",
        "Webinar Programming dengan pemateri kece."
      ]
    },
    siber: {
      logoDivisi: SiberLogo,
      deskripsi: "Divisi yang bergerak di bidang keamanan siber dan jaringan komputer. Fokusnya adalah memperluas wawasan, melatih keterampilan, dan membangun kesadaran tentang pentingnya keamanan digital.",
      anggota: [
        { nama: "Shafiq", jabatan: "Kepala Divisi", foto: shafiq },
        { nama: "Bayu Arjuna", jabatan: "Wakil Kepala Divisi", foto: bayu},
        { nama: "Adam Rizky", jabatan: "Anggota", foto: adam },
        { nama: "Aldy Jhonatan", jabatan: "Anggota", foto: aldy },
        { nama: "Fadlan", jabatan: "Anggota", foto: fadlan },
        { nama: "Kelvin Prayoga", jabatan: "Anggota", foto: kelvin },
        { nama: "M. Fadlan Rahim", jabatan: "Anggota", foto: farhan },
        { nama: "Nabila Aulia", jabatan: "Anggota", foto: nabila },
        { nama: "Nohiro Hazel", jabatan: "Anggota", foto: nohiro },
        { nama: "Numa Mata", jabatan: "Anggota", foto: numa },
        { nama: "Salahudin", jabatan: "Anggota", foto: salahudin },
        { nama: "Sahdan Arief", jabatan: "Anggota", foto: syahdan },
        { nama: "Akbar Hafiz", jabatan: "Anggota", foto: akbar },
      ],
      bullet: [
        "BLUGCamp Siber",
        "BnB Siber",
        "Workshop Siber"
      ],
      bulletDesc: [
        "Pelatihan keamanan siber untuk anggota.",
        "Belajar dan Berbagi bersama Siber.",
        "Webinar Siber dengan pemateri kece."
      ]
    },

    medinfo: {
      logoDivisi: MedinfoLogo,
      deskripsi: "Divisi yang mengelola media informasi BLUG, termasuk sosial media, konten publikasi, dan dokumentasi kegiatan. Medinfo menjadi wajah organisasi dalam menyampaikan informasi kepada publik.",
      anggota: [
        { nama: "Rahel Simanjuntak", jabatan: "Kepala Divisi", foto: rahel },
        { nama: "Ibnu HS", jabatan: "Wakil Kepala Divisi", foto: ibnu },
        { nama: "Adib Fakhri", jabatan: "Anggota", foto: adib },
        { nama: "Alif Hidayat", jabatan: "Anggota", foto: alifstarboy },
        { nama: "Chyril Lihardo", jabatan: "Anggota", foto: chiril },
        { nama: "Fuad Restu", jabatan: "Anggota", foto: fuad },
        { nama: "M. Abdull Aziz", jabatan: "Anggota", foto: aziz },
        { nama: "Nazhwa Rahma Putri", jabatan: "Anggota", foto: nazhwa },
        { nama: "Risi Gustiar", jabatan: "Anggota", foto: risi },
        { nama: "Yerico Marchel", jabatan: "Anggota", foto: yerico },
      ],
      bullet: [
        "Konten Sosial Media",
        "Dokumentasi Program Kerja",
        "Desain UI/UX"
      ],
      bulletDesc: [
        "Membuat konten untuk sosial media BLUG.",
        "Melakukan dokumentasi dalam program kerja BLUG.",
        "Mendesain UI/UX dari website BLUG."
      ]
    },
    HRD: {
      logoDivisi: hrdLogo,
      deskripsi: "Divisi yang menjaga hubungan antar-anggota sekaligus membangun relasi dengan pihak luar. HRD juga memastikan kerja sama dan suasana internal tetap solid, nyaman, dan harmonis.",
      anggota:[
        { nama: "Ririn Anggraini", jabatan: "Kepala Divisi", foto: ririn },
        { nama: "Enru", jabatan: "Wakil Kepala Divisi", foto: enru },
        { nama: "Rafika", jabatan: "Anggota", foto: rafika },
        { nama: "Latifa", jabatan: "Anggota", foto: latifa },
        { nama: "Felda", jabatan: "Anggota", foto: felda },
        { nama: "Mifta", jabatan: "Anggota", foto: mifta },
      ],
      bullet: [
        "Termin Evaluation",
        "BLUG Birthday",
        "Kegiatan Pengaderan"
      ],
      bulletDesc: [
        "Melakukan evaluasi tiap termin.",
        "Mengatur perayaan ulang tahun BLUG.",
        "Mengorganisir kegiatan pengaderan bagi anggota baru."
      ]
    }
  };