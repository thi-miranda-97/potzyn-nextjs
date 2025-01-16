"use client";
import { useState } from "react";
import ProductCard from "./shared/products/product-card";
import { Button } from "@/components/ui/button";

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

export default function NewArrival({
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
  const newArrivalProducts = data.filter((product) => product.isNew);
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate total pages
  const totalPages = Math.ceil(newArrivalProducts.length / limit);

  // Paginated data
  const paginatedData = newArrivalProducts.slice(
    currentPage * limit,
    (currentPage + 1) * limit
  );

  // Handle pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className="h2 mb-2 lg:mb-4">{title}</h2>
      <p className="body-1 mb-3 lg:mb-6">{description}</p>

      {/* NEW ARRIVAL PRODUCTS */}
      {newArrivalProducts.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {paginatedData.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-foreground w-12"
                    : "bg-accent-foreground hover:bg-foreground"
                }`}
                onClick={() => handlePageChange(index)}
                aria-label={`Go to page ${index + 1}`}
              ></Button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
}
