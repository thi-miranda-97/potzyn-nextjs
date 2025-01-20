"use client";

import { getAllProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/products/product-list";
import { useState, useEffect } from "react";
import { Product } from "@/types";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Store() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>("createdAt");
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [rating, setRating] = useState<string | null>("all");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Fetch products based on the filters and pagination
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adjust price range logic for numeric filtering
        const formattedPriceRange = priceRange
          ? priceRange === "1-49"
            ? "0-49"
            : priceRange === "50-99"
            ? "50-99"
            : priceRange === "100-399"
            ? "100-399"
            : priceRange === "400-799"
            ? "400-799"
            : priceRange === "800-1000"
            ? "800-1000"
            : null
          : null;

        // Convert rating to numeric value if set (null means all)
        const ratingValue =
          rating && rating !== "all" ? parseFloat(rating) : null;

        // Fetch the data from the API
        const result = await getAllProducts({
          sort: sortOption as "lowest" | "highest" | "rating" | "createdAt", // Explicit type assertion for sort
          price: formattedPriceRange || undefined, // Ensure it's a valid string or undefined
          rating: ratingValue ? ratingValue.toString() : undefined, // Ensure rating is a string or undefined
          page: page,
          limit: 15,
        });

        // Update the state with the fetched products and total pages
        setAllProducts(result.data);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [sortOption, priceRange, rating, page]); // Re-fetch when filters or page changes

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Handle price filter change
  const handlePriceChange = (value: string) => {
    setPriceRange(value);
  };

  // Handle rating filter change
  const handleRatingChange = (value: string) => {
    setRating(value === "all" ? null : value);
  };

  // Handle sort option change
  const handleSortChange = (value: string) => {
    if (value === "price") {
      setSortOption("lowest"); // Ensure this uses "lowest" for ascending price
    } else {
      setSortOption(value);
    }
  };

  return (
    <section className="mt-20 lg:mt-32">
      <div className="flex-between flex-col lg:flex-row mb-5 lg:mb-10">
        <h2 className="h2 mb-4 lg:mb-0">Our Products</h2>
        <div className="flex-between gap-2 lg:gap-4">
          {/* Price filter */}
          <Select onValueChange={handlePriceChange}>
            <SelectTrigger className="w-28 lg:w-[180px]">
              <SelectValue placeholder="Price ($)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="all" value="all">
                All
              </SelectItem>
              <SelectItem key="1-49" value="1-49">
                1-49
              </SelectItem>
              <SelectItem key="50-99" value="50-99">
                50-99
              </SelectItem>
              <SelectItem key="100-399" value="100-399">
                100-399
              </SelectItem>
              <SelectItem key="400-799" value="400-799">
                400-799
              </SelectItem>
              <SelectItem key="800-1000" value="800-1000">
                800-1000
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Rating filter */}
          <Select onValueChange={handleRatingChange}>
            <SelectTrigger className="w-28 lg:w-[180px]">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="all" value="all">
                <div className="flex items-center">All Ratings</div>
              </SelectItem>
              {[1, 2, 3, 4].map((ratingValue) => (
                <SelectItem key={ratingValue} value={String(ratingValue)}>
                  <div className="flex items-center">
                    {ratingValue === 1
                      ? `${ratingValue} star & up`
                      : `${ratingValue} stars & up`}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sorting option */}
          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="w-28 lg:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="createdAt" value="createdAt">
                New to Old
              </SelectItem>
              <SelectItem key="rating" value="rating">
                High rating to Low
              </SelectItem>
              <SelectItem key="price" value="price">
                Affordable to Expensive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Check if no products found */}
      {allProducts.length === 0 ? (
        <div className="text-center text-lg text-destructive">
          No products found
        </div>
      ) : (
        <ProductList data={allProducts} limit={15} />
      )}

      {/* Pagination Controls */}
      <Pagination>
        <PaginationContent>
          {/* Previous button */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(page - 1)}
              className={`${page <= 1 && "opacity-60 pointer-events-none"}`}
            />
          </PaginationItem>

          {/* Page numbers */}
          {[...Array(totalPages).keys()].map((i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(i + 1)}
                isActive={page === i + 1}
                className={
                  page === i + 1
                    ? "bg-foreground text-background border-none"
                    : ""
                }
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Ellipsis if more pages */}
          {totalPages > 5 && page < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {/* Next button */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(page + 1)}
              className={`${
                page >= totalPages &&
                "text-foreground opacity-50 pointer-events-none"
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}
