"use client";

import { Heading } from "lucide-react";
import { useI18n } from "../locales/client";

export default function LandingPageCTA() {
  const t = useI18n();
  const CTAData = {
    heading: t("landing.cta.heading"),
    text: t("landing.cta.text"),
    button: t("landing.cta.button"),
    link: "#",
  };
  return (
    <section className="overflow-hidden bg-[url(https://image.zenlesszonezerocharacters.com/image/banner_backgrounds/bg_victoria_housekeeping_co.png)] bg-cover bg-top bg-no-repeat">
      <div className="bg-zinc-950/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="max-w-md text-2xl font-bold text-white sm:text-3xl md:text-start md:text-5xl">
            {CTAData.heading}
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-start md:text-lg md:leading-relaxed">
            {CTAData.text}
          </p>

          <div className="mt-4 flex justify-center sm:mt-8 md:justify-start">
            <a
              href={CTAData.link}
              className="inline-block rounded-full bg-primary px-12 py-3 text-start text-sm font-medium text-zinc-50 transition hover:bg-primary/80 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {CTAData.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
