"use client";

import { useRouter } from "next/navigation";
import { UndoIcon } from "./icons";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      aria-label="Kembali"
      onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
      className="absolute left-8 top-7 z-10 cursor-pointer text-[#fcd205] transition-colors hover:text-[#f9d00a]"
    >
      <UndoIcon className="size-7" strokeWidth={2.5} />
    </button>
  );
}
