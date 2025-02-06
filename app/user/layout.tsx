import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import UserNav from "./user-nav";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-between h-screen flex-col">
      <Header />
      <main className="wrapper">
        <UserNav />
        {children}
      </main>
      <Footer />
    </div>
  );
}
