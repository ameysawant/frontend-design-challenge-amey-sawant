import { cn } from "@/lib/utils";

interface NotificationDotProps {
  className?: string;
}

const NotificationDot = ({ className }: NotificationDotProps) => {
  return (
    <div
      className={cn(
        "absolute -bottom-0.5 -left-0.5 size-2 rounded-full bg-orange-500 border-2 border-sidebar dark:border-sidebar shadow-sm",
        className,
      )}
    />
  );
};

export default NotificationDot;
