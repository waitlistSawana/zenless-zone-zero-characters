import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { Button } from "../ui/button";

export default function LandingPageContent() {
  return (
    <MaxWidthWrapper>
      <div className="ring-4 ring-zinc-200 dark:ring-black bg-white dark:bg-zinc-900 shadow-md min-h-[20vh] rounded-3xl">
        <div className="max-w-screen-lg md:px-40 px-8 pt-8 pb-8 md:pb-10 md:pt-10 text-start">
          <h2 className="md:text-3xl text-2xl font-bold md:mt-10 md:mb-2">
            Table of content
          </h2>
          <div className="md:mb-8 flex flex-row md:-ml-3 -ml-3">
            <Button variant={'link'}>
              <p>Title First</p>
            </Button>
            <Button variant={"link"}>
              <p>Title Second</p>
            </Button>
            <Button variant={"link"}>
              <p>Title Thirdth</p>
            </Button>
          </div>

          <h2 className="md:text-5xl text-3xl font-bold md:mt-10 mt-6 mb-3 md:mb-8">Title First </h2>
          <div className="flex flex-col md:mb-8 md:gap-3">
            <p>
              Embrace the minimalist approach with a one-page web application
              that not only offers a sleek and user-friendly interface but also
              enhances your SEO capabilities. This compact tool webapp allows
              you to startup quickly while optimizing your online presence for
              maximum visibility and improved search engine rankings.
            </p>
          </div>

          <h2 className="md:text-5xl text-3xl mt-6 font-bold mb-3 md:mt-10 md:mb-8">Title Second</h2>
          <div className="flex flex-col md:mb-8 md:gap-3">
            <p>
              Embrace the minimalist approach with a one-page web application
              that not only offers a sleek and user-friendly interface but also
              enhances your SEO capabilities. This compact tool webapp allows
              you to startup quickly while optimizing your online presence for
              maximum visibility and improved search engine rankings.
            </p>
          </div>

          <h2 className="md:text-5xl text-3xl mt-6 font-bold mb-3 md:mt-10 md:mb-8">Title Thirdth</h2>
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
