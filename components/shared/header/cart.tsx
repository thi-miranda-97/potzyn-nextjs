import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cart() {
  return (
    <Button variant="ghost" className="flex-center p-2 hover-scale">
      <Link href="/">
        <LocalMallOutlinedIcon />
      </Link>
    </Button>
  );
}
