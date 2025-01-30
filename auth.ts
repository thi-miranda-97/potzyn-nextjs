import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compareSync } from "bcrypt-ts-edge";
import { authConfig } from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      // Add the required `authorize` function
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        // Find user in database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        // Check if user exists and if the password matches
        if (user && user?.password) {
          const isMatch = await compareSync(
            credentials.password as string,
            user.password
          );

          // If password is correct, return user
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  callbacks: {
    ...authConfig.callback,
    async session({ session, token, user, trigger }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      if (trigger === "update" && user?.name) {
        session.user.name = user.name;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
