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
        <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-3 md:gap-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plants</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
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
                          width={50}
                          height={50}
                          className="w-16 h-16 rounded-md"
                        />

                        <span className="px-2">{item.name}</span>
                      </Link>
                    </TableCell>

                    <TableCell className="text-center">
                      <span className="">{item.qty}</span>
                    </TableCell>
                    <TableCell className="text-right">${item.price}</TableCell>
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
            <CardContent className="p-4 gap-4">
              <div className="flex-between pb-3 text-xl">
                Total ({cart.items.reduce((a, c) => a + c.qty, 0)}):
                <span className="font-bold">
                  {formatCurrency(cart.itemsPrice)}
                </span>
              </div>
              <Button
                className="w-full"
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
