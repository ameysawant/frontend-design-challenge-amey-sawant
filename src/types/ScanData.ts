export interface ScanData {
  id: string;
  name: string;
  type: string;
  status: "Completed" | "Scheduled" | "Failed";
  progress: number;
  vulnerabilities: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  lastScan: string;
}
