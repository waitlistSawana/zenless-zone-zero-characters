import { LocaleProvider } from "@/components/providers/locale-provider";

// Locale provider layout
export default function LocaleLayout({
  children,
  params: { locale = "en" },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <LocaleProvider locale={locale}>
      <div className="z-0 flex w-full flex-1 flex-col">{children}</div>
    </LocaleProvider>
  );
}
