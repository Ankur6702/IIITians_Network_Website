import { confirmUserPrefix } from "../utils/constants/RedisPrefix";
import { Resolver, Mutation, Arg } from "type-graphql";

import { redis } from "../config/redis";
import User from "../entity/User";

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(@Arg("token") token: string): Promise<boolean> {
    const userId = await redis.get(confirmUserPrefix + token);

    if (!userId) {
      return false;
    }

    await User.findByIdAndUpdate(userId, {  confirmed: true });
    await redis.del(token);

    return true;
  }
}