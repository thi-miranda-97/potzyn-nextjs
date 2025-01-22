"use server";

import { prisma } from "@/db/prisma";
import { FEATURED_BLOGS_LIMIT } from "../constants";

// Get featured blogs
export type Blog = {
  id: string;
  title: string;
  sub: string;
  images: string;
  tag: string;
  content: string;
  published: boolean;
  featured: boolean;
};
// Define FeaturedBlog type (which extends Blog)
export type FeaturedBlog = Omit<Blog, "content" | "published" | "featured">;

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
      tag: blog.tag?.name || "Unknown",
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch featured blogs.");
  }
};

// get a post by id
export async function getPostById(id: string) {
  try {
    const post = await prisma.blogPost.findFirst({
      where: { id: id },
      include: {
        tag: true, // Include tag data if available
      },
    });
    if (!post) return null;

    // Ensure tag is always a string, default to 'Unknown' if missing
    return {
      ...post,
      tag: post.tag?.name || "Unknown", // Fallback to "Unknown" if tag is not available
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Unable to fetch post");
  }
}

// Get all blogs
export async function getAllBlogs({
  tag = "all",
  sort = "all",
  page = 1,
  limit = 10,
}: {
  tag?: string;
  sort?: "new" | "popular" | "all";
  page?: number;
  limit?: number;
}) {
  // Construct query filters
  const tagFilter = tag && tag !== "all" ? { tag: { name: tag } } : {}; // Assuming 'name' is the tag field

  // Sorting logic
  let orderBy = {};
  if (sort === "new") {
    orderBy = { createdAt: "desc" };
  } else if (sort === "popular") {
    orderBy = { featured: "desc", createdAt: "desc" };
  } else if (sort === "all") {
    orderBy = { createdAt: "desc" };
  }

  // Fetch filtered blogs with pagination and include the related tag
  const data = await prisma.blogPost.findMany({
    where: tagFilter,
    orderBy,
    skip: (page - 1) * limit,
    take: limit,
    include: {
      tag: true, // Include the related tag data
    },
  });

  // Count the total number of matching blog posts for pagination
  const dataCount = await prisma.blogPost.count({
    where: tagFilter,
  });

  // Map the result to include the tag name
  const formattedData = data.map((post) => ({
    ...post,
    tag: post.tag.name, // Replace tagId with the tag name
  }));

  return {
    data: formattedData,
    totalPages: Math.ceil(dataCount / limit),
  };
}
