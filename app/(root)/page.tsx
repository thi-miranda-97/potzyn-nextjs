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
import About from "@/components/ui/about";

const Homepage = () => {
  // State for latest and all products
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch latest products
        const latestData = await getLatestProducts();
        setLatestProducts(
          latestData.map((product) => ({
            ...product,
            price: product.price?.toString(), // Convert Decimal to string
            rating: product.rating?.toString(), // Convert Decimal to string
          }))
        );

        // Fetch all products
        const allDataResponse = await getAllProducts({
          category: "all",
          page: 1,
          limit: 10,
        });

        // Assuming `getAllProducts` returns { data: Product[] }
        setAllProducts(
          allDataResponse.data.map((product) => ({
            ...product,
            price: product.price?.toString(),
            rating: product.rating?.toString(),
          }))
        );
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-20 lg:gap-32 mt-20 lg:mt-32">
      {/* HERO */}
      <Hero />

      {/* PRODUCT LIST */}
      <section id="product-list">
        <h2 className="h2 uppercase text-center mb-2 lg:mb-4">
          Nature&apos;s Best in Every Pot: Shop Our Favorites
        </h2>
        <p className="body-1 text-center mb-3 lg:mb-6">
          From lush indoor companions to blooming outdoor beauties, explore our
          top picks that add energy and life to your home.
        </p>
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ProductList data={allProducts} limit={3} />
        )}
      </section>

      {/* ABOUT US SECTION */}
      <About />

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
