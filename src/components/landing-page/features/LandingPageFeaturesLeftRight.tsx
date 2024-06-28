"use client";
import SectionWrapper from "../../wrappers/SectionWrapper";
import MaxWidthWrapper from "../../wrappers/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { useI18n } from "../../locales/client";
import { Heading } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { FeartureLandProps } from "@/lib/types";

export default function LandingPageFeaturesLeftRight() {
  const t = useI18n();
  const FeatureLandData = [
    {
      heading: t("landing.features_leftright.items.feature1.heading"),
      text: t("landing.features_leftright.items.feature1.text"),
      imageUrl:
        "https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg",
      imageAlt: t("landing.features_leftright.items.feature1.image_alt"),
      imagePositon: "left",
      links: "#",
      backgroundClassName: "bg-zinc-100 dark:bg-zinc-900",
    },
    {
      heading: t("landing.features_leftright.items.feature2.heading"),
      text: t("landing.features_leftright.items.feature2.text"),
      imageUrl:
        "https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg",
      imageAlt: t("landing.features_leftright.items.feature2.image_alt"),
      imagePositon: "right",
      links: "#",
      backgroundClassName: "",
    },
  ];
  return (
    <>
      {FeatureLandData.map((feature, index) => (
        <div key={index}>
          <FeatureLand feature={feature} />
        </div>
      ))}
    </>
  );
}

const FeatureLand = ({ feature }: { feature: FeartureLandProps }) => {
  return (
    <SectionWrapper backgroundClassName={feature.backgroundClassName}>
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
          {feature && (
            <div
              className={cn(
                feature.imagePositon === "left"
                  ? "md:col-start-1"
                  : "md:col-start-2",
              )}
            >
              <Image
                src={feature.imageUrl}
                alt={feature.imageAlt}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {feature && (
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                {feature.heading}
              </h2>
            )}
            <p className="mt-4 max-w-md text-lg font-light leading-relaxed text-gray-500 sm:text-xl lg:text-2xl">
              {feature.text}
            </p>

            <Link href={feature.links} className="my-3 md:my-10">
              <Button size={"lg"} className="py-6 md:text-xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
