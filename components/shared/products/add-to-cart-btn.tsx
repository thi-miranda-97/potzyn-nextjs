"use client";

import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart } from "@/lib/actions/cart.actions";

interface AddToCartButtonProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const router = useRouter();
  const { toast } = useToast();
  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast({
        variant: "destructive",
        description: res.message,
      });
      return;
    }

    // Success added item

    toast({
      description: `${item.name} added to your cart`,
      action: (
        <ToastAction
          className="bg-primary text-white hover:bg-gray-800"
          altText="Go To Cart"
          onClick={() => router.push("/cart")}
        >
          Go To Your Cart
        </ToastAction>
      ),
    });
  };

  return (
    <Button variant="default" type="button" onClick={handleAddToCart}>
      <ShoppingBagOutlinedIcon />
      Add to Cart
    </Button>
  );
}
