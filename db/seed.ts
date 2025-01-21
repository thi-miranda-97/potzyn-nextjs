import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  // Seed products
  await prisma.product.deleteMany();

  await prisma.account.deleteMany();
  await prisma.session.deleteMany();

  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.tag.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });
  await prisma.tag.createMany({ data: sampleData.tags });
  console.log("Product data seeded successfully!");
  await prisma.blogPost.createMany({ data: sampleData.blogs });
  console.log("Blog post data seeded successfully!");
}

main();
