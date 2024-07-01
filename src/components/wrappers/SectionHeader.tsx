import { SectionHeaderProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function SectionHeader({
  level = 2,
  heading,
  text,
  links,
  ...props
}: SectionHeaderProps) {
  const HeadingLevel = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className="container mx-auto px-6 text-center" {...props}>
      {heading && (
        <HeadingLevel className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          {heading}
        </HeadingLevel>
      )}
      {text && (
        <div className="mx-auto mt-2 max-w-screen-md text-lg font-light leading-tight opacity-70 sm:text-xl md:text-2xl">
          {text}
        </div>
      )}
      {links?.length ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {links.map((link, index) => (
            <Link href={link.uri} key={index} passHref>
              <a
                className={cn(
                  "rounded-md px-6 py-3 text-lg transition-colors",
                  index === 0
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-black hover:bg-gray-200",
                )}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
