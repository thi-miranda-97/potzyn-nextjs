"use client";

import ModeToggleTheme from "./mode-toggle";

import Search from "./search";
import Cart from "./cart";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import User from "./user";
export default function Menu() {
  const pathname = usePathname(); // Get the current path

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div className="flex justify-end gap-2 lg:gap-4">
        <ModeToggleTheme />
        <Cart />
        <Search />
        {/* USER BUTTON */}
        <User />
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <nav className="flex-col flex-center gap-10 mt-10 md:hidden">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/store", label: "Our Store" },
                    { path: "/blog", label: "Blog" },
                    { path: "/contact", label: "Contact" },
                  ].map(({ path, label }) => (
                    <Link
                      key={path}
                      href={path}
                      className={classNames("text-foreground hover:font-bold", {
                        "font-bold": isActive(path),
                      })}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
}
