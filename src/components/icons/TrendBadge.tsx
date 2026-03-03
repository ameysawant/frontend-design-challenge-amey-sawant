import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { TrendBadgeProps } from "@/types/TrendBadgeProps";

const TrendBadge = ({
  change,
  isIncrease = true,
  className,
}: TrendBadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider",
        isIncrease ? "text-pink-600" : "text-emerald-600",
        className,
      )}
    >
      {isIncrease ? (
        <TrendingUp className="h-3 w-3" />
      ) : (
        <TrendingDown className="h-3 w-3" />
      )}
      {change}
    </div>
  );
};

export default TrendBadge;
