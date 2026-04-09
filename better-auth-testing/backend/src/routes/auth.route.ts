import { Hono } from "hono";
import { auth } from "@utils/auth";

// Base route: /api/auth

const authRoute = new Hono();

authRoute.on(["POST", "GET"], "/*", (c) => {
  return auth.handler(c.req.raw);
});

export default authRoute;
