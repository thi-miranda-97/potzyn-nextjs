"use client";
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
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function NavLinkMobile() {
  const pathname = usePathname(); // Get the current path
  const [open, setOpen] = useState(false);

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;
  return (
    <div className="md:hidden cursor-pointer flex-center p-2 hover-scale">
      <Sheet open={open} onOpenChange={setOpen}>
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
                  className={cn("text-foreground hover:font-bold", {
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
    </div>
  );
}
