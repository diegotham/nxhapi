import Repository from '../../common/base-repository';
import Resolver from '../../common/base-resolver';
import { IUser, userModel } from '../../model/user';

export default class UserResolver extends Resolver<IUser> {
  constructor() {
    super(new Repository(userModel));
  }
}
