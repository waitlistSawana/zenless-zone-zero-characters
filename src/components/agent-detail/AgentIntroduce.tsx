"use client"

import { useI18n } from "../locales/client"

export default function AgentIntroduce({ characterName }: { characterName: string }) {
  const t = useI18n()
  return (
    <div>
      <div>Indtroduce {characterName}</div>
      <p>content of introduce</p>
    </div>
  )
}
