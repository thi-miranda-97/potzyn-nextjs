"use client";
import { Blog } from "@/types";
import BlogItem from "./blog-item";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogList({
  data = [],
  limit = 3,
}: {
  data: Blog[];
  limit?: number;
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3 mb-5 lg:mb-10">
        {data.slice(0, limit).map((blog: Blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
      <Link href="/blog">
        <Button variant="link">Read more tips</Button>
      </Link>
    </>
  );
}
