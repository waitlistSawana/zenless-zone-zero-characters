import { LandingPageHeader } from "@/components/landing-page/LandingPageHeader";
import LandingPageContent from "@/components/landing-page/LandingPageContent";
import LandingPageHero from "@/components/landing-page/LandingPageHero";
import LandingPageFooter from "@/components/landing-page/footer/LandingPageFooter";
import LandingPageFAQ from "@/components/landing-page/LandingPageFAQ";
import LandingPageFeatures from "@/components/landing-page/LandingPageFeatures";
import LandingpagePricing1 from "@/components/landing-page/LandingpagePricing1";
import { Metadata } from "next";
import LandingpageHowItWorks from "@/components/landing-page/LandingpageHowItWorks";

export const metadata: Metadata = {
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
      <LandingPageHero />
      <LandingpageHowItWorks />
      <LandingPageFeatures />
      <LandingpagePricing1 />
      <LandingPageFAQ />
      <LandingPageContent />
      <LandingPageFooter />
    </div>
  );
}
