"use client";

import MaxWidthWrapper from "../../wrappers/MaxWidthWrapper";
import { Button } from "../../ui/button";
import { useI18n } from "../../locales/client";
import Link from "next/link";
import { CornerUpRight, Github, LucideVegan } from "lucide-react";
import NeubrutalismButton from "../../ui/syntaxui/NeubrutalismButton";
import SectionHeader from "../../wrappers/SectionHeader";

export default function LandingPageHeroDrupal() {
  const t = useI18n();
  const headerData = {
    level: 1,
    heading: t("landing.hero.title"),
    text: t("landing.hero.tagline"),
  };

  return (
    <section className="">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-10 lg:py-20">
        <SectionHeader
          level={headerData.level}
          heading={headerData.heading}
          text={headerData.text}
        />
        {/* <div>image</div> */}
      </div>
    </section>
  );
}
