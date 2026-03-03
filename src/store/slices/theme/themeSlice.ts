import { createSlice } from "@reduxjs/toolkit";

const THEME_KEY = "theme_mode";

interface ThemeProps {
  isDarkMode: boolean;
}

const initialState: ThemeProps = {
  isDarkMode: localStorage.getItem(THEME_KEY) === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeProps) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem(THEME_KEY, state.isDarkMode ? "dark" : "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
