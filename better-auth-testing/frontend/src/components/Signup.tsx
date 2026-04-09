import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  return (
    <>
      <section className="rounded-md border border-gray-300 p-6 shadow-md">
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </header>

        <form>
          <div className="mb-4 space-y-2">
            <div>
              <label htmlFor="email" className="text-sm font-medium capitalize">
                full name
              </label>
              <input
                className="block w-full rounded-md border border-gray-300 px-2 py-1 text-lg"
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium capitalize">
                email
              </label>
              <input
                className="block w-full rounded-md border border-gray-300 px-2 py-1 text-lg"
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@mail.com"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium capitalize">
                password
              </label>
              <div className="relative">
                <input
                  className="block w-full rounded-md border border-gray-300 px-2 py-1 text-lg"
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="******"
                />

                <button
                  onClick={() => setViewPassword(!viewPassword)}
                  type="button"
                  className="absolute top-0.5 right-0 p-2 text-base"
                >
                  {viewPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              </div>
            </div>
          </div>

          <button
            className="w-full rounded-md bg-gray-500 py-2 font-semibold text-white transition-colors hover:bg-gray-600"
            type="submit"
          >
            Sign up with email
          </button>
        </form>

        {/* divider */}
        <div className="my-6 flex items-center gap-2">
          <div className="h-0.5 w-full bg-gray-300"></div>
          <p className="shrink-0 text-sm text-gray-500">
            Or continue with Google
          </p>
          <div className="h-0.5 w-full bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-300 py-2 font-semibold text-gray-600 transition-colors hover:bg-gray-400"
        >
          <span>
            <FcGoogle />
          </span>
          Sign up with Google
        </button>
      </section>
    </>
  );
}

export default Signup;
