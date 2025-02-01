import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import Rating from "@/components/shared/products/rating";
import Category from "@/components/shared/products/category";
import Images from "@/components/shared/products/images";
import AddToCartButton from "@/components/shared/products/add-to-cart-btn";
import { getMyCart } from "@/lib/actions/cart.actions";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const cart = await getMyCart();
  const productCategory = product.category;
  const categories = ["Indoor", "Outdoor", "Flowers"];

  return (
    <>
      <section className="mt-24 lg:mt-28">
        {/* PRODUCT INFO */}
        <div className="grid grid-cols-1 items-start">
          {/* DETAIL */}
          <div className="p-3 lg:p-6">
            <h2 className="h2 normal-case mb-1 lg:mb-2">{product?.name}</h2>
            <p className=" flex gap-2 lg:gap-4 mb-3 lg:mb-6">
              <Rating value={Number(product.rating)} />
              {product.numReviews} reviews
            </p>

            {/* PLAN CATEGORY */}
            <p className="body-1 mb-2 lg:mb-3">Plan Category</p>
            <Category
              categories={categories}
              activeCategory={productCategory}
            />

            {/* PLANT TYPE */}
            <p className="body-1 mb-2 lg:mb-3">Plant Type</p>
            <Images images={product.images} />

            {/* Add to Cart Section */}
            <AddToCartButton
              cart={cart}
              item={{
                productId: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price.toString(),
                qty: 1,
                image: product.images![0],
                stock: product.stock,
              }}
            />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="h2-bold mb-5">Customer Reviews</h2>
      </section>
    </>
  );
};

export default ProductDetailsPage;
