import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "dark" | "light";
const initialState: { theme: Theme } = {
  theme: "dark",
};

type ThemeState = typeof initialState & {
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeState>()(
  // Persis middleware same as using localStorage
  persist(
    (set) => ({
      ...initialState,
      setTheme: (theme) => set({ theme }),
    }),
    { name: "theme" } // localStorage key
  )
);
