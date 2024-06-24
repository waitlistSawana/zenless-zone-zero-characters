"use client";

import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { useI18n } from "../locales/client";
import { Heading2 } from "../wrappers/LandingPageHeaders";
import {
  Brain,
  GitPullRequest,
  Languages,
  MessageCircleMore,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function LandingPageFeatures() {
  const t = useI18n();
  const featuresData = {
    title: t("landing.features.title"),
    description: t("landing.features.description"),
    features: [
      {
        icon: (
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639157f1a197859a6cd7f265_image%203.png"
            alt=""
            className="relative z-10 inline-block h-8"
          />
        ),
        title: "Support",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam, purus sit.",
      },
      {
        icon: (
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915859fa889834c4f1ff92_image%203-2.png"
            alt=""
            className="relative z-10 inline-block h-8"
          />
        ),
        title: "Organise",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam, purus sit.",
      },
      {
        icon: (
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639158510667812dff08e1af_image%203-4.png"
            alt=""
            className="relative z-10 inline-block h-8"
          />
        ),
        title: "Flexibility",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam, purus sit.",
      },
      {
        icon: (
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391585b7b7cd87baef5e9ec_image%203-1.png"
            alt=""
            className="relative z-10 inline-block h-8"
          />
        ),
        title: "Speed",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam, purus sit.",
      },
      {
        icon: (
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639158557ac2b528531836f1_image%203-3.png"
            alt=""
            className="relative z-10 inline-block h-8"
          />
        ),
        title: "Quality",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam, purus sit.",
      },
      {
        icon: (
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639157f3db4f4b8767c499ba_image%203-5.png"
            alt=""
            className="relative z-10 inline-block h-8"
          />
        ),
        title: "Resources",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam, purus sit.",
      },
    ],
  };

  return (
    <div className="">
      <MaxWidthWrapper>
        <section>
          {/* Container */}
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            {/* Heading Div */}
            <div className="mx-auto w-full max-w-3xl text-center">
              <Heading2>{featuresData.title}</Heading2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#636262]">{featuresData.description}</p>
              </div>
            </div>
            {/* Features Div */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:gap-12">
              {/* Feature Item */}
              {featuresData.features.map((feature, index) => (
                <div
                  key={index}
                  className="relative mb-8 flex flex-col rounded-2xl border border-solid border-zinc-950 p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] dark:border-zinc-50 dark:[box-shadow:rgb(192,_209,_255)_9px_9px] lg:mb-4"
                >
                  <div className="border-[#9b9b9b absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                    {feature.icon}
                    <div className="absolute z-0 h-8 w-8 rounded-full border border-[#c0d1ff] bg-[#c0d1ff]"></div>
                  </div>
                  <p className="mb-4 text-xl font-semibold">{feature.title}</p>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
