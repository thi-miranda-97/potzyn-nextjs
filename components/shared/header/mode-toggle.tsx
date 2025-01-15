"use client";

import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { useTheme } from "next-themes";

export default function ModeToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="pointer hover-scale">
      <Brightness4OutlinedIcon
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}
