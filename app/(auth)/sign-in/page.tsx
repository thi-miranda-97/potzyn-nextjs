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

const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

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
          <CardTitle className="uppercase">Welcome back</CardTitle>

          <CardDescription className="text-input">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="link" target="_self">
              Sign Up
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </>
  );
};

export default SignInPage;
