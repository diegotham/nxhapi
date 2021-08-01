import { MongoMemoryServer } from 'mongodb-memory-server';
import * as mongoose from 'mongoose';
import Logger from './app/helper/logger';

let mongoDb: MongoMemoryServer;
let mongoPath: string;
let mongoMongoose: mongoose.Mongoose;

export async function initDb() {
  await initMongo();
  await initMongoose();
}

export async function stopDb() {
  mongoMongoose.disconnect();
  mongoDb.stop();
}

export async function initMongo() {
  mongoDb = await MongoMemoryServer.create({
    instance: {
      port: Number(process.env.MONGO_DB_PORT),
      dbName: process.env.MONGO_DB_NAME,
    },
  }).catch((e) => {
    Logger.error(`Mongodb Error`, e);
    throw e;
  });

  mongoPath = `${mongoDb.getUri()}${process.env.MONGO_DB_NAME}`;

  Logger.info(`Mongodb Path - ${mongoPath}`);
}

export async function initMongoose() {
  mongoMongoose = await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    dbName: process.env.MONGO_DB_NAME,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}
