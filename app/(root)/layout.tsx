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
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
}
