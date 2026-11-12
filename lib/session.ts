import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession, type Session } from "@/lib/api";

export const SESSION_COOKIE = "admin_session";

/**
 * Sesi admin saat ini, atau null bila belum login / token tidak valid.
 * Membaca cookies() = data request, jadi HARUS dipanggil dari dalam <Suspense>
 * (karena `cacheComponents: true`) atau dari Server Action.
 */
export async function getSession(): Promise<Session | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySession(token);
}

/** Dipakai di halaman & Server Action admin: lempar ke /login bila belum login. */
export async function requireSession(): Promise<Session> {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
}
