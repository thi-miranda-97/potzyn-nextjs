"use client";

import Logo from "./shared/header/logo";
import NavLink from "./shared/header/navlink";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // Handle visibility of "Back to Top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Update visibility based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="wrapper">
      <div className="flex-between border-t py-3 lg:py-6">
        <Logo />
        <NavLink />
        <div className="flex items-center justify-end gap-3 lg:gap-6 body-1">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <XIcon />
          {isVisible && (
            <Button
              variant="outline"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={scrollToTop}
            >
              Back to top &uarr;
            </Button>
          )}
        </div>
      </div>

      {/* Footer Image Background */}
      <div className="relative h-[200px] w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/footer-img.jpeg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <span className="z-10 text-4xl lg:text-8xl font-bold uppercase text-[#f6f6f6]">
          POTZYN
        </span>
      </div>

      <div className="text-center text-[0.5rem] lg:text-[1rem] text-gray-500">
        &copy;{currentYear} Potzyn. All Rights Reserved.
      </div>
    </footer>
  );
}
