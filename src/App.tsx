import { RouterProvider } from "react-router-dom";
import router from "@/router/Router";
import { useTheme } from "@/hooks/common/useTheme";

const App = () => {
  useTheme();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
