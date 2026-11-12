import { logoutAction } from "@/app/login/actions";
import { LogoutIcon } from "./icons";

export default function AdminHeader({ title }: { title: string }) {
  return (
    <header className="mb-10 flex items-center justify-between">
      <h1 className="text-[28px] font-bold text-[#8c6a00]">{title}</h1>
      <form action={logoutAction}>
        <button
          type="submit"
          aria-label="Keluar"
          title="Keluar"
          className="cursor-pointer rounded-md p-1.5 text-[#2b2f6b] transition-colors hover:bg-[#fff1b8]"
        >
          <LogoutIcon className="size-6" />
        </button>
      </form>
    </header>
  );
}
