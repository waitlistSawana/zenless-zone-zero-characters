import { CharacterCardT } from "@/lib/types";
import { PartiesDataT } from "@/lib/types";

const characterBaseLink = "/agent";
const characterImageBaseUrl = "/image/characters";
const characterTypesBaseUrl = "/image/types";

const characterCardsData: CharacterCardT[] = [
  {
    name: "Lucy",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/lucy.png",
    destailLink: characterBaseLink + "/lucy",
    star: "s",
    role: "Support",
    party: "Sons of Calydon",
    type: "none",
  },
  {
    name: "Zhu Yuan",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/zhu_yuan.png",
    destailLink: characterBaseLink + "/zhu-yuan",
    star: "s",
    role: "Attack",
    party: "Criminal Investigation Special Response Team",
    type: "Physical",
  },
  {
    name: "Koleda Belobog",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/koleda_belobog.png",
    destailLink: characterBaseLink + "/koleda-belobog",
    star: "s",
    role: "Stun",
    party: "Belobog Heavy Industries",
    type: "Fire",
  },
  {
    name: "Ellen Joe",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/ellen_joe.png",
    destailLink: characterBaseLink + "/ellen-joe",
    star: "s",
    role: "Attack",
    party: "Victoria Housekeeping Co.",
    type: "Ice",
  },
  {
    name: "Alexandrina",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/alexandrina.png",
    destailLink: characterBaseLink + "/alexandrina",
    star: "s",
    role: "Support",
    party: "Victoria Housekeeping Co.",
    type: "Electric",
  },
  {
    name: "Von Lycaon",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/von_lycaon.png",
    destailLink: characterBaseLink + "/von-lycaon",
    star: "s",
    role: "Ice",
    party: "Victoria Housekeeping Co.",
    type: "",
  },
  {
    name: "Corin Wickes",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/corin_wickes.png",
    destailLink: characterBaseLink + "/corin-wickes",
    star: "a",
    role: "Stun",
    party: "Victoria Housekeeping Co.",
    type: "Physical",
  },
  {
    name: "Nekomiya Mana",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/nekomiya_mana.png",
    destailLink: characterBaseLink + "/nekomiya-mana",
    star: "s",
    role: "Attack",
    party: "Cunning Hares AKA Gentle House",
    type: "Physical",
  },
  {
    name: "Billy Kid",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/billy_kid.png",
    destailLink: characterBaseLink + "/billy-kid",
    star: "a",
    role: "Attack",
    party: "Cunning Hares AKA Gentle House",
    type: "Physical",
  },
  {
    name: "Nicole Demara",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/nicole_demara.png",
    destailLink: characterBaseLink + "/nicole-demara",
    star: "a",
    role: "Support",
    party: "Cunning Hares AKA Gentle House",
    type: "",
  },
  {
    name: "Anby Demara",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/anby_demara.png",
    destailLink: characterBaseLink + "/anby-demara",
    star: "a",
    role: "Stun",
    party: "Cunning Hares AKA Gentle House",
    type: "",
  },
  {
    name: "Piper Wheel",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/piper_wheel.png",
    destailLink: characterBaseLink + "/piper-wheel",
    star: "a",
    role: "",
    party: "Sons of Calydon",
    type: "",
  },
  {
    name: "Lucy",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/lucy.png",
    destailLink: characterBaseLink + "/lucy",
    star: "s",
    role: "",
    party: "Sons of Calydon",
    type: "",
  },
  {
    name: "Hoshimi Miyabi",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/hoshimi_miyabi.png",
    destailLink: characterBaseLink + "/hoshimi-miyabi",
    star: "s",
    role: "",
    party: "Section 6",
    type: "",
  },
  {
    name: "Soukaku",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/soukaku.png",
    destailLink: characterBaseLink + "/soukaku",
    star: "a",
    role: "Support",
    party: "Section 6",
    type: "Ice",
  },
  {
    name: "Grace Howard",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/grace_howard.png",
    destailLink: characterBaseLink + "/grace-howard",
    star: "s",
    role: "Anomaly",
    party: "Belobog Heavy Industries",
    type: "Electric",
  },
  {
    name: "Ben Bigger",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/ben_bigger.png",
    destailLink: characterBaseLink + "/ben-bigger",
    star: "a",
    role: "Defense",
    party: "Belobog Heavy Industries",
    type: "Fire",
  },
  {
    name: "Anton Lvanov",
    introduction:"",
    headshotUrl: characterImageBaseUrl + "/anton_lvanov.png",
    destailLink: characterBaseLink + "/anton-lvanov",
    star: "a",
    role: "Attack",
    party: "Belobog Heavy Industries",
    type: "Electric",
  },
  // {
  //   name: "",
  //   headshotUrl: characterImageBaseUrl + "/.png",
  //   destailLink: characterBaseLink + "/",
  //   star: "",
  //   role: "",
  //   party: "",
  //   type: "",
  // },
];

const partiesData: PartiesDataT[] = [
  {
    name: "Belobog Heavy Industries",
    iconUrl: "/image/parties/belobog_heavy_industries.png",
  },
  {
    name: "Criminal Investigation Special Response Team",
    iconUrl: "/image/parties/criminal_investigation_special_response_team.png",
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
    name: "Victoria Housekeeping Co.",
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
  roles: [
    {
      name: "Attack",
      iconUrl: characterTypesBaseUrl + "/attack.png",
    },
    {
      name: "Stun",
      iconUrl: characterTypesBaseUrl + "/stun.png",
    },
    {
      name: "Anomaly",
      iconUrl: characterTypesBaseUrl + "/anomaly.png",
    },
    {
      name: "Defense",
      iconUrl: characterTypesBaseUrl + "/defense.png",
    },
    {
      name: "Support",
      iconUrl: characterTypesBaseUrl + "/support.png",
    },
  ],
};

export { characterCardsData, partiesData, characterTypesData };
