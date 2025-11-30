
import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import User from "@/models/User"


export const authoptions = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == 'github') {
                //connect to the database
                const client = await mongoose.connect(process.env.MONGO_URI)
                // check if user already exists
               
            }
        }
    }

})
export { authoptions as GET, authoptions as POST }
