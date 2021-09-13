import mongoose from "mongoose";
import passport from "passport"
import { Profile, Strategy } from "passport-github";
import User, { UserClass } from "../../entity/User";

const insertUser = async (provider: string, profile: Profile, done: (error: any, user?: any, info?: any) => void
): Promise<void> => {
  try{
      const email = (profile._json as any).email;
    const user = await User.findOne({ email });
    
      if(user){
          return done(null, user);
      }
  
      const newUser = await User.create({
          email,
          username: profile.displayName || profile.username,
          profileId: profile.profileUrl,
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


const passportGithubConfig = new Strategy({
    clientID: process.env.CLIENT_ID_GITHUB as string,
    clientSecret: process.env.CLIENT_SECRET_GITHUB as string,
    callbackURL: "http://localhost:4000/auth/github/callback",
    // passReqToCallback: true
  },
  async(accessToken, refreshToken, profile, done) => {
    await insertUser(profile.provider, profile, done);
});

passport.serializeUser((user: UserClass, done) => {
    return done(null, user._id);
  });
  
passport.deserializeUser(async (id: string, done) => {
    if (!mongoose.isValidObjectId(id)) return done(null, null);
    const user = await User.findById(id);
    return done(null, user);
});

passport.use(passportGithubConfig)
