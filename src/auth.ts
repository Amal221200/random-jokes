import NextAuth, { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
  providers: [GoogleProvider],
  secret: [process.env.AUTH_SECRET!, process.env.AUTH_SECRET_1!],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;

      if (!pathname.startsWith("/api/auth")) return !!auth;
      return true;
    },

  },
} satisfies NextAuthConfig

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig)

