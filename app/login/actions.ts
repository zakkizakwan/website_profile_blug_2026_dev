"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginAdmin } from "@/lib/api";
import { SESSION_COOKIE } from "@/lib/session";

export type LoginState = { error?: string; username?: string };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username || !password) {
    return { error: "Username dan password wajib diisi.", username };
  }

  const result = await loginAdmin(username, password);
  if (!result) {
    return { error: "Username atau password salah.", username };
  }

  (await cookies()).set(SESSION_COOKIE, result.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 jam
  });
  redirect("/admin/artikel");
}

export async function logoutAction() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/login");
}
