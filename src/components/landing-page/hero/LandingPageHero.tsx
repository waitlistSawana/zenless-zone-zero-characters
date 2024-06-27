"use client";

import MaxWidthWrapper from "../../wrappers/MaxWidthWrapper";
import { Button } from "../../ui/button";
import { useI18n } from "../../locales/client";
import Link from "next/link";
import { CornerUpRight, Github } from "lucide-react";
import NeubrutalismButton from "../../ui/syntaxui/NeubrutalismButton";

export default function LandingPageHero() {
  const t = useI18n();

  return (
    <section className="relative">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-10 lg:py-20">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 md:grid-cols-2">
          {/* Heading Div */}
          <div className="max-w-[720px] lg:max-w-[842px]">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {t("landing.hero.title")}
            </h1>
            <p className="mb-6 max-w-[528px] text-xl opacity-80 md:mb-10 lg:mb-12">
              {t("landing.hero.tagline")}
            </p>
            <NeubrutalismButton>Get Started</NeubrutalismButton>
          </div>
          {/* Image Div */}
          <div className="relative left-4 h-full max-h-[562px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
            <img
              src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg"
              alt=""
              className="mx-auto block h-full w-full max-w-[800px] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
            <a
              href="#"
              className="absolute bottom-auto left-[50%] right-auto top-1/2 inline-block max-w-full object-contain font-bold text-[#1353fe] max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2 md:bottom-[-48px] md:left-[-48px] md:right-auto md:top-auto"
            >
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639058b0726dee9a8efa473f_Frame%20427322569.svg"
                alt=""
                className="inline-block"
              />
            </a>
          </div>
          {/* Background Image */}
          <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
            <div className="absolute bottom-auto left-0 right-auto top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,174,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
