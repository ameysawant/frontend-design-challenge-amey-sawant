import React from "react";
import { Outlet } from "react-router-dom";
// import AuthHeader from "../components/auth-header/AuthHeader";
// import AuthFooter from "../components/auth-footer/AuthFooter";

const AuthLayout: React.FC = () => {
  return (
    <>
      {/* <AuthHeader /> */}

      <main className="dvMain">
        <Outlet />
      </main>

      {/* <AuthFooter /> */}
    </>
  );
};

export default AuthLayout;
