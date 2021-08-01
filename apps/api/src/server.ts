import * as Hapi from '@hapi/hapi';
import * as DotEnv from 'dotenv';
import * as joi from 'joi';
import Logger from './app/helper/logger';
import Plugin from './app/plugin';
import Router from './router';

export default class Server {
  private static _instance: Hapi.Server;

  public static async init(): Promise<Hapi.Server> {
    try {
      DotEnv.config({
        path: `${process.cwd()}/.env`,
      });

      Server._instance = new Hapi.Server({
        host: process.env.HOST,
        port: process.env.PORT,
      });

      Server._instance.validator(joi);

      await Plugin.registerAll(Server._instance);
      await Router.loadRoutes(Server._instance);

      return Server._instance;
    } catch (error) {
      Logger.info(`Server - Something wrong on init: ${error}`);

      throw error;
    }
  }

  public static async start(): Promise<Hapi.Server> {
    try {
      await Server._instance.start();

      Logger.info(
        `Server - Up and running at http://${process.env.HOST}:${process.env.PORT}`
      );
      Logger.info(
        `Server - Visit http://${process.env.HOST}:${process.env.PORT}/status for Status`
      );
      Logger.info(
        `Server - Visit http://${process.env.HOST}:${process.env.PORT}/documentation for Swagger docs`
      );

      return Server._instance;
    } catch (error) {
      Logger.info(`Server - Something wrong on start: ${error}`);

      throw error;
    }
  }

  public static stop(): Promise<Error | void> {
    Logger.info(`Server - Stopping execution`);

    return Server._instance.stop();
  }

  public static async recycle(): Promise<Hapi.Server> {
    Logger.info(`Server - Recycling instance`);

    await Server.stop();

    return await Server.start();
  }

  public static instance(): Hapi.Server {
    return Server._instance;
  }

  public static async inject(
    options: string | Hapi.ServerInjectOptions
  ): Promise<Hapi.ServerInjectResponse> {
    return await Server._instance.inject(options);
  }
}
