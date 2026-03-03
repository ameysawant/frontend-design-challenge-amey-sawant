import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContainerFluid({ children, className = "" }: ContainerProps) {
  return <div className={`w-full px-4 ${className}`}>{children}</div>;
}
