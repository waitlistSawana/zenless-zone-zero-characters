import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  backgroundClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function SectionWrapper({
  backgroundClassName,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-8 md:py-12 lg:py-20", className, backgroundClassName)}
      {...props}
    >
      {children}
    </section>
  );
}
