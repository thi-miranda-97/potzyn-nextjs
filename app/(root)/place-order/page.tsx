import { auth } from "@/auth";
import { getMyCart } from "@/lib/actions/cart.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { ShippingAddress } from "@/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import CheckoutSteps from "@/components/shared/products/checkout-steps";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import PlaceOrderForm from "./place-order-form";

export const metadata: Metadata = {
  title: "Place Order",
};

const PlaceOrderPage = async () => {
  const cart = await getMyCart();
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("User not found");

  const user = await getUserById(userId);

  if (!cart || cart.items.length === 0) redirect("/cart");
  if (!user.address) redirect("/shipping-address");
  if (!user.paymentMethod) redirect("/payment-method");

  const userAddress = user.address as ShippingAddress;

  return (
    <div className="mt-20 lg:mt-28">
      <CheckoutSteps current={3} />
      <div className="text-center">
        <h2 className="h2">Confirm & Pay</h2>
        <p className="body-2 mt-1 md:mt-2 mb-3 md:mb-6">
          {cart.items.reduce((a, c) => a + c.qty, 0)} items
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8 lg:gap-16">
        {/* Item Column */}

        <div className="grid-between grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {cart.items.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col gap-2 md:gap-4 mb-3 md:mb-6 mr-2 md:mr-4"
            >
              <Link
                href={`/product/${item.slug}`}
                className="flex flex-col justify-start"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  priority
                  className="rounded-md"
                />

                <span className="font-bold text-left mb-2 md:mb-4">
                  {item.name}
                </span>
                <p className="flex-between">
                  <span className="">${item.price}</span>
                  <span className="body-2 text-accent-foreground">
                    Quantity: {item.qty}
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Info Column */}
        <div className="flex flex-col gap-3 md:gap-6">
          {/* Shipping */}
          <div className="bg-accent p-2 md:p-4 rounded-md">
            <p className="text-lg lg:text-xl font-bold mb-1 md:mb-2">
              Shipping Address
            </p>
            <div className="px-2">
              <p className="font-medium mb-1 lg:mb-2">{userAddress.fullName}</p>
              <p>
                {userAddress.streetAddress}, {userAddress.city}{" "}
                {userAddress.postalCode}, {userAddress.country}{" "}
              </p>
            </div>
            <div className="mt-3">
              <Link href="/shipping-address">
                <Button variant="outline">Edit</Button>
              </Link>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-accent p-2 md:p-4 rounded-md mb-5 lg:mb-10">
            <p className="text-lg lg:text-xl font-bold mb-1 md:mb-2">
              Payments
            </p>

            <p className="px-2">{user.paymentMethod}</p>
            <div className="mt-3">
              <Link href="/payment-method">
                <Button variant="outline">Edit</Button>
              </Link>
            </div>
          </div>

          {/* Fees */}
          <div className="px-1 md:px-2 flex flex-col gap-3 md:gap-6">
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>{formatCurrency(cart.itemsPrice)}</div>
            </div>
            <div className="flex justify-between">
              <div>Tax</div>
              <div>{formatCurrency(cart.taxPrice)}</div>
            </div>
            <div className="flex justify-between">
              <div>Shipping</div>
              <div>{formatCurrency(cart.shippingPrice)}</div>
            </div>
            <div className="text-lg lg:text-xl font-bold flex justify-between">
              <div>Total price</div>
              <div>{formatCurrency(cart.totalPrice)}</div>
            </div>
            <PlaceOrderForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
