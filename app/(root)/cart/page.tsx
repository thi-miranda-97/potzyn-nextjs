import { Metadata } from "next";
import { getMyCart } from "@/lib/actions/cart.actions";
import CartOrders from "./cart-orders";

export const metadata: Metadata = {
  title: "Your Cart",
};

export default async function CartPage() {
  const cart = await getMyCart();

  return (
    <div className="mt-20 lg:mt-28">
      <CartOrders cart={cart} />
    </div>
  );
}
