import { cn } from "@/lib/utils";

const SeverityBadge = ({ count, color }: { count: number; color: string }) => {
  return (
    <div
      className={cn(
        "min-w-[24px] h-6 flex items-center justify-center rounded px-1 text-[10px] font-bold text-white",
        color,
      )}
    >
      {count}
    </div>
  );
};

export default SeverityBadge;
