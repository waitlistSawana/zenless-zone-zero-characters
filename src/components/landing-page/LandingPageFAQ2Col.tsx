"use client";
import SectionHeader from "../wrappers/SectionHeader";
import { useI18n } from "../locales/client";
import { SectionWrapper } from "../wrappers/SectionWrapper";

export default function LandingPageFAQ2Col() {
  const t = useI18n();
  const FAQData = {
    heading: t("landing.faq2col.heading"),
    text: t("landing.faq2col.text"),
    faqs: [
      {
        question: t("landing.faq2col.faqs.faq1.question"),
        answer: t("landing.faq2col.faqs.faq1.answer"),
      },
      {
        question: t("landing.faq2col.faqs.faq2.question"),
        answer: t("landing.faq2col.faqs.faq2.answer"),
      },
      {
        question: t("landing.faq2col.faqs.faq3.question"),
        answer: t("landing.faq2col.faqs.faq3.answer"),
      },
      {
        question: t("landing.faq2col.faqs.faq4.question"),
        answer: t("landing.faq2col.faqs.faq4.answer"),
      },
    ],
  };
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
