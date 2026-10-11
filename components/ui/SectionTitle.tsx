/** Judul bagian berbentuk kotak dengan garis tepi gradasi merah-kuning (LOGO DIVISI, PENGURUS, dst.) */
export default function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`border-grad-red relative mx-auto flex h-[72px] w-[min(100%,555px)] items-center justify-center rounded-[16px] text-[clamp(1.5rem,6vw,36px)] font-bold text-white backdrop-blur-[15px] lg:h-[88px] ${className}`}
    >
      {children}
    </h2>
  );
}
