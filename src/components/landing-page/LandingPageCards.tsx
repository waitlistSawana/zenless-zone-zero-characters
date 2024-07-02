"use client";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import SectionHeader from "../wrappers/SectionHeader";
import SectionWrapper from "../wrappers/SectionWrapper";
import { useI18n } from "../locales/client";
import { Book } from "lucide-react";
import { Button } from "../ui/button";

export default function LandingPageCards() {
  const t = useI18n();
  const cardData = {
    heading: t("landing.cards.heading"),
    text: t("landing.cards.text"),
    // cards: [
    //   {
    //     id: 1,
    //     heading: t("landing.cards.cards.card1.heading"),
    //     text: t("landing.cards.cards.card1.text"),
    //   },
    //   {
    //     id: 2,
    //     heading: t("landing.cards.cards.card2.heading"),
    //     text: t("landing.cards.cards.card2.text"),
    //   },
    //   {
    //     id: 3,
    //     heading: t("landing.cards.cards.card3.heading"),
    //     text: t("landing.cards.cards.card3.text"),
    //   },
    //   {
    //     id: 4,
    //     heading: t("landing.cards.cards.card4.heading"),
    //     text: t("landing.cards.cards.card4.text"),
    //   },
    //   {
    //     id: 5,
    //     heading: t("landing.cards.cards.card5.heading"),
    //     text: t("landing.cards.cards.card5.text"),
    //   },
    //   {
    //     id: 6,
    //     heading: t("landing.cards.cards.card6.heading"),
    //     text: t("landing.cards.cards.card6.text"),
    //   },
    //   {
    //     id: 7,
    //     heading: t("landing.cards.cards.card7.heading"),
    //     text: t("landing.cards.cards.card7.text"),
    //   },
    //   {
    //     id: 8,
    //     heading: t("landing.cards.cards.card8.heading"),
    //     text: t("landing.cards.cards.card8.text"),
    //   },
    //   {
    //     id: 9,
    //     heading: t("landing.cards.cards.card9.heading"),
    //     text: t("landing.cards.cards.card9.text"),
    //   },
    //   {
    //     id: 10,
    //     heading: t("landing.cards.cards.card10.heading"),
    //     text: t("landing.cards.cards.card10.text"),
    //   },
    //   {
    //     id: 11,
    //     heading: t("landing.cards.cards.card11.heading"),
    //     text: t("landing.cards.cards.card11.text"),
    //   },
    //   {
    //     id: 12,
    //     heading: t("landing.cards.cards.card12.heading"),
    //     text: t("landing.cards.cards.card12.text"),
    //   },
    //   {
    //     id: 13,
    //     heading: t("landing.cards.cards.card13.heading"),
    //     text: t("landing.cards.cards.card13.text"),
    //   },
    //   {
    //     id: 14,
    //     heading: t("landing.cards.cards.card14.heading"),
    //     text: t("landing.cards.cards.card14.text"),
    //   },
    //   {
    //     id: 15,
    //     heading: t("landing.cards.cards.card15.heading"),
    //     text: t("landing.cards.cards.card15.text"),
    //   },
    //   {
    //     id: 16,
    //     heading: t("landing.cards.cards.card16.heading"),
    //     text: t("landing.cards.cards.card16.text"),
    //   },
    //   {
    //     id: 17,
    //     heading: t("landing.cards.cards.card17.heading"),
    //     text: t("landing.cards.cards.card17.text"),
    //   },
    // ],
  };

  return (
    <SectionWrapper backgroundClassName="bg-zinc-100 dark:bg-zinc-900">
      <MaxWidthWrapper>
        <SectionHeader
          level={2}
          heading={cardData.heading}
          text={cardData.text}
        />
        {/* <details className="group my-2 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-center gap-1.5 rounded-lg">
            <h2 className="font-medium">View More</h2>

            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <div className="container mx-auto px-6">
            {cardData && (
              <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3">
                {cardData.cards.map((card, index) => (
                  <div
                    key={index}
                    className="max-w-sm text-center lg:max-w-none"
                  >
                    <h3 className="text-2xl font-semibold">{card.heading}</h3>
                    {card.text && (
                      <p className="pt-2 text-lg opacity-70">{card.text}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </details> */}
      </MaxWidthWrapper>
    </SectionWrapper>
  );
}
