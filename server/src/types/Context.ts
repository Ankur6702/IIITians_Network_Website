import { Request, Response } from 'express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import {  buildContext, PassportContext } from 'graphql-passport';
import { UserClass } from '../entity/User';
import { ObjectID } from 'mongodb';
import { ApolloError } from 'apollo-server-express';

declare module 'express-session' {
  export interface SessionData {
    passport: { [key: string]: any };
  }
}

interface ICurrentUser extends UserClass {
    id: ObjectID;
}

interface IContextRequest extends Request {
    logout: () => void;
}

export interface Context
  extends PassportContext<UserClass, any, any, IContextRequest> {
  res: Response;
  currentUser: ICurrentUser;
}

const contextFn = ({ req, res, connection }: ExpressContext): Context => {
    let context = connection && connection.context;
    const currentUser = req.session.passport;
    // console.log(currentUser);
    if (!context) context = buildContext({ req, res });
    // if (!currentUser) {
    //   currentUser = context.getUser();
    // }
    // console.log(currentUser);
    // console.log(context.req.session)
    try {
      return {
        ...context,
        currentUser,
      };
    } catch (err: any) {
      throw new ApolloError(err);
    }
  };
  
export default contextFn;