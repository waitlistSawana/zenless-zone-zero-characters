"use client";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import SectionHeader from "../wrappers/SectionHeader";
import SectionWrapper from "../wrappers/SectionWrapper";
import { useI18n } from "../locales/client";
import { Book } from "lucide-react";

export default function LandingPageCards() {
  const t = useI18n();
  const cardData = {
    heading: t("landing.cards.heading"),
    text: t("landing.cards.text"),
    cards: [
      {
        id: 1,
        heading: t("landing.cards.cards.card1.heading"),
        text: t("landing.cards.cards.card1.text"),
      },
      {
        id: 2,
        heading: t("landing.cards.cards.card2.heading"),
        text: t("landing.cards.cards.card2.text"),
      },
      {
        id: 3,
        heading: t("landing.cards.cards.card3.heading"),
        text: t("landing.cards.cards.card3.text"),
      },
    ],
  };

  return (
    <SectionWrapper backgroundClassName="bg-zinc-100 dark:bg-zinc-900">
      <MaxWidthWrapper>
        <SectionHeader
          level={2}
          heading={cardData.heading}
          text={cardData.text}
        />
        <div className="container mx-auto px-6">
          {cardData && (
            <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3">
              {cardData.cards.map((card, index) => (
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
