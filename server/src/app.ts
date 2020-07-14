import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import homeRoute from './routes/route_home';
import userRoute from './routes/route_user';
import vocabularyRoute from './routes/route_vocabulary';
import { errorHandler } from './middlewares/errorHandler';
import { logHandler } from './middlewares/logHandler';
import jwtHandler from './middlewares/jwtHandler';

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
    this.app.use(jwtHandler);
  };

  private logging = (): void => {
    this.app.use(logHandler);
    this.app.use(errorHandler);
  };

  // Mount Routes
  private mountRoutes(): void {
    this.app.use(homeRoute);
    this.app.use(userRoute);
    this.app.use(vocabularyRoute);
  }
}

export default new App().app;
