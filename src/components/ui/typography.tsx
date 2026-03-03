import { cn } from "@/lib/utils";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface H5Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface H6Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function H1({ children, className, ...props }: H1Props) {
  return (
    <h1 className={cn("text-4xl font-light lg:text-5xl", className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2 className={cn("text-4xl font-light lg:text-5xl", className)} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: H3Props) {
  return (
    <h3 className={cn("text-3xl font-light", className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: H4Props) {
  return (
    <h4 className={cn("text-2xl font-semibold", className)} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, className, ...props }: H5Props) {
  return (
    <h5 className={cn("text-xl font-bold", className)} {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, className, ...props }: H6Props) {
  return (
    <h6 className={cn("text-sm font-semibold", className)} {...props}>
      {children}
    </h6>
  );
}

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn("text-sm", className)} {...props}>
      {children}
    </p>
  );
}
