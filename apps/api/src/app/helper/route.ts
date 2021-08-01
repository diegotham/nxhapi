import * as Hapi from '@hapi/hapi';

interface IRoute {
  register(server: Hapi.Server): Promise<void>;
}

export default IRoute;
