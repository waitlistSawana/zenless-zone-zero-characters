"use client";

import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { useI18n } from "../locales/client";
import { Heading2 } from "../wrappers/LandingPageHeaders";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import CodeWrapper from "../wrappers/CodeWrapper";

export default function LandingPageHowItWorks() {
  const t = useI18n();
  const steps = [
    {
      id: t("landing.how_it_works.steps.s1.id"),
      title: t("landing.how_it_works.steps.s1.title"),
      description: t("landing.how_it_works.steps.s1.description"),
      code: "git clone https://github.com/2noise/ChatTTS.git",
    },
    {
      id: t("landing.how_it_works.steps.s2.id"),
      title: t("landing.how_it_works.steps.s2.title"),
      description: t("landing.how_it_works.steps.s2.description"),
      code: "pip install requirements.txt",
    },
    {
      id: t("landing.how_it_works.steps.s3.id"),
      title: t("landing.how_it_works.steps.s3.title"),
      description: t("landing.how_it_works.steps.s3.description"),
      code: "import ChatTTS\nfrom IPython.display import Audio\n\nchat = ChatTTS.Chat()\nchat.load_models()",
    },
    {
      id: t("landing.how_it_works.steps.s4.id"),
      title: t("landing.how_it_works.steps.s4.title"),
      description: t("landing.how_it_works.steps.s4.description"),
      code: 'texts = ["PUT YOUR TEXT HERE",]',
    },
    {
      id: t("landing.how_it_works.steps.s5.id"),
      title: t("landing.how_it_works.steps.s5.title"),
      description: t("landing.how_it_works.steps.s5.description"),
      code: "wavs = chat.infer(texts, )",
    },
    {
      id: t("landing.how_it_works.steps.s6.id"),
      title: t("landing.how_it_works.steps.s6.title"),
      description: t("landing.how_it_works.steps.s6.description"),
      code: 'torchaudio.save("output1.wav", torch.from_numpy(wavs[0]), 24000)',
    },
  ];

  return (
    <div className="" id="how-it-works">
      <MaxWidthWrapper className="mt-10 py-4  md:mt-16 md:pt-10">
        <Heading2>{t("landing.how_it_works.title")}</Heading2>
        <p className="text-md mb-4 text-balance opacity-80 md:text-lg">
          {t("landing.how_it_works.description_local")}
        </p>
      </MaxWidthWrapper>

      <div className="mb-10 mt-2 grid max-w-screen-2xl grid-cols-1 gap-4 px-2.5 md:mb-20 md:grid-cols-2 md:px-20 md:pb-10 xl:grid-cols-3">
        {steps.map((s, i) => (
          <Card
            key={i}
            className="flex flex-col text-center shadow-md transition-all hover:scale-105 dark:bg-zinc-900 dark:shadow-white"
          >
            <CardHeader className="flex items-center gap-1">
              <Button size={"icon"} className="rounded-full text-lg">
                {s.id}
              </Button>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col">
              <p className="text-balance">{s.description}</p>
            </CardContent>
            <CardFooter>
              {s.code && <CodeWrapper>{s.code}</CodeWrapper>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
