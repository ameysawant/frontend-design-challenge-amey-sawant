import { Suspense, type ComponentType } from "react";
import LoadingScreen from "@/components/feedback/LoadingScreen";

const Loadable = (Component: ComponentType) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
