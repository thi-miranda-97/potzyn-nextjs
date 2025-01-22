"use client";

import { getAllBlogs } from "@/lib/actions/blog.actions";
import BlogList from "@/components/shared/blog/blog-list";
import { useState, useEffect } from "react";
import { Blog } from "@/types"; // Assuming you have a Blog type

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
// import { BlogPost } from "@prisma/client";

export default function BlogPage() {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [sortOption, setSortOption] = useState<string>("createdAt");
  const [tag, setTag] = useState<string | null>("all");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Fetch blogs based on the filters and pagination
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllBlogs({
          sort: sortOption as "new" | "popular" | "all",
          tag: tag || undefined,
          page: page,
          limit: 10,
        });

        // Transform the data to include 'tag' instead of 'tagId'
        // const blogData = result.data.map((post: BlogPost) => ({
        //   ...post,
        //   tag: post.tagId, // Rename 'tagId' to 'tag'
        // }));

        setAllBlogs(result.data); // Set the correctly typed data
        setTotalPages(result.totalPages); // Set the total pages
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, [sortOption, tag, page]); // Re-fetch when filters or page changes

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Handle tag filter change
  const handleTagChange = (value: string) => {
    setTag(value === "all" ? null : value);
  };

  // Handle sort option change
  const handleSortChange = (value: string) => {
    if (["new", "popular", "all"].includes(value)) {
      setSortOption(value);
    } else {
      setSortOption("all"); // Default to "all" if an invalid value is selected
    }
  };

  const visiblePages = [
    ...new Set([1, page - 1, page, page + 1, totalPages]),
  ].filter((p) => p > 0 && p <= totalPages);

  return (
    <section className="flex flex-col mt-20 lg:mt-32">
      <h2 className="h2 mb-4 lg:mb-0">
        From Our Garden to Yours: Simple Plant Care Tips
      </h2>

      <div className="flex gap-2 lg:gap-4 my-5 lg:my-10">
        {/* Tag Filter */}
        <Select onValueChange={handleTagChange}>
          <SelectTrigger className="w-32 lg:w-[180px]">
            <SelectValue placeholder="Tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="all" value="all">
              All
            </SelectItem>
            <SelectItem key="Indoor Care" value="Indoor Care">
              Indoor Care
            </SelectItem>
            <SelectItem key="Outdoor Care" value="Outdoor Care">
              Outdoor Care
            </SelectItem>
            <SelectItem key="Plan Health" value="Plan Health">
              Plan Health
            </SelectItem>
            <SelectItem key="Flower Care" value="Flower Care">
              Flower Care
            </SelectItem>
            <SelectItem key="Gardening Tips" value="Gardening Tips">
              Gardening Tips
            </SelectItem>
            <SelectItem key="Watering Tips" value="Watering Tips">
              Watering Tips
            </SelectItem>
            <SelectItem key="Plant Styling" value="Plant Styling">
              Plant Styling
            </SelectItem>
            <SelectItem key="Repotting Tips" value="Repotting Tips">
              Repotting Tips
            </SelectItem>
            <SelectItem key="Pest Control" value="Pest Control">
              Pest Control
            </SelectItem>
            <SelectItem key="Fertilizing" value="Fertilizing">
              Fertilizing
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Sorting option */}
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="w-32 lg:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="all" value="all">
              All
            </SelectItem>
            <SelectItem key="new" value="new">
              Newest
            </SelectItem>
            <SelectItem key="popular" value="popular">
              Popular
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Check if no blogs found */}
      {allBlogs.length === 0 ? (
        <div className="text-center text-lg text-destructive">
          No blogs found
        </div>
      ) : (
        <BlogList data={allBlogs} limit={10} />
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
          {visiblePages.map((p, idx) => (
            <PaginationItem key={p}>
              {visiblePages[idx - 1] + 1 < p && <PaginationEllipsis />}
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(p)}
                isActive={page === p}
              >
                {p}
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
