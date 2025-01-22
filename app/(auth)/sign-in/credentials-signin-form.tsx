"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { signInWithCredentails } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

export default function SignInForm() {
  const [data, action] = useActionState(signInWithCredentails, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full">
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <>
      <form action={action} className="grid-between grid-cols-1 gap-3 lg:gap-6">
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={signInDefaultValues.email}
            className="w-full"
          />
        </div>

        {/* Password */}
        <div className="space-y-2 mb-2 lg:mb-4">
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            defaultValue={signInDefaultValues.password}
            className="w-full"
          />
        </div>

        {/* Button */}
        <div className="flex-center">
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
}
