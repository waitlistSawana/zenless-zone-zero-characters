import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  backgroundClassName?: string;
  children?: React.ReactNode;
}

export function SectionWrapper({
  backgroundClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-8 md:py-12 lg:py-20", backgroundClassName)}
      {...props}
    >
      {children}
    </section>
  );
}
