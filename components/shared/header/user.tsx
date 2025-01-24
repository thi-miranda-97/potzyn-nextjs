"use client";

import { Button } from "@/components/ui/button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { signInWithCredentials } from "@/lib/actions/user.actions";
export default function User() {
  return (
    <Button
      onClick={() => signInWithCredentials()}
      className="cursor-pointer flex-center p-2 hover-scale"
    >
      <PersonOutlineIcon />
    </Button>
  );
}
