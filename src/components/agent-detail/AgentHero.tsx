"use client";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../locales/client";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import Image from "next/image";
import { CharacterCardT } from "@/lib/types";

export default function AgentHero({
  characterData,
}: {
  characterData: CharacterCardT;
}) {
  const t = useI18n();

  return (
    <MaxWidthWrapper className="relative max-w-screen-lg">
      <div className="my-4 flex flex-wrap items-center justify-center sm:my-8 md:justify-between lg:my-14">
        <div>
          {/* heading section */}
          <div className="flex items-end py-3">
            <h1 className="w-full text-center text-7xl font-bold md:text-start">
              {characterData.name}
            </h1>
          </div>
          {/* introduce */}
          <div className="flex max-w-md py-3 text-center md:text-start">
            <p>
              Lucy lastname (full name): a character of zenless zone zero, who
              is charming and powerful agent in new elio city.
            </p>
          </div>
          {/* button to official website */}
          <div className="flex w-full justify-center py-4 md:justify-start">
            <Button>
              View on ZZZ official
              <ArrowUpRight />
            </Button>
          </div>
        </div>

        {/* character image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={characterData.headshotUrl}
            alt="lucy full image with name"
            width={1600}
            height={1600}
            className="w-64"
          />
        </div>
      </div>

      {/* team */}
      <div className="flex justify-center gap-3 py-1">
        <div className="flex flex-wrap gap-1">
          <Button variant={"default"} className="">
            Teamate A
          </Button>
          <Button>Teamate B</Button>
          <Button>Teamate C</Button>
        </div>
        <div className="flex flex-wrap gap-1">
          <Button>Bamboo A</Button>
          <Button>Bamboo B</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
