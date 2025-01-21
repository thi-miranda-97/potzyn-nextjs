import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await prisma.blogPost.findMany({
          include: {
            tag: true, // Include the related tags for each post
            user: true, // Include the user who created the post
          },
        });
        res.status(200).json(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Failed to fetch posts" });
      }
      break;

    case "POST":
      const { title, content, tag, sub, userId, published, featured } =
        req.body;

      if (!title || !content || !tag || !userId) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      try {
        const tagRecord = await prisma.tag.findFirst({
          where: { name: tag }, // Use `name` to find the tag
        });

        if (!tagRecord) {
          return res.status(400).json({ error: `Tag "${tag}" not found` });
        }

        const newPost = await prisma.blogPost.create({
          data: {
            title,
            content,
            tagId: tagRecord.id,
            sub,
            published: published || true, // default to published if not provided
            featured: featured || false, // default to false if not provided
            userId,
          },
        });

        res.status(201).json(newPost);
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Failed to create post" });
      }
      break;

    case "PUT":
      const { id, updatedContent } = req.body;

      if (!id || !updatedContent) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      try {
        const updatedPost = await prisma.blogPost.update({
          where: { id },
          data: { content: updatedContent },
        });

        res.status(200).json(updatedPost);
      } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Failed to update post" });
      }
      break;

    case "DELETE":
      const { postId } = req.body;

      if (!postId) {
        return res.status(400).json({ error: "Missing postId" });
      }

      try {
        const deletedPost = await prisma.blogPost.delete({
          where: { id: postId },
        });

        res.status(200).json(deletedPost);
      } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ error: "Failed to delete post" });
      }
      break;

    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
