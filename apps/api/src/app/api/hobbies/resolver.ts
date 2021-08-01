import Repository from '../../common/base-repository';
import Resolver from '../../common/base-resolver';
import { hobbyModel, IHobby } from '../../model/hobby';

export default class HobbyResolver extends Resolver<IHobby> {
  constructor() {
    super(new Repository(hobbyModel));
  }
}
