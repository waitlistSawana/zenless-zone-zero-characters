"use client";
import React from "react";
import { BlogCardProps } from "@/lib/types";

export default function BlogCard({
  blogCardData,
}: {
  blogCardData: BlogCardProps;
}) {
  return (
    <article className="flex bg-zinc-50 transition hover:shadow-xl dark:bg-black dark:shadow-zinc-600">
      {/* Time Stamp */}
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime={blogCardData.dateTime}
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase"
        >
          <span>{blogCardData.dateTimeYear}</span>
          <span className="w-px flex-1 bg-zinc-900/10 dark:bg-zinc-50/30"></span>
          <span>{blogCardData.dateTimeMonthDay}</span>
        </time>
      </div>
      {/* Image */}
      <div className="hidden sm:block sm:basis-56">
        <img
          alt={blogCardData.imageAlt}
          src={blogCardData.imageUrl}
          className="aspect-square h-full w-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-background/10 p-4 sm:border-l-transparent sm:p-6">
          <a href={blogCardData.link} className="group">
            <h2 className="text-start font-bold uppercase transition-all group-hover:underline">
              {blogCardData.title}
            </h2>
          </a>
          <p className="mt-2 line-clamp-3 text-start text-sm/relaxed opacity-80">
            {blogCardData.text}
          </p>
        </div>
        {/* Button */}
        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href={blogCardData.link}
            className="block rounded-tl-lg bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-zinc-900 transition hover:bg-yellow-400"
          >
            {blogCardData.button}
          </a>
        </div>
      </div>
    </article>
  );
}
