import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative px-6 pb-[110px] pt-36 lg:px-[150px] lg:pt-[260px]">
      {/* Tombol Daftar OSC: di luar wrapper supaya `right` dihitung dari tepi section */}
      <Link
        href="#" // TODO: ganti dengan link pendaftaran OSC
        aria-label="Daftar OSC 2026"
        className="relative mb-10 block h-[195px] w-[336px] origin-left scale-90 lg:absolute lg:right-[57px] lg:top-[28px] lg:mb-0 lg:scale-100"
      >
        <span className="absolute left-[81px] top-[54px] flex h-[86px] w-[255px] items-center justify-center rounded-[13px] bg-[#e9672d] text-[22px] font-bold text-white">
          DAFTAR OSC 2026
        </span>
        <Image
          src="/images/hero/osc-mascot.png"
          alt=""
          width={134}
          height={195}
          className="absolute left-0 top-0"
        />
      </Link>
      <div className="relative">
        {/* Tombol Daftar OSC (kanan atas di desktop) */}

        <p className="text-xl font-bold">Halo Linuxers! Selamat Datang di</p>

        {/* Judul meluncur masuk dari kiri; wrapper overflow-hidden bertugas "memotong" bagian yang belum masuk */}
        <div className="overflow-hidden py-1">
          <h1 className="hero-title mt-0 text-[clamp(1.75rem,6vw,45px)] font-bold leading-tight lg:whitespace-nowrap">
            BATAM LINUX USER GROUP
          </h1>
        </div>

        {/* Kotak teks melebar dari kiri ke kanan; teks di dalamnya diam dan "terbuka" mengikuti lebar kotak */}
        <div className="hero-box mt-8 w-full max-w-[680px] overflow-hidden rounded-[10.5px] border border-[#f9d00a] bg-[#171717]/60 p-5">
          <p className="text-lg font-medium text-white lg:w-[638px]">
            Linux menguasai lebih dari <strong className="font-bold">63%</strong>{" "}
            hingga <strong className="font-bold">77%</strong> pangsa pasar server
            web dan cloud global, dengan Ubuntu sebagai distribusi terpopuler
            yang menguasai sekitar <strong className="font-bold">13,7%</strong>{" "}
            pangsa server web.
          </p>
        </div>

        {/* Logo Open Source: fade + naik (keyframes di globals.css) */}
        <div className="mt-[120px] flex justify-center lg:mt-[177px]">
          <Image
            src="/images/hero/osi-logo.png"
            alt="Logo Open Source Initiative"
            width={404}
            height={303}
            priority
            className="hero-logo mix-blend-lighten"
          />
        </div>
      </div>
    </section>
  );
}
