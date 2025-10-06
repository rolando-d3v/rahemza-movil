import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000" // Cambia a tu URL de backend
});


export const { signIn, signOut, useSession } = authClient;
