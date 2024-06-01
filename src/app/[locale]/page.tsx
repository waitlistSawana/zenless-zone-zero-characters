import { LandingPageHeader } from "@/components/landing-page/LandingPageHeader";
import LandingPageContent from "@/components/landing-page/LandingPageContent";
import LandingPageHero from "@/components/landing-page/LandingPageHero";
import LandingPageTool from "@/components/landing-page/LandingPageTool";
import LandingPageFooter from "@/components/landing-page/LandingPageFooter";
import LandingPageFAQ from "@/components/landing-page/LandingPageFAQ";
import LandingPageFeatures from "@/components/landing-page/LandingPageFeatures";
import LandingPageHowItWorks from "@/components/landing-page/LandingPageHowItWorks";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <LandingPageHeader />
      <LandingPageHero />
      <LandingPageTool />
      <LandingPageFeatures />
      <LandingPageHowItWorks />
      <LandingPageFAQ />
      <LandingPageContent />
      <LandingPageFooter />
    </div>
  );
}
