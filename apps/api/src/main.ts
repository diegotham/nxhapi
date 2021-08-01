import Logger from './app/helper/logger';
import * as seeds from './app/seeds';
import * as db from './db';
import Server from './server';

(async () => {
  await db.initDb();

  seeds.initSeeds();

  await Server.init();
  await Server.start();
})();

process.on('SIGINT', () => {
  Logger.info(`Process ${process.pid} received a SIGTERM signal`);

  Server.stop().then((err) => {
    Logger.info(`Server stopped`);
    db.stopDb();
    process.exit(err ? 1 : 0);
  });
});
