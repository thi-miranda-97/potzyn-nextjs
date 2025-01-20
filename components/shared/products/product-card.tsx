"use client";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";
import Image from "next/image";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="shadow-md">
      <div className="p-0 items-center relative">
        <Link
          className="block object-cover  transition-all duration-300 hover-scale"
          href={`/product/${product.slug}`}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
            className="w-full h-full"
          />
          {/* Gradient Overlay */}
          <CardContent
            className={`absolute inset-0 flex ${
              product.stock > 0
                ? "bg-gradient-to-t from-black/70 to-transparent items-end"
                : "backdrop-grayscale-[75%] place-items-center justify-center"
            } `}
          >
            {product.stock > 0 ? (
              <div className="w-full flex-between">
                <CardHeader className="flex flex-col">
                  <div className="flex flex-row gap-1 lg:gap-2">
                    <Badge className="">{product.category}</Badge>
                    <Badge
                      variant="outline"
                      className="text-[#f6f6f6] flex-center gap-1"
                    >
                      {product.rating} <StarBorderIcon className="w-3 h-auto" />
                    </Badge>
                  </div>
                  <CardTitle className="h4 text-[#f6f6f6]">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-[#c7c7c7] body-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="flex flex-col gap-1 lg:gap-2">
                  <p className="text-center font-bold text-[#f6f6f6]">
                    ${product.price}
                  </p>
                  <Button className="rounded-full hover-scale">
                    <LocalMallOutlinedIcon />
                  </Button>
                </CardFooter>
              </div>
            ) : (
              <span className="text-[#f6f6f6] font-bold text-2xl lg:text-3xl text-destructive">
                SOLD OUT
              </span>
            )}
          </CardContent>
        </Link>
      </div>
    </Card>
  );
}
