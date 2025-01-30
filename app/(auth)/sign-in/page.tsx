import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "./sign-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

interface SignInPageProps {
  searchParams: {
    callbackUrl?: string;
  };
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const { callbackUrl } = searchParams;

  const session = await auth();
  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <>
      <Card className="bg-transparent text-[#f7f7f7] shadow-none">
        <CardHeader className="space-y-4">
          <Link href="/" className="">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
              className=""
            />
          </Link>
          <CardTitle className="uppercase">Create new account</CardTitle>

          <CardDescription className="">
            Already a member?{" "}
            <Link href="/log-in" className="link" target="_self">
              Log In
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </>
  );
}
