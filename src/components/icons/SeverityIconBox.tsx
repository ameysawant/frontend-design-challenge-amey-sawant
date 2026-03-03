import { cn } from "@/lib/utils";
import type { SeverityIconBoxProps } from "@/types/SeverityIconBoxProps";

const config = {
  critical: {
    color: "text-pink-600 dark:text-white",
    bgColor: "bg-pink-50 dark:bg-pink-600",
  },
  high: {
    color: "text-orange-600 dark:text-white",
    bgColor: "bg-orange-50 dark:bg-orange-500",
  },
  medium: {
    color: "text-yellow-600 dark:text-white",
    bgColor: "bg-yellow-50 dark:bg-yellow-500",
  },
  low: {
    color: "text-blue-600 dark:text-white",
    bgColor: "bg-blue-50 dark:bg-blue-500",
  },
} as const;

const SeverityIconBox = ({
  icon: Icon,
  type,
  className,
}: SeverityIconBoxProps) => {
  const cfg = config[type];
  return (
    <div className={cn("p-1.5 rounded-lg", cfg.bgColor, className)}>
      <Icon className={cn("h-4 w-4", cfg.color)} />
    </div>
  );
};

export default SeverityIconBox;
