"use client";

import { CharacterCardT } from "@/lib/types";
import { useI18n } from "../locales/client";

export default function AgentIntroduce({
  characterData,
}: {
  characterData: CharacterCardT;
}) {
  const t = useI18n();
  return (
    <div>
      <div>Indtroduce {characterData.name}</div>
      <p>content of introduce</p>
    </div>
  );
}
