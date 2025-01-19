"use client";

import Logo from "./shared/header/logo";
import NavLink from "./shared/header/navlink";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
export default function Footer() {
  return (
    <footer className="wrapper">
      <div className="flex-between border-t py-3 lg:py-6">
        <Logo />
        <NavLink />
        <div className="flex justify-end gap-3 lg:gap-6 body-1">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <XIcon />
          <span className="">Back to top &uarr;</span>
        </div>
      </div>
      {/* FOOTER IMAGE BACKGROUND */}
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
        &copy;2025 Potzyn. All Rights Reserved.
      </div>
    </footer>
  );
}
