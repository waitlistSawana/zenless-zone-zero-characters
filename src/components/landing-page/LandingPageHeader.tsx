"use client";

import { DarkModeToggle } from "@/components/DarkModeToggle";
import { useI18n } from "@/components/locales/client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelLeft } from "lucide-react";
import Link from "next/link";
// import {
//   SignInButton,
//   SignUpButton,
//   UserButton,
//   useUser,
//   SignOutButton,
// } from "@clerk/nextjs";
import { LocaleSelector } from "../LocaleSelector";
import Image from "next/image";

export function LandingPageHeader() {
  const t = useI18n();
  // const { user, isSignedIn } = useUser();

  const websiteName = "Z.Z.Z. Characters";

  return (
    <header
      id="landing-header"
      className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-lg md:px-6"
    >
      {/* 移动端 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex h-full flex-col sm:max-w-xs">
          <nav className="grid grid-cols-1 gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-semibold"
            >
              <Image
                src="/icon/icon.png"
                className="h-6 w-6 rounded-sm"
                alt="favicon"
                width={24}
                height={24}
              />
              <span className="">{websiteName}</span>
            </Link>
            {/* {isSignedIn ? (
              <div className="flex items-center justify-between">
                <UserButton />
                <SignOutButton>
                  <Button variant={"outline"}>sign-out</Button>
                </SignOutButton>
              </div>
            ) : (
              <SignInButton>
                <Button variant={"outline"}>sign-in</Button>
              </SignInButton>
            )} */}
            {/* <a
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("landing.nav.blog")}
            </a> */}
            {/* <a
              href="#landing-pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("landing.nav.pricing")}
            </a> */}
            {/* <a
              href="#landing-faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("landing.nav.faq")}
            </a> */}
            {/* <a
              href="/docs"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("landing.nav.docs")}
            </a> */}
          </nav>
          <div className="flex-1" />
          <div className="flex gap-4">
            <DarkModeToggle />
            <LocaleSelector />
          </div>
        </SheetContent>
      </Sheet>
      {/* 网页端 （原来是用sheet完成的吗） */}
      <nav className="flex flex-row items-center gap-5 text-sm font-medium lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold"
        >
          <Image
            src="/icon/icon.png"
            className="size-10 rounded-sm"
            alt="favicon"
            width={100}
            height={100}
          />
          <span className="font-serif">{websiteName}</span>
        </Link>
      </nav>
      <nav className="mx-auto flex flex-row items-center gap-5 text-sm font-medium lg:gap-6">
        {/* <a
          href="/blog"
          className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
        >
          {t("landing.nav.blog")}
        </a> */}
        {/* <a
          href="#landing-pricing"
          className="hidden sm:block text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("landing.nav.pricing")}
        </a> */}
        {/* <a
          href="#landing-faq"
          className="hidden sm:block text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("landing.nav.faq")}
        </a> */}
        {/* <a
          href="/docs"
          className="hidden sm:block text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("landing.nav.docs")}
        </a> */}
      </nav>
      {/* <div className="flex-1" /> */}
      <div className="hidden gap-2 sm:flex">
        <DarkModeToggle />
        <LocaleSelector />
        {/* {isSignedIn ? (
          <div className="flex items-center justify-between">
            <UserButton />
          </div>
        ) : (
          <SignInButton>
            <Button variant={"outline"}>sign-in</Button>
          </SignInButton>
        )} */}
      </div>
    </header>
  );
}
