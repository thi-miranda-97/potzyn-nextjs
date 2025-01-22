import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function User() {
  return (
    <Button
      variant="ghost"
      className="flex-center p-2 hover-scale"
      aria-label="user-icon "
    >
      <Link href="/sign-in">
        <PersonOutlineRoundedIcon />
      </Link>
    </Button>
  );
}
