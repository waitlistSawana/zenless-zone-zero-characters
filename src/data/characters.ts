import { CharacterCardT } from "@/lib/types";
import { PartiesDataT } from "@/lib/types";

const characterCardsData: CharacterCardT[] = [
  {
    name: "Lucy",
    headshotUrl: "/image/characters/lucy.png",
    destailLink: "#",
    star: "5",
    role: "none",
    party: "none",
    type: "none",
  },
  {
    name: "Zhu Yuan",
    headshotUrl: "/image/characters/zhu_yuan.png",
    destailLink: "#",
    star: "5",
    role: "none",
    party: "none",
    type: "none",
  },
  {
    name: "Koleda Belobog",
    headshotUrl: "/image/characters/koleda_belobog.png",
    destailLink: "#",
    star: "5",
    role: "none",
    party: "none",
    type: "none",
  },
];

const partiesData: PartiesDataT[] = [
  {
    name: "Belobog Heavy Industries",
    iconUrl: "/image/parties/belobog_heavy_industries.png",
  },
  {
    name: "Criminal Investigation Special Response Team",
    iconUrl:
      "/image/parties/criminal_investigation_special_response_team.png",
  },
  {
    name: "Cunning Hares AKA Gentle House",
    iconUrl: "/image/parties/cunning_hares_aka_gentle_house.png",
  },
  {
    name: "Obol Squad",
    iconUrl: "/image/parties/obol_squad.png",
  },
  {
    name: "Section 6",
    iconUrl: "/image/parties/section6.png",
  },
  {
    name: "Sons Of Calydon",
    iconUrl: "/image/parties/sons_of_calydon.png",
  },
  {
    name: "Victoria Housekeeping C.O.",
    iconUrl: "/image/parties/victoria_housekeeping_co.png",
  },
];

const characterTypesData = {
  stars: [
    {
      name: "S",
      iconUrl: "/image/types/s.png",
    },
    {
      name: "A",
      iconUrl: "/image/types/a.png",
    },
  ],
  types: [
    {
      name: "Ice",
      iconUrl: "/image/types/ice.png",
    },
    {
      name: "Ether",
      iconUrl: "/image/types/ether.png",
    },
    {
      name: "Fire",
      iconUrl: "/image/types/fire.png",
    },
    {
      name: "Electric",
      iconUrl: "/image/types/electric.png",
    },
    {
      name: "Physical",
      iconUrl: "/image/types/physical.png",
    },
  ],
  attack: [
    {
      name: "Pierce",
      iconUrl: "/image/types/pierce.png",
    },
    {
      name: "Slash",
      iconUrl: "/image/types/slash.png",
    },
    {
      name: "Strike",
      iconUrl: "/image/types/strike.png",
    },
  ],
};

export { characterCardsData, partiesData, characterTypesData };
