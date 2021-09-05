import { prop, getModelForClass, modelOptions} from '@typegoose/typegoose';
import { ObjectID } from 'mongodb';
import { Field, ObjectType, ID } from 'type-graphql';

@modelOptions({
    schemaOptions:{
        timestamps: true,
        collection: 'users',
    },
    options: {
        customName: "User"
    }
})
@ObjectType('User', { description: "User Schema" })
export class UserClass {
    @Field(() => ID, { name: "id" })
    readonly _id!: ObjectID;

    @Field()
    @prop({ required: true })
    username: string;

    @Field({ nullable: true })
    @prop({ unique: true })
    email: string;

    @prop()
    hashedPassword?: string;

    @prop({ required: true, default: "Internal Auth" })
    provider: string;

    @prop()
    socialId?: string;

    @Field({ nullable: true })
    @prop()
    profileId?: string;

    @prop({ default: 1 })
    tokenVersion?: number;

    @prop({ default: false })
    confirmed: boolean;

}

const User = getModelForClass(UserClass);
export default User;