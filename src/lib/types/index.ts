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

export type {
  SectionHeaderProps,
  LinksProps,
  FeartureLandProps,
  BlogCardProps,
  BreadcrumbTwoProps,
};
