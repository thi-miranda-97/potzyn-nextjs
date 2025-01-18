import { Button } from "@/components/ui/button";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import productData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";
import Features from "@/components/features";
import NewArrival from "@/components/new-arrival";
import BlogList from "@/components/shared/blog/blog-list";
import CTA from "@/components/cta";
import ProductCard from "@/components/shared/products/product-card";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  // Select a random featured product based on the current date
  const randomIndex = new Date().getDate() % featuredProducts.length;
  const randomFeaturedProduct = featuredProducts[randomIndex];
  return (
    <main className="grid grid-cols-1 gap-10 lg:gap-24">
      <section className="grid-between grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 justify-start">
        {/* HERO */}
        {randomFeaturedProduct && (
          <ProductCard product={randomFeaturedProduct} />
        )}
        <div className="bg-accent rounded-lg p-3 lg:p-6 shadow-sm w-full">
          <h1 className="h1 mb-2 lg:mb-4">Grow Joy, One Leaf at a Time</h1>
          <p className="body-1 mb-3 lg:mb-6">
            Transform your space into a lush oasis with <strong>Potzyn</strong>!
            Explore our wide range of potted flowers, indoor, and outdoor
            plants. Perfect for plant lovers or beginners, our handpicked
            selections bring joy, purify your space, and add life to any
            setting.
          </p>
          <Button className="mb-4 lg:mb-8">Get Started</Button>
          <Features />
        </div>
      </section>
      {/* PRODUCT LIST */}
      <ProductList
        data={productData.products}
        title="Nature's Best in Every Pot: Shop Our Favorites"
        description="From lush indoor companions to blooming outdoor beauties, explore our top picks that add energy and life to your home."
        limit={6}
      />

      {/* NEW ARRIVAL */}
      <NewArrival
        data={latestProducts}
        title="Fresh Blooms, Fresh Starts: New In Stock"
        description="Exciting new plant arrivals to kickstart your collection and breathe
          fresh life into your home or garden."
      />

      {/* BLOG */}
      <BlogList />

      {/* CTA SECTION */}
      <CTA
        title="🎁 Limited-Time Offer: Gift a Subscription, Get a Bonus Plant!"
        description="To enter the giveaway, simply subscribe newsletter
            Potzyn with your email. 50 lucky winners will be chosen at random!"
      />
    </main>
  );
};
export default Homepage;
