import { LocaleProvider } from "@/components/providers/locale-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zenless Zero Zone Characters - Character List & Banner",
  description:
    "Discover Zenless Zero Zone characters! Explore abilities, backstories, and roles. Stay updated on releases and strategies. Perfect for new and seasoned players.",
};

// Locale provider layout
export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <LocaleProvider locale={params.locale}>
      <div className="z-0 flex w-full flex-1 flex-col">{children}</div>
    </LocaleProvider>
  );
}
