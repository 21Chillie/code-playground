import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import authClient from "@utils/auth-client";
import toast from "react-hot-toast";
import handleGoogleOauth from "~/utils/google-oauth";

function Signup() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: "/success-signup",
    });

    if (error) {
      return toast.error(error.message);
    }

    setName("");
    setEmail("");
    setPassword("");

    toast.success("Signup success");
    toast.success(`Hello, ${data.user.name}`);
  };

  return (
    <>
      <section className="rounded-md border border-gray-300 p-6 shadow-md">
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </header>

        <form onSubmit={handleSignUp}>
          <div className="mb-4 space-y-2">
            <div>
              <label htmlFor="email" className="text-sm font-medium capitalize">
                full name*
              </label>
              <input
                className="block w-full rounded-md border border-gray-300 px-2 py-1 text-lg"
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                min={1}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  required
                  min={8}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
          onClick={() => handleGoogleOauth()}
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
