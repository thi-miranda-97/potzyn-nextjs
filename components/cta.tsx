"use client";

import { useState } from "react";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Input } from "./ui/input";

export default function CTA({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  // Target date for the giveaway deadline
  const targetDate = new Date("2027-10-05T23:59:59").getTime();
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
        <div className="grid-between grid-cols-4 justify-start gap-6 mb-5 lg:mb-10">
          <div className="w-full bg-accent rounded-md px-5 lg:px-10 py-2 lg:py-4 flex flex-col items-center">
            <span className="body-1 ">Days</span>
            <h3 className="h3">{days}</h3>
          </div>
          <div className="w-full bg-accent rounded-md px-5 lg:px-10 py-2 lg:py-4 flex flex-col items-center">
            <span className="body-1">Hours</span>
            <h3 className="h3">{hours}</h3>
          </div>
          <div className="w-full bg-accent rounded-md px-5 lg:px-10 py-2 lg:py-4 flex flex-col items-center">
            <span className="body-1">Minutes</span>
            <h3 className="h3">{minutes}</h3>
          </div>
          <div className="w-full bg-accent rounded-md px-5 lg:px-10 py-2 lg:py-4 flex flex-col items-center">
            <span className="body-1">Seconds</span>
            <h3 className="h3">{seconds}</h3>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="my-0 mx-auto w-full grid-between grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
      <div>
        <h2 className="h2 mb-2 lg:mb-4">{title}</h2>
        <p className="body-1 mb-5 lg:mb-10">{description}</p>
        <h4 className="h4 mb-3 lg:mb-6">Hurry! Offer ends in:</h4>
        {/* Countdown Timer */}

        <Countdown
          date={targetDate}
          renderer={renderer}
          className="font-bold"
        />

        <form
          onSubmit={handleSubscription}
          className="max-w-xl mx-auto mb-5 lg:mb-10 flex gap-2 md:gap-4 flex-row"
        >
          <Input
            type={email}
            name="email"
            id="subscribe"
            placeholder="potzyn@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=""
          />
          {error && (
            <p className="text-destructive text-sm mb-3 lg:mb-6">{error}</p>
          )}
          <div className="">
            <Button type="submit" className="">
              Subscribe Now
            </Button>
          </div>
        </form>
      </div>
      <div>
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
