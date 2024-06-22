"use client";

import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";
import { useI18n } from "../locales/client";
import Link from "next/link";
import { CornerUpRight, Github } from "lucide-react";

export default function LandingPageHero() {
  const t = useI18n();

  return (
    <MaxWidthWrapper className="mb-10 mt-10 md:mb-10 md:mt-14">
      <h1 className="mx-auto my-3 max-w-screen-lg text-balance text-5xl font-bold drop-shadow-md md:my-6 md:text-7xl">
        {t("landing.hero.title")}
      </h1>
      <h2 className="mx-auto max-w-screen-sm text-base md:mt-8">
        {t("landing.hero.tagline")}
      </h2>
    </MaxWidthWrapper>
  );
}
