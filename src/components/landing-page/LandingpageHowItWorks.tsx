"use client";
import React from "react";
import SectionHeader from "../wrappers/SectionHeader";
import { useI18n } from "../locales/client";

export default function LandingpageHowItWorks() {
  const t = useI18n();
  const howItWorksData = {
    heading: t("landing.how_it_works.title"),
    text: t("landing.how_it_works.text"),
    howItWorks: [
      {
        id: t("landing.how_it_works.steps.s1.id"),
        title: t("landing.how_it_works.steps.s1.title"),
        description: t("landing.how_it_works.steps.s1.description"),
      },
      {
        id: t("landing.how_it_works.steps.s2.id"),
        title: t("landing.how_it_works.steps.s2.title"),
        description: t("landing.how_it_works.steps.s2.description"),
      },
      {
        id: t("landing.how_it_works.steps.s3.id"),
        title: t("landing.how_it_works.steps.s3.title"),
        description: t("landing.how_it_works.steps.s3.description"),
      },
      {
        id: t("landing.how_it_works.steps.s4.id"),
        title: t("landing.how_it_works.steps.s4.title"),
        description: t("landing.how_it_works.steps.s4.description"),
      },
      {
        id: t("landing.how_it_works.steps.s5.id"),
        title: t("landing.how_it_works.steps.s5.title"),
        description: t("landing.how_it_works.steps.s5.description"),
      },
      {
        id: t("landing.how_it_works.steps.s6.id"),
        title: t("landing.how_it_works.steps.s6.title"),
        description: t("landing.how_it_works.steps.s6.description"),
      },
    ],
  };

  return (
    <section className="relative">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Heading */}
        <SectionHeader
          level={2}
          heading={howItWorksData.heading}
          text={howItWorksData.text}
        />
        <div className="h-8 md:h-12 lg:h-16"></div>
        {/* How it Works */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Item */}
          {howItWorksData.howItWorks.map((howItWorks, index) => (
            <div
              key={index}
              className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20"
            >
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-primary bg-background px-8 py-5 [box-shadow:rgb(243,_255,_144)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">{howItWorks.id}</p>
              </div>
              <h3 className="text-xl font-semibold">{howItWorks.title}</h3>
              <p className="text-sm opacity-70">{howItWorks.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
