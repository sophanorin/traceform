"use server";
import { signIn } from "@/lib/auth";

export async function loginWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  await signIn("resend", { email, redirectTo: "/dashboard" });
}
