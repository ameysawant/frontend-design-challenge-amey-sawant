import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { StatusBadgeProps } from "@/types/StatusBadgeProps";

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const variantMap = {
    Completed: "success",
    Scheduled: "info",
    Failed: "error",
  } as const;

  return (
    <Badge
      variant={variantMap[status]}
      className={cn(
        "px-3 py-1.5 rounded-md text-[10px] font-bold shadow-none",
        className,
      )}
    >
      {status}
    </Badge>
  );
};

export default StatusBadge;
