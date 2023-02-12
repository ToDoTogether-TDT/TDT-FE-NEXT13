import axios from 'axios'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  // session: { strategy: 'jwt', jwt: true },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        const userData = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
          {
            name: profile.name,
            email: profile.email,
            picture: profile.picture,
          }
        )
        token.authorization = userData.headers.authorization
      }

      return token
    },

    async session({ session, token }) {
      if (token) {
        session.authorization = token.authorization
      }

      return session
    },
  },
}

export default NextAuth(authOptions)
