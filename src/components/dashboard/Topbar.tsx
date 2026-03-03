import { Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H5 } from "@/components/ui/typography";
import { useDispatch } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { useAppSelector } from "@/store/store";
import { toggleTheme } from "@/store/slices/theme/themeSlice";
import { useState } from "react";
import ReusableModal from "../modal/Modal";
import { Paragraph } from "@/components/ui/typography";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import type { TopbarProps } from "@/types/TopbarProps";

const Topbar = ({ onMenuClick }: TopbarProps) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useAppSelector((state) => state.themeReducer);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isStopModalOpen, setIsStopModalOpen] = useState(false);
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-sections px-4">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Page Title & Breadcrumbs */}
        <div className="flex items-center gap-4">
          <H5 className="text-xl font-bold text-heading">Scan</H5>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="flex items-center gap-1 text-muted-foreground hover:text-paragraph"
                >
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="font-medium text-muted-foreground hover:text-paragraph"
                >
                  Private Assets
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-bold">
                  New Scan
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="hidden sm:flex items-center gap-3">
        <Button
          variant="outline"
          className="border border-border cursor-pointer h-10 w-10 p-0"
          onClick={() => dispatch(toggleTheme())}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="outline"
          className="h-10 px-6 rounded-lg text-xs font-bold border-border dark:border-white/20 dark:text-white shadow-sm hover:bg-accent hover:text-accent-foreground uppercase tracking-tight"
          onClick={() => setIsExportModalOpen(true)}
        >
          Export Report
        </Button>
        <Button
          variant="destructive"
          className="h-10 px-6 rounded-lg text-xs font-bold bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30 hover:bg-pink-100 dark:hover:bg-pink-900/40 shadow-none uppercase tracking-tight"
          onClick={() => setIsStopModalOpen(true)}
        >
          Stop Scan
        </Button>

        <ReusableModal
          isOpen={isExportModalOpen}
          onOpenChange={setIsExportModalOpen}
          title="Export Report"
          description="Your security report is being prepared for download."
        >
          <div className="flex flex-col gap-4">
            <Paragraph>
              Select the format you would like to export your scan results in.
            </Paragraph>
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => setIsExportModalOpen(false)}
              >
                PDF
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsExportModalOpen(false)}
              >
                CSV
              </Button>
            </div>
          </div>
        </ReusableModal>

        <ReusableModal
          isOpen={isStopModalOpen}
          onOpenChange={setIsStopModalOpen}
          title="Stop Scan"
          description="Are you sure you want to terminate the current progress?"
        >
          <div className="flex flex-col gap-4">
            <Paragraph>
              Stopping the scan will lose all unsaved progress and you will need
              to start from the beginning.
            </Paragraph>
            <div className="flex gap-2">
              <Button
                variant="destructive"
                className="flex-1"
                onClick={() => setIsStopModalOpen(false)}
              >
                Stop Session
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsStopModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </ReusableModal>
      </div>

      {/* Mobile Actions */}
      <div className="flex sm:hidden items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8 text-[10px] px-2 border-border dark:border-white/20 dark:text-white"
          onClick={() => setIsExportModalOpen(true)}
        >
          Export
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="h-8 text-[10px] px-2 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30"
          onClick={() => setIsStopModalOpen(true)}
        >
          Stop
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
