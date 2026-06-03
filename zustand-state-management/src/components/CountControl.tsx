import { useShallow } from "zustand/shallow";
import { useCountStore } from "../store/useCountStore";

export default function CountControl() {
  const increaseCount = 5;

  const { increment, decrement, reset, incrementBy } = useCountStore(
    useShallow((state) => ({
      increment: state.increment,
      decrement: state.decrement,
      reset: state.reset,
      incrementBy: state.incrementBy,
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
          onClick={() => incrementBy(increaseCount)}
          className="rounded-md bg-emerald-500 px-6 py-2 font-bold text-gray-800">
          + {increaseCount}
        </button>
      </div>
    </section>
  );
}
