import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 justify-start">
      <div className="flex justify-start items-start lg:flex-between flex-col lg:flex-row mb-5 lg:mb-10">
        <h1 className="h1 mb-2 lg:mb-none">Grow Joy, One Leaf at a Time</h1>
        <div>
          <Button className="px-2 lg:px-4 py-1 lg:py-2 uppercase">
            <Link href="/store">
              Shop Now <DoubleArrowIcon />
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr_1fr] justify-start item-start gap-4">
        <div className="grid-between grid-cols-1 col-span-2 lg:col-span-1 gap-2 lg:gap-4">
          <Image
            src="/images/feature-1.jpeg"
            alt="a line of potted plants"
            width={600}
            height={350}
            priority={true}
            className="image"
          />

          <div className="w-full grid grid-cols-2 gap-3 lg:gap-6">
            <div className="grid-between grid-cols-1">
              <p className="body-1 items-start ">
                The Perfect Plants, Just for You
              </p>
              <div className="flex-between grid-cols-2">
                <p className="body-2 text-gray-500">collection</p>
                <div>
                  <Button className="w-6 h-6 p-1 lg:p-2 rounded-full">
                    <Link className="" href="#product-list">
                      <CallMadeIcon />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <Image
              src="/images/feature-2.jpeg"
              alt="Three leaves"
              width={200}
              height={120}
              priority={false}
              className="image"
            />
          </div>
        </div>
        <div className="grid-between grid-cols-1 ">
          <div className="grid-between grid-cols-1 mb-2">
            <p className="body-1 items-start ">
              Grow Like a Pro: Essential Plant Care Tips
            </p>
            <div className="flex-between grid-cols-2">
              <p className="body-2 text-gray-500">blog tips</p>
              <div>
                <Button className="w-6 h-6 p-1 lg:p-2 rounded-full">
                  <Link className="" href="#blog-list">
                    <CallMadeIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <Image
            src="/images/feature-3.jpeg"
            alt="A potted flower"
            width={300}
            height={400}
            priority={false}
            className="image"
          />
        </div>

        <div className="grid-between grid-cols-1 ">
          <Image
            src="/images/feature-4.jpeg"
            alt="A potted flower"
            width={300}
            height={400}
            priority={true}
            className="image"
          />
          <div className="grid-between grid-cols-1">
            <p className="body-1 items-start ">
              Fresh Picks: New Plants Are Here
            </p>
            <div className="flex-between grid-cols-2">
              <p className="body-2 text-gray-500">new arrival</p>
              <div>
                <Button className="w-6 h-6 p-1 lg:p-2 rounded-full">
                  <Link className="" href="#new-arrival">
                    <CallMadeIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
