import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

export default function Logo() {
  return (
    <Link href="/" className="flex-start ml-4">
      <Image
        src="/images/logo.svg"
        alt={APP_NAME}
        height={48}
        width={48}
        priority={true}
        className="object-cover"
      />

      <span className="hidden lg:block font-bold text-2xl ml-3">POTZYN</span>
    </Link>
  );
}
