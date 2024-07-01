"use client";

import { ReactNode } from "react";

export default function HeadshotCardWrapper({
  children,
  star,
}: {
  children: ReactNode;
  star: string;
}) {
  return (
    <button className="group/button relative overflow-hidden rounded-md bg-transparent px-0.5 py-2 text-xs font-medium text-amber-500 transition-all duration-150 hover:border-amber-500 active:scale-95">
      <span
        className={`absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t ${star === "s" ? "from-amber-600 to-amber-500" : "from-purple-600 to-purple-500"} transition-all duration-500 group-hover/button:h-full`}
      />
      <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
        {children}
      </span>
    </button>
  );
}
