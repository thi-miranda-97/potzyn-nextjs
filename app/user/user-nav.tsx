"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function UserNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="text-center p-5 md:px-10 mt-28">
      <h2 className="h2 mb-1 lg:mb-2">Account</h2>
      <p className="body-1 mb-3 lg:mb-6">
        Set your account settings down below
      </p>
      <div className="flex gap-4 flex-row md:gap-10 bg-accent p-2 lg:p-4 rounded-md w-fit mb-5 lg:mb-10 mx-auto">
        {[
          { path: "/user/profile", label: "Your Profile" },
          { path: "/user/orders", label: "Orders History" },
        ].map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={cn(
              "text-accent-foreground hover:border hover:border-input p-1 lg:p-2 rounded-md ",
              {
                "text-foreground font-medium border border-input px-2 lg:px-4 rounded-md shadow-md":
                  isActive(path),
              }
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
