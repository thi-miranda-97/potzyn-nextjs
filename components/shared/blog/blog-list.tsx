"use client";
import { Blog } from "@/types";
import BlogItem from "./blog-item";

export default function BlogList({
  data = [],
  limit = 4,
}: {
  data: Blog[];
  limit?: number;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-3 mb-5 lg:mb-10">
      {data.slice(0, limit).map((blog: Blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
