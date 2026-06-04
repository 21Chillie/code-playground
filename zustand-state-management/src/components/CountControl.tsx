import { useShallow } from "zustand/shallow";
import { useBoundStore } from "../store/useBoundStore";

export default function CountControl() {
  const { increment, decrement, reset, incrementBy } = useBoundStore(
    useShallow((s) => ({
      increment: s.increment,
      decrement: s.decrement,
      reset: s.reset,
      incrementBy: s.incrementBy,
    }))
  );

  return (
    <section className="mx-auto w-full max-w-md rounded-lg bg-gray-600 p-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={decrement}
          className="rounded-md bg-emerald-500 px-6 py-2 font-bold text-gray-800">
          - 1
        </button>

        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-emerald-500 px-6 py-2 font-bold text-gray-800">
          reset
        </button>

        <button
          type="button"
          onClick={increment}
          className="rounded-md bg-emerald-500 px-6 py-2 font-bold text-gray-800">
          + 1
        </button>

        <button
          type="button"
          onClick={() => incrementBy(5)}
          className="rounded-md bg-emerald-500 px-6 py-2 font-bold text-gray-800">
          + 5
        </button>
      </div>
    </section>
  );
}
