import type { StateCreator } from "zustand";
import type { ThemeState } from "./themeSlice";

const initialState = {
  count: 0,
};

export type CounterState = typeof initialState & {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (by: number) => void;
};

export const countSlice: StateCreator<CounterState & ThemeState, [], [], CounterState> = (set) => ({
  ...initialState,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: Math.max(0, s.count - 1) })),
  reset: () => set(initialState),
  incrementBy: (by) => set((s) => ({ count: s.count + by })),
});
