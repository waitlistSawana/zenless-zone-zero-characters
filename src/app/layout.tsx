import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProviderComponent } from "@/components/providers/tooltip-provider";
import { Toaster } from "@/components/ui/toaster";
import Metrics from "@/components/metrics";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "starter landingpage blog",
  description:
    "参考 https://next-example-marketing.vercel.app/ 绘制的landingpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <TooltipProviderComponent>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
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
    // </ClerkProvider>
  );
}
