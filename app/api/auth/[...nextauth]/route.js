import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import User from '@models/user';

import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    // code goes here
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      // Check if the user already exists
      const userExists = await User.findOne({ email: profile.email });
      // if not, create a new user
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.image,
        });
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
