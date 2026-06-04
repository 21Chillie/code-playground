import { create } from "zustand";
import { persist } from "zustand/middleware";
import { countSlice, type CounterState } from "./countSlice";
import { themeSlice, type ThemeState } from "./themeSlice";

// Persist the useBoundStore state
export const useBoundStore = create<CounterState & ThemeState>()(
  persist(
    (...a) => ({
      ...countSlice(...a),
      ...themeSlice(...a),
    }),

    // Store it with key `bound-store`
    // And only persist the `theme` state value and store it in localStorage
    // NOTE: that you can partialize more than 1 state, just add more property
    { name: "bound-store", partialize: (state) => ({ theme: state.theme }) }
  )
);
