"use client";
import { Button } from "@/components/ui/button";

import productData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";

export default function Homepage() {
  return (
    <main className="grid grid-cols-1 gap-8 lg:gap-16">
      <div className="grid-between grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {/* HERO */}

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
          <Button className="mb-4 lg:mb-8 uppercase">Get Started</Button>

          {/* Single Featured Product */}
          <div className="flex-between">
            <div className="flex-center flex-col">
              <h2 className="h2">200+</h2>
              <p className="body-2">Unique</p>
            </div>
            <div className="flex-center flex-col">
              <h2 className="h2">200+</h2>
              <p className="body-2">Unique</p>
            </div>
            <div className="flex-center flex-col">
              <h2 className="h2">200+</h2>
              <p className="body-2">Unique</p>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT LIST */}
      <ProductList
        data={productData.products}
        title="Nature's Best in Every Pot: Shop Our Favorites"
        limit={3}
      />

      {/* NEW ARRIVAL */}
    </main>
  );
}
