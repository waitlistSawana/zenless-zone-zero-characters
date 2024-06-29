interface SectionHeaderProps {
  level?: number;
  heading: string;
  text: string;
  links?: LinksProps["links"];
}

interface LinksProps {
  links: {
    title: string;
    uri: string;
    options?: [];
  }[];
}

interface FeartureLandProps {
  heading: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  imagePositon: string;
  links: string;
  backgroundClassName?: string;
}

interface BlogCardProps {
  dateTime: string;
  dateTimeYear: string;
  dateTimeMonthDay: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  text: string;
  button: string;
  link: string;
}

interface BreadcrumbTwoProps {
  first: {
    name: string;
    link: string;
  };
  second: {
    name: string;
    link: string;
  };
}

// data
type CharacterCardT = {
  name: string;
  headshotUrl: string;
  destailLink: string;
  star: string;
  role: string;
  party: string;
  type: string;
};
type PartiesDataT = {
  name: string;
  iconUrl: string;
};
type characterTypesDataT = {
  stars: { name: string; iconUrl: string }[];
  types: {
    name: string;
    iconUrl: string;
  }[];
  attack: {
    name: string;
    iconUrl: string;
  }[];
};

// Filter
type FilterCategories = "stars" | "types" | "attacks" | "parties";
interface ActiveFiltersT {
  stars: string[];
  types: string[];
  attacks: string[];
  parties: string[];
}

export type {
  SectionHeaderProps,
  LinksProps,
  FeartureLandProps,
  BlogCardProps,
  BreadcrumbTwoProps,
  // data
  CharacterCardT,
  PartiesDataT,
  characterTypesDataT,
  // Filter
  FilterCategories,
  ActiveFiltersT,
};
