import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import SubHeader from "@/components/dashboard/SubHeader";
import StatCard from "@/components/dashboard/StatCard";
import ScanActions from "@/components/dashboard/ScanActions";
import ScanTable from "@/components/dashboard/ScanTable";
import { ContainerFluid } from "@/components/flexbox-grid/ContainerFluid";
import { Row } from "@/components/flexbox-grid/Row";
import { Col } from "@/components/flexbox-grid/Col";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="bg-sections py-4 md:pb-0 xxl:pb-1">
          <SubHeader />
        </div>

        <div className="flex-1 overflow-y-auto w-full">
          <ContainerFluid className="mb-4">
            {/* Stats Row */}
            <Row className="mb-4 bg-sections" gutter={4}>
              <Col>
                <div className="bg-sections">
                  <Row>
                    <Col col={12} sm={6} lg={6} xl={3} className="mb-4">
                      <StatCard
                        title="Critical Severity"
                        value="86"
                        change="+2% increase than yesterday"
                        type="critical"
                        className="bg-card rounded-2xl shadow-sm border border-border"
                      />
                    </Col>
                    <Col col={12} sm={6} lg={6} xl={3} className="mb-4">
                      <StatCard
                        title="High Severity"
                        value="16"
                        change="+0.9% increase than yesterday"
                        type="high"
                        className="bg-card rounded-2xl shadow-sm border border-border"
                      />
                    </Col>
                    <Col col={12} sm={6} lg={6} xl={3} className="mb-4">
                      <StatCard
                        title="Medium Severity"
                        value="26"
                        change="-0.9% decrease than yesterday"
                        type="medium"
                        isIncrease={false}
                        className="bg-card rounded-2xl shadow-sm border border-border"
                      />
                    </Col>
                    <Col col={12} sm={6} lg={6} xl={3} className="mb-4">
                      <StatCard
                        title="Low Severity"
                        value="16"
                        change="+0.9% increase than yesterday"
                        type="low"
                        className="bg-card rounded-2xl shadow-sm border border-border"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            {/* Table Section */}
            <Card className="rounded-3xl shadow-xl border-0 bg-sections overflow-hidden">
              <ScanActions />
              <ScanTable />
            </Card>
          </ContainerFluid>
        </div>
      </main>
    </div>
  );
};

export default Index;
