"use client";

import { Cart, CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useTransition, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart } from "@/lib/actions/cart.actions";
import CircularProgress from "@mui/material/CircularProgress";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { removeItemFromCart } from "@/lib/actions/cart.actions";

interface AddToCartButtonProps {
  item: CartItem;
  cart?: Cart;
}

export default function AddToCartButton({ item, cart }: AddToCartButtonProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState(item.qty || 1); // Initialize with item.qty or 1

  // Check if the item exists in the cart
  const existItem = cart?.items.find((x) => x.productId === item.productId);

  // Initialize quantity based on existItem
  useEffect(() => {
    if (existItem) {
      setQuantity(existItem.qty); // Set quantity to the existing item's quantity
    }
  }, [existItem]);

  // Handle updating the cart when the user clicks "Update Cart"
  const handleAddToCart = async () => {
    startTransition(async () => {
      // Create a new item object with the updated quantity
      const updatedItem = { ...item, qty: quantity };

      const res = await addItemToCart(updatedItem); // Pass the updated item

      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message,
        });
        return;
      }

      // Handle success add to cart
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
    });
  };

  // Handle incrementing quantity (only updates local state)
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle decrementing quantity (only updates local state)
  const handleDecrement = () => {
    if (quantity === 1) {
      startTransition(async () => {
        await removeItemFromCart(item.productId); // Remove item when quantity reaches 0
        setQuantity(0); // Update UI
      });
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <p className="body-1 mb-2 lg:mb-3">Choose your number of plants</p>

      <div className="flex flex-row gap-2 lg:gap-4 mb-5 lg:mb-10">
        <Button
          onClick={handleDecrement}
          variant="outline"
          disabled={quantity === 0}
        >
          <RemoveIcon className="w-10 h-4" />
        </Button>
        <Button variant="outline" className="w-20">
          {quantity}
        </Button>
        <Button onClick={handleIncrement} variant="outline">
          <AddIcon className="w-10 h-4" />
        </Button>
      </div>

      {/* PRICE */}
      <div className="border border-accent rounded-lg flex-between flex-row gap-3 lg:gap-6 p-3 lg:p-6">
        <div className="flex flex-col gap-1 lg:gap-2">
          <p className="flex items-start">
            $
            <span className="font-medium text-2xl lg:text-3xl">
              {item.price}
            </span>
          </p>
          <p className="text-center">
            <span className="body-1">Stock: </span>
            {item.stock}
          </p>
        </div>

        {item.stock > 0 ? (
          <Button
            type="button"
            onClick={handleAddToCart}
            disabled={isPending || quantity < 1} // Disable if quantity is less than 1
          >
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
