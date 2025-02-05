import React from "react";
import { cn } from "@/lib/utils";

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className="flex-between flex-row space-x-2 space-y-2 mb-10">
      {["User Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <React.Fragment key={step}>
            <div
              className={cn(
                "p-2 w-56 rounded-full text-center body-2",
                index === current
                  ? "bg-input text-[#212121]"
                  : "text-accent-foreground"
              )}
            >
              {step}
            </div>
            {step !== "Place Order" && (
              <hr className="w-16 border-t border-input mx-2" />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default CheckoutSteps;
