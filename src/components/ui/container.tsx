import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  from?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  fluid?: boolean;
}

function Container({
  className,
  children,
  from,
  fluid,
  ...props
}: ContainerProps) {
  if (fluid) {
    return (
      <div className="container-fluid" {...props}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn("container-base", from && `from-${from}`, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
