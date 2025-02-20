"use client";

import { useEffect } from "react";
import { Review } from "@/types";
import Link from "next/link";
import { useState } from "react";
import ReviewForm from "./review-form";
import { getReviews } from "@/lib/actions/review.actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { formatDateTime } from "@/lib/utils";
import Rating from "@/components/shared/products/rating";

const ReviewList = ({
  userId,
  productId,
  productSlug,
}: {
  userId: string;
  productId: string;
  productSlug: string;
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const loadReviews = async () => {
      const res = await getReviews({ productId });
      setReviews(res.data);
    };

    loadReviews();
  }, [productId]);

  // Reload reviews after created or updated
  const reload = async () => {
    const res = await getReviews({ productId });
    setReviews([...res.data]);
  };

  return (
    <div className="space-y-4">
      {reviews.length === 0 && <div className="body-1">No reviews yet</div>}
      {userId ? (
        <ReviewForm
          userId={userId}
          productId={productId}
          onReviewSubmitted={reload}
        />
      ) : (
        <div>
          Please
          <Link
            className="text-blue-700 px-2"
            href={`/sign-in?callbackUrl=/product/${productSlug}`}
          >
            sign in
          </Link>
          to write a review
        </div>
      )}
      <div className="flex flex-col gap-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className=" flex-between">
                <CardTitle className="body-1 uppercase t">
                  {review.title}
                </CardTitle>
              </div>
              <CardDescription>{review.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-2">
              <Rating value={review.rating} />
              <div className="body-2 text-accent-foreground flex items-center">
                <PersonOutlinedIcon className="mr-1 h-3 w-3" />
                {review.user ? review.user.name : "User"}
              </div>
              <div className="body-2 text-accent-foreground flex items-center">
                <CalendarMonthOutlinedIcon className="mr-1 h-3 w-3" />
                {formatDateTime(review.createdAt).dateTime}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
