import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";

export default function LandingPageHero() {
  return (
    <MaxWidthWrapper className="mb-10 mt-10 md:mb-10 md:mt-20">
      <Button variant={"default"}>100% Free</Button>
      <h1 className="mx-auto my-3 max-w-screen-sm text-4xl font-bold drop-shadow-lg md:my-4 md:text-7xl">
        One Page Web Application
      </h1>
      <h2 className="mx-auto max-w-screen-sm text-base">
        Start up your tool webapp in a minimal style. Get better SEO room at the
        same time!
      </h2>
    </MaxWidthWrapper>
  );
}
