"use server";
import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";
import { PAGE_SIZE } from "../constants";
import { revalidatePath } from 'next/cache';
import { formatError } from "../utils";
import { insertProductSchema, updateProductSchema } from "../validators";
import { z } from "zod";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

// Get all products with filtering options
// export async function getAllProducts({
//   category = "all",
//   price,
//   rating,
//   sort = "all",
//   page = 1,
//   limit = 10,
// }: {
//   category?: "indoor" | "outdoor" | "flowers" | "all";
//   price?: string;
//   rating?: string;
//   sort?: "new" | "favorite" | "best-deals" | "all";
//   page?: number;
//   limit?: number;
// }) {
//   // Construct query filters
//   const categoryFilter = category && category !== "all" ? { category } : {};

//   const priceFilter =
//     price && price !== "all"
//       ? {
//           price: {
//             gte: Number(price.split("-")[0]),
//             lte: Number(price.split("-")[1]),
//           },
//         }
//       : {};
//   const ratingFilter =
//     rating && rating !== "all"
//       ? {
//           rating: {
//             gte: Number(rating),
//           },
//         }
//       : {};

//   // Combine all filters
//   const filters = {
//     ...categoryFilter,
//     ...priceFilter,
//     ...ratingFilter,
//   };

//   // Sorting logic
//   let orderBy = {};
//   if (sort === "new") {
//     orderBy = { createdAt: "desc" };
//   } else if (sort === "favorite") {
//     orderBy = { rating: "desc" };
//   } else if (sort === "best-deals") {
//     orderBy = { price: "asc" };
//   } else if (sort === "all") {
//     orderBy = { createdAt: "desc" };
//   }

//   // Fetch filtered products with pagination
//   const data = await prisma.product.findMany({
//     where: filters,
//     orderBy,
//     skip: (page - 1) * limit,
//     take: limit,
//   });

//   // Count the total number of matching products for pagination
//   const dataCount = await prisma.product.count({
//     where: filters,
//   });

//   return {
//     data: convertToPlainObject(data),
//     totalPages: Math.ceil(dataCount / limit),
//   };
// }

// Get single product by its slug
export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findFirst({
    where: { slug: slug },
  });
  if (!product) return null;

  return convertToPlainObject(product);
}

// Get all products
export async function getAllProducts({
  query,
  limit = PAGE_SIZE,
  page,
  category,
  
  
  
}: {
  query: string;
  limit?: number;
  page: number;
  category?: string;
}) {


  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc"},
    skip: (page - 1) * limit,
    take: limit,
  });
  const dataCount = await prisma.product.count();

  return {
    data,
    totalPages: Math.ceil(dataCount / limit),
  };
}


// Delete a product
export async function deleteProduct(id: string) {
  try {
    const productExists = await prisma.product.findFirst({
      where: { id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.product.delete({ where: { id } });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Create a product
export async function createProduct(data: z.infer<typeof insertProductSchema>) {
  try {
    const product = insertProductSchema.parse(data);
    await prisma.product.create({ data: product });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Update a product
export async function updateProduct(data: z.infer<typeof updateProductSchema>) {
  try {
    const product = updateProductSchema.parse(data);
    const productExists = await prisma.product.findFirst({
      where: { id: product.id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.product.update({
      where: { id: product.id },
      data: product,
    });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}


// Get all categories
export async function getAllCategories() {
  const data = await prisma.product.groupBy({
    by: ["category"],
    _count: true,
  });

  return data;
}
