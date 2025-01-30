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

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="w-full max-w-md mx-8 lg:mx-16">
      <Card className="bg-transparent text-[#f7f7f7] shadow-lg">
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
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

          <CardDescription>
            Already a member?{" "}
            <Link href="/log-in" className="">
              Log In
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
