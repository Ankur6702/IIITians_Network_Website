import { redis } from './redis';
import session from 'express-session';
import connectRedis from 'connect-redis';

// Express Session MiddleWare
const RedisStore = connectRedis(session)

export const sessionOption: session.SessionOptions = {
    store: new RedisStore({
      client: redis ,
    }),
    name: "qid",
    secret: "jas5s56su",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
};