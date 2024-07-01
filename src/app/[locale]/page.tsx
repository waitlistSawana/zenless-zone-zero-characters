import { LandingPageHeader } from "@/components/landing-page/LandingPageHeader";
import LandingPageContent from "@/components/landing-page/LandingPageContent";
import LandingPageHero from "@/components/landing-page/hero/LandingPageHero";
import LandingPageFooter from "@/components/landing-page/footer/LandingPageFooter";
import LandingPageFAQ from "@/components/landing-page/faqs/LandingPageFAQ";
import LandingPageFeatures from "@/components/landing-page/features/LandingPageFeatures";
import LandingpagePricing1 from "@/components/landing-page/LandingpagePricing1";
import { Metadata } from "next";
import LandingpageHowItWorks from "@/components/landing-page/LandingpageHowItWorks";
import LandingPageHeroDrupal from "@/components/landing-page/hero/LandingPageHeroDrupal";
import LandingPageCards from "@/components/landing-page/LandingPageCards";
import LandingPageFeaturesLeftRight from "@/components/landing-page/features/LandingPageFeaturesLeftRight";
import LandingPageFAQ2Col from "@/components/landing-page/faqs/LandingPageFAQ2Col";
import LandingPageCTA from "@/components/landing-page/LandingPageCTA";
import CharactersList from "@/components/characters/CharactersList";

export const metadata: Metadata = {
  title: "Zenless Zero Zone Characters - Character List & Banner",
  description:
    "Discover Zenless Zero Zone characters! Explore abilities, backstories, and roles. Stay updated on releases and strategies. Perfect for new and seasoned players.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    languages: {
      "en-US": `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
    },
  },
};

export default function Home() {
  return (
    <div className="">
      <LandingPageHeader />
      <LandingPageHeroDrupal />
      {/* <LandingPageHero /> */}
      <CharactersList />
      <LandingPageCards />
      <LandingpageHowItWorks />
      <LandingPageFeaturesLeftRight />
      {/* <LandingPageFeatures /> */}
      {/* <LandingpagePricing1 /> */}
      {/* <LandingPageFAQ /> */}
      <LandingPageCTA />
      <LandingPageFAQ2Col />
      {/* <LandingPageContent /> */}
      <LandingPageFooter />
    </div>
  );
}
