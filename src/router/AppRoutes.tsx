import { lazy } from "react";
import Loadable from "@/components/feedback/Loadable";
import MainLayout from "@/layouts/Mainlayout";
import { APP_ROUTES } from "@/router/routes";

const Home = Loadable(lazy(() => import("@/pages/home/Index")));
const Dashboard = Loadable(lazy(() => import("@/pages/dashboard/Index")));

export const appRoutes = [
  {
    path: APP_ROUTES.app.base,
    element: <MainLayout />,
    children: [
      { path: APP_ROUTES.app.home, element: <Home /> },
      { path: APP_ROUTES.app.dashboard, element: <Dashboard /> },
    ],
  },
];
