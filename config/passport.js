import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.js';

passport.use(
  new GoogleStrategy(
    {
      // Options for Google Strategy
      clientID: process.env['GOOGLE_CLIENT_ID'],
      clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
      callbackURL: '/auth/google/callback',
      scope: ['email', 'profile'],
    },
    async function verify(accessToken, refreshToken, profile, done) {
      // Passport callback function
      // console.log(`accessToken: ${accessToken}`);
      // console.log(`refreshToken: ${refreshToken}`);
      // console.log(profile);
      let user = await User.findOne({ googleId: profile.id }).exec();
      if (!user) {
        user = await new User({
          username: profile.displayName,
          googleId: profile.id,
          picture: profile.photos[0].value,
        }).save();
        console.log(`New user with googleId: ${user.googleId} added to db`);
      } else {
        console.log(`User exists in db with googleId: ${user.googleId}`);
      }
      // Either user exists or we created a new user. Returning user
      done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id).exec();
  done(null, user);
});

export default passport;
