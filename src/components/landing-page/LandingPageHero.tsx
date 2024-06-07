"use client";

import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";
import { useI18n } from "../locales/client";
import Link from "next/link";
import { CornerUpRight, Github } from "lucide-react";

export default function LandingPageHero() {
  const t = useI18n();

  const handleCTAClickLocal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("how-it-works");
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.pageYOffset - 50, // 计算出的位置再上移50px
        behavior: "smooth",
      });
    }
  };

  const handleCTAClickOnline = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("online-demo");
    if (element) {
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.pageYOffset - 50, // 计算出的位置再上移50px
        behavior: "smooth",
      });
    }
  };

  return (
    <MaxWidthWrapper className="mb-10 mt-10 md:mb-10 md:mt-20">
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
        <Link
          href={"https://github.com/2noise/ChatTTS"}
          target="_blank"
          className="group"
        >
          <Button variant={"default"} className="">
            <Github className="mr-2" />
            {t("landing.hero.badge")}
            <CornerUpRight
              size={15}
              className="ml-1 opacity-50 transition-all group-hover:opacity-100"
            />
          </Button>
        </Link>
        <Link
          href="https://www.producthunt.com/posts/chattts-site?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chattts&#0045;site"
          target="_blank"
          className=""
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=460713&theme=light"
            alt="ChatTTS&#0032;Site - An&#0032;efficient&#0032;guide&#0032;to&#0032;help&#0032;you&#0032;get&#0032;started&#0032;with&#0032;ChatTTS | Product Hunt"
            className="h-[44px] w-[206px]"
            width="208"
            height="45"
          />
        </Link>
      </div>

      {/* <h1 className="mx-auto my-3 max-w-screen-sm text-4xl font-bold drop-shadow-md md:my-6 md:text-7xl">
        {t("landing.hero.title")}
      </h1> */}
      <h1 className="mx-auto my-3 max-w-screen-lg text-balance text-3xl font-bold drop-shadow-md md:my-6 md:text-6xl">
        {/* {t("landing.hero.title")} */}
        ChatTTS: Text-to-Speech Project for{" "}
        <span className="bg-gradient-to-r from-iconBlue to-iconPink bg-clip-text text-transparent drop-shadow-lg">
          Realistic Conversation
        </span>
      </h1>
      <h2 className="mx-auto max-w-screen-sm text-base md:mt-8">
        {t("landing.hero.sub_tagline")}
      </h2>

      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <Button
          onClick={handleCTAClickOnline}
          size={"lg"}
          className="outline-3 mt-4 animate-borderGradientMove rounded-full bg-gradient-to-r from-iconBlue to-iconPink bg-[length:_400%_400%] py-6 text-lg outline outline-offset-2 outline-zinc-300 [animation-duration:_12s] dark:outline-zinc-700 md:mt-6"
        >
          {t("landing.hero.cta_demo")}
        </Button>
        <Button
          onClick={handleCTAClickLocal}
          size={"lg"}
          className="outline-3 mt-4  rounded-full py-6 text-lg outline outline-offset-2 outline-zinc-300 dark:outline-zinc-700 md:mt-6"
        >
          {t("landing.hero.cta_local")}
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
