"use client";

import { useState } from "react";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function CTA({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  // Target date for the giveaway deadline
  const targetDate = new Date("2025-10-05T23:59:59").getTime();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { toast } = useToast();

  // Function to handle subscription
  function handleSubscription(e: React.FormEvent) {
    e.preventDefault();
    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setError("Please enter an email address.");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(""); // Clear error
      // Toast message for successful subscription
      toast({
        title: `You subscribed with this email: ${email}`,
        description: "Good luck, and may your plant thrive! 🌿",
        action: <ToastAction altText="Got it">Got it</ToastAction>,
      }); // Mark as subscribed
      console.log("Subscribed with email:", email);
    }
  }

  // Custom renderer for countdown timer
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return <span className="text-xl font-bold">Offer has ended!</span>;
    } else {
      return (
        <div className="flex justify-center gap-6 mb-5 lg:mb-10">
          <div className="flex flex-col items-center">
            <span className="body-1">Days</span>
            <span className="h3">{days}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="body-1">Hours</span>
            <span className="h3">{hours}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="body-1">Minutes</span>
            <span className="h3">{minutes}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="body-1">Seconds</span>
            <span className="h3">{seconds}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="my-0 mx-auto w-[80%]">
      <h2 className="h2 text-center mb-2 lg:mb-4">{title}</h2>
      <p className="body-1 mb-5 lg:mb-10 text-center">{description}</p>

      <div className="grid-between grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        {/* Countdown Timer */}
        <div className="text-center">
          <h4 className="h4 border border-foreground rounded-lg mb-3 lg:mb-6">
            Hurry! Offer ends in:
          </h4>
          <div className="text-xl font-bold">
            <Countdown date={targetDate} renderer={renderer} />
          </div>

          {/* Subscription Section */}
          <form
            onSubmit={handleSubscription}
            className="max-w-xl mx-auto text-center mb-5 lg:mb-10"
          >
            <h4 className="h4 border border-foreground rounded-lg mb-2 lg:mb-4">
              Subscribe to Enter
            </h4>
            <input
              type="email"
              name="email"
              id="subscribe"
              placeholder="potzyn@gmail.com"
              value={email} // Bind value to email state
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className=" mb-2 lg:mb-3 w-[80%] h-10 bg-input rounded-lg py-1 lg:py-2 px-2 lg:px-4 text-[#212121] font-inherit placeholder:text-gray-400"
            />
            {error && (
              <p className="text-destructive text-sm mb-3 lg:mb-6">{error}</p>
            )}

            <Button type="submit" className="">
              Subscribe Now
            </Button>
          </form>
        </div>
        <Image
          src="/images/sample-products/product-16-1.jpeg"
          alt="CTA image section"
          width={300}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
