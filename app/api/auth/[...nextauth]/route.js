import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import {connectToDB} from '@utils/database';
import User from '@models/user';
import { NextResponse } from 'next/server';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            

        })
    ],
    pages: {
        signIn: 'localhost:3000/signin',  // Your custom sign-in page
        newUser: 'localhost:3000/' // Redirect here after successful sign-in
      },
    

        async session({session}){
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
    
            return session;
            
        },

        async signIn({profile}){
            try{
                //serverless -> lambda -> dynamodb
                await connectToDB();
                //check if a user already exists
                const userExists = await User.findOne({
                    email: profile.email
                });
    
                //if not,create a new user
                if(!userExists){
                    await userExists.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile,picture
    
                    })
                }
    
    
                return true;
    
            }catch(error){
                console.log(error)
             }        
    }
})


export {handler as GET, handler as POST}