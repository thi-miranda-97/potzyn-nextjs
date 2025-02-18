import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: "admin" | "user";
    
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: "admin" | "user";
    password?: string | "";
  }
  interface CartItem {
    productId: string;
    name: string;
    slug: string;
    price: string;
    qty: number;
    image: string;
    stock?: number;
  }
}

// Create a new type for OrderItem to avoid passing unnecessary fields like `stock`
type OrderItemForCreation = Omit<CartItem, "stock"> & {
  price: number; // Ensure the price is a number when passing it to Prisma
};

// interface Product {
//   id: string | number; // Adjust type as necessary (e.g., string or number based on your ID format)
//   name: string;
//   slug: string;
//   category: string;
//   description: string;
//   images: string[]; // Assuming this is an array of image URLs
//   price: number;
//   rating: number;
//   numReviews: number;
//   stock: number;
//   isFeatured: boolean;
//   createdAt: string; // Assuming this is a date string
// }