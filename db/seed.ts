import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  try {
    // Reset the database
    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();
    await prisma.blogPost.deleteMany();
    await prisma.tag.deleteMany();

    // Seed products
    await prisma.product.createMany({ data: sampleData.products });

    // Seed users
    await prisma.user.createMany({ data: sampleData.users });

    // Seed tags
    const tags = [
      { name: "Indoor Care" },
      { name: "Outdoor Care" },
      { name: "Flower Care" },
      { name: "Pest Control" },
      { name: "Plant Styling" },
      { name: "Fertilizing" },
      { name: "Repotting Tips" },
      { name: "Plant Health" },
      { name: "Watering Tips" },
      { name: "Gardening Tips" },
    ];
    await prisma.tag.createMany({ data: tags });

    // Fetch tag IDs and map them by name
    const tagRecords = await prisma.tag.findMany();
    const tagMap = Object.fromEntries(
      tagRecords.map((tag) => [tag.name, tag.id])
    );

    // Fetch the admin user's ID
    const admin = await prisma.user.findFirst({
      where: { role: "admin" },
      select: { id: true },
    });

    if (!admin || !admin.id) {
      throw new Error(
        "Admin user not found. Please ensure there is an admin in sampleData."
      );
    }

    // Map blog posts to include admin's userId and tagId
    const blogPosts = sampleData.blogPosts.map((post) => {
      const tagId = tagMap[post.tag];
      if (!tagId) {
        console.warn(
          `Tag "${post.tag}" not found. Skipping blog post: ${post.title}`
        );
        return null;
      }
      return {
        title: post.title,
        createdAt: new Date(),
        updatedAt: new Date(),
        published: post.published,
        images: post.images,
        featured: post.featured,
        sub: post.sub,
        content: post.content,
        userId: admin.id,
        tagId,
      };
    });

    // Filter out any invalid blog posts
    const validBlogPosts = blogPosts.filter((post) => post !== null);

    // Insert blog posts
    await prisma.blogPost.createMany({ data: validBlogPosts });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
