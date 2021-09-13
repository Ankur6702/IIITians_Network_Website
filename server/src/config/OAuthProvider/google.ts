import User, { UserClass } from '../../entity/User';
import passport from "passport";
import { Profile, Strategy } from "passport-google-oauth20";
import mongoose from 'mongoose';

const insertUser = async (provider: string, profile: Profile, done: (error: any, user?: any, info?: any) => void
): Promise<void> => {
  try{
    const email = profile.emails![0].value;
    const user = await User.findOne({ email });
    
      if(user){
          return done(null, user);
      }
  
      const newUser = await User.create({
          email,
          username: profile.displayName || profile.username,
          provider,
          socialId: profile.id,
          confirmed: true
      });
      console.log(provider);
      done(null, newUser);
    }
    catch(e){
      done(e, null);
    }
}


const googlePassportConfig = new Strategy(
  {
    clientID: process.env.CLIENT_ID_GOOGLE as string,
    clientSecret: process.env.CLIENT_SECRET_GOOGLE as string,
    callbackURL: "http://localhost:4000/auth/google/callback",
  },
  async (accessToken, refreshToken, profile , done) => {
    // console.log(accessToken, profile)
    await insertUser(profile.provider, profile, done);
  }
);

passport.serializeUser((user: UserClass, done) => {
  return done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
  if (!mongoose.isValidObjectId(id)) return done(null, null);
  const user = await User.findById(id);
  return done(null, user);
});

passport.use(googlePassportConfig);