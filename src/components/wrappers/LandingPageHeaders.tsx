import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Heading2 = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2 className={cn("text-2xl font-bold md:mb-4 md:text-5xl", className)}>
      {children}
    </h2>
  );
};

export { Heading2 };
