"use client";

import { Cart, CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import CircularProgress from "@mui/material/CircularProgress";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface AddToCartButtonProps {
  item: CartItem;
  cart?: Cart;
}

export default function AddToCartButton({ item, cart }: AddToCartButtonProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  // Check if the item exists in the cart
  const existItem = cart?.items.find((x) => x.productId === item.productId);

  // Handle adding to cart
  const handleAddToCart = async () => {
    startTransition(async () => {
      // If the item exists in the cart, update the quantity
      if (existItem) {
        const updatedItem = { ...item, qty: existItem.qty + 1 };
        const res = await addItemToCart(updatedItem);

        if (!res.success) {
          toast({
            variant: "destructive",
            description: res.message,
          });
          return;
        }

        toast({
          description: res.message,
          action: (
            <ToastAction
              className="bg-primary text-white hover:bg-gray-800"
              altText="Go To Cart"
              onClick={() => router.push("/cart")}
            >
              Go To Cart
            </ToastAction>
          ),
        });
      } else {
        // If the item is not in the cart, add it with the selected quantity
        const res = await addItemToCart({ ...item, qty: 1 });

        if (!res.success) {
          toast({
            variant: "destructive",
            description: res.message,
          });
          return;
        }

        toast({
          description: res.message,
          action: (
            <ToastAction
              className="bg-primary text-white hover:bg-gray-800"
              altText="Go To Cart"
              onClick={() => router.push("/cart")}
            >
              Go To Cart
            </ToastAction>
          ),
        });
      }
    });
  };

  // Handle removing from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      toast({
        variant: res.success ? "default" : "destructive",
        description: res.message,
      });
    });
  };

  return (
    <>
      <p className="body-1 mb-2 lg:mb-3">Choose your number of plants</p>

      {existItem ? (
        <div className="flex flex-row gap-2 lg:gap-4 mb-5 lg:mb-10">
          <Button onClick={handleRemoveFromCart} variant="secondary">
            {isPending ? (
              <CircularProgress className="w-10 h-4" />
            ) : (
              <RemoveIcon className="w-10 h-4" />
            )}
          </Button>
          <Button variant="secondary" className="w-20">
            {existItem.qty}
          </Button>
          <Button onClick={handleAddToCart} variant="secondary">
            {isPending ? (
              <CircularProgress className="w-10 h-4" />
            ) : (
              <AddIcon className="w-10 h-4" />
            )}
          </Button>
        </div>
      ) : (
        <div className="flex flex-row gap-2 lg:gap-4 mb-5 lg:mb-10">
          <Button onClick={handleRemoveFromCart} variant="secondary">
            {isPending ? (
              <CircularProgress className="w-10 h-4" />
            ) : (
              <RemoveIcon className="w-10 h-4" />
            )}
          </Button>
          <Button variant="secondary" className="w-20">
            1
          </Button>
          <Button onClick={handleAddToCart} variant="secondary">
            {isPending ? <CircularProgress /> : <AddIcon />}
          </Button>
        </div>
      )}

      {/* PRICE */}
      <div className="border border-accent rounded-lg flex-between flex-row gap-3 lg:gap-6 p-3 lg:p-6">
        <p className="flex items-start">
          $
          <span className="font-medium text-2xl lg:text-3xl">{item.price}</span>
        </p>
        {item.stock > 0 ? (
          <Button type="button" onClick={handleAddToCart} disabled={isPending}>
            {isPending ? (
              <CircularProgress className="w-20" />
            ) : (
              <>
                <ShoppingBagOutlinedIcon />{" "}
                {existItem ? "Update Cart" : "Add to Cart"}
              </>
            )}
          </Button>
        ) : (
          <Button variant="destructive">Sold Out</Button>
        )}
      </div>
    </>
  );
}
