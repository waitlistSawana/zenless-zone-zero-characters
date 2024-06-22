import { LandingPageHeader } from "@/components/landing-page/LandingPageHeader";
import LandingPageContent from "@/components/landing-page/LandingPageContent";
import LandingPageHero from "@/components/landing-page/LandingPageHero";
import LandingPageFooter from "@/components/landing-page/footer/LandingPageFooter";
import LandingPageFAQ from "@/components/landing-page/LandingPageFAQ";
import LandingPageFeatures from "@/components/landing-page/LandingPageFeatures";
import LandingPageHowItWorks from "@/components/landing-page/LandingPageHowItWorks";


export default function Home() {
  return (
    <div className="">
      <LandingPageHeader />
      <LandingPageHero />
      <LandingPageFeatures />
      <LandingPageHowItWorks />
      <LandingPageFAQ />
      <LandingPageContent />
      <LandingPageFooter />
    </div>
  );
}
