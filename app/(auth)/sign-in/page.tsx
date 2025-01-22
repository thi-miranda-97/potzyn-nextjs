import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import SignInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async (props: {
  searchParams: Promise<{ callbackUrl: string }>;
}) => {
  const { callbackUrl } = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className="relative h-screen w-full  bg-cover bg-center bg-[url('/images/signin-bg.jpeg')]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen max-w-full mx-auto">
        <Card className="rounded-md p-5 lg:p-10">
          <CardHeader className="space-y-4">
            <Link href="/" className="flex-center">
              <Image
                src="/images/logo.svg"
                width={48}
                height={48}
                alt={`${APP_NAME} logo`}
                priority={true}
              />
            </Link>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Register or sign in and we&apos;ll get started
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default SignInPage;
