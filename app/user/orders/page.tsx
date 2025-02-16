import { Metadata } from "next";
import { getMyOrders } from "@/lib/actions/order.actions";
import { formatCurrency, formatDateTime, formatId } from "@/lib/utils";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "@/components/shared/custom-pagination";
import { Badge } from "@/components/ui/badge";
export const metadata: Metadata = {
  title: "My Orders",
};

const OrdersPage = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await props.searchParams;

  const orders = await getMyOrders({
    page: Number(page) || 1,
  });

  return (
    <div className=" space-y-2">
      <div className="overflow-x-auto shadow-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>

              <TableHead>TOTAL</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.data.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="inline-flex flex-col gap-1">
                  <span>{formatId(order.id)}</span>

                  <span className="body-2 text-accent-foreground">
                    {formatDateTime(order.createdAt).dateTime}
                  </span>
                </TableCell>
                <TableCell>{formatCurrency(order.totalPrice)}</TableCell>
                <TableCell className="inline-flex flex-col gap-2 lg:gap-3">
                  {order.isPaid && order.paidAt ? (
                    <span className="body-2">
                      formatDateTime(order.paidAt).dateTime
                    </span>
                  ) : (
                    <Badge variant="destructive" className="flex-center">
                      Not Paid
                    </Badge>
                  )}
                  {order.isDelivered && order.deliveredAt ? (
                    <span className="body-2">
                      formatDateTime(order.deliveredAt).dateTime
                    </span>
                  ) : (
                    <Badge variant="outline" className="text-center">
                      Not Delivered
                    </Badge>
                  )}
                </TableCell>

                <TableCell>
                  <Link href={`/order/${order.id}`}>
                    <span className=" bg-accent px-2 ">Details</span>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {orders.totalPages > 1 && (
          <CustomPagination
            page={Number(page) || 1}
            totalPages={orders?.totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
