import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from 'next-auth/providers/facebook'
import axios from "axios"



export const authOptions = NextAuth({
  providers: [
                                                                                                      
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
});

export {authOptions as GET, authOptions as POST}

export const FetchFromTMDB = async (url) => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.TMDB_KEY},
  };
  const response = await axios.get(url,options);

  if(response.status !== 200){
    throw new Error(response.data.message)
  }     
  return response.data
}