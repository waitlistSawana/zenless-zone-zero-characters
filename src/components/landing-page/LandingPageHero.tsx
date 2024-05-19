import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";

export default function LandingPageHero() {
  return (
    <MaxWidthWrapper className="md:mt-20 mt-10 mb-10 md:mb-10">
      <Button variant={"default"}>100% Free</Button>
      <h1 className="md:my-4 md:text-7xl text-4xl drop-shadow-lg my-3 font-bold max-w-screen-sm mx-auto">
        One Page Web Application
      </h1>
      <h2 className="max-w-screen-sm mx-auto text-base">
        Start up your tool webapp in a minimal style. Get better SEO room at the
        same time!
      </h2>
    </MaxWidthWrapper>
  );
}
