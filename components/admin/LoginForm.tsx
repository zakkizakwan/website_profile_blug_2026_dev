"use client";

import { useActionState, useState } from "react";
import { loginAction, type LoginState } from "@/app/login/actions";
import { EyeIcon, EyeOffIcon, LockIcon, UserIcon } from "./icons";

const inputWrap =
  "flex h-11 items-center gap-3 rounded-lg border border-white/40 bg-white/10 px-3 focus-within:border-[#fcd205] focus-within:ring-1 focus-within:ring-[#fcd205]";
const inputCls = "w-full bg-transparent text-sm text-white placeholder:text-white/55 focus:outline-none";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(loginAction, {});
  const [show, setShow] = useState(false);

  return (
    <form action={action} className="mt-9 space-y-5" noValidate>
      <div>
        <label htmlFor="username" className="mb-2 block text-[13px] font-semibold text-white">
          Username
        </label>
        <div className={inputWrap}>
          <UserIcon className="size-5 shrink-0 text-white" />
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Masukkan username Anda"
            defaultValue={state.username}
            className={inputCls}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-[13px] font-semibold text-white">
          Password
        </label>
        <div className={inputWrap}>
          <LockIcon className="size-5 shrink-0 text-white" />
          <input
            id="password"
            name="password"
            type={show ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Masukkan password Anda"
            className={inputCls}
            required
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Sembunyikan password" : "Tampilkan password"}
            className="text-white/80 transition-colors hover:text-white"
          >
            {show ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
          </button>
        </div>
      </div>

      <p role="alert" aria-live="polite" className="min-h-5 text-center text-[13px] font-medium text-red-300">
        {state.error}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="h-12 w-full cursor-pointer rounded-lg border border-black/60 bg-gradient-to-r from-[#ffc21a] to-[#d4b24a] text-[15px] font-extrabold tracking-wide text-white shadow-md transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "MEMPROSES..." : "LOGIN"}
      </button>
    </form>
  );
}
