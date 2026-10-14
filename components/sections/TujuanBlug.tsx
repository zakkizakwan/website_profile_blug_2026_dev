import type { CSSProperties } from "react";

/*
 * Bagian "TUJUAN BLUG" (Home di Figma, y ≈ 6145–6793).
 *
 * Desktop: 1 satuan "u" = 1px pada lebar desain 1240px (Figma dibagi 2), tapi dihitung dari
 * lebar wadah (cqw), jadi seluruh komposisi ikut membesar/mengecil. Semua angka di bawah
 * = nilai Figma dibagi 2, diukur dari pojok kiri-atas kartu "TUJUAN BLUG".
 * HP / tablet: kartu dan panel kutipan ditumpuk ke bawah dengan ukuran biasa.
 *
 * Tidak butuh gambar baru: tanda kutip & cahaya latar digambar langsung di sini.
 */

const u = (n: number) => `calc(var(--u) * ${n})`;

const QUOTE =
  "Menjadikan BLUG sebagai ruang belajar dan berkembang untuk semua, baik anggota internal maupun eksternal, yang ingin mendalami Linux dan ekosistem open source. Kami mendorong semangat eksplorasi, kontribusi, dan berbagi ilmu melalui berbagai program edukatif dan komunitas yang suportif.";

/** Garis tepi gradasi merah -> kuning (atas -> bawah) dengan isi transparan, lewat mask */
function GradBorder({ radius }: { radius: string }) {
  const mask = "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";
  return (
    <span
      aria-hidden
      style={{
        borderRadius: radius,
        padding: 1,
        background: "linear-gradient(to bottom, #fe2f2f, #f9d00a)",
        WebkitMask: mask,
        mask,
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
      className="pointer-events-none absolute inset-0"
    />
  );
}

/** Tanda kutip kuning (bentuk persis dari Figma, 70 x 70) */
function QuoteMark({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 70 70" fill="#fcd205" aria-hidden className={className} style={style}>
      <path d="M 0 0 L 31.3169 0 L 31.3169 38.2514 L 14.8037 70.0025 L 4.7712 70.0025 L 14.5937 40.0014 L 0 40.0014 L 0 0 Z M 38.6856 0 L 70.0025 0 L 70.0025 38.2514 L 53.4893 70.0025 L 43.4568 70.0025 L 53.2793 40.0014 L 38.6856 40.0014 L 38.6856 0 Z" />
    </svg>
  );
}

/** Cahaya emas radial (Ellipse 31 / 32 di Figma, 750px) */
const glow =
  "radial-gradient(closest-side, rgba(200,155,0,1) 0%, rgba(200,155,0,.75) 25%, rgba(200,155,0,.5) 50%, rgba(200,155,0,.25) 75%, rgba(200,155,0,.125) 87.5%, rgba(200,155,0,0) 100%)";

export default function TujuanBlug() {
  return (
    <section className="relative px-6 pb-24 lg:px-0 lg:pb-[85px]">
      {/* Cahaya latar kiri & kanan */}
      <div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute -left-[512px] top-[-146px] hidden h-[750px] w-[750px] lg:block"
      />
      <div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute -right-[596px] top-[184px] hidden h-[750px] w-[750px] lg:block"
      />

      {/* ================= DESKTOP ================= */}
      <div className="relative mx-auto hidden w-full max-w-[1240px] [container-type:inline-size] lg:block">
        <div
          style={{ ["--u" as string]: "calc(100cqw / 1240)", height: u(324) }}
          className="relative"
        >
          {/* Panel kutipan (di belakang kartu) */}
          <div
            style={{ left: u(26), top: u(55), width: u(1214), height: u(269) }}
            className="absolute"
          >
            <GradBorder radius={u(11.9)} />
          </div>

          <QuoteMark
            style={{ left: u(506.2), top: u(80.8), width: u(35), height: u(35) }}
            className="absolute rotate-180"
          />
          <p
            style={{ left: u(545.7), top: u(98.3), width: u(660), fontSize: u(24) }}
            className="absolute text-justify font-bold leading-[normal] text-[#f7f3f3]"
          >
            {QUOTE}
          </p>
          <QuoteMark
            style={{ left: u(1213.8), top: u(251.5), width: u(35), height: u(35) }}
            className="absolute"
          />

          {/* Kartu "TUJUAN BLUG" */}
          <div
            style={{ left: 0, top: 0, width: u(450), height: u(259.5), borderRadius: u(13.6) }}
            className="absolute bg-[#191818]"
          >
            <GradBorder radius={u(13.6)} />
            <span
              style={{ left: u(21.5), top: u(10), width: u(330.5), fontSize: u(79) }}
              className="absolute text-center font-bold leading-[normal] text-[#fff8d6]"
            >
              TUJUAN
            </span>
            <span
              style={{ left: u(25.5), top: u(87), width: u(252), fontSize: u(92.5) }}
              className="absolute text-center font-bold leading-[normal] text-[#fcd205]"
            >
              BLUG
            </span>
            {/* pill di dasar kartu */}
            <div
              style={{ left: 0, top: u(202.5), width: u(450), height: u(57), borderRadius: u(13.6) }}
              className="absolute flex items-center justify-center"
            >
              <GradBorder radius={u(13.6)} />
              <span
                style={{ fontSize: u(18.5) }}
                className="whitespace-nowrap font-bold leading-[normal] text-[#fff8d6]"
              >
                Pandangan pada Masa Depan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= HP / TABLET ================= */}
      <div className="relative mx-auto flex max-w-[560px] flex-col gap-6 lg:hidden">
        <div className="relative rounded-[14px] bg-[#191818] px-6 pb-6 pt-5 text-center">
          <GradBorder radius="14px" />
          <p className="text-[clamp(3rem,16vw,5rem)] font-bold leading-none text-[#fff8d6]">TUJUAN</p>
          <p className="text-[clamp(3.5rem,18vw,5.75rem)] font-bold leading-none text-[#fcd205]">BLUG</p>
          <div className="relative mt-5 flex h-[52px] items-center justify-center rounded-[14px]">
            <GradBorder radius="14px" />
            <span className="px-3 text-[clamp(0.95rem,4.4vw,1.15rem)] font-bold text-[#fff8d6]">
              Pandangan pada Masa Depan
            </span>
          </div>
        </div>

        <div className="relative rounded-[12px] px-6 pb-10 pt-12">
          <GradBorder radius="12px" />
          <QuoteMark className="absolute left-3 top-3 h-7 w-7 rotate-180" />
          <p className="text-justify text-[clamp(0.95rem,4vw,1.15rem)] font-bold leading-snug text-[#f7f3f3]">
            {QUOTE}
          </p>
          <QuoteMark className="absolute bottom-3 right-3 h-7 w-7" />
        </div>
      </div>
    </section>
  );
}
