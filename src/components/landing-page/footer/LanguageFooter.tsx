import Link from "next/link";

const languageLinks = [
  {
    label: "EN English",
    innerUrl: "/en",
  },
];

export default function LanguageFooter() {
  return (
    <div className="my-1 flex flex-wrap items-center justify-center">
      {languageLinks.map((l, i) => (
        <Link
          key={i}
          href={l.innerUrl}
          className="opacity-60 transition-all hover:opacity-100"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
