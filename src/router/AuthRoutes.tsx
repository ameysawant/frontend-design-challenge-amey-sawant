import { lazy } from "react";
import Loadable from "@/components/feedback/Loadable";
import AuthLayout from "../layouts/AuthLayout";
import { AUTH_ROUTES } from "./routes";

const Login = Loadable(lazy(() => import("@/pages/auth/Login")));
const Signup = Loadable(lazy(() => import("@/pages/auth/Signup")));

export const authRoutes = [
  {
    path: AUTH_ROUTES.auth.base,
    element: <AuthLayout />,
    children: [
      { path: AUTH_ROUTES.auth.login, element: <Login /> },
      { path: AUTH_ROUTES.auth.signup, element: <Signup /> },
    ],
  },
];
