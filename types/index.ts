"use client";

import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";
import { insertBlogSchema } from "@/lib/validators";
import { insertCartSchema, cartItemSchema } from "@/lib/validators";
export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  numReviews: number;
  stock: number;
  createdAt: Date;
};

export type Blog = z.infer<typeof insertBlogSchema> & {
  id: string;
  title: string;
  sub: string;
  images: string;
  tag?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
