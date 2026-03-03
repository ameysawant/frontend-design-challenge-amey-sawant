export interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isIncrease?: boolean;
  type: "critical" | "high" | "medium" | "low";
  className?: string;
}
