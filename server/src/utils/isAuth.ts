import { Context } from '../types/Context';
import { AuthChecker } from 'type-graphql';
import { AuthenticationError } from 'apollo-server-express';

const useAuth: AuthChecker<Context> = ({ context }) => {
  if (!context.currentUser) {
    throw new AuthenticationError('User not authenticated');
  }
  return true;
};
export default useAuth;