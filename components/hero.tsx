import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 justify-start">
      <div className="flex justify-start items-start lg:flex-between flex-col lg:flex-row mb-5 lg:mb-10">
        <h1 className="h1 mb-2">Grow Joy, One Leaf at a Time</h1>
        <div>
          <Link href="/store">
            <Button type="button" aria-label="Open store page button">
              Shop Now <DoubleArrowIcon className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr_1fr] justify-start item-start gap-4">
        <div className="grid-between grid-cols-1 col-span-2 lg:col-span-1 gap-2 lg:gap-4">
          <Image
            src="/images/feature-1.jpeg"
            alt="a line of potted plants"
            width={600}
            height={337}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            priority
            className="image"
          />

          <div className="w-full grid grid-cols-2 gap-3 lg:gap-6">
            <div className="grid-between grid-cols-1">
              <p className="body-1 items-start ">
                The Perfect Plants, Just for You
              </p>
              <div className="flex-between grid-cols-2">
                <p className="body-2 text-gray-700">collection</p>
                <div>
                  <Link href="#product-list" passHref legacyBehavior>
                    <Button
                      className="icon-button"
                      type="button"
                      aria-label="Navigate section button"
                    >
                      <CallMadeIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <Image
              src="/images/feature-2.jpeg"
              alt="Three green leaves"
              width={200}
              height={112}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
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
              <p className="body-2 text-gray-700">blog tips</p>
              <div>
                <Link href="#blog-list" passHref legacyBehavior>
                  <Button
                    className="icon-button"
                    type="button"
                    aria-label="Navigate section button"
                  >
                    <CallMadeIcon />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/images/feature-3.jpeg"
            alt="A potted flower"
            width={300}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            priority
            className="image"
          />
        </div>

        <div className="grid-between grid-cols-1 ">
          <Image
            src="/images/feature-4.jpeg"
            alt="A potted flower"
            width={300}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            priority
            className="image"
          />
          <div className="grid-between grid-cols-1">
            <p className="body-1 items-start ">
              Fresh Picks: New Plants Are Here
            </p>
            <div className="flex-between grid-cols-2">
              <p className="body-2 text-gray-700">new arrival</p>
              <div>
                <Link href="#new-arrival" passHref legacyBehavior>
                  <Button
                    className="icon-button"
                    type="button"
                    aria-label="Navigate section button"
                  >
                    <CallMadeIcon />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
