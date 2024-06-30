"use client"
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../locales/client";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";

export default function AgentHero({ characterName }: { characterName: string }) {
  const t = useI18n()

  return (
    <MaxWidthWrapper className="bg-zinc-800 max-w-screen-xl">
      <div className="my-4 sm:my-8 lg:my-14 relative">
        {/* text section */}
        <div className="flex items-end py-3">
          <h1 className="text-7xl font-bold">
            Lucy
          </h1>
          {/* <div>
          <Button>Sons of Elidri</Button>
        </div> */}
        </div>
        {/* introduce */}
        <div className="flex max-w-md py-3 text-start">
          <p>Lucy lastname (full name): a character of zenless zone zero, who is charming and powerful agent in new elio city.</p>
        </div>
        {/* button to official website */}
        <div className="flex justify-start py-4"><Button>View on Official Website<ArrowUpRight /></Button></div>
        {/* team */}
        <div className="flex py-4 gap-3 ">
          <div className="flex flex-wrap gap-1"><Button variant={"default"} className="">Teamate A</Button><Button>Teamate B</Button><Button>Teamate C</Button></div>
          <div className="flex gap-1 flex-wrap"><Button>Bamboo A</Button><Button>Bamboo B</Button></div>
        </div>

        {/* character image */}
        <div className="absolute bottom-0 right-0" >character image</div>
      </div>
    </MaxWidthWrapper>
  )
}