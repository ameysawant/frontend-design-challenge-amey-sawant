import { Container } from "@/components/flexbox-grid/Container";
import { Row } from "@/components/flexbox-grid/Row";
import { Col } from "@/components/flexbox-grid/Col";
import AuthHero from "@/components/auth/AuthHero";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden homepage-bg">
      <Container xxxl>
        <Row gutter={0} className="min-h-screen items-center">
          <Col col={12} md={6} className="hidden md:flex">
            <AuthHero />
          </Col>
          <Col col={12} md={6} className="flex justify-center md:justify-end">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
