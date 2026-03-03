import { Suspense, type ComponentType } from "react";
import LoadingScreen from "@/components/feedback/LoadingScreen";

const Loadable =
  (Component: ComponentType) => (props: { [key: string]: unknown }) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...(props as { [key: string]: unknown })} />
    </Suspense>
  );

export default Loadable;
