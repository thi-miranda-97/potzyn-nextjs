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
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function BlogItem({ blog }: { blog: Blog }) {
  return (
    <Card className="shadow-md hover:translate-y-[-0.5rem]">
      <div className="p-0 items-start relative">
        <Link className="block object-cover" href={`/blog/${blog.id}`}>
          <Image
            src={blog.images}
            alt={blog.title}
            height={500}
            width={500}
            priority={true}
            className="w-full h-full"
          />
          {/* Gradient Overlay */}
          <CardContent
            className={`p-2 lg:p-4 absolute inset-0 flex ${
              blog
                ? "bg-gradient-to-t from-black/70 to-transparent items-end"
                : ""
            } `}
          >
            <CardHeader className="flex flex-col">
              <div className="flex flex-row gap-1 lg:gap-2">
                <Badge className="">{blog.tag}</Badge>
              </div>
              <CardTitle className="h4 text-[#f6f6f6]">{blog.title}</CardTitle>
              <CardDescription className="text-[#c7c7c7] body-2">
                {blog.sub.length > 100
                  ? `${blog.sub.slice(0, 100)}...`
                  : blog.sub}
              </CardDescription>
            </CardHeader>

            <Link
              href={`/blog/${blog.id}`}
              className="flex text-[#c7c7c7] gap-1 text- body-2 hover:border-b"
            >
              Detail
              <DoubleArrowIcon className="w-2 h-auto" />
            </Link>
          </CardContent>
        </Link>
      </div>
    </Card>
  );
}
