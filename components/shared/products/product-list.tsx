"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";

interface Product {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  isNew: boolean;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string;
}

export default function ProductList({
  data,
  title,
  description,
  limit,
}: {
  data: Product[];
  title?: string;
  description?: string;
  limit?: number;
}) {
  const [filter, setFilter] = useState<string | null>(null);

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

  return (
    <div>
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
          onClick={() => setFilter(null)}
          className={` ${!filter ? "" : "bg-foreground text-background"}`}
        >
          See All
        </Button>
      </div>

      {/* Product List */}
      <div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {limitedProductData.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div>
            <p>No products found</p>
          </div>
        )}
      </div>
    </div>
  );
}
