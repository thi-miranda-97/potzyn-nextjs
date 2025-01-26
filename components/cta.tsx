"use client";

import { useState, useEffect } from "react";

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
  const [timeLeft, setTimeLeft] = useState<number | null>(null); // Initially set to null

  const { toast } = useToast();

  // Effect for setting time left only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setInterval(() => {
        setTimeLeft(targetDate - Date.now());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]); // No need to add targetDate here as it never changes

  // If timeLeft is null (before the client renders), return a loading state
  if (timeLeft === null) {
    return (
      <section className="my-0 mx-auto w-full text-center">
        <h2 className="h2 mb-2 lg:mb-4">{title}</h2>
        <p className="body-1 mb-5 lg:mb-10">{description}</p>
        <span className="text-xl font-bold text-gray-500">Loading...</span>
      </section>
    );
  }

  // If timeLeft is less than 0, display "Offer has ended"
  if (timeLeft < 0) {
    return (
      <section className="my-0 mx-auto w-full text-center">
        <h2 className="h2 mb-2 lg:mb-4">{title}</h2>
        <p className="body-1 mb-5 lg:mb-10">{description}</p>
        <span className="text-xl font-bold text-red-500">Offer has ended!</span>
      </section>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  function handleSubscription(e: React.FormEvent) {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setError("Please enter an email address.");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      toast({
        title: `You subscribed with this email: ${email}`,
        description: "Good luck, and may your plant thrive! 🌿",
        action: <ToastAction altText="Got it">Got it</ToastAction>,
      });
      console.log("Subscribed with email:", email);
    }
  }

  return (
    <section className="my-0 mx-auto w-full grid-between grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
      <div>
        <h2 className="h2 mb-2 lg:mb-4">{title}</h2>
        <p className="body-1 mb-5 lg:mb-10">{description}</p>
        <h4 className="h4 mb-3 lg:mb-6">Hurry! Offer ends in:</h4>
        <div className="grid-between grid-cols-4 justify-start gap-6 mb-5 lg:mb-10">
          <div className="w-full bg-accent rounded-md px-5 lg:px-10 py-2 lg:py-4 flex flex-col items-center">
            <span className="body-1">Days</span>
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
        <form
          onSubmit={handleSubscription}
          className="max-w-xl mx-auto mb-5 lg:mb-10 flex gap-2 md:gap-4 flex-row"
        >
          <Input
            type="email"
            name="email"
            id="subscribe"
            placeholder="potzyn@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Subscribe Now</Button>
        </form>
        {error && (
          <p className="text-destructive text-sm mb-3 lg:mb-6">{error}</p>
        )}
      </div>
      <div>
        <Image
          src="/images/cta-img.jpeg"
          alt="CTA image section"
          width={400}
          height={300}
          priority={false}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
