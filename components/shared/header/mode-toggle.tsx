"use client";

import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="ghost" className="flex-center p-2 hover-scale">
      <Brightness4OutlinedIcon
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </Button>
  );
}
