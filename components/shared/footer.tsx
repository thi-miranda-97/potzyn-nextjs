"use client";

import Logo from "./header/logo";
import NavLink from "./header/navlink";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
export default function Footer() {
  return (
    <>
      <div className="wrapper flex-between border-t">
        <Logo />
        <NavLink />
        <div className="flex justify-end gap-4 lg:gap-10">
          <FacebookRoundedIcon />
          <InstagramIcon />
          <XIcon />
        </div>
      </div>
      {/* FOOTER IMAGE BACKGROUND */}
      <div></div>
    </>
  );
}
