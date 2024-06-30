import AgentHero from "@/components/agent-detail/AgentHero";
import AgentIntroduce from "@/components/agent-detail/AgentIntroduce";
import Image from "next/image";

export default function CharaterPage({
  params,
}: {
  params: { character: string };
}) {
  const characterName = params.character;

  return (
    <div className="">
      <AgentHero characterName={characterName} />
      <AgentIntroduce characterName={characterName} />
    </div>
  );
}
