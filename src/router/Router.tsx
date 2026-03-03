import { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import LoadingScreen from "@/components/feedback/LoadingScreen";
import { appRoutes } from "./AppRoutes";
import { authRoutes } from "./AuthRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [...appRoutes, ...authRoutes],
  },
]);

export default router;
