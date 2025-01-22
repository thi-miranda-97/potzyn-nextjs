"use server";

import { prisma } from "@/db/prisma";
import { FEATURED_BLOGS_LIMIT } from "../constants";

// Get featured blogs
// export async function getFeaturedBlogs() {
//   try {
//     const data = await prisma.blogPost.findMany({
//       take: FEATURED_BLOGS_LIMIT,
//       orderBy: {
//         featured: "desc", // Ensure true values come first
//       },
//     });
//     return data;
//   } catch (error) {
//     console.error("Error fetching featured blogs:", error);
//     throw new Error("Unable to fetch featured blogs.");
//   }
// }

// Get featured blogs
export type FeaturedBlog = {
  id: string;
  title: string;
  sub: string;
  images: string;
  tag: string;
};

export const getFeaturedBlogs = async (): Promise<FeaturedBlog[]> => {
  try {
    const blogs = await prisma.blogPost.findMany({
      take: FEATURED_BLOGS_LIMIT,
      orderBy: {
        featured: "desc", // Ensure true values come first
      },
      include: {
        tag: true, // Include the related tag data
      },
    });

    // Return only the necessary properties
    return blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      sub: blog.sub,
      images: blog.images,
      tag: blog.tag?.name || "Unknown", // Ensure tag is a string
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch featured blogs.");
  }
};
