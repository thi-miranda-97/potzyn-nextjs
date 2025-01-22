import Image from "next/image";
import loader from "@/assets/loader.gif";
export default function Loading() {
  return (
    <div className="flex-center w-[100vw] h-[100vh]">
      <Image
        src={loader}
        height={150}
        width={150}
        alt="Loading ...."
        className="w-auto h-auto"
      />
    </div>
  );
}
