import NavLink from "./navlink";
import Menu from "./menu";

import Logo from "./logo";
export default function Header() {
  return (
    <header className="w-full fixed bg-accent shadow-md opacity-95 z-[2]">
      <nav className="wrapper flex-between">
        <Logo />

        <NavLink />

        <Menu />
      </nav>
    </header>
  );
}
