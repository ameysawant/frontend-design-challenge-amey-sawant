import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { navItems, secondaryNavItems } from "@/dummy/navigation";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/typography";
import { Logo, NotificationDot } from "../icons";
import { Separator } from "@/components/ui/separator";

import type { SidebarProps } from "@/types/SidebarProps";

import { userData } from "@/dummy/userData";

const Sidebar = ({ className, isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        {/* Logo Section */}
        <div className="flex h-20 items-center px-6 gap-2">
          <Link to="/" className="flex items-center">
            <Logo option={2} />
          </Link>
          <Button
            className="ml-auto lg:hidden"
            onClick={onClose}
            variant="outline"
            size="icon"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-4">
          {navItems.map((item) => (
            <Button
              key={item.id}
              className={cn(
                "flex items-center justify-start w-full gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-full",
                item.active
                  ? "bg-primary/15 dark:bg-emerald-900/20 text-primary dark:text-emerald-400 font-bold"
                  : "text-paragraph dark:text-gray-400 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
              variant="ghost"
            >
              <div className="relative">
                <item.icon
                  className={cn(
                    "h-5 w-5",
                    item.active
                      ? "text-primary dark:text-emerald-400"
                      : "text-gray-400",
                  )}
                />
                {item.id === "scans" && <NotificationDot />}
              </div>
              {item.label}
            </Button>
          ))}

          <Separator className="my-4 border-t border-border" />

          <div className="pb-4">
            {secondaryNavItems.map((item) => (
              <Button
                key={item.id}
                className={cn(
                  "flex items-center justify-start w-full gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-full text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                variant="ghost"
              >
                <div className="relative">
                  <item.icon className="h-5 w-5 text-gray-400" />
                  {item.id === "notifications" && <NotificationDot />}
                </div>
                {item.label}
              </Button>
            ))}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="mt-auto border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 p-2 rounded-xl transition-colors cursor-pointer group">
            <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden border border-white/10">
              <img
                src={userData.avatar}
                alt="User"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden text-left">
              <Paragraph className="text-xs font-semibold text-sidebar-foreground truncate">
                {userData.email}
              </Paragraph>
              <Paragraph className="text-xs font-bold text-muted-foreground truncate uppercase tracking-tight">
                {userData.role}
              </Paragraph>
            </div>
            <ChevronRight className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
