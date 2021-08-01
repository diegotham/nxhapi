import * as Hapi from '@hapi/hapi';
import Logger from '../../helper/logger';
import IRoute from '../../helper/route';
import HobbyController from './controller';
import validate from './validate';

export default class HobbyRoutes implements IRoute {
  public async register(server: Hapi.Server): Promise<void> {
    return new Promise((resolve) => {
      Logger.info('HobbyRoutes - Start adding hobby routes');

      const controller = new HobbyController('HOBBY_ID');

      server.route([
        {
          method: 'POST',
          path: '/api/hobbies',
          options: {
            handler: controller.create,
            validate: validate.create,
            description: 'Method that creates a new hobby.',
            tags: ['api', 'hobbies'],
            auth: false,
          },
        },
        {
          method: 'PUT',
          path: `/api/hobbies/{${controller.id}}`,
          options: {
            handler: controller.updateById,
            validate: validate.updateById,
            description: 'Method that updates a hobby by its id.',
            tags: ['api', 'hobbies'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: `/api/hobbies/{${controller.id}}`,
          options: {
            handler: controller.getById,
            validate: validate.getById,
            description: 'Method that gets a hobby by its id.',
            tags: ['api', 'hobbies'],
            auth: false,
          },
        },
        {
          method: 'GET',
          path: '/api/hobbies',
          options: {
            handler: controller.getAll,
            description: 'Method that gets all hobbies.',
            tags: ['api', 'hobbies'],
            auth: false,
          },
        },
        {
          method: 'DELETE',
          path: `/api/hobbies/{${controller.id}}`,
          options: {
            handler: controller.deleteById,
            validate: validate.deleteById,
            description: 'Method that deletes a hobby by its id.',
            tags: ['api', 'hobbies'],
            auth: false,
          },
        },
      ]);

      Logger.info('HobbyRoutes - Finish adding hobby routes');

      resolve();
    });
  }
}
