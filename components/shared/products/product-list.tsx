"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";
import { Product } from "@/types";
import Link from "next/link";
export default function ProductList({
  data = [],
  title,
  description,
  limit = 3,
}: {
  data: Product[];
  title?: string;
  description?: string;
  limit?: number;
}) {
  // Set the default filter to "indoor"
  const [filter, setFilter] = useState<string>("indoor");

  // Filter the products based on the selected category
  const filteredProducts =
    filter && filter !== "all"
      ? data.filter((product) =>
          product.category.toLowerCase().includes(filter.toLowerCase())
        )
      : data;

  // Limit the number of displayed products
  const limitedProductData = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;
  if (!data.length) {
    return <p>No products available.</p>;
  }

  return (
    <section id="product-list">
      <h2 className="h2 uppercase text-center mb-2 lg:mb-4">{title}</h2>
      <p className="body-1 text-center mb-3 lg:mb-6">{description}</p>
      {/* Filter Links */}
      <div className="flex-between mb-3 lg:mb-6">
        <div className="flex gap-3 lg:gap-6">
          <Button
            variant="outline"
            onClick={() => setFilter("indoor")}
            className={`${
              filter === "indoor" ? "bg-foreground text-background" : ""
            }`}
          >
            Indoor
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("outdoor")}
            className={` ${
              filter === "outdoor" ? "bg-foreground text-background" : ""
            }`}
          >
            Outdoor
          </Button>
          <Button
            variant="outline"
            onClick={() => setFilter("flowers")}
            className={` ${
              filter === "flowers" ? "bg-foreground text-background" : ""
            }`}
          >
            Flowers
          </Button>
        </div>
        <Button
          asChild
          onClick={() => setFilter("all")}
          className={` ${
            filter === "all" ? "bg-foreground text-background" : ""
          }`}
        >
          <Link href="/store">See All</Link>
        </Button>
      </div>

      {/* Product List */}

      {filteredProducts.length > 0 ? (
        <div className="overflow-hidden grid-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 z-[1]">
          {limitedProductData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </section>
  );
}
