"use client";
import React from "react";
import { useI18n } from "../../locales/client";
import MaxWidthWrapper from "../../wrappers/MaxWidthWrapper";
import { Heading2 } from "../../wrappers/LandingPageHeaders";

export default function LandingPageFAQ() {
  const t = useI18n();
  const faqs = [
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
  ];

  return (
    <div className="py-10 text-center md:py-10">
      <Heading2>{t("landing.faq2col.heading")}</Heading2>
      <p className="text-md mx-auto mb-4 max-w-screen-md text-balance opacity-80 md:text-lg">
        {t("landing.faq2col.text")}
      </p>

      <MaxWidthWrapper className="max-w-screen-lg">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg bg-zinc-50 p-6 shadow dark:bg-zinc-900 [&_summary::-webkit-details-marker]:hidden"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-900 dark:text-zinc-50">
                <h3 className="text-start text-xl font-medium dark:text-white">
                  {f.question}
                </h3>

                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 text-start leading-relaxed text-zinc-700 dark:text-zinc-300">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
