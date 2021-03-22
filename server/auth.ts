import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import "dotenv/config";

passport.use(
  new Strategy(
    {
      secretOrKey: process.env.JWT_SECRET_KEY!,
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter("auth"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
