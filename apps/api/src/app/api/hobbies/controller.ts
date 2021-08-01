import CrudController from '../../common/crud-controller';
import { IHobby } from '../../model/hobby';
import HobbyResolver from './resolver';

export default class HobbyController extends CrudController<IHobby> {
  constructor(id?: string) {
    super(id, new HobbyResolver());
  }
}
