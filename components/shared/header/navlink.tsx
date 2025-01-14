import Link from "next/link";

export default function NavLink() {
  return (
    <div className="hidden gap-4 lg:flex-row lg:flex-between lg:gap-10">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/store">Our Store</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
