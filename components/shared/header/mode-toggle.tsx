"use client";

import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { useTheme } from "next-themes";

export default function ModeToggleTheme() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="cursor-pointer flex-center p-2 hover-scale"
      onClick={handleThemeToggle}
    >
      <Brightness4OutlinedIcon />
    </div>
  );
}
