"use client";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { removeItemFromCart } from "@/lib/actions/cart.actions";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Cart } from "@/types";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h2 className="h2 py-2 lg:py-4">My Cart</h2>
      {!cart || cart.items.length === 0 ? (
        <div>
          Your cart is empty. <Link href="/">Shopping now</Link>
        </div>
      ) : (
        <div className="grid-center grid-cols-1 gap-3 md:gap-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plants</TableHead>
                  <TableHead className="">Price</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.items.map((item) => (
                  <TableRow key={item.slug}>
                    <TableCell>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={150}
                          height={150}
                          className="w-14 h-14 md:w-28 md:h-auto rounded-md"
                        />

                        <span className="px-2">{item.name}</span>
                      </Link>
                    </TableCell>

                    <TableCell className="flex items-start flex-col gap-2 md:gap-4">
                      <span className="font-bold">${item.price}</span>
                      <span className="body-2 text-accent-foreground">
                        Quantity: {item.qty}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        disabled={isPending}
                        variant="ghost"
                        type="button"
                        className="hover:bg-destructive hover:text-destructive-foreground"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await removeItemFromCart(
                              item.productId
                            );

                            if (!res.success) {
                              toast({
                                variant: "destructive",
                                description: res.message,
                              });
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <CircularProgress className="w-4 h-4 animate-spin" />
                        ) : (
                          <DeleteOutlineOutlinedIcon className="w-4 h-4" />
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Card>
            <CardContent className="flex-between p-4 gap-4">
              <div className="flex flex-col gap-">
                Subtotal ({cart.items.reduce((a, c) => a + c.qty, 0)}):
                <span className="h3">{formatCurrency(cart.itemsPrice)}</span>
              </div>

              <Button
                className=""
                disabled={isPending}
                onClick={() =>
                  startTransition(() => router.push("/shipping-address"))
                }
              >
                {isPending ? (
                  <CircularProgress className="h-4 animate-spin" />
                ) : (
                  ""
                )}
                Confirm Order
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CartTable;
