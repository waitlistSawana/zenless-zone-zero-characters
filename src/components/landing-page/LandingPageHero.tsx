"use client";

import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";
import { useI18n } from "../locales/client";

export default function LandingPageHero() {
  const t = useI18n();

  return (
    <MaxWidthWrapper className="mb-10 mt-10 md:mb-10 md:mt-20">
      <Button variant={"default"}>{t("landing.hero.badge")}</Button>
      <h1 className="mx-auto my-3 max-w-screen-sm text-4xl font-bold drop-shadow-md md:my-6 md:text-7xl">
        {t("landing.hero.title")}
      </h1>
      <h2 className="mx-auto max-w-screen-sm text-base md:mt-8">
        {t("landing.hero.description")}
      </h2>
    </MaxWidthWrapper>
  );
}
