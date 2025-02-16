import { Metadata } from "next";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { formatCurrency, formatDateTime, formatId } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserOrdersPagination from "@/components/shared/custom-pagination";
import { Badge } from "@/components/ui/badge";
import { requireAdmin } from "@/lib/auth-guard";
import { getAllOrders } from "@/lib/actions/order.actions";
import DeleteDialog from "@/components/shared/products/delete-dialog";
import { deleteOrder } from "@/lib/actions/order.actions";

export const metadata: Metadata = {
  title: "Admin Orders",
};

const AdminOrdersPage = async (props: {
  searchParams: Promise<{ page: string; query: string }>;
}) => {
  const { page = "1", query: searchText } = await props.searchParams;

  await requireAdmin();

  const orders = await getAllOrders({
    page: Number(page),
    query: searchText,
  });

  return (
    <div className="space-y-2">
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
                <TableCell className="flex flex-col gap-1">
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
                    <Badge variant="outline" className="flex-center">
                      Not Delivered
                    </Badge>
                  )}
                </TableCell>

                <TableCell className="text-right">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/order/${order.id}`}>
                      <CallMadeIcon className="text-accent-foreground" />
                    </Link>
                  </Button>
                  <DeleteDialog id={order.id} action={deleteOrder} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {orders.totalPages > 1 && (
          <UserOrdersPagination
            page={Number(page) || 1}
            totalPages={orders?.totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default AdminOrdersPage;
