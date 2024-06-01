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
  // featurs - 4
  const icons = [
    <MessageCircleMore key="messageCircleMore" size={60} />,
    <Languages key="languages" size={60} />,
    <Brain key="brain" size={60} />,
    <GitPullRequest key="gitPullRequest" size={60} />,
  ];
  const features = [
    {
      icon: icons[0],
      title: t("landing.features.items.0.title"),
      description: t("landing.features.items.0.description"),
    },
    {
      icon: icons[1],
      title: t("landing.features.items.1.title"),
      description: t("landing.features.items.1.description"),
    },
    {
      icon: icons[2],
      title: t("landing.features.items.2.title"),
      description: t("landing.features.items.2.description"),
    },
    {
      icon: icons[3],
      title: t("landing.features.items.3.title"),
      description: t("landing.features.items.3.description"),
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      <MaxWidthWrapper className="mb-10 mt-10 py-4 md:mb-20 md:mt-20 md:py-20">
        <Heading2>{t("landing.features.title")}</Heading2>
        <p className="text-md mb-4 text-balance opacity-80 md:text-lg">
          {t("landing.features.description")}
        </p>

        {/* galary */}
        <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group flex flex-col rounded-2xl bg-zinc-50 shadow-lg transition-all duration-500 hover:rotate-3 hover:bg-purple-700 hover:text-white hover:shadow-lg hover:ring-4 hover:ring-purple-400 dark:bg-zinc-950 dark:hover:bg-purple-700"
            >
              <CardHeader className="">
                <div className="mx-auto">{feature.icon}</div>
                <CardTitle className="font-bold text-zinc-800 transition-all duration-500 group-hover:text-white dark:text-zinc-200 md:text-2xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-balance md:text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
