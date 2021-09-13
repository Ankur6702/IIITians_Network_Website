import User, { UserClass } from "../entity/User";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { DocumentType } from '@typegoose/typegoose';
import { BeAnObject } from '@typegoose/typegoose/lib/types';
import { Context } from "src/types/Context";
import argon2 from "argon2";

@Resolver()
export class LoginResolver{
    @Mutation(() => UserClass, { nullable: true })
    async login(
        @Arg("email") email: string, 
        @Arg("password") password: string, 
        @Ctx() ctx: Context
    ): Promise<DocumentType<UserClass, BeAnObject> | null>{
        const user = await User.findOne({ email });

        if(!user){
            return null;
        }

        const valid = await argon2.verify(user.hashedPassword as string, password);

        if(!valid){
            return null;
        }

        if(!user.confirmed){
            return null;
        }

        ctx.req.session.passport = { user: user.id };
        console.log(ctx.req.session);
        return user;
    }
}