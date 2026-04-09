import authClient from "./auth-client";

async function handleGoogleOauth() {
  const origin = window.location.origin;

  await authClient.signIn.social({
    provider: "google",
    callbackURL: `${origin}/success-auth-google`,
    errorCallbackURL: `${origin}/error-auth-google`,
  });
}

export default handleGoogleOauth;
