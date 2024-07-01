import AgentHero from "@/components/agent-detail/AgentHero";
import AgentIntroduce from "@/components/agent-detail/AgentIntroduce";
import Image from "next/image";

import { characterCardsData } from "@/data/characters";
import { Divide } from "lucide-react";

const getCharacterData = (characterName: string) => {
  const characterData = characterCardsData.find((character) => {
    const toName = characterName
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    return character.name === toName;
  });
  return characterData;
};

export default function CharaterPage({
  params,
}: {
  params: { character: string };
}) {
  const characterName = params.character;
  const characterData = getCharacterData(characterName);

  if (!characterData) {return (<div>character not found</div>)}

  return (
    <div className="">
      <AgentHero characterData={characterData} />
      {/* <AgentIntroduce characterData={characterData} /> */}
    </div>
  );
}
