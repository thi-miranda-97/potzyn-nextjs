"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { signUpFormSchema } from "../validators";
import { prisma } from "@/db/prisma";
import { formatError } from "../utils";
import { hashSync } from "bcrypt-ts-edge";

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
    console.error("Sign-in error:", error);

    // if (getRedirectError(error)) {
    return { success: false, message: "Invalid email or password" };
  }
};

// Sign user out
export async function signOutUser() {
  await signOut();
}

//  Sign up user
export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const plainPassword = user.password;

    user.password = await hashSync(user.password);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: "User registered successfully" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Sign-up error:", error);
  }
  return { success: false, message: formatError(Error) };
}
