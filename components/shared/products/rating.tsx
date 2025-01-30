"use client";

import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Rating({
  value,
  caption,
}: {
  value: number;
  caption?: string;
}) {
  return (
    <>
      <span className="flex gap-1">
        {/* Render 5 stars with conditions for full, half, and empty */}
        {value >= 1 ? (
          <StarIcon className="text-yellow-500" />
        ) : value >= 0.5 ? (
          <StarHalfIcon className="text-yellow-500" />
        ) : (
          <StarBorderIcon className="text-yellow-500" />
        )}
        {value >= 2 ? (
          <StarIcon className="text-yellow-500" />
        ) : value >= 1.5 ? (
          <StarHalfIcon className="text-yellow-500" />
        ) : (
          <StarBorderIcon className="text-yellow-500" />
        )}
        {value >= 3 ? (
          <StarIcon className="text-yellow-500" />
        ) : value >= 2.5 ? (
          <StarHalfIcon className="text-yellow-500" />
        ) : (
          <StarBorderIcon className="text-yellow-500" />
        )}
        {value >= 4 ? (
          <StarIcon className="text-yellow-500" />
        ) : value >= 3.5 ? (
          <StarHalfIcon className="text-yellow-500" />
        ) : (
          <StarBorderIcon className="text-yellow-500" />
        )}
        {value >= 5 ? (
          <StarIcon className="text-yellow-500" />
        ) : value >= 4.5 ? (
          <StarHalfIcon className="text-yellow-500" />
        ) : (
          <StarBorderIcon className="text-yellow-500" />
        )}
      </span>

      {caption && <span className="text-sm">{caption}</span>}
    </>
  );
}
