"use client";

import { useState, type FormEvent, type ReactNode } from "react";

// TODO: samakan dengan endpoint dari tim back end. Body yang dikirim (JSON):
// { nama, telepon, email, pesan }
const KONTAK_ENDPOINT = "/api/kontak";

type Status = "idle" | "mengirim" | "berhasil" | "gagal";

const kotak =
  "w-full rounded-[25px] bg-white px-6 text-base font-normal text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#fcd205]/70 lg:px-[30px] lg:text-lg";

function Field({
  id,
  label,
  className = "",
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-[13px] ${className}`}>
      <label htmlFor={id} className="pl-1 text-xl font-bold leading-6 text-white">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function KontakForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function kirim(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("mengirim");
    try {
      const res = await fetch(KONTAK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("berhasil");
    } catch {
      setStatus("gagal");
    }
  }

  return (
    <div className="mt-6 rounded-[20px] border border-[#fcd205] bg-[#fcd205]/15 px-5 py-8 lg:ml-[103.5px] lg:mt-0 lg:h-full lg:rounded-[20px] lg:pb-0 lg:pl-[429px] lg:pr-[49.5px] lg:pt-[29px]">
      <form onSubmit={kirim} className="flex flex-col gap-6 lg:gap-[26px]">
        <Field id="nama" label="Nama" className="lg:max-w-[416px]">
          <input
            id="nama"
            name="nama"
            type="text"
            required
            autoComplete="name"
            className={`${kotak} h-[56px] lg:h-[67px]`}
          />
        </Field>

        <Field id="telepon" label="Telepon" className="lg:max-w-[416px]">
          <input
            id="telepon"
            name="telepon"
            type="tel"
            autoComplete="tel"
            className={`${kotak} h-[56px] lg:h-[67px]`}
          />
        </Field>

        <Field id="email" label="Email" className="lg:max-w-[416px]">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${kotak} h-[56px] lg:h-[72px]`}
          />
        </Field>

        <Field id="pesan" label="Pesan">
          <textarea
            id="pesan"
            name="pesan"
            required
            rows={5}
            className={`${kotak} h-[140px] resize-none py-4`}
          />
        </Field>

        <div className="flex flex-col items-center gap-3 lg:mt-[9px]">
          <button
            type="submit"
            disabled={status === "mengirim"}
            className="h-[74.5px] w-[175.5px] cursor-pointer rounded-[25px] bg-gradient-to-b from-[#fcd205] to-[#c89b00] text-2xl font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 disabled:cursor-wait disabled:opacity-70"
          >
            {status === "mengirim" ? "Mengirim..." : "Kirim"}
          </button>

          <p role="status" aria-live="polite" className="min-h-6 text-center text-base">
            {status === "berhasil" && (
              <span className="text-[#fff8d6]">Pesanmu sudah terkirim. Terima kasih!</span>
            )}
            {status === "gagal" && (
              <span className="text-[#ff8a8a]">Pesan gagal dikirim. Coba lagi sebentar lagi.</span>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
