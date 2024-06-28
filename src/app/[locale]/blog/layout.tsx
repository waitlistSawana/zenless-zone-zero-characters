import { LandingPageHeader } from "@/components/landing-page/LandingPageHeader";
import LandingPageFooter from "@/components/landing-page/footer/LandingPageFooter";

export default function BlogdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LandingPageHeader />
      {children}
      <LandingPageFooter />
    </div>
  );
}
