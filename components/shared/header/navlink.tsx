"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function NavLink() {
  const pathname = usePathname(); // Get the current path
  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-4 md:flex-row md:gap-10">
        {[
          { path: "/", label: "Home" },
          { path: "/store", label: "Our Store" },
          { path: "/blog", label: "Blog" },
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

      {/* Mobile navigation */}
    </>
  );
}
