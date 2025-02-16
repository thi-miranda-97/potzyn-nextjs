import Header from "@/components/shared/header";
import AdminNav from "./admin-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="wrapper">
        <AdminNav />
        {children}
      </main>
    </div>
  );
}
