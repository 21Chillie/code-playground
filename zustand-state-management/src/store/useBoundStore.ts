import { create } from "zustand";
import { countSlice, type CounterState } from "./countSlice";
import { themeSlice, type ThemeState } from "./themeSlice";

export const useBoundStore = create<CounterState & ThemeState>()((...a) => ({
  ...countSlice(...a),
  ...themeSlice(...a),
}));
