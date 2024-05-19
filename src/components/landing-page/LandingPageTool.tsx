import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";

export default function LandingPageTool() {
  return (
    <MaxWidthWrapper className="md:mt-20 mt-10 mb-10 md:mb-20">
      <div className="ring-4 ring-zinc-200 dark:ring-black dark:bg-zinc-900 bg-white shadow-md min-h-[20vh] rounded-3xl">
        Tools
      </div>
    </MaxWidthWrapper>
  );
}
