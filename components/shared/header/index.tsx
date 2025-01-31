import Menu from "./menu";

import Logo from "./logo";
import NavLinkDesktop from "./navlink-desktop";
export default function Header() {
  return (
    <header className="w-full fixed bg-accent shadow-md opacity-95 z-[2]">
      <div className="wrapper flex-between">
        <Logo />
        <NavLinkDesktop />
        <Menu />
      </div>
    </header>
  );
}
