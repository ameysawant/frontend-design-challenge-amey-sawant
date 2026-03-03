import { lazy } from "react";
import Loadable from "@/components/feedback/Loadable";
import MainLayout from "@/layouts/Mainlayout";
import { APP_ROUTES } from "@/router/routes";

const Home = Loadable(lazy(() => import("@/pages/home/Index")));

export const appRoutes = [
  {
    path: APP_ROUTES.app.base,
    element: <MainLayout />,
    children: [{ path: APP_ROUTES.app.home, element: <Home /> }],
  },
];
