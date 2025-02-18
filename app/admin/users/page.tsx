import { Metadata } from "next";
import { getAllUsers, deleteUser } from "@/lib/actions/user.actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatId } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CustomPagination from "@/components/shared/custom-pagination";
import { Badge } from "@/components/ui/badge";
import DeleteDialog from "@/components/shared/products/delete-dialog";
import { requireAdmin } from "@/lib/auth-guard";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const metadata: Metadata = {
  title: "Admin Users",
};

const AdminUserPage = async (props: {
  searchParams: Promise<{
    page: string;
    query: string;
  }>;
}) => {
  await requireAdmin();

  const { page = "1", query: searchText } = await props.searchParams;

  const users = await getAllUsers({ page: Number(page), query: searchText });

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        {searchText && (
          <div className="flex flex-row gap-3">
            Filtered by <i>&quot;{searchText}&quot;</i>{" "}
            <Link href="/admin/users">
              <Button variant="outline" size="sm">
                Remove Filter
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>ROLE</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{formatId(user.id)}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.role === "user" ? (
                    <Badge variant="secondary">User</Badge>
                  ) : (
                    <Badge variant="default">Admin</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/admin/users/${user.id}`}>
                      <EditOutlinedIcon />
                    </Link>
                  </Button>
                  <DeleteDialog id={user.id} action={deleteUser} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {users.totalPages > 1 && (
          <CustomPagination
            page={Number(page) || 1}
            totalPages={users?.totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default AdminUserPage;
