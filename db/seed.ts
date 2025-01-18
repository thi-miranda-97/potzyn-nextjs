import { PrismaClient } from "@prisma/client";

import productData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: productData.products });
  console.log("Database seeded successfully!");
}

main();
