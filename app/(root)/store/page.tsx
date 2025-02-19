import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories } from "@/lib/actions/product.actions";
import ProductCard from "@/components/shared/products/product-card";
import { getAllProducts } from "@/lib/actions/product.actions";
import { Button } from "@/components/ui/button";
import CustomPagination from "@/components/shared/custom-pagination";
import Search from "@/components/shared/header/search";

const StorePage = async (props: {
  searchParams: {
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  };
}) => {
  const {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "new",
    page = "1",
  } = props.searchParams;

  const { data: products, totalPages } = await getAllProducts({
    query: q,
    category,
    price,
    rating,
    sort,
    page: Number(page),
  });

  const categories = await getAllCategories();

  return (
    <div className="mt-24 lg:mt-28">
      <form
        method="GET"
        className="flex flex-col gap-2 lg:gap-4 md:flex-row mb-2 lg:mb-4"
      >
        <div className="flex flex-row gap-2 lg:gap-4">
          {/* Category Filter */}
          <Select name="category" defaultValue={category}>
            <SelectTrigger className="w-20 md:w-24 lg:w-[180px] body-2 text-foreground">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="All" value="all">
                Category
              </SelectItem>
              {categories.map((x) => (
                <SelectItem key={x.category} value={x.category}>
                  {x.category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Filter */}
          <Select name="price" defaultValue={price}>
            <SelectTrigger className="w-20 md:w-24 lg:w-[180px] body-2 text-foreground">
              <SelectValue placeholder="Select a price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="All" value="all">
                Price
              </SelectItem>
              <SelectItem key="1-50" value="1-50">
                $1 to $50
              </SelectItem>
              <SelectItem key="51-100" value="51-100">
                $51 to $100
              </SelectItem>
              <SelectItem key="101-200" value="101-200">
                $101 to $200
              </SelectItem>
              <SelectItem key="201-500" value="201-500">
                $201 to $500
              </SelectItem>
              <SelectItem key="501-1000" value="501-1000">
                $501 to $1000
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Rating Filter */}
          <Select name="rating" defaultValue={rating}>
            <SelectTrigger className="w-20 md:w-24 lg:w-[180px] body-2 text-foreground">
              <SelectValue placeholder="Select a rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="All" value="all">
                Rating
              </SelectItem>
              <SelectItem key="4" value="4">
                4 Stars & Up
              </SelectItem>
              <SelectItem key="3" value="3">
                3 Stars & Up
              </SelectItem>
              <SelectItem key="2" value="2">
                2 Stars & Up
              </SelectItem>
              <SelectItem key="1" value="1">
                1 Star & Up
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Sort Filter */}
          <Select name="sort" defaultValue={sort}>
            <SelectTrigger className="w-20 md:w-24 lg:w-[180px] body-2 text-foreground">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="all" value="all">
                All
              </SelectItem>
              <SelectItem key="new" value="new">
                New Arrivals
              </SelectItem>
              <SelectItem key="favorite" value="favorite">
                Favorite
              </SelectItem>
              <SelectItem key="best-deals" value="best-deals">
                Best Deals
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Submit Button (Optional) */}
        <Button size="sm" type="submit" className="w-fit body-2">
          Apply Filters
        </Button>
      </form>

      <Search />

      {/* Product List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        {products.length === 0 && <div>No products found</div>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <CustomPagination page={page} totalPages={totalPages} />
    </div>
  );
};

export default StorePage;
