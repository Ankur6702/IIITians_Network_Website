import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import argon2 from "argon2";
import { DocumentType } from '@typegoose/typegoose';
import { BeAnObject } from '@typegoose/typegoose/lib/types';
import User, { UserClass }from "../entity/User";
import { redis } from "../config/redis";
import { forgotPasswordPrefix } from "../utils/constants/RedisPrefix";
import { ChangePasswordInput } from "./changePassword/ChangePasswordInput";
import { Context } from "../types/Context";

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => UserClass, { nullable: true })
  async changePassword(
    @Arg("data")
    { token, password }: ChangePasswordInput,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Ctx() ctx: Context,
  ): Promise<DocumentType<UserClass, BeAnObject> | null> {
    const userId = await redis.get(forgotPasswordPrefix + token);

    if (!userId) {
      return null;
    }

    const user = await User.findById(userId);

    if (!user) {
      return null;
    }

    await redis.del(forgotPasswordPrefix + token);

    user.hashedPassword = await argon2.hash(password);

    await user.save();

    ctx.req.session.passport = { user: user.id };

    return user;
  }
}