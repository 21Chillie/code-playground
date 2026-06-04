import type { StateCreator } from "zustand";
import type { CounterState } from "./countSlice";

export type Theme = "dark" | "light";
const initialState: { theme: Theme } = {
  theme: "dark",
};

export type ThemeState = typeof initialState & {
  setTheme: (theme: Theme) => void;
};

export const themeSlice: StateCreator<ThemeState & CounterState, [], [], ThemeState> = (set) => ({
  ...initialState,
  setTheme: (theme) => set({ theme }),
});
