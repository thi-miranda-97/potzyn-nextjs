import { Metadata } from "next";
import CreateProductForm from "@/components/admin/create-product-form";
import { requireAdmin } from "@/lib/auth-guard";
export const metadata: Metadata = {
  title: "Create Product",
};

const CreateProductPage = async () => {
  await requireAdmin();
  return (
    <div className="my-8">
      <CreateProductForm type="Create" />
    </div>
  );
};

export default CreateProductPage;
