"use client";
import { useState, useEffect } from "react";
import {
  getLatestProducts,
  getAllProducts,
} from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/products/product-list";
import Hero from "@/components/hero";
import NewArrival from "@/components/new-arrival";
import BlogList from "@/components/shared/blog/blog-list";
import CTA from "@/components/cta";

const Homepage = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestProducts = await getLatestProducts();
        setLatestProducts(latestProducts);
        const allProducts = await getAllProducts();

        setAllProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 lg:gap-24 mt-20 lg:mt-28">
      {/* HERO  */}
      <Hero />

      {/* PRODUCT LIST */}
      <ProductList
        data={allProducts}
        title="Nature's Best in Every Pot: Shop Our Favorites"
        description="From lush indoor companions to blooming outdoor beauties, explore our top picks that add energy and life to your home."
        limit={3}
      />

      {/* NEW ARRIVAL */}
      <NewArrival
        data={latestProducts}
        limit={3}
        title="Fresh Blooms, Fresh Starts: New In Stock"
        description="Exciting new plant arrivals to kickstart your collection and breathe fresh life into your home or garden."
      />

      {/* BLOG */}
      <BlogList />

      {/* CTA SECTION */}
      <CTA
        title="🎁 Limited-Time Offer: Gift a Subscription, Get a Bonus Plant!"
        description="To enter the giveaway, simply subscribe newsletter Potzyn with your email. 50 lucky winners will be chosen at random!"
      />
    </div>
  );
};

export default Homepage;
