export const statCardsData = [
  {
    title: "Critical Severity",
    value: "86",
    change: "+2% increase than yesterday",
    type: "critical" as const,
  },
  {
    title: "High Severity",
    value: "16",
    change: "+0.9% increase than yesterday",
    type: "high" as const,
  },
  {
    title: "Medium Severity",
    value: "26",
    change: "-0.9% decrease than yesterday",
    type: "medium" as const,
    isIncrease: false,
  },
  {
    title: "Low Severity",
    value: "16",
    change: "+0.9% increase than yesterday",
    type: "low" as const,
  },
];
