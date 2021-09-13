import { createConfirmationUrl } from '../utils/createConfirmationUrl';
import User, { UserClass } from '../entity/User';
import { RegisterInput } from './register/registerInput';
import { Mutation, Arg, Resolver } from 'type-graphql';
import argon2 from 'argon2';
import { sendEmail } from '../utils/sendEmail';

@Resolver()
export class RegisterResolver{
    @Mutation(() => UserClass)
    async register(
        @Arg("data"){ username, email, password } : RegisterInput,
    ): Promise<UserClass>{
        const hashedPassword = await argon2.hash(password); 
        const user = new User({
            username,
            email,
            hashedPassword
        }) 
        await user.save();

        await sendEmail(email, await createConfirmationUrl(user.id));

        return user;
    }
}