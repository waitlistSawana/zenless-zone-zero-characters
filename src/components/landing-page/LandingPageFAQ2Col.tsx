import React from "react";
import { SectionWrapper } from "../wrappers/SectionWrapper";
import SectionHeader from "../wrappers/SectionHeader";

const FAQData = {
  heading: "Frequently Asked Questions",
  text: "Cupiditate reprehenderit dignissimos maxime distinctio quia iste. Eum aliquam nulla voluptatum iure.",
  faqs: [
    {
      question: "Move weight here just either attorney?",
      answer:
        "Officier journal personnage maintenant. Métier arracher cou secours voler air. Maintenant parole prévenir creuser froid distinguer affaire rocher.",
    },
    {
      question: "Pass role air campaign up gas service.",
      answer:
        "Time have local give cover mission. Throw where size size relationship. Her year wife. Stock type ten tough plant. Catch wear various. Section follow charge side member.",
    },
    {
      question: "Move weight here just either attorney?",
      answer:
        "Officier journal personnage maintenant. Métier arracher cou secours voler air. Maintenant parole prévenir creuser froid distinguer affaire rocher.",
    },
    {
      question: "Move weight here just either attorney?",
      answer:
        "Officier journal personnage maintenant. Métier arracher cou secours voler air. Maintenant parole prévenir creuser froid distinguer affaire rocher.",
    },
  ],
};

export default function LandingPageFAQ2Col() {
  return (
    <SectionWrapper backgroundClassName="bg-zinc-100 dark:bg-zinc-900">
      <SectionHeader level={2} heading={FAQData.heading} text={FAQData.text} />

      <div className="container mx-auto px-6">
        {FAQData && (
          <div className="grid gap-8 pt-10 md:grid-cols-2 md:gap-12 md:py-20 lg:gap-20">
            {FAQData.faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold md:text-2xl">
                  {faq.question}
                </h3>
                <p className="mt-2 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
