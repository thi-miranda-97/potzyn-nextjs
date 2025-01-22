import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );
// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  price: currency,
  stock: z.coerce.number(),
  isFeatured: z.boolean(),
});

export const insertBlogSchema = z.object({
  title: z.string().min(10, "Name must be at least 10 characters"),
  sub: z.string().min(3, "Sub must be at least 3 characters"),
  tag: z.string().min(3, "Tag must be at least 3 characters"),
  content: z.string().min(3, "Content must be at least 3 characters"),
  images: z.string().min(1, "Product must have at least one image"),
  published: z.boolean(),
  featured: z.boolean(),
});
