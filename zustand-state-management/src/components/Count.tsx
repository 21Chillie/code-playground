import { useBoundStore } from "../store/useBoundStore";

export default function Count() {
  const count = useBoundStore((s) => s.count);

  return (
    <section className="mx-auto w-full max-w-md rounded-lg bg-gray-600 p-6">
      <div className="space-y-4">
        <p className="text-gray-50">Count:</p>
        <h1 className="text-center text-4xl font-bold text-gray-100">
          {count}
        </h1>
      </div>
    </section>
  );
}
