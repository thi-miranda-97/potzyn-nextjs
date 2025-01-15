"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function NavLink() {
  const pathname = usePathname(); // Get the current path

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden gap-4 lg:flex-row lg:flex-between lg:gap-10">
      {[
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/store", label: "Our Store" },
        { path: "/contact", label: "Contact" },
      ].map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={classNames(
            "text-foreground hover:border-b hover:border-foreground",
            {
              "font-bold": isActive(path),
            }
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
