import Count from "./components/Count";
import CountControl from "./components/CountControl";
import Theme from "./components/Theme";
import ThemeControl from "./components/ThemeControl";

function App() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col gap-6 bg-gray-800 px-6 py-12">
        <Count />
        <CountControl />

        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-6">
          <ThemeControl />
          <Theme />
        </div>
      </main>
    </>
  );
}

export default App;
