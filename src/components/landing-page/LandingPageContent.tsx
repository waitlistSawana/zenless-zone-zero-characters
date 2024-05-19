import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";

export default function LandingPageContent() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-[20vh] rounded-3xl bg-white shadow-md ring-4 ring-zinc-200 dark:bg-zinc-900 dark:ring-black">
        <div className="max-w-screen-lg px-8 pb-8 pt-8 text-start md:px-40 md:pb-10 md:pt-10">
          <h2 className="text-2xl font-bold md:mb-2 md:mt-10 md:text-3xl">
            Table of content
          </h2>
          <div className="-ml-3 flex flex-row md:-ml-3 md:mb-8">
            <Button variant={"link"}>
              <p>Title First</p>
            </Button>
            <Button variant={"link"}>
              <p>Title Second</p>
            </Button>
            <Button variant={"link"}>
              <p>Title Thirdth</p>
            </Button>
          </div>

          <h2 className="mb-3 mt-6 text-3xl font-bold md:mb-8 md:mt-10 md:text-5xl">
            Title First{" "}
          </h2>
          <div className="flex flex-col md:mb-8 md:gap-3">
            <p>
              Embrace the minimalist approach with a one-page web application
              that not only offers a sleek and user-friendly interface but also
              enhances your SEO capabilities. This compact tool webapp allows
              you to startup quickly while optimizing your online presence for
              maximum visibility and improved search engine rankings.
            </p>
          </div>

          <h2 className="mb-3 mt-6 text-3xl font-bold md:mb-8 md:mt-10 md:text-5xl">
            Title Second
          </h2>
          <div className="flex flex-col md:mb-8 md:gap-3">
            <p>
              Embrace the minimalist approach with a one-page web application
              that not only offers a sleek and user-friendly interface but also
              enhances your SEO capabilities. This compact tool webapp allows
              you to startup quickly while optimizing your online presence for
              maximum visibility and improved search engine rankings.
            </p>
          </div>

          <h2 className="mb-3 mt-6 text-3xl font-bold md:mb-8 md:mt-10 md:text-5xl">
            Title Thirdth
          </h2>
          <div className="flex flex-col md:mb-4 md:gap-3 ">
            <p>
              Embrace the minimalist approach with a one-page web application
              that not only offers a sleek and user-friendly interface but also
              enhances your SEO capabilities. This compact tool webapp allows
              you to startup quickly while optimizing your online presence for
              maximum visibility and improved search engine rankings.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
