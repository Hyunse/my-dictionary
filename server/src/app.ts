import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import homeRoute from './routes/route_home';
import userRoute from './routes/route_user';
import { errorHandler } from './middlewares/errorHandler';
import { logHandler } from './middlewares/logHandler';

class App {
  public app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.mountRoutes();
    this.logging();
  }

  // Middlewares
  private middlewares = (): void => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(logger('dev'));
    this.app.use(helmet());
  };

  private logging = (): void => {
    this.app.use(logHandler);
    this.app.use(errorHandler);
  }

  // Mount Routes
  private mountRoutes(): void {
    this.app.use(homeRoute);
    this.app.use(userRoute);
  }
}

export default new App().app;
