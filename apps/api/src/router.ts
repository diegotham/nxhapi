import * as Hapi from '@hapi/hapi';
import HobbyRoutes from './app/api/hobbies/routes';
import UserRoutes from './app/api/users/routes';
import Logger from './app/helper/logger';

export default class Router {
  public static async loadRoutes(server: Hapi.Server): Promise<void> {
    Logger.info('Router - Start adding routes');

    await new UserRoutes().register(server);
    await new HobbyRoutes().register(server);

    Logger.info('Router - Finish adding routes');
  }
}
