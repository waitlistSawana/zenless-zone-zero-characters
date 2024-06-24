import { title } from "process";
import React from "react";

const howItWorksData = {
  title: "Get Started In 4 Easy Steps",
  howItWorks: [
    {
      icon: (
        <img
          src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
          alt="Get Started Icon 1"
          className="inline-block"
        />
      ),
      title: "Download the app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing",
    },
    {
      icon: (
        <img
          src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
          alt="Get Started Icon 2"
          className="inline-block"
        />
      ),
      title: "Sign up for account",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing",
    },
    {
      icon: (
        <img
          src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg"
          alt="Get Started Icon 3"
          className="inline-block"
        />
      ),
      title: "Activate virtual card",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing",
    },
    {
      icon: (
        <img
          src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg"
          alt="Get Started Icon 4"
          className="inline-block"
        />
      ),
      title: "Ready set go!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing",
    },
  ],
};

export default function LandingpageHowItWorks() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Heading */}
        <h2 className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold md:mb-20 md:text-5xl">
          {howItWorksData.title}
        </h2>
        {/* How it Works */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
          {/* Item */}
          {howItWorksData.howItWorks.map((howItWorks, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#1353fe]/80">
                {howItWorks.icon}
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <h3 className="text-base font-bold md:text-xl">
                  {howItWorks.title}
                </h3>
                <p className="text-[#636262]">{howItWorks.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
