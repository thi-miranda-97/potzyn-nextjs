"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { formatCurrency, formatDateTime, formatId } from "@/lib/utils";
import { Order } from "@/types";
import Link from "next/link";
import Image from "next/image";

import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import {
  createPayPalOrder,
  approvePayPalOrder,
} from "@/lib/actions/order.actions";
import { useToast } from "@/hooks/use-toast";

const OrderDetailsTable = ({
  order,
  paypalClientId,
}: {
  order: Omit<Order, "paymentResult">;
  paypalClientId: string;
}) => {
  const {
    id,
    shippingAddress,
    orderitems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    paymentMethod,
    isDelivered,
    isPaid,
    paidAt,
    deliveredAt,
  } = order;

  const PrintLoadingState = () => {
    const [{ isPending, isRejected }] = usePayPalScriptReducer();
    let status = "";

    if (isPending) {
      status = "Loading PayPal...";
    } else if (isRejected) {
      status = "Error Loading PayPal";
    }
    return status;
  };

  const { toast } = useToast();
  const handleCreatePayPalOrder = async () => {
    const res = await createPayPalOrder(order.id);

    if (!res.success) {
      toast({
        variant: "destructive",
        description: res.message,
      });
    }

    return res.data;
  };

  const handleApprovePayPalOrder = async (data: { orderID: string }) => {
    const res = await approvePayPalOrder(order.id, data);

    toast({
      variant: res.success ? "default" : "destructive",
      description: res.message,
    });
  };

  return (
    <div className="mt-20 lg:mt-28">
      <h2 className="py-4 h2">Order Id: {formatId(id)}</h2>
      {/* Cart Table  */}
      <div className=" overflow-x-auto">
        <Table className="px-3 lg:px-6">
          <TableHeader>
            <TableRow>
              <TableHead>Plants</TableHead>
              <TableHead className="text-center">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderitems.map((item) => (
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

                <TableCell className="text-center">
                  <p className="flex flex-col gap-2 md:gap-4">
                    <span className="font-bold">${item.price}</span>
                    <span className="body-2 text-accent-foreground">
                      Quantity: {item.qty}
                    </span>
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Payment method and delivery shipping address*/}
        <div className="grid-between grid-cols-1 md:grid-cols-[1fr,2fr] gap-5 md:gap-10 mt-5 lg:mt-10">
          <div className="flex flex-col items-start justify-between gap-3 lg:gap-6 bg-accent p-2 md:p-4 rounded-md mb-5 lg:mb-10">
            {/* Payment */}
            <div className="">
              <p className="text-base lg:text-lg font-bold mb-1 md:mb-2">
                Payments
              </p>

              <p className="text-[0.85rem] lg:text-[1rem] px-2 mb-2 lg:mb-4">
                {paymentMethod}
              </p>
              {isPaid ? (
                <Badge variant="secondary">
                  Paid at {formatDateTime(paidAt!).dateTime}
                </Badge>
              ) : (
                <Badge variant="destructive">Not paid</Badge>
              )}
            </div>

            {/* Shipping */}
            <div className="">
              <p className="text-base lg:text-lg font-bold mb-1 md:mb-2">
                Shipping Address
              </p>
              <div className="px-2 mb-2 lg:mb-4">
                <p className="font-medium mb-1 lg:mb-2">
                  {shippingAddress.fullName}
                </p>
                <p className="text-[0.85rem] lg:text-[1rem]">
                  {shippingAddress.streetAddress}, {shippingAddress.city}{" "}
                  {shippingAddress.postalCode}, {shippingAddress.country}{" "}
                </p>
              </div>
              {isDelivered ? (
                <Badge variant="secondary">
                  Delivered at {formatDateTime(deliveredAt!).dateTime}
                </Badge>
              ) : (
                <Badge variant="destructive">Not Delivered</Badge>
              )}
            </div>
          </div>

          {/* Fees */}
          <Card className="px-1 md:px-2 flex flex-col gap-3 md:gap-6 shadow-none">
            <CardContent className="p-4 gap-4 space-y-4 mb-3 lg:mb-6">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>{formatCurrency(itemsPrice)}</div>
              </div>
              <div className="flex justify-between">
                <div>Tax</div>
                <div>{formatCurrency(taxPrice)}</div>
              </div>
              <div className="flex justify-between">
                <div>Shipping</div>
                <div>{formatCurrency(shippingPrice)}</div>
              </div>
              <div className="text-lg lg:text-xl font-bold flex justify-between">
                <div>Total price</div>
                <div>{formatCurrency(totalPrice)}</div>
              </div>

              {!isPaid && paymentMethod === "PayPal" && (
                <div className="w-full">
                  <PayPalScriptProvider options={{ clientId: paypalClientId }}>
                    <PrintLoadingState />
                    <PayPalButtons
                      createOrder={handleCreatePayPalOrder}
                      onApprove={handleApprovePayPalOrder}
                    />
                  </PayPalScriptProvider>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsTable;
