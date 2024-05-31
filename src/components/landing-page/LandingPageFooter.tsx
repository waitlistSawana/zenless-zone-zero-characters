import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function LandingPageFooter() {
  return (
    <div className="mt-10 bg-zinc-50 dark:bg-black md:mt-20">
      <MaxWidthWrapper className="mt-5 border-t-2 pb-5 md:mt-10 md:pb-10">
        <div className="grid grid-cols-1 pt-6 md:grid-cols-10 md:pt-8">
          <div className="flex flex-row justify-center md:col-span-4 md:flex-col">
            <Link href={"/"}>
              <Image
                src={"/icon/next.svg"}
                alt="home page OnePage"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className="font-serif">contact us</div>
          </div>
          <div className="md:col-span-2">
            <div className="font-serif">products</div>
          </div>
          <div className="md:col-span-2">
            <div className="font-serif">Friends</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
