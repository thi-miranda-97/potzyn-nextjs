export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex justify-start items-center min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/signin-bg.jpg')",
      }}
    >
      {children}
    </div>
  );
}
