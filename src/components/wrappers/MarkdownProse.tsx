import { cn } from "@/lib/utils";
import Markdown from "react-markdown";

export default function MarkdownProse({
  markdown,
  className,
}: {
  markdown: string;
  className?: string;
}) {
  return (
    <article className={cn("prose prose-zinc dark:prose-invert mx-auto text-start", className)}>
      <Markdown>{markdown}</Markdown>
    </article>
  );
}
