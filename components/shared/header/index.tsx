import NavLink from "./navlink";
import Menu from "./menu";

import Logo from "./logo";
export default function Header() {
  return (
    <header className="w-full fixed bg-accent shadow-md  opacity-95 z-[2]">
      <div className="wrapper flex-between">
        <Logo />
        <div className="">
          <NavLink />
        </div>
        <Menu />
      </div>
    </header>
  );
}
