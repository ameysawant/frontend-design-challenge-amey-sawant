import {
  LayoutDashboard,
  Briefcase,
  Scan,
  Calendar,
  Bell,
  Settings,
  CircleHelp,
} from "lucide-react";

export const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard", active: true },
  { icon: Briefcase, label: "Projects", id: "projects" },
  { icon: Scan, label: "Scans", id: "scans" },
  { icon: Calendar, label: "Schedule", id: "schedule" },
];

export const secondaryNavItems = [
  { icon: Bell, label: "Notifications", id: "notifications" },
  { icon: Settings, label: "Settings", id: "settings" },
  { icon: CircleHelp, label: "Support", id: "support" },
];
