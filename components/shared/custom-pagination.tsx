"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type CustomPaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};

const CustomPagination = ({
  page,
  totalPages,
  urlParamName = "page",
}: CustomPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: urlParamName,
        value: newPage.toString(),
      });
      router.push(newUrl, { scroll: false }); // Prevent scrolling to the top
    }
  };

  // Get visible pages for pagination
  const getVisiblePages = () => {
    const currentPage = Number(page);
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // Adjust start and end pages if near the boundaries
    if (currentPage - 2 <= 1) {
      endPage = Math.min(5, totalPages);
    }
    if (currentPage + 2 >= totalPages) {
      startPage = Math.max(1, totalPages - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handlePageChange(Number(page) - 1);
            }}
            className={`${
              Number(page) <= 1 && "opacity-60 pointer-events-none"
            }`}
          />
        </PaginationItem>

        {/* Page numbers */}
        {visiblePages.map((p, idx) => (
          <PaginationItem key={p}>
            {/* Show ellipsis if there's a gap between pages */}
            {idx > 0 && visiblePages[idx - 1] + 1 < p && <PaginationEllipsis />}
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handlePageChange(p);
              }}
              isActive={Number(page) === p}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Show ellipsis if there are more pages */}
        {totalPages > 5 && Number(page) < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handlePageChange(Number(page) + 1);
            }}
            className={`${
              Number(page) >= totalPages &&
              "text-foreground opacity-50 pointer-events-none"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
