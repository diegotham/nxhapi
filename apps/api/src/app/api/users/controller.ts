import CrudController from '../../common/crud-controller';
import { IUser } from '../../model/user';
import UserResolver from '../users/resolver';

export default class UserController extends CrudController<IUser> {
  constructor(id?: string) {
    super(id, new UserResolver());
  }
}
