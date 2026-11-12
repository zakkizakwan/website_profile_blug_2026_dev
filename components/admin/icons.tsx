/* Ikon SVG kecil untuk panel admin (tanpa dependensi tambahan). */
import type { SVGProps } from "react";

function Base(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

export const SearchIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Base>
);
export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M12 5v14M5 12h14" /></Base>
);
export const PencilIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></Base>
);
export const TrashIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" /></Base>
);
export const LogoutIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M10 17l-5-5 5-5M5 12h12" /><path d="M14 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5" /></Base>
);
export const UndoIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" /></Base>
);
export const EyeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></Base>
);
export const EyeOffIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6A16 16 0 0 0 2 12s3.6 7 10 7a9.7 9.7 0 0 0 4.4-1M9.9 9.9a3 3 0 0 0 4.2 4.2" /></Base>
);
export const UserIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base fill="currentColor" stroke="none" {...p}><circle cx="12" cy="8" r="4.5" /><path d="M3.5 21c0-4.7 3.8-7.5 8.5-7.5s8.5 2.8 8.5 7.5Z" /></Base>
);
export const LockIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base fill="currentColor" stroke="none" {...p}>
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8h-1.6V6.5a1.4 1.4 0 0 0-2.8 0V8Z" />
    <rect x="4.5" y="8" width="15" height="13" rx="2" />
  </Base>
);
export const ImagePlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" /><path d="M16 5h6M19 2v6" /><circle cx="9" cy="9" r="1.5" /><path d="m21 15-5-5L5 21" /></Base>
);
export const CheckCircleIcon = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></Base>
);
export const ArrowIcon = ({ dir, ...p }: SVGProps<SVGSVGElement> & { dir: "left" | "right" }) => (
  <Base strokeWidth={2.5} style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
