import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function LandingPageFooter() {
  return (
    <div className="bg-zinc-50 dark:bg-black md:mt-20 mt-10">
      <MaxWidthWrapper className="md:mt-10 md:pb-10 mt-5 pb-5 border-t-2">
        <div className="grid md:grid-cols-10 md:pt-8 pt-6 grid-cols-1">
          <div className="md:col-span-4 flex md:flex-col flex-row justify-center">
            <Link href={"/"}>
              <Image
                src={"/favicon.ico"}
                alt="home page logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="md:col-span-2">contact us</div>
          <div className="md:col-span-2">products</div>
          <div className="md:col-span-2">Friends</div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
