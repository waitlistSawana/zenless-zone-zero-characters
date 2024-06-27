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

export type { SectionHeaderProps, LinksProps, FeartureLandProps };
