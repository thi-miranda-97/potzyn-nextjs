import AdminNav from "./admin-nav";
import Logo from "@/components/shared/header/logo";
import Menu from "@/components/shared/header/menu";
import AdminSearch from "@/components/admin/admin-search";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full fixed bg-accent shadow-md opacity-95 z-[2]">
        <div className="wrapper flex-between">
          <Logo />
          <AdminSearch />
          <Menu />
        </div>
      </div>
      <main className="wrapper">
        <AdminNav />

        {children}
      </main>
    </div>
  );
}
