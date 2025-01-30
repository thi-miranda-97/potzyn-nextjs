"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
// import { getRedirectError } from "next/dist/client/components/redirect";

export const signInWithCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    console.error("Sign-in error:", error); // ✅ Log the error

    // if (getRedirectError(error)) {
    return { success: false, message: "Invalid email or password" };
  }
};

// Sign user out
export async function signOutUser() {
  await signOut();
}
