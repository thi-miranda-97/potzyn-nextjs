"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductBySlug } from "@/lib/actions/product.actions";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Product } from "@/types";
import Rating from "@/components/shared/products/rating";

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof slug !== "string") {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const productData = await getProductBySlug(slug);

        if (!productData) {
          setError(true);
          return;
        }

        // Format price and rating before setting the state
        const formattedPrice = productData.price.toString(); // Ensure price is a string
        const formattedRating = productData.rating.toString(); // Convert rating to string

        setProduct({
          ...productData,
          price: formattedPrice,
          rating: formattedRating, // Ensure rating is a string
        });

        setActiveCategory(productData.category || "Indoor");
        setSelectedImage(productData.images[0]); // Set default image
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <NotFoundPage />;

  const handleCategoryClick = (category: string) => setActiveCategory(category);
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleImageClick = (image: string) => setSelectedImage(image);

  const categories = ["Indoor", "Outdoor", "Flowers"];

  return (
    <section className="mt-24 lg:mt-28">
      {/* PRODUCT INFO */}
      <div className="grid-between items-center grid-cols-1 lg:grid-cols-2 gap-2">
        {/* IMAGE */}
        <div>
          <Image
            src={selectedImage || product.images[0]}
            alt={product.name}
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
          <p className="body-1 mt-1 lg:mt-2">{product.description}</p>
        </div>

        {/* DETAIL */}
        <div className="p-3 lg:p-6">
          <h2 className="h2 normal-case mb-1 lg:mb-2">{product?.name}</h2>
          <p className=" flex gap-2 lg:gap-4 mb-3 lg:mb-6">
            <Rating value={Number(product.rating)} />
            {product.numReviews} reviews
          </p>

          {/* PLAN CATEGORY */}
          <p className="body-1 mb-2 lg:mb-3">Plan Category</p>
          <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-5 lg:mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* PLANT TYPE */}
          <p className="body-1 mb-2 lg:mb-3">Plant Type</p>
          <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-5 lg:mb-10">
            {product.images.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer ${
                  selectedImage === image ? "" : "filter grayscale-[80%]"
                }`}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={`Plant ${index + 1}`}
                  width={100}
                  height={100}
                  className="image"
                />
              </div>
            ))}
          </div>

          {/* NUMBER OF PLANTS */}
          <p className="body-1 mb-2 lg:mb-3">Choose your number of plants</p>
          <div className="flex flex-row gap-2 lg:gap-4 mb-5 lg:mb-10">
            <Button onClick={handleDecrease} variant="secondary">
              -
            </Button>
            <Button variant="secondary" className="w-20">
              {quantity}
            </Button>
            <Button onClick={handleIncrease} variant="secondary">
              +
            </Button>
          </div>

          {/* PRICE */}
          <div className="border border-accent rounded-lg flex-between flex-row gap-3 lg:gap-6 p-3 lg:p-6">
            <p className="flex items-start">
              $
              <span className="font-medium text-2xl lg:text-3xl">
                {product.price}
              </span>
            </p>
            <Button
              variant={`${product.stock > 0 ? "default" : "destructive"}`}
            >
              {product.stock > 0 ? (
                <>
                  <ShoppingBagOutlinedIcon />
                  Add to Cart
                </>
              ) : (
                "Sold Out"
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
