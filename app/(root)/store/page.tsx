"use client";

import { getAllProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/products/product-list";
import { useState, useEffect } from "react";
import { Product } from "@/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomPagination from "@/components/shared/custom-pagination";

export default function Store() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>("createdAt");
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [rating, setRating] = useState<string | null>("all");
  const [categoryOption, setcategoryOption] = useState<string>("all");
  const [page, setPage] = useState<number>(1); // Add page state
  const [totalPages, setTotalPages] = useState<number>(1); // Add totalPages state

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
          sort: sortOption as "new" | "favorite" | "best-deals" | "all",
          price: formattedPriceRange || undefined,
          rating: ratingValue ? ratingValue.toString() : undefined,
          category: categoryOption as "indoor" | "outdoor" | "flowers" | "all",
          page: page,
          limit: 100,
        });

        // Update the state with the fetched products and total pages
        setAllProducts(result.data);
        setTotalPages(result.totalPages); // Set totalPages from the API response
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [sortOption, priceRange, rating, categoryOption, page]);

  // Handle price filter change
  const handlePriceChange = (value: string) => {
    setPriceRange(value);
    setPage(1);
  };

  // Handle rating filter change
  const handleRatingChange = (value: string) => {
    setRating(value === "all" ? null : value);
    setPage(1);
  };

  // Handle category filter change
  const handleCategoryChange = (value: string) => {
    setcategoryOption(value);
    setPage(1);
    console.log("Selected category:", value);
  };

  // Handle sort option change
  const handleSortChange = (value: string) => {
    // Ensure valid sort option
    if (["new", "favorite", "best-deals", "all"].includes(value)) {
      setSortOption(value);
    } else {
      setSortOption("all");
    }
    setPage(1);
  };

  return (
    <section className="mt-20 lg:mt-32">
      <div className="flex-between flex-col lg:flex-row mb-5 lg:mb-10">
        <h2 className="h2 mb-4 lg:mb-0">Our Products</h2>
        <div className="flex-between gap-2 lg:gap-4">
          {/* Category Filter */}
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-24 lg:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="all" value="all">
                All
              </SelectItem>
              <SelectItem key="indoor" value="indoor">
                Indoor
              </SelectItem>
              <SelectItem key="outdoor" value="outdoor">
                Outdoor
              </SelectItem>
              <SelectItem key="flowers" value="flowers">
                Flowers
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Price filter */}
          <Select onValueChange={handlePriceChange}>
            <SelectTrigger className="w-24 lg:w-[180px]">
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
            <SelectTrigger className="w-24 lg:w-[180px]">
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
            <SelectTrigger className="w-24 lg:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="all" value="all">
                All
              </SelectItem>
              <SelectItem key="new" value="new">
                New Arrivals
              </SelectItem>
              <SelectItem key="favorite" value="favorite">
                Top Reviews
              </SelectItem>
              <SelectItem key="best-deals" value="best-deals">
                Best Deals
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

      {/* Pagination */}
      <CustomPagination page={page} totalPages={totalPages} />
    </section>
  );
}
