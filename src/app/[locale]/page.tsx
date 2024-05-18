import { LandingPageHeader } from "@/components/landing-page";
import LandingPageContent from "@/components/landing-page/LandingPageContent";
import LandingPageHero from "@/components/landing-page/LandingPageHero";
import LandingPageTool from "@/components/landing-page/LandingPageTool";

export default function Home() {
  return (
    <div className="bg-zinc-50">
      <LandingPageHeader />
      <LandingPageHero />
      <LandingPageTool />
      <LandingPageContent />
    </div>
  );
}
