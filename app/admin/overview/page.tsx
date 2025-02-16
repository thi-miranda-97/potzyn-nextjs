import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { getOrderSummary } from "@/lib/actions/order.actions";
import { formatCurrency, formatDateTime, formatNumber } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import Charts from "./charts";
import { requireAdmin } from "@/lib/auth-guard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const OverviewPage = async () => {
  await requireAdmin();

  const summary = await getOrderSummary();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-2 lg:gap-4">
      <div className="grid grid-cols-1 gap-3 lg:gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          <Card className="border border-input p-3 lg:p-6">
            <CardHeader className="flex-between flex-row items-center">
              <CardTitle className="body-1">Income</CardTitle>
              <CallMadeIcon className="text-base text-accent-foreground" />
            </CardHeader>

            <CardContent>
              <div className="font-bold text-2xl lg:text-3xl">
                {formatCurrency(
                  summary.totalSales._sum.totalPrice?.toString() || 0
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-input p-3 lg:p-6">
            <CardHeader className="flex-between flex-row items-center">
              <CardTitle className="body-1">Sales</CardTitle>
              <CallMadeIcon className="text-base text-accent-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl lg:text-3xl">
                {formatNumber(summary.ordersCount)}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-input p-3 lg:p-6">
            <CardHeader className="flex-between flex-row items-center">
              <CardTitle className="body-1">Customers</CardTitle>
              <CallMadeIcon className="text-base text-accent-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl lg:text-3xl">
                {formatNumber(summary.usersCount)}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-input p-3 lg:p-6">
            <CardHeader className="flex-between flex-row items-center">
              <CardTitle className="body-1">Products</CardTitle>
              <CallMadeIcon className="text-base text-accent-foreground" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl lg:text-3xl">
                {formatNumber(summary.productsCount)}
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="border border-input p-3 lg:p-6">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Charts
              data={{
                salesData: summary.salesData,
              }}
            />
          </CardContent>
        </Card>
      </div>

      <Card className="border border-input px-1 lg:px-2 py-2 lg:py-4">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="body-1">Orders</TableHead>
                <TableHead className="body-1">Price</TableHead>
                <TableHead className="body-1 text-right"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {summary.latestSales.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="flex flex-col justify-start items-start">
                    <span className="font-medium h4">
                      {order?.user?.name ? order.user.name : "Deleted User"}
                    </span>
                    <span className="body-2 text-accent-foreground">
                      {formatDateTime(order.createdAt).dateOnly}
                    </span>
                  </TableCell>

                  <TableCell className="h4 font-medium">
                    {formatCurrency(order.totalPrice)}
                  </TableCell>

                  <TableCell>
                    <Link href={`/order/${order.id}`}>
                      <CallMadeIcon className="text-base text-accent-foreground hover:text-primary" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewPage;
