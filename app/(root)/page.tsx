import FeaturedProduct from "@/components/shared/products/featured-product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import productData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Homepage() {
  return (
    <main className="grid grid-cols-1 gap-8 lg:gap-16">
      <div className="grid-between grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {/* HERO */}
        <FeaturedProduct />
        <div className="bg-accent rounded-lg p-3 lg:p-6 shadow-sm w-full">
          <h1 className="h1 mb-2 lg:mb-4">Grow Joy, One Leaf at a Time</h1>
          <p className="body-1 mb-3 lg:mb-6">
            Looking to transform your home, office, or garden into a lush,
            vibrant oasis? You&apos;ve come to the right place! At{" "}
            <strong>Potzyn</strong>, we bring nature closer to you with our wide
            variety of potted flowers, indoor plants, and outdoor plants.
            Whether you&apos;re a seasoned plant parent or just getting started,
            our handpicked selections will spark joy, purify your space, and add
            life to your surroundings.
          </p>
          <Button className="mb-4 lg:mb-8">Get Started</Button>
          <Button variant="secondary" className="mb-4 lg:mb-8">
            Get Started
          </Button>
          <Card className="rounded-lg w-full bg-background flex-between flex-col md:flex-row gap-3 md:gap-6 p-2 md:p-4 shadow-sm cursor-pointer hover-translateY">
            <CardHeader className="justify-start">
              <CardTitle className="h4">Snake Plant (Sansevieria)</CardTitle>
              <CardDescription className="body-2 text-light mb-1 lg:mb-2">
                This beauty works overtime, purifying the air and removing
                toxins while you sleep.
              </CardDescription>
              <span className="inline-block text-foreground p-1 lg:p-2 hover-scale">
                &rarr;
              </span>
            </CardHeader>
            <CardFooter className="flex-center">
              {/* <FeaturedProduct /> */}
              <Image
                src="/images/sample-products/p1.jpeg"
                alt=""
                width={150}
                height={150}
                className="w-full h-auto rounded"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* PRODUCT LIST */}
      <ProductList
        data={productData.products}
        title="Nature's Best in Every Pot: Shop Our Favorites"
        limit={3}
      />
    </main>
  );
}
