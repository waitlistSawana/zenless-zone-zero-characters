import { LandingPageHeader } from "@/components/landing-page/LandingPageHeader";
import LandingPageContent from "@/components/landing-page/LandingPageContent";
import LandingPageHero from "@/components/landing-page/hero/LandingPageHero";
import LandingPageFooter from "@/components/landing-page/footer/LandingPageFooter";
import LandingPageFAQ from "@/components/landing-page/faqs/LandingPageFAQ";
import LandingPageFeatures from "@/components/landing-page/features/LandingPageFeatures";
import LandingpagePricing1 from "@/components/landing-page/LandingpagePricing1";
import { Metadata, ResolvingMetadata } from "next";
import LandingpageHowItWorks from "@/components/landing-page/LandingpageHowItWorks";
import LandingPageHeroDrupal from "@/components/landing-page/hero/LandingPageHeroDrupal";
import LandingPageCards from "@/components/landing-page/LandingPageCards";
import LandingPageFeaturesLeftRight from "@/components/landing-page/features/LandingPageFeaturesLeftRight";
import LandingPageFAQ2Col from "@/components/landing-page/faqs/LandingPageFAQ2Col";
import LandingPageCTA from "@/components/landing-page/LandingPageCTA";
import CharactersList from "@/components/characters/CharactersList";

type MetadataLangT = {
  [key: string]: {
    title: string;
    description: string;
  };
};
const metadatalang: MetadataLangT = {
  en: {
    title: "Zenless Zero Zone Characters - Character List & Banner",
    description:
      "Discover Zenless Zero Zone characters! Explore abilities, backstories, and roles. Stay updated on releases and strategies. Perfect for new and seasoned players.",
  },
  zh: {
    title: "绝区零角色列表 - 角色信息与攻略",
    description:
      "绝区零是一款备受期待的角色扮演游戏，拥有丰富的角色。玩家可以选择各种各样的角色，每个角色都有独特的技能和背景故事。通过探索和战斗，玩家可以解锁更多角色，提高他们的能力，并组建强大的团队。这个角色列表详细介绍了每个角色的特点、技能和背景，为玩家提供了深入了解和选择角色的指南。无论是新手还是老玩家，都可以在这里找到适合自己的角色，并体验到绝区零世界的精彩和挑战。",
  },
  jp: {
    title: "绝区零のキャラクター一覧 - キャラクター情報と攻略",
    description:
      "絶区零のキャラクター一覧では、人気のアクションRPGゲーム『絶区零』に登場する魅力的なキャラクターたちを詳しく紹介しています。各キャラクターの背景、能力、スキル、そしてストーリー内での役割についての詳細な情報を提供します。ファンや新規プレイヤーにとって、ゲームの世界観を深く理解し、より楽しむための必見のガイドです。",
  },
};

type Props = {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const lang = params.locale;
  return {
    title: metadatalang[lang].title,
    description: metadatalang[lang].description,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
        zh: `${process.env.NEXT_PUBLIC_BASE_URL}/zh`,
        ja: `${process.env.NEXT_PUBLIC_BASE_URL}/jp`,
      },
    },
  };
}

// export const metadata: Metadata = {
//   alternates: {
//     canonical: process.env.NEXT_PUBLIC_BASE_URL,
//     languages: {
//       en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
//       zh: `${process.env.NEXT_PUBLIC_BASE_URL}/zh`,
//       ja: `${process.env.NEXT_PUBLIC_BASE_URL}/jp`,
//     },
//   },
// };

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
