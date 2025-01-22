"use server";
import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

// Get all products with filtering options
export async function getAllProducts({
  category = "all",
  price,
  rating,
  sort = "all",
  page = 1,
  limit = 10,
}: {
  category?: "indoor" | "outdoor" | "flowers" | "all";
  price?: string;
  rating?: string;
  sort?: "new" | "favorite" | "best-deals" | "all";
  page?: number;
  limit?: number;
}) {
  // Construct query filters
  const categoryFilter = category && category !== "all" ? { category } : {};
  console.log(categoryFilter);
  const priceFilter =
    price && price !== "all"
      ? {
          price: {
            gte: Number(price.split("-")[0]),
            lte: Number(price.split("-")[1]),
          },
        }
      : {};
  const ratingFilter =
    rating && rating !== "all"
      ? {
          rating: {
            gte: Number(rating),
          },
        }
      : {};

  // Combine all filters
  const filters = {
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  };

  // Sorting logic
  let orderBy = {};
  if (sort === "new") {
    orderBy = { createdAt: "desc" };
  } else if (sort === "favorite") {
    orderBy = { rating: "desc" };
  } else if (sort === "best-deals") {
    orderBy = { price: "asc" };
  } else if (sort === "all") {
    orderBy = { createdAt: "desc" };
  }

  // Fetch filtered products with pagination
  const data = await prisma.product.findMany({
    where: filters,
    orderBy,
    skip: (page - 1) * limit,
    take: limit,
  });

  // Count the total number of matching products for pagination
  const dataCount = await prisma.product.count({
    where: filters,
  });

  return {
    data: convertToPlainObject(data),
    totalPages: Math.ceil(dataCount / limit),
  };
}

// Get single product by its slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
