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
import { Product } from "@/types";

const Homepage = () => {
  // Correctly typed states for products
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch latest and all products
        const latestData = await getLatestProducts();
        const allData = await getAllProducts();

        // Map fetched data to match the Product type
        const formattedLatestData: Product[] = latestData.map((product) => ({
          ...product,
          price: product.price.toString(), // Convert Decimal to string
          rating: product.rating.toString(), // Convert Decimal to string
        }));

        const formattedAllData: Product[] = allData.map((product) => ({
          ...product,
          price: product.price.toString(), // Convert Decimal to string
          rating: product.rating.toString(), // Convert Decimal to string
        }));

        // Set the state with the formatted data
        setLatestProducts(formattedLatestData);
        setAllProducts(formattedAllData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 lg:gap-24 mt-20 lg:mt-28">
      {/* HERO */}
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
