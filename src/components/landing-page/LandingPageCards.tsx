"use client";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import SectionHeader from "../wrappers/SectionHeader";
import { SectionWrapper } from "../wrappers/SectionWrapper";
import { useI18n } from "../locales/client";
import { Book } from "lucide-react";

export default function LandingPageCards() {
  const t = useI18n();
  const cardData = [
    {
      id: 1,
      icon: <Book />,
      heading: "Business Planning",
      text: "Question want reality fund. Decision environment despite nothing.",
    },
    {
      id: 2,
      icon: <Book />,
      heading: "Premium Support",
      text: "Almost end push. Picture truth performance detail concern.",
    },
    {
      id: 3,
      icon: <Book />,
      heading: "Consulting",
      text: "Course smile middle road because about listen force.",
    },
  ];
  return (
    <SectionWrapper backgroundClassName="bg-zinc-100 dark:bg-zinc-900">
      <MaxWidthWrapper>
        <SectionHeader
          level={2}
          heading="Cards"
          text="Apply should stuff quickly. Each born member name technology hot forget. Similar world far study woman."
        />
        <div className="container mx-auto px-6">
          {cardData?.length && (
            <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3">
              {cardData.map((card, index) => (
                <div key={index} className="max-w-sm text-center lg:max-w-none">
                  <h3 className="text-2xl font-semibold">{card.heading}</h3>
                  {card.text && (
                    <p className="pt-2 text-lg opacity-70">{card.text}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
