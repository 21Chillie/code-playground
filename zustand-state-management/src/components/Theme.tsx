import { useThemeStore } from "../store/useThemeStore";

export default function Theme() {
  const theme = useThemeStore().theme;

  return (
    <section className="rounded-lg bg-gray-600 p-6">
      <h3 className="text-2xl text-gray-50 font-bold">
        Theme: <span className="capitalize">{theme}</span>
      </h3>
    </section>
  );
}
