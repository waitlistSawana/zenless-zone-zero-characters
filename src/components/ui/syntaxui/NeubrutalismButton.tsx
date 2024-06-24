import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function NeubrutalismButton({
  children,
  className,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button
      className={cn(
        "group/button mb-6 rounded-xl bg-[#1353fe] text-zinc-50 md:mb-10 lg:mb-12",
        className,
      )}
    >
      <span
        className={
          "text-md block -translate-x-1.5 -translate-y-1.5 rounded-xl border-2 border-zinc-950 bg-zinc-950 px-8 py-4 font-semibold tracking-tight transition-all group-hover/button:-translate-y-3 group-active/button:translate-x-0 group-active/button:translate-y-0"
        }
      >
        {children}
      </span>
    </button>
  );
}
