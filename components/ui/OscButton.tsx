import Image from "next/image";
import Link from "next/link";

/*
 * Tombol "DAFTAR OSC 2026" (komponen "Frame 38" di Figma: varian Default & Variant2/hover),
 * dipakai di beranda dan halaman Tentang. Ukuran = Figma x 0,4 (sedikit lebih kecil dari
 * ÷2 sebelumnya, yaitu 269 x 156px). Mau diubah lagi? Cukup ganti SCALE di bawah.
 *
 * Efek hover / fokus keyboard (0,3 detik, ease-out, sesuai prototype):
 *   - maskot membesar ±13%
 *   - tulisan membesar ±8% dan naik sedikit
 *   - muncul garis gelap di dasar kotak oranye + cahaya merah gelap di belakang
 * Gambar: public/images/hero/osc-mascot.png (sama seperti sebelumnya).
 */

const SCALE = 0.4;
const px = (n: number) => `${+(n * SCALE).toFixed(2)}px`;

const ease = "transition duration-300 ease-out motion-reduce:transition-none";

export default function OscButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="https://blug.polibatam.ac.id/osc2026/" // TODO: ganti dengan link pendaftaran OSC
      aria-label="Daftar OSC 2026"
      style={{ width: px(672.755), height: px(389.899) }}
      className={`group relative block focus-visible:outline-none ${className}`}
    >
      {/* cahaya merah gelap di belakang (hanya saat hover) */}
      <span
        aria-hidden
        style={{
          left: px(52.88),
          top: px(69.17),
          width: px(628.056),
          height: px(242.889),
          filter: `blur(${px(138.4)})`,
        }}
        className={`absolute rounded-full bg-[#662012] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 ${ease}`}
      />

      {/* kotak oranye */}
      <span
        style={{
          left: px(161.98),
          top: px(108.6),
          width: px(510.779),
          height: px(173.02),
          borderRadius: px(26.689),
        }}
        className="absolute bg-[#e9672d] group-focus-visible:ring-2 group-focus-visible:ring-white"
      />

      {/* garis gelap di dasar kotak (hanya saat hover) */}
      <span
        aria-hidden
        style={{
          left: px(121.88),
          top: px(252.17),
          width: px(552),
          height: px(28),
          borderRadius: px(26),
        }}
        className={`absolute bg-[#a94d28] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 ${ease}`}
      />

      {/* tulisan: membesar & naik saat hover (center default 418,7 x 195,5 -> hover 416,9 x 177,7) */}
      <span
        style={{
          left: px(217.2),
          top: px(169.01),
          width: px(403),
          height: px(53),
          fontSize: px(43.412),
          ["--lift" as string]: px(-17.8),
        }}
        className={`absolute flex items-center justify-center whitespace-nowrap font-bold leading-[normal] text-white group-hover:translate-y-[var(--lift)] group-hover:scale-[1.082] group-focus-visible:translate-y-[var(--lift)] group-focus-visible:scale-[1.082] ${ease}`}
      >
        DAFTAR OSC 2026
      </span>

      {/* maskot: 267,8 x 389,9 -> 302 x 439 saat hover (x1,128 dari tengahnya) */}
      <span
        style={{ left: 0, top: 0, width: px(267.814), height: px(389.899) }}
        className={`absolute group-hover:scale-[1.128] group-focus-visible:scale-[1.128] ${ease}`}
      >
        <Image
          src="/images/hero/osc-mascot.png"
          alt=""
          fill
          sizes="140px"
          className="object-contain"
        />
      </span>
    </Link>
  );
}
