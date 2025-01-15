import FeaturedProduct from "@/components/products/featuredproduct";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Homepage() {
  return (
    <main className="grid-between grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
      <FeaturedProduct />
      <div className=" rounded px-2 lg:px-4 py-3 lg:py-6 shadow-sm w-full">
        <h1 className="h1 mb-2 lg:mb-4">
          Your Potzyn for Indoor & Outdoor Plants 🌿
        </h1>
        <p className="body-1 mb-3 lg:mb-6">
          Your one-stop shop for all things plants! From cozy indoor greenery to
          stunning outdoor blooms, we’ve got the perfect plants to brighten your
          space and your mood!
        </p>
        <Button className="mb-4 lg:mb-8">Get Started</Button>
        <div className="rounded w-full bg-background flex-between flex-col md:flex-row gap-3 md:gap-6 p-2 md:p-4 shadow-sm cursor-pointer hover-translateY">
          <div className="justify-start">
            <h3 className="h3">Snake Plant (Sansevieria)</h3>
            <p className="body-2 mb-1 lg:mb-2">
              This beauty works overtime, purifying the air and removing toxins
              while you sleep.
            </p>
            <span className="inline-block text-foreground p-1 lg:p-2 hover-scale">
              &rarr;
            </span>
          </div>
          <div className="flex-center">
            {/* <FeaturedProduct /> */}
            <Image
              src="/images/sample-products/p1.jpeg"
              alt=""
              width={150}
              height={150}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
