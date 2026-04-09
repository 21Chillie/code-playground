import Signup from "@components/Signup";
import Loader from "@components/Loader";
import Login from "@components/Login";
import { Activity, useState } from "react";
import { Toaster } from "react-hot-toast";
import authClient from "@utils/auth-client";

function App() {
  const [view, setView] = useState<"login" | "signup">("login");
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-4">
        <main className="grid w-full flex-1 place-items-center">
          <Loader></Loader>
        </main>
      </div>
    );
  }

  if (session) {
    const user = {
      email: session.user.email,
      name: session.user.name,
    };

    return (
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 px-4">
        <main className="flex w-full flex-1 flex-col justify-center gap-3">
          <header>
            <h1 className="text-2xl font-medium">Hello, {user.name}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </header>

          <button
            className="bg-gray-300 px-4 py-2 transition-colors hover:bg-gray-400 w-fit rounded-md font-semibold"
            type="button"
            onClick={() => authClient.signOut()}
          >
            Sign Out
          </button>
        </main>
      </div>
    );
  }

  return (
    <>
      <Toaster></Toaster>
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
