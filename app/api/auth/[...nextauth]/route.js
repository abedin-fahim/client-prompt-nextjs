import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import connectToDB from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      session: async (session, user) => {
        const sessionUser = await User.findOne({ email: session.user.email });
        return {
          ...session,
          user: { ...session.user, id: sessionUser._id.toString() },
        };
      };
    },
    async signIn({ account, email, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log('Error checking if user exists: ', error.message);
        return true;
      }
    },
  },
});

export { handler as GET, handler as POST };
