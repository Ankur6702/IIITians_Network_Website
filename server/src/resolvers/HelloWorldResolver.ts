import User ,{ UserClass } from './../entity/User';
import { Query, Resolver, Authorized } from 'type-graphql';
import { DocumentType } from '@typegoose/typegoose';
import { BeAnObject } from '@typegoose/typegoose/lib/types';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello(): string {
    return 'hi!';
  }

  @Authorized()
  @Query(() => [UserClass])
  async users(): Promise<DocumentType<UserClass, BeAnObject>[]> {
    const users = await User.find({});
    return users;
  }
}