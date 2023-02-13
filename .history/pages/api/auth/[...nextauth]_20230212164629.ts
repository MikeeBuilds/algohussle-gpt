import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLR_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)