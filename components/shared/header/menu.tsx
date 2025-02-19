import ModeToggleTheme from "./mode-toggle";
import Cart from "./cart";
import UserButton from "./user-button";
import NavLinkMobile from "./navlink-mobile";
export default function Menu() {
  return (
    <>
      <div className="flex justify-end gap-2 lg:gap-4">
        <ModeToggleTheme />
        <Cart />

        {/* USER BUTTON */}
        <UserButton />
        <NavLinkMobile />
      </div>
    </>
  );
}
