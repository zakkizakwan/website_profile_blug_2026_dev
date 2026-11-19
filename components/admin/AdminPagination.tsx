import Link from "next/link";
import { ArrowIcon } from "./icons";

function href(page: number, q?: string) {
  const sp = new URLSearchParams();
  if (q) sp.set("q", q);
  if (page > 1) sp.set("page", String(page));
  const s = sp.toString();
  return s ? `/admin/artikel?${s}` : "/admin/artikel";
}

const arrow =
  "flex size-8 items-center justify-center rounded-full bg-[#fff1b8]/70 text-black transition-colors hover:bg-[#fff1b8]";

export default function AdminPagination({
  page,
  totalPages,
  q,
}: {
  page: number;
  totalPages: number;
  q?: string;
}) {
  return (
    <nav
      aria-label="Halaman artikel"
      className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
    >
      {page > 1 ? (
        <Link href={href(page - 1, q)} aria-label="Halaman sebelumnya" className={arrow}>
          <ArrowIcon dir="left" className="size-4" />
        </Link>
      ) : (
        <span aria-disabled className={`${arrow} opacity-40`}>
          <ArrowIcon dir="left" className="size-4" />
        </span>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
        n === page ? (
          <span
            key={n}
            aria-current="page"
            className="flex size-9 items-center justify-center rounded-full bg-[#fcd205] text-sm font-bold text-white"
          >
            {n}
          </span>
        ) : (
          <Link
            key={n}
            href={href(n, q)}
            aria-label={`Halaman ${n}`}
            className="flex size-9 items-center justify-center rounded-full text-sm font-semibold text-[#8c6a00] transition-colors hover:bg-[#fff1b8]"
          >
            {n}
          </Link>
        ),
      )}

      {page < totalPages ? (
        <Link href={href(page + 1, q)} aria-label="Halaman berikutnya" className={arrow}>
          <ArrowIcon dir="right" className="size-4" />
        </Link>
      ) : (
        <span aria-disabled className={`${arrow} opacity-40`}>
          <ArrowIcon dir="right" className="size-4" />
        </span>
      )}
    </nav>
  );
}
