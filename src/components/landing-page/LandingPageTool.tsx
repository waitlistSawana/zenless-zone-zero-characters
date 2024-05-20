import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";

export default function LandingPageTool() {
  return (
    <MaxWidthWrapper className="mb-10 mt-10 max-w-screen-lg md:mb-20 md:mt-20">
      <div className="flex min-h-[20vh] items-center justify-center rounded-3xl bg-white shadow-md ring-4  ring-zinc-200 dark:bg-zinc-900 dark:ring-black">
        <div>tools</div>
        <div>tools2</div>
      </div>
    </MaxWidthWrapper>
  );
}
