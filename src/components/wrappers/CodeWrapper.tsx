import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const CodeWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <pre
      className={cn(
        "mt-2 overflow-x-auto w-full rounded-md bg-zinc-900 p-4 text-start dark:bg-zinc-950",
        className,
      )}
    >
      <code className="text-white text-base">{children}</code>
    </pre>
  );
};

export default CodeWrapper;
