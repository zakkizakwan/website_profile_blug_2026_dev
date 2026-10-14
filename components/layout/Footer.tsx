import Image from "next/image";
import Link from "next/link";

const navLeft = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
];

const navRight = [
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

// TODO: ganti href dengan link asli organisasi
const socials = [
  { name: "Email", href: "mailto:", icon: "/images/footer/mail.svg" },
  { name: "Instagram", href: "#", icon: "/images/footer/instagram.svg" },
  { name: "LinkedIn", href: "#", icon: "/images/footer/linkedin.svg" },
  { name: "YouTube", href: "#", icon: "/images/footer/youtube.svg" },
  { name: "Facebook", href: "#", icon: "/images/footer/facebook.svg" },
  { name: "TikTok", href: "#", icon: "/images/footer/tiktok.svg" },
];

const linkClass = "text-xl text-black hover:underline underline-offset-4";

export default function Footer() {
  return (
    <footer className="bg-[#f3c803] font-[family-name:var(--font-montserrat)] text-black">
      {/* Baris 1: navigasi + logo di tengah */}
      <nav
        aria-label="Navigasi footer"
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 px-4 py-10 md:gap-x-5"
      >
        {navLeft.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass}>
            {item.label}
          </Link>
        ))}

        {/* Logo: mascot + teks BLUG (lihat catatan aset) */}
        <Link href="/" aria-label="BLUG - Batam Linux User Group" className="flex items-center gap-2">
          <Image src="/images/footer/logo-mascot.svg" alt="" width={58} height={60} />
          <Image src="/images/footer/logo-text.svg" alt="BLUG Batam Linux User Group" width={132} height={43} />
        </Link>

        {navRight.map((item) => (
          <Link key={item.href} href={item.href} className={linkClass}>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Baris 2: ikon sosial media */}
      <ul className="flex items-center justify-center gap-3">
        {socials.map((s) => (
          <li key={s.name}>
            <a href={s.href} aria-label={s.name} className="block transition-opacity hover:opacity-70">
              <Image src={s.icon} alt="" width={24} height={24} />
            </a>
          </li>
        ))}
      </ul>

      {/* Baris 3: copyright */}
      <p className="px-4 py-8 text-center text-base">
        Copyright © 2026 Batam Linux User Group
      </p>
    </footer>
  );
}
