import { ChangePasswordResolver } from "./ChangePassword";
import { ConfirmUserResolver } from "./confirmUser";
import { ForgotPasswordResolver } from "./ForgotPassword";
import { HelloWorldResolver } from "./HelloWorldResolver";
import { LoginResolver } from "./Login";
import { RegisterResolver } from "./RegisterResolver";

export const Resolvers = [ HelloWorldResolver, RegisterResolver, ConfirmUserResolver, ChangePasswordResolver, ForgotPasswordResolver, LoginResolver ];