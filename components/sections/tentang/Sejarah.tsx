import type { CSSProperties } from "react";

/*
 * "SEJARAH BLUG" + "SEJARAH PERJALANAN BLUG" (Rectangle 355 / 356 di Figma).
 *
 * Desktop: semua angka = Figma dibagi 2, diukur dari pojok kiri-atas kotak "SEJARAH BLUG"
 * (y Figma 2392). 1 satuan "u" = 1px pada lebar desain 1398,5px, dihitung dari lebar wadah (cqw),
 * jadi komposisinya ikut membesar/mengecil. HP / tablet: kotak ditumpuk biasa tanpa garis penghubung.
 *
 * Font: Montserrat (--font-montserrat) dan Lexend Zetta (--font-lexend-zetta, untuk angka 01 / 02).
 */

const u = (n: number) => `calc(var(--u) * ${n})`;

const glass: CSSProperties = {
  border: "1px solid rgba(255,255,255,0.6)",
  background: "linear-gradient(134deg, rgba(77,77,77,0.4) 1.8%, rgba(157,157,157,0.1) 100%)",
  boxShadow: "0 2px 12px -0.5px rgba(0,0,0,0.25)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",
};

const SEJARAH = (
  <>
    <strong className="font-bold">Batam Linux User Group (BLUG)</strong>{" "}
    <span className="font-normal">
      merupakan Komunitas Pecinta Linux Indonesia (KPLI) yang berlokasi di Kota Batam sebagai wadah yang
      digunakan untuk kegiatan pembelajaran dan pengembangan sistem operasi GNU/Linux dan Open Source Software
      bagi masyarakat Kota Batam umumnya dan mahasiswa Politeknik Negeri Batam. Berdiri pada tanggal 27 September
      2003 di mana pada saat itu masih berstatus sebagai komunitas dan bergabung sebagai ORMAWA di Politeknik
      Negeri Batam pada tahun 2008 dan telah mengadakan berbagai kegiatan internal maupun eksternal.
    </span>
  </>
);

const TIMELINE = [
  {
    text: "BLUG  telah berdiri sejak 27 September 2003",
    // posisi pill di desktop + jarak teks dari tepi kiri pill hitam + lebar teks
    left: 384.5,
    top: 700.5,
    padLeft: 49.5,
    textW: 514,
  },
  {
    text: "Pada tahun 2008 BLUG bergabung sebagai ORMAWA di Politeknik Negeri Batam",
    left: 522.5,
    top: 891.5,
    padLeft: 32,
    textW: 554,
  },
  {
    text: "Pada bulan Februari 2026 BLUG telah melantik kepengurusan baru.",
    left: 384.5,
    top: 1086,
    padLeft: 38.5,
    textW: 517.5,
  },
];

const lineShadow = "0 2px 2px rgba(0,0,0,0.25)";

function Ring({ left, top, label }: { left: number; top: number; label: string }) {
  return (
    <>
      <span
        style={{ left: u(left), top: u(top), width: u(52.8), height: u(54.35), boxShadow: lineShadow }}
        className="absolute rounded-full bg-[#fcd205]"
      />
      <span
        style={{
          left: u(left + 5.2),
          top: u(top + 5.3),
          width: u(42.4),
          height: u(43.7),
          fontSize: u(24),
        }}
        className="absolute flex items-center justify-center rounded-full bg-black font-[family-name:var(--font-lexend-zetta)] font-extrabold leading-none text-[#fcd205]"
      >
        {label}
      </span>
    </>
  );
}

export default function Sejarah() {
  return (
    <section className="relative font-[family-name:var(--font-montserrat)]">
      {/* ================= DESKTOP ================= */}
      <div className="mx-auto hidden w-full max-w-[1398.5px] [container-type:inline-size] lg:block">
        <div
          style={{ ["--u" as string]: "calc(100cqw / 1398.5)", height: u(1246.5) }}
          className="relative"
        >
          {/* Kotak 1: SEJARAH BLUG */}
          <div
            style={{ ...glass, left: u(130.5), top: 0, width: u(835.5), height: u(516), borderRadius: u(25) }}
            className="absolute"
          />
          <h2
            style={{ left: u(130.5), top: u(46), width: u(835.5), fontSize: u(32) }}
            className="absolute text-center font-extrabold leading-[normal] tracking-[0.1em] text-[#fcd205]"
          >
            SEJARAH BLUG
          </h2>
          <p
            style={{ left: u(162.5), top: u(105), width: u(766), fontSize: u(26) }}
            className="absolute text-justify font-semibold leading-[normal] text-[#fff8d6]"
          >
            {SEJARAH}
          </p>

          {/* Kotak 2: SEJARAH PERJALANAN BLUG */}
          <div
            style={{ ...glass, left: u(315.5), top: u(591), width: u(906), height: u(655.5), borderRadius: u(25) }}
            className="absolute"
          />
          <h2
            style={{ left: u(315.5), top: u(642), width: u(906), fontSize: u(32) }}
            className="absolute text-center font-extrabold leading-[normal] tracking-[0.1em] text-[#fcd205]"
          >
            SEJARAH PERJALANAN BLUG
          </h2>

          {/* Garis penghubung */}
          <span
            style={{ left: u(1021.5), top: u(757.2), width: u(54), height: u(7.5), boxShadow: lineShadow }}
            className="absolute bg-[#fcd205]"
          />
          <span
            style={{ left: u(1096.3), top: u(792), width: u(7.5), height: u(100), boxShadow: lineShadow }}
            className="absolute bg-[#fcd205]"
          />
          <span
            style={{ left: u(465.3), top: u(947), width: u(55), height: u(7.5), boxShadow: lineShadow }}
            className="absolute bg-[#fcd205]"
          />
          <span
            style={{ left: u(438.7), top: u(982), width: u(7.5), height: u(104.5), boxShadow: lineShadow }}
            className="absolute bg-[#fcd205]"
          />
          <Ring left={1074} top={738.5} label="01" />
          <Ring left={412.5} top={928} label="02" />

          {/* 3 kotak lonjong */}
          {TIMELINE.map((t) => (
            <div
              key={t.text}
              style={{ left: u(t.left), top: u(t.top), width: u(637), height: u(118), borderColor: "#fcd205" }}
              className="absolute rounded-full border bg-[#fcd205]/20"
            >
              <div
                style={{ left: u(14.5), top: u(10.5), width: u(607.5), height: u(97), paddingLeft: u(t.padLeft) }}
                className="absolute flex items-center rounded-full bg-black"
              >
                <p
                  style={{ width: u(t.textW), fontSize: u(24) }}
                  className="whitespace-pre-wrap text-justify font-semibold leading-[normal] text-[#fcd205]"
                >
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= HP / TABLET ================= */}
      <div className="mx-auto flex max-w-[640px] flex-col gap-8 px-6 lg:hidden">
        <div style={glass} className="rounded-[25px] px-6 py-8">
          <h2 className="mb-5 text-center text-[clamp(1.4rem,6vw,2rem)] font-extrabold tracking-[0.1em] text-[#fcd205]">
            SEJARAH BLUG
          </h2>
          <p className="text-justify text-[15px] font-semibold leading-relaxed text-[#fff8d6] sm:text-[17px]">
            {SEJARAH}
          </p>
        </div>

        <div style={glass} className="rounded-[25px] px-5 py-8">
          <h2 className="mb-6 text-center text-[clamp(1.2rem,5.2vw,2rem)] font-extrabold tracking-[0.08em] text-[#fcd205]">
            SEJARAH PERJALANAN BLUG
          </h2>
          <ol className="flex flex-col gap-4">
            {TIMELINE.map((t, i) => (
              <li
                key={t.text}
                className="rounded-full border border-[#fcd205] bg-[#fcd205]/20 p-[6px]"
              >
                <div className="flex items-center gap-3 rounded-full bg-black px-5 py-4">
                  <span className="shrink-0 font-[family-name:var(--font-lexend-zetta)] text-[15px] font-extrabold text-[#fcd205]">
                    0{i + 1}
                  </span>
                  <p className="text-[14px] font-semibold leading-snug text-[#fcd205] sm:text-[16px]">
                    {t.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
