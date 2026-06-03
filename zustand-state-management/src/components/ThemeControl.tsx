import { useThemeStore, type Theme } from "../store/useThemeStore";

export default function ThemeControl() {
  const themeOption = ["dark", "light"];
  const setTheme = useThemeStore((s) => s.setTheme);
  return (
    <section className="rounded-lg bg-gray-600 p-6">
      <select
        onChange={(e) => setTheme(e.target.value as Theme)}
        className="w-full rounded-md bg-gray-300 px-3 py-2"
        name="theme"
        id="theme">
        {themeOption.map((t) => {
          return (
            <option
              key={t}
              value={t}
              className="capitalize">
              {t}
            </option>
          );
        })}
      </select>
    </section>
  );
}
