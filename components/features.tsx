export default function Features() {
  return (
    <div className="rounded-lg w-full  bg-background grid grid-cols-1 xl:grid-cols-4 items-start gap-3 lg:gap-6 p-2 lg:p-4 shadow-sm">
      <div className="flex flex-col border-r-2 p-1 lg:p-2 h-full ">
        <p className="body-1 font-medium mb-1 lg:mb-2">Free Shipping</p>
        <p className="body-2 text-accent-foreground">
          Fresh plants delivered for free on orders $50+.
        </p>
      </div>

      <div className="flex flex-col border-r-2 p-1 lg:p-2 h-full">
        <p className="body-1 font-medium mb-1 lg:mb-2">Quality Guaranteed</p>
        <p className="body-2 text-accent-foreground">
          Handpicked, healthy plants in eco-friendly packaging.
        </p>
      </div>

      <div className="flex flex-col border-r-2 p-1 lg:p-2 h-full">
        <p className="body-1 font-medium mb-1 lg:mb-2">Plant Care Guides</p>
        <p className="body-2 text-accent-foreground">
          Free tips and expert advice for every plant.
        </p>
      </div>

      <div className="flex flex-col border-r-2 xl:border-none p-1 lg:p-2 h-full">
        <p className="body-1 font-medium mb-1 lg:mb-2">Rewards Program</p>
        <p className="body-2 text-accent-foreground">
          Earn points and save on future purchases.
        </p>
      </div>
    </div>
  );
}
