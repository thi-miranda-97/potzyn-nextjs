import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
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

        const { email, password } = credentials;

        // Example: Replace this with your own user authentication logic
        const user = await fakeLogin(email, password);

        if (user) {
          // Return the user object if authentication is successful
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

// Example authentication function (replace with your logic)
async function fakeLogin(email: string, password: string) {
  // Mock database of users
  const users = [
    {
      id: "1",
      email: "user@example.com",
      password: "password123",
      name: "Test User",
    },
  ];

  return (
    users.find((user) => user.email === email && user.password === password) ||
    null
  );
}
