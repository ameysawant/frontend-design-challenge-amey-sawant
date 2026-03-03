import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent bg-emerald-50 dark:bg-[#064e3b]/20 text-emerald-600 dark:text-emerald-500 border-emerald-100 dark:border-emerald-500/10",
        warning:
          "border-transparent bg-yellow-50 dark:bg-yellow-900/10 text-yellow-600 dark:text-yellow-500 border-yellow-100 dark:border-yellow-500/10",
        error:
          "border-transparent bg-pink-50 dark:bg-pink-900/10 text-pink-600 dark:text-pink-500 border-pink-100 dark:border-pink-500/10",
        info: "border-transparent bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-500 border-blue-100 dark:border-blue-500/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
