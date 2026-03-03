import { Search, Filter, Columns3, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContainerFluid } from "../flexbox-grid/ContainerFluid";
import { Row } from "../flexbox-grid/Row";
import { Col } from "../flexbox-grid/Col";
import { Paragraph } from "@/components/ui/typography";
import { useState } from "react";
import ReusableModal from "../modal/ReusableModal";
import { Label } from "@/components/ui/label";

const ScanActions = () => {
  const [isNewScanModalOpen, setIsNewScanModalOpen] = useState(false);
  return (
    <ContainerFluid>
      <Row className="items-center justify-between">
        <Col className="mb-4 lg:mb-0 lg:flex-1">
          <div className="relative w-full max-w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
            <Input
              placeholder="Search scans by name or type..."
              className="pl-10 h-11 w-full border-border bg-transparent dark:bg-transparent shadow-none placeholder:text-muted-foreground/40 text-foreground dark:text-white rounded-lg"
            />
          </div>
        </Col>

        <Col lg={"auto"} className="w-full lg:w-auto">
          <div className="flex items-center gap-2 lg:justify-end">
            <Button
              variant="outline"
              className="h-11 gap-2 text-sm font-bold text-heading dark:text-white border-border bg-transparent dark:hover:bg-white/5"
            >
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button
              variant="outline"
              className="h-11 gap-2 text-sm font-bold text-heading dark:text-white border-border bg-transparent px-4 py-4 dark:hover:bg-white/5"
            >
              <Columns3 className="h-4 w-4" />{" "}
              <Paragraph className="hidden sm:inline">Column</Paragraph>
            </Button>
            <Button
              className="h-11 gap-2 text-sm font-bold bg-primary hover:bg-primary/90 text-white rounded-lg px-6 ml-auto"
              onClick={() => setIsNewScanModalOpen(true)}
            >
              <Plus className="h-4 w-4 border-2 border-white rounded-sm p-0.5" />{" "}
              New scan
            </Button>

            <ReusableModal
              isOpen={isNewScanModalOpen}
              onOpenChange={setIsNewScanModalOpen}
              title="Configure New Scan"
              description="Enter the details below to initiate a new security scan."
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="scan-name"
                    className="text-heading dark:text-white"
                  >
                    Scan Name
                  </Label>
                  <Input
                    id="scan-name"
                    placeholder="e.g. Production Web Servers"
                    className="bg-transparent border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="target-url"
                    className="text-heading dark:text-white"
                  >
                    Target URL/IP
                  </Label>
                  <Input
                    id="target-url"
                    placeholder="https://api.example.com"
                    className="bg-transparent border-border"
                  />
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => setIsNewScanModalOpen(false)}
                >
                  Start Security Audit
                </Button>
              </div>
            </ReusableModal>
          </div>
        </Col>
      </Row>
    </ContainerFluid>
  );
};

export default ScanActions;
