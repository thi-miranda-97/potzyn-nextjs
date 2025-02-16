import FormSubmitButton from "@/components/admin/form-submit-button";
import { prisma } from "@/db/prisma";
// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatNumberWithDecimal } from "@/lib/utils";

export const metadata = {
  title: "Add Product - Potzyn",
};

async function addProduct(formData: FormData) {
  "use server";

  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/add-product");
  // }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const images = formData
    .get("images")
    ?.toString()
    .split(",")
    .map((url) => url.trim());
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const formmattedprice = formatNumberWithDecimal(price);
  const slug = name?.toLowerCase().replace(/\s+/g, "-") || "";
  const category = formData.get("category")?.toString() || "default";
  const stock = parseInt(formData.get("stock")?.toString() || "0", 10);

  // Validation
  if (
    !slug ||
    !name ||
    !description ||
    !images ||
    images.length === 0 ||
    isNaN(price) ||
    price <= 0 ||
    isNaN(stock) ||
    stock < 0
  ) {
    throw new Error("Missing or invalid required fields");
  }

  // Create the product
  await prisma.product.create({
    data: {
      name,
      description,
      images,
      price: formmattedprice,
      slug,
      category,
      stock,
    },
  });

  redirect("/");
}

export default async function AddProductPage() {
  return (
    <div className="mt-20 lg:mt-28 grid-center grid-cols-1 gap-2 lg:gap-4">
      <h2 className="h2 mb-3 lg:mb-6">Add Product</h2>
      <form
        action={addProduct}
        className="space-y-4 grid-cols-1 gap-2 lg:gap-4"
      >
        <Input
          required
          name="name"
          placeholder="Name"
          className="w-[90%] h-14 placeholder-shown:body-1 placeholder-shown:text-accent-foreground"
        />
        <Input
          required
          name="slug"
          placeholder="Slug"
          className="w-[90%] h-14 placeholder-shown:body-1 placeholder-shown:text-accent-foreground"
        />
        <Input
          required
          name="category"
          placeholder="Category"
          className="w-[90%] h-14 placeholder-shown:body-1 placeholder-shown:text-accent-foreground"
        />
        <Textarea
          required
          name="description"
          placeholder="Description"
          className="w-[90%] h-auto placeholder-shown:body-1 placeholder-shown:text-accent-foreground"
        />
        <Input
          required
          name="images"
          placeholder="Image URL"
          className="w-[90%] h-14 placeholder-shown:body-1 placeholder-shown:text-accent-foreground"
        />
        <Input
          required
          name="stock"
          placeholder="Stock"
          type="number"
          className="w-[90%] h-14 placeholder-shown:body-1 placeholder-shown:text-accent-foreground"
        />
        <Input
          required
          name="price"
          placeholder="Price"
          type="text"
          inputMode="decimal"
          className="w-[90%] h-14 placeholder-shown:body-1 placeholder-shown:text-accent-foreground"
        />
        <div>
          <FormSubmitButton className="">Add Product</FormSubmitButton>
        </div>
      </form>
    </div>
  );
}
