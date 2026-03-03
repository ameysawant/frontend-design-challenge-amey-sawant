import { useAppSelector } from "@/store/store";
import { useEffect } from "react";

export const useTheme = () => {
  const { isDarkMode } = useAppSelector((state) => state.themeReducer);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode };
};
