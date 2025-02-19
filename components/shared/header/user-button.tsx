import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PortraitIcon from "@mui/icons-material/Portrait";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <PersonOutlineIcon /> Sign In
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name ?? "Sign in";

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              size="sm"
              variant="default"
              className="body-2 relative w-16 h-8 rounded-md ml-2 flex items-center justify-center"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="body-1 text-foreground font-medium leading-none">
                {session.user?.name}
              </div>
              <div className="body-2 text-accent-foreground leading-none">
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>

          {session?.user?.role === "admin" && (
            <DropdownMenuItem>
              <Link href="/admin/overview" className="w-full">
                <BadgeOutlinedIcon /> Admin
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <Link href="/user/profile" className="w-full">
              <PortraitIcon /> User Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/user/orders" className="w-full">
              <AddShoppingCartOutlinedIcon /> Order History
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutUser} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start text-destructive"
                variant="ghost"
              >
                <LogoutOutlinedIcon /> Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
