import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-between h-screen flex-col">
      <Header />
      <main className="wrapper mt-20 lg:mt-28">{children}</main>
      <Footer />
    </div>
  );
}
