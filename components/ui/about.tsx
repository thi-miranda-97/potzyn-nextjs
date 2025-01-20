"use client";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";

export default function About() {
  return (
    <section className="w-full bg-accent p-3 lg:p-6 rounded-lg shadow-sm">
      <p className="body-1 mb-3 lg:mb-4">
        At <strong>Potzyn</strong>, we&apos;re passionate about bringing nature
        closer to you with our curated selection of potted flowers and
        indoor/outdoor plants. Whether you&apos;re looking to brighten up your
        living space, enhance your garden, or find the perfect gift, our plants
        are handpicked for their beauty, health, and quality.
      </p>
      <div className=" w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 p-2 lg:p-4 ">
        <div className="flex flex-col border-r-2 p-1 lg:p-2 h-full ">
          <p className="body-1 font-medium mb-1 lg:mb-2 flex gap-1 lg:gap-2">
            <span>
              <LocalShippingOutlinedIcon />
            </span>
            Free Shipping
          </p>
          <p className="body-2 text-accent-foreground">
            Fresh plants delivered for free on orders $50+.
          </p>
        </div>
        <div className="flex flex-col border-r-2 p-1 lg:p-2 h-full">
          <p className="body-1 font-medium mb-1 lg:mb-2 flex gap-1 lg:gap-2">
            <span>
              <AddReactionOutlinedIcon />
            </span>
            Quality Guaranteed
          </p>
          <p className="body-2 text-accent-foreground">
            Handpicked, healthy plants in eco-friendly packaging.
          </p>
        </div>
        <div className="flex flex-col border-r-2 p-1 lg:p-2 h-full">
          <p className="body-1 font-medium mb-1 lg:mb-2 flex gap-1 lg:gap-2">
            <span>
              <SpaOutlinedIcon />
            </span>
            Plant Care Guides
          </p>
          <p className="body-2 text-accent-foreground">
            Free tips and expert advice for every plant.
          </p>
        </div>
        <div className="flex flex-col border-r-2 md:border-none p-1 lg:p-2 h-full">
          <p className="body-1 font-medium mb-1 lg:mb-2 flex gap-1 lg:gap-2">
            <span>
              <RedeemOutlinedIcon />
            </span>
            Rewards Program
          </p>
          <p className="body-2 text-accent-foreground">
            Earn points and save on future purchases.
          </p>
        </div>
      </div>
    </section>
  );
}
