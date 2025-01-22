"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPostById } from "@/lib/actions/blog.actions";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Blog } from "@/types";
import { Badge } from "@/components/ui/badge";

const BlogPostDetailPage = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof id !== "string") {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const blogData = await getPostById(id);

        if (!blogData) {
          setError(true);
          return;
        }

        setBlogPost({
          ...blogData,
          tag: blogData.tag || "",
        });
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error || !blogPost) return <NotFoundPage />;

  return (
    <section className="mt-24 lg:mt-28 mx-auto">
      {/* CATEGORY */}
      {blogPost.tag && <Badge>{blogPost.tag}</Badge>}
      <h2 className="h2 normal-case text-center mb-2 lg:mb-4">
        {blogPost.title}
      </h2>
      <p className=" text-center body-2 text-gray-500 mb-2 lg:mb-4">
        Published on {new Date(blogPost.createdAt).toLocaleDateString()}
      </p>
      <p className="body-1 text-center mb-3 lg:mb-6">{blogPost.sub}</p>
      {/* IMAGE */}
      {blogPost.images && (
        <Image
          src={blogPost.images}
          alt={blogPost.title}
          width={1600}
          height={900}
          className="w-full h-auto rounded-lg"
        />
      )}

      {/* CONTENT */}
      <div className="w-full lg:w-[90%] mx-auto mt-5 lg:m-10 mb-10 lg:mb-16">
        {blogPost.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* SHARE BUTTONS */}
      <div className="flex gap-4 mb-5">
        <Button variant="secondary">Share on Facebook</Button>
        <Button variant="secondary">Share on Twitter</Button>
      </div>

      {/* COMMENTS SECTION (Optional) */}
      <div className="border-t border-gray-500 pt-5">
        <p className="font-semibold">Comments</p>
        {/* Implement comments if required */}
      </div>
    </section>
  );
};

export default BlogPostDetailPage;
