import { cn } from "@/lib/utils";
import { H2 } from "@/components/ui/typography";
import SeverityIconBox from "@/components/icons/SeverityIconBox";
import TrendBadge from "@/components/icons/TrendBadge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import type { StatCardProps } from "@/types/StatCardProps";
import { Ban, ShieldAlert, CircleAlert, CircleSlash } from "lucide-react";

const config = {
  critical: Ban,
  high: ShieldAlert,
  medium: CircleAlert,
  low: CircleSlash,
} as const;

const StatCard = ({
  title,
  value,
  change,
  isIncrease = true,
  type,
  className,
}: StatCardProps) => {
  const Icon = config[type];

  return (
    <Card
      className={cn("transition-all overflow-hidden border-border", className)}
    >
      <CardHeader className="flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold text-muted-foreground">
          {title}
        </CardTitle>
        <CardAction className="col-start-auto row-span-1 row-start-auto">
          <SeverityIconBox icon={Icon} type={type} />
        </CardAction>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-baseline gap-4">
          <H2 className="text-4xl font-extrabold text-heading dark:text-white tracking-tight">
            {value}
          </H2>
          <TrendBadge change={change} isIncrease={isIncrease} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
