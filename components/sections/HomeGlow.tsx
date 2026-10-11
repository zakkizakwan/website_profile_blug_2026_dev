import Image from "next/image";

/**
 * Cahaya latar beranda (Ellipse 36, 37, 38, 40 dari Figma).
 * Dipasang SEKALI di pembungkus beranda (app/page.tsx) supaya mengalir melewati
 * beberapa bagian sekaligus. Posisi = koordinat Figma / 2, diukur dari atas beranda.
 */
export default function HomeGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/images/hero/Ellipse-36.svg"
        alt=""
        width={658}
        height={568}
        className="absolute left-0 top-0 max-w-none"
      />
      <Image
        src="/images/hero/Ellipse-37.svg"
        alt=""
        width={453}
        height={1826}
        className="absolute right-0 top-[359px] max-w-none"
      />
      <Image
        src="/images/hero/Ellipse-38.svg"
        alt=""
        width={667}
        height={2158}
        className="absolute left-0 top-[135px] max-w-none"
      />
      <Image
        src="/images/hero/Ellipse-40.svg"
        alt=""
        width={831}
        height={796}
        className="hero-glow absolute left-1/2 top-[401px] max-w-none -translate-x-1/2"
      />
    </div>
  );
}
