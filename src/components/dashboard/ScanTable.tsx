import { cn } from "@/lib/utils";
import SeverityBadge from "@/components/icons/SeverityBadge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/typography";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/icons/StatusBadge";
import { Progress } from "@/components/ui/progress";

import { scanDummyData } from "@/dummy/scanData";

const ScanTable = () => {
  return (
    <div className="w-full px-6">
      <Table className="min-w-[1000px]">
        <TableHeader>
          <TableRow className="border-b border-border hover:bg-transparent">
            <TableHead className="pb-4 h-auto text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Scan Name
            </TableHead>
            <TableHead className="pb-4 h-auto text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Type
            </TableHead>
            <TableHead className="pb-4 h-auto text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Status
            </TableHead>
            <TableHead className="pb-4 h-auto text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Progress
            </TableHead>
            <TableHead className="pb-4 h-auto text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Vulnerability
            </TableHead>
            <TableHead className="pb-4 h-auto text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-right">
              Last Scan
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-border">
          {new Array(8)
            .fill(scanDummyData[0])
            .concat(scanDummyData.slice(1))
            .map((scan, idx) => (
              <TableRow
                key={idx}
                className="group hover:bg-accent/5 transition-colors border-b border-border"
              >
                <TableCell className="py-5 font-bold text-heading dark:text-white text-sm">
                  {idx === 8
                    ? "IoT Devices"
                    : idx === 9
                      ? "Temp Data"
                      : scan.name}
                </TableCell>
                <TableCell className="py-5 text-muted-foreground dark:text-white text-sm font-medium">
                  {idx >= 8 ? "Blackbox" : scan.type}
                </TableCell>
                <TableCell className="py-5">
                  <StatusBadge
                    status={
                      idx >= 8 ? "Failed" : idx >= 6 ? "Scheduled" : "Completed"
                    }
                  />
                </TableCell>
                <TableCell className="py-5 min-w-[150px]">
                  <div className="flex items-center gap-3">
                    <Progress
                      value={idx >= 8 ? 10 : 100}
                      className={cn(
                        "h-1.5 flex-1 bg-muted",
                        idx >= 8
                          ? "[&>div]:bg-pink-500"
                          : "[&>div]:bg-teal-500",
                      )}
                    />
                    <Paragraph className="text-xs font-bold text-heading dark:text-white">
                      {idx >= 8 ? "10%" : "100%"}
                    </Paragraph>
                  </div>
                </TableCell>
                <TableCell className="py-5">
                  <div className="flex gap-1.5">
                    <SeverityBadge
                      count={idx >= 8 ? 2 : 5}
                      color="bg-pink-600"
                    />
                    <SeverityBadge
                      count={idx >= 8 ? 4 : 12}
                      color="bg-orange-600"
                    />
                    {idx < 6 && (
                      <SeverityBadge count={23} color="bg-yellow-500" />
                    )}
                    {idx < 6 && (
                      <SeverityBadge count={18} color="bg-emerald-600" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="py-5 text-right text-xs font-bold text-muted-foreground">
                  {idx >= 8 ? "3d ago" : "4d ago"}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
        <Paragraph className="text-xs font-bold text-muted-foreground/60 dark:text-white/40 uppercase tracking-widest">
          Showing 15 of 100 Scans
        </Paragraph>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="size-8 rounded-md border-border dark:border-white/10 dark:text-white/60 hover:dark:bg-emerald-950/20 hover:dark:text-emerald-400"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8 rounded-md border-border dark:border-white/10 dark:text-white/60 hover:dark:bg-emerald-950/20 hover:dark:text-emerald-400"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanTable;
