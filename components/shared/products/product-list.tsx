"use client";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";
import { Product } from "@/types";
import Link from "next/link"; // Import the Link component

export default function ProductList({
  data = [], // Initial data passed from the parent
  limit = 3, // Default to 3 products
}: {
  data: Product[];
  limit?: number;
}) {
  return (
    <>
      {/* Filter Options */}
      <div className="flex justify-end gap-2 lg:gap-4 mb-3 lg:mb-6">
        <Link href="/store">
          <Button>See All</Button>
        </Link>
      </div>

      {/* Show limited number of products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 mb-5 lg:mb-10">
        {data.slice(0, limit).map((product: Product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
