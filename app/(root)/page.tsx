import Link from "next/link";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/products/product-list";
import Hero from "@/components/hero";
import NewArrival from "@/components/new-arrival";
import CTA from "@/components/cta";

import About from "@/components/ui/about";
import BlogList from "@/components/shared/blog/blog-list";
import { getFeaturedBlogs } from "@/lib/actions/blog.actions";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  const featuredBlogs = await getFeaturedBlogs();

  return (
    <div className="grid grid-cols-1 gap-20 lg:gap-32 mt-20 lg:mt-28">
      {/* HERO */}
      <Hero />

      {/* PRODUCT LIST */}
      <section id="product-list">
        <h2 className="h2 uppercase text-center mb-2 lg:mb-4">
          Nature&apos;s Best in Every Pot: Shop Our Favorites
        </h2>
        <p className="body-1 text-center mb-3 lg:mb-6">
          From lush indoor companions to blooming outdoor beauties, explore our
          top picks that add energy and life to your home.
        </p>

        {featuredProducts.length > 0 && <ProductList data={featuredProducts} />}
      </section>

      {/* ABOUT US SECTION */}
      <About />

      {/* NEW ARRIVAL */}
      <NewArrival
        data={latestProducts}
        limit={3}
        title="Fresh Blooms, Fresh Starts: New In Stock"
        description="Exciting new plant arrivals to kickstart your collection and breathe fresh life into your home or garden."
      />

      {/* BLOG */}
      <section id="blog-list">
        <h2 className="h2 uppercase text-center mb-2 lg:mb-4">
          Gardening Tips & Ideas
        </h2>
        <p className="body-1 text-center mb-3 lg:mb-6">
          Discover expert tips and tricks to elevate your gardening game.
        </p>

        <BlogList
          data={featuredBlogs.map((blog) => ({
            ...blog,
            content: "",
            published: false,
            featured: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          }))}
          limit={4}
        />

        <div className="flex-center">
          <Link href="/blog" className="link text-center">
            Read more tips <DoubleArrowIcon />
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTA
        title="🎁 Limited-Time Offer: Gift a Subscription, Get a Bonus Plant!"
        description="To enter the giveaway, simply subscribe newsletter Potzyn with your email. 50 lucky winners will be chosen at random!"
      />
    </div>
  );
};

export default Homepage;
