import ModeToggleTheme from "./mode-toggle";
import User from "./user";
import Search from "./search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
export default function Menu() {
  return (
    <div className="flex justify-end gap-4 lg:gap-8">
      <ModeToggleTheme />
      <LocalMallOutlinedIcon />
      <Search />
      <User />
    </div>
  );
}
