"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types";

export default function BlogItem({ blog }: { blog: Blog }) {
  return (
    <Card className="shadow-md transition-all duration-300 ease-in-out ">
      <div className="p-0 items-start relative">
        <Link
          className="block object-cover"
          href={`/blog/${blog.id}`}
          rel="preload"
          as="fetch"
        >
          <Image
            src={blog.images}
            alt={blog.title}
            height={280}
            width={500}
            priority
            className="w-full h-full"
          />
        </Link>

        {/* Content */}
        <CardContent
          className={`flex flex-col justify-end p-3 lg:p-6 absolute inset-0 ${
            blog
              ? "bg-gradient-to-t from-black/70 to-transparent items-end"
              : ""
          } `}
        >
          <CardHeader className="flex jus flex-col">
            <div className="mb-2 lg:mb-4">
              <Badge className="">{blog.tag}</Badge>
            </div>
            <CardTitle className="h4 text-[#f6f6f6]">{blog.title}</CardTitle>
            <CardDescription className="text-[#c7c7c7] body-2">
              {blog.sub.length > 100
                ? `${blog.sub.slice(0, 100)}...`
                : blog.sub}
            </CardDescription>
          </CardHeader>

          {/* "Read more" Link */}
          <Link
            href={`/blog/${blog.id}`}
            aria-label="Read more a blog post link"
            className="link body-2"
          >
            Read more
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}
