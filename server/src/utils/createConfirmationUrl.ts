import { v4 } from "uuid";
import { redis } from "../config/redis";

export const createConfirmationUrl = async (userId: string): Promise<string> => {
  const token = v4();
  await redis.set(token, userId, "ex", 60 * 60 * 24); // 1 day expiration

  return `http://localhost:3000/user/confirm/${token}`;
};