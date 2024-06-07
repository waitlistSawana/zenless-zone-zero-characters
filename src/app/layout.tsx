import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProviderComponent } from "@/components/providers/tooltip-provider";
import { Toaster } from "@/components/ui/toaster";
import Metrics from "@/components/metrics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Page WebApp",
  description: "一个模板--制作合格的单页应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProviderComponent>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
          {process.env.NODE_ENV === "development" ? <></> : <Metrics />}
        </body>
      </TooltipProviderComponent>
    </html>
  );
}
