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
// Get all products
export async function getAllProducts() {
  const data = await prisma.product.findMany(); // Fetch all products from the database
  return convertToPlainObject(data); // Convert to plain objects (if needed)
}

// Get single product  by it's slug

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}

// // Get featured products
// export async function getFeaturedProducts() {
//   const prisma = new PrismaClient();
//   const data = await prisma.product.findMany({
//     where: { isFeatured: true },
//     orderBy: { createdAt: "desc" },
//     take: 20,
//   });

//   return convertToPlainObject(data);
// }
