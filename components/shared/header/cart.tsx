import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import Link from "next/link";

export default function Cart() {
  return (
    <div className="cursor-pointer flex-center p-2 hover-scale">
      <Link href="/cart">
        <LocalMallOutlinedIcon />
      </Link>
    </div>
  );
}
