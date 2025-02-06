"use client";

import { z } from "zod";
import {
  insertOrderItemSchema,
  insertProductSchema,
  insertOrderSchema,
} from "@/lib/validators";
import { insertBlogSchema } from "@/lib/validators";
import { insertCartSchema, cartItemSchema } from "@/lib/validators";
import { shippingAddressSchema } from "@/lib/validators";
import { paymentResultSchema, insertReviewSchema } from "@/lib/validators";

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

export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

export type OrderItem = z.infer<typeof insertOrderItemSchema>;

export type Order = z.infer<typeof insertOrderSchema> & {
  id: string;
  createdAt: Date;
  isPaid: boolean;
  paidAt: Date | null;
  isDelivered: boolean;
  deliveredAt: Date | null;
  orderitems: OrderItem[];
  user: { name: string; email: string };
  paymentResult: PaymentResult;
};
export type PaymentResult = z.infer<typeof paymentResultSchema>;

export type Review = z.infer<typeof insertReviewSchema> & {
  id: string;
  createdAt: Date;
  user?: { name: string };
};
