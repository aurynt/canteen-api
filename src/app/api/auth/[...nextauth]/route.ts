import nextAuth, { Account, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { User } from "@/types";
import { JWT } from "next-auth/jwt";
import { signIn } from "next-auth/react";

const Options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET_KEY,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/api/auth/sign-in", {
          method: "POST",
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = res.json();

        if (res.ok) {
          return user;
        }
        throw new Error();
      },
    }),
  ],
  callbacks: {
    async jwt(
      { token, user, account }: any /*  {
      user: User;
      account: Account;
      token: JWT;
    } */
    ) {
      if (account?.provider === "credentials") {
        (token.name = user.name),
          (token.username = user.username),
          (token.role = user.role);
      }
      console.log(token);

      return token;
    },
  },
};
const handler = nextAuth(Options);

export { handler as GET, handler as POST };
