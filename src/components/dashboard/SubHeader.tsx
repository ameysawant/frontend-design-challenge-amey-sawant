import { RefreshCcw } from "lucide-react";
import { Container } from "../flexbox-grid/Container";
import { Row } from "../flexbox-grid/Row";
import { Col } from "../flexbox-grid/Col";
import { H6, Paragraph } from "../ui/typography";
import { Separator } from "@/components/ui/separator";

import { subHeaderItems } from "@/dummy/subHeaderData";

const SubHeader = () => {
  return (
    <>
      <Container fluid className="">
        <Row className="xxl:justify-between">
          <Col col={10}>
            <Row className="">
              {subHeaderItems.map((item) => (
                <Col
                  col={6}
                  sm={4}
                  md={4}
                  xl={2}
                  xxl={"auto"}
                  key={item.id}
                  className="mb-3 relative"
                >
                  <div className="">
                    <H6 className="text-xs font-medium text-muted-foreground uppercase tracking-wider xxl:inline-block">
                      {item.label}:
                    </H6>
                    <Paragraph className="text-sm font-bold text-heading dark:text-white xxl:inline-block">
                      {item.value}
                    </Paragraph>
                  </div>
                  {item.id < subHeaderItems.length && (
                    <Separator
                      orientation="vertical"
                      className="absolute -right-px top-1/2 -translate-y-1/2 h-3 bg-border dark:bg-white/10 hidden xxl:block"
                    />
                  )}
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            col={12}
            md={2}
            lg={"auto"}
            className="text-xs font-bold text-primary"
          >
            <div className="flex items-center xxl:mt-1">
              <RefreshCcw className="h-4 w-3 mr-1" />
              <span>10 mins ago</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubHeader;
