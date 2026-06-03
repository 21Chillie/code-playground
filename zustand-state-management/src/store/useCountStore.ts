import { create } from "zustand";

const initialState = {
  count: 0,
};

type CounterState = typeof initialState & {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (by: number) => void;
};

export const useCountStore = create<CounterState>()((set) => ({
  ...initialState,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: Math.max(0, s.count - 1) })),
  reset: () => set(initialState),
  incrementBy: (by) => set((s) => ({ count: s.count + by })),
}));
