import type { LucideIcon } from "lucide-react";

export interface SeverityIconBoxProps {
  icon: LucideIcon;
  type: "critical" | "high" | "medium" | "low";
  className?: string;
}
