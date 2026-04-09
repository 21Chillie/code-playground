import Signup from "~/components/Signup";
import { Activity, useState } from "react";
import Login from "./components/Login";

function App() {
  const [view, setView] = useState<"login" | "signup">("login");
  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-4">
        <nav className="space-x-2 rounded-sm bg-gray-200 p-1">
          <button
            type="button"
            className={`${view === "login" && "bg-gray-300"} rounded-sm px-4 py-2 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-300`}
            onClick={() => setView("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={`${view === "signup" && "bg-gray-300"} rounded-sm px-4 py-2 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-300`}
            onClick={() => setView("signup")}
          >
            Sign Up
          </button>
        </nav>

        <main className="w-full">
          <Activity mode={view === "login" ? "visible" : "hidden"}>
            <Login></Login>
          </Activity>

          <Activity mode={view === "signup" ? "visible" : "hidden"}>
            <Signup></Signup>
          </Activity>
        </main>
      </div>
    </>
  );
}

export default App;
