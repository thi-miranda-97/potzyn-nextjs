"use server";
import { signIn, signOut } from "@/auth";
export const signInWithCredentials = async () => {
  await signIn();
};
export const signOutUser = async () => {
  await signOut({ redirectTo: "/" });
};
