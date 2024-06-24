"use client";

import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import Link from "next/link";
import { describe } from "node:test";

const pricingData = {
  title: "Fair Pricing, Unfair Advantage.",
  describe:
    "Get started with Acme today and take your business to the next level.",
  free: {
    name: "Free",
    price: 0,
    link: "#",
    features: [
      "10 users included",
      "2GB of storage",
      "Email support",
      "Help center access",
    ],
  },
  pro: {
    name: "Pro",
    price: 30,
    link: "#",
    features: [
      "20 users included",
      "5GB of storage",
      "Email support",
      "Help center access",
      "Phone support",
      "Community access",
    ],
  },
  starter: {
    name: "Starter",
    price: 10,
    link: "#",
    features: [
      "10 users included",
      "2GB of storage",
      "Email support",
      "Help center access",
    ],
  },
};

export default function LandingpagePricing1() {
  return (
    <MaxWidthWrapper className="my-10 max-w-screen-xl md:my-16">
      <div className="mb-6 flex w-full flex-col items-start justify-center space-y-4 md:mb-12 md:items-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-5xl">
          {pricingData.title}
        </h2>
        <p className="text-md max-w-xl text-zinc-700 dark:text-zinc-300 md:text-center">
          {pricingData.describe}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
        {/* Free Plan */}
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-zinc-900">
              {pricingData.free.name}
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                {pricingData.free.price}$
              </strong>
              <span className="text-sm font-medium text-zinc-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {pricingData.free.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-zinc-700"> {feature} </span>
              </li>
            ))}
          </ul>

          <Link
            href={pricingData.free.link}
            className="flex items-center justify-center"
          >
            <Button
              variant={"secondary"}
              size={"lg"}
              className="mt-8 rounded-full px-16 py-3 text-center hover:ring-1 focus:outline-none focus:ring"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Featured Plan */}
        <div className="order-first rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-none sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-zinc-900">
              {pricingData.pro.name}
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                {pricingData.pro.price}$
              </strong>
              <span className="text-sm font-medium text-zinc-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {pricingData.pro.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-zinc-700"> {feature} </span>
              </li>
            ))}
          </ul>
          <Link
            href={pricingData.pro.link}
            className="flex items-center justify-center"
          >
            <Button
              variant={"default"}
              size={"lg"}
              className="mt-8 rounded-full px-16 py-3 text-center hover:ring-1 focus:outline-none focus:ring"
            >
              Get Started
            </Button>
          </Link>
        </div>
        {/* Normal Plan */}
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-zinc-900">
              {pricingData.starter.name}
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-zinc-900 sm:text-4xl">
                {pricingData.starter.price}$
              </strong>
              <span className="text-sm font-medium text-zinc-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {pricingData.starter.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span className="text-zinc-700"> {feature} </span>
              </li>
            ))}
          </ul>
          <Link href="#" className="flex items-center justify-center">
            <Button
              variant={"secondary"}
              size={"lg"}
              className="mt-8 rounded-full px-16 py-3 text-center hover:ring-1 focus:outline-none focus:ring"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
