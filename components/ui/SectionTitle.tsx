/** Judul bagian berbentuk kotak dengan garis tepi gradasi merah-kuning (LOGO DIVISI, PENGURUS, dst.) */
export default function SectionTitle({
  children,
  width = 555,
  className = "",
}: {
  children: React.ReactNode;
  /** lebar maksimum kotak dalam px (555 untuk LOGO DIVISI / PENGURUS) */
  width?: number;
  className?: string;
}) {
  return (
    <h2
      style={{ width: `min(100%, ${width}px)` }}
      className={`border-grad-red relative mx-auto flex h-[72px] items-center justify-center rounded-[16px] text-[clamp(1.5rem,6vw,36px)] font-bold text-white backdrop-blur-[15px] lg:h-[88px] ${className}`}
    >
      {children}
    </h2>
  );
}
