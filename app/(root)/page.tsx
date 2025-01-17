"use client";
import { Button } from "@/components/ui/button";

import productData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";
import Features from "@/components/features";
import NewArrival from "@/components/new-arrival";
import BlogList from "@/components/shared/blog/blog-list";
import CTA from "@/components/cta";

export default function Homepage() {
  return (
    <main className="grid grid-cols-1 gap-10 lg:gap-24">
      <section className="grid-between grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {/* HERO */}

        <div className="bg-accent rounded-lg p-3 lg:p-6 shadow-sm w-full">
          <h1 className="h1 mb-2 lg:mb-4">Grow Joy, One Leaf at a Time</h1>
          <p className="body-1 mb-3 lg:mb-6">
            Transform your space into a lush oasis with <strong>Potzyn</strong>!
            Explore our wide range of potted flowers, indoor, and outdoor
            plants. Perfect for plant lovers or beginners, our handpicked
            selections bring joy, purify your space, and add life to any
            setting.
          </p>
          <Button className="mb-4 lg:mb-8">Get Started</Button>
          <Features />
        </div>
      </section>
      {/* PRODUCT LIST */}
      <ProductList
        data={productData.products}
        title="Nature's Best in Every Pot: Shop Our Favorites"
        description="From lush indoor companions to blooming outdoor beauties, explore our top picks that add energy and life to your home."
        limit={6}
      />

      {/* NEW ARRIVAL */}
      <NewArrival
        data={productData.products}
        limit={3}
        title="Fresh Blooms, Fresh Starts: New In Stock"
        description="Exciting new plant arrivals to kickstart your collection and breathe
          fresh life into your home or garden."
      />

      {/* BLOG */}
      <BlogList />

      {/* CTA SECTION */}
      <CTA
        title="🎁 Limited-Time Offer: Gift a Subscription, Get a Bonus Plant!"
        description={
          <>
            To enter the giveaway, simply subscribe newsletter{" "}
            <strong>Potzyn</strong> with your email.{" "}
            <strong>50 lucky winners</strong> will be chosen at random!
          </>
        }
      />
    </main>
  );
}
