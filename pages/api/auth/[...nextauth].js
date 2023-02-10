import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      return { ...session, user: { id: token.sub, ...session.user } }; // The return type will match the one returned in `useSession()`
    },
  },
};
export default NextAuth(authOptions);
