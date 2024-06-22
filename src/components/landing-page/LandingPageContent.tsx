import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";
import MarkdownProse from "../wrappers/MarkdownProse";

const markdown =
  "\n # there is markdown content \n\n asdfanskldnfaosdfnasdjfalksd";

export default function LandingPageContent() {
  return (
    <MaxWidthWrapper className="my-4 md:my-10">
      <div className="min-h-[20vh] rounded-3xl bg-white shadow-md ring-4 ring-zinc-200 dark:bg-zinc-900 dark:ring-black">
        <div className="mx-auto max-w-screen-lg px-8 pb-8 pt-8 text-start md:px-40 md:pb-10 md:pt-10">
          <MarkdownProse markdown={markdown}></MarkdownProse>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
