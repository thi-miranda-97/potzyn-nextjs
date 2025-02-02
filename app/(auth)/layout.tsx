export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center grid grid-cols-1 lg:grid-cols-2"
      style={{
        backgroundImage: "url('/images/signin-bg.jpg')",
      }}
    >
      <div className="w-full flex-center bg-[#212121] bg-opacity-50 h-screen">
        {children}
      </div>
      <div></div>
    </div>
  );
}
