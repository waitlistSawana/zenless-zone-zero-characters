import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";

export default function LandingPageTool() {
  return (
    <MaxWidthWrapper className="mb-10 mt-10 md:mb-20 md:mt-20">
      <div className="min-h-[20vh] rounded-3xl bg-white shadow-md ring-4 ring-zinc-200 dark:bg-zinc-900 dark:ring-black">
        Tools
      </div>
    </MaxWidthWrapper>
  );
}
