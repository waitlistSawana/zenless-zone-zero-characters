import AgentHero from "@/components/agent-detail/AgentHero"

export default function CharaterPage({ params }: { params: { character: string } }) {
  const characterName = params.character

  return (
    <div>
      <AgentHero characterName={characterName} />
    </div>
  )
}