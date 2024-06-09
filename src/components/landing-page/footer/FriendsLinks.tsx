import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const LinksData = [
  {
    name: "SeeWhatNewAI Directory",
    url: "https://www.seewhatnewai.com/",
  },
];

export default function FriendsLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      {LinksData.map((l, i) => (
        <Link
          key={i}
          className="opacity-60 transition-all hover:opacity-100"
          href={l.url}
          target="_blank"
          title={l.name}
        >
          {l.name}
        </Link>
      ))}
    </div>
  );
}
