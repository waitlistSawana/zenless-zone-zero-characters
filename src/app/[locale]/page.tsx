import { LandingPageHeader } from "@/components/landing-page/LandingPageHeader";
import LandingPageContent from "@/components/landing-page/LandingPageContent";
import LandingPageHero from "@/components/landing-page/LandingPageHero";
import LandingPageTool from "@/components/landing-page/LandingPageTool";
import LandingPageFooter from "@/components/landing-page/LandingPageFooter";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950">
      <LandingPageHeader />
      <LandingPageHero />
      <LandingPageTool />
      <LandingPageContent />
      <LandingPageFooter />
    </div>
  );
}
