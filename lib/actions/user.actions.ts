"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in the user with credentials
export async function signInWithCredentails(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);
    return { success: true, message: "Welcome to Potzyn!!" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: true, message: "Invalid email or password" };
  }
}

// Sign out

export async function signOutUser() {
  await signOut();
}
