"use client";

import Logo from "./shared/header/logo";
import NavLink from "./shared/header/navlink";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
export default function Footer() {
  return (
    <>
      <div className="wrapper flex-between border-t">
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
      <div></div>
    </>
  );
}
