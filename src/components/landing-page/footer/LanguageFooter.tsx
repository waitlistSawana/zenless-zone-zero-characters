import Link from "next/link";

import { LOCALES } from "@/components/locales/locale-middleware";

const languageLinks = LOCALES.map((local, index) => ({
  label: local.toUpperCase(),
  innerUrl: `/${local}`,
}));
export default function LanguageFooter() {
  return (
    <div className="my-1 flex flex-wrap items-center justify-center gap-1">
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
