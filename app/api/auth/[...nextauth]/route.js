import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth.default({
  providers: [
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    FacebookProvider.default({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider.default({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      return token;
    },
}

})

export {handler as GET, handler as POST}