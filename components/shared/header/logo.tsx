import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
export default function Logo() {
  return (
    <div className="flex-start">
      <Link href="/" className="flex-start ml-4">
        <Image
          src="/images/favicon.svg"
          alt={APP_NAME}
          height={48}
          width={48}
          priority={true}
        />
        <span className="hidden lg:block font-bold text-2xl ml-3">POTZYN</span>
      </Link>
    </div>
  );
}
