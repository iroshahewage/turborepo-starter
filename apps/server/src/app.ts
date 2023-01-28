import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import { stream } from '@kd/logger';
import path from 'path';
import favicon from 'serve-favicon';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import responseTime from 'response-time';
import config from 'config';

function createServer(): Express {
  const app = express();

  // middleware
  app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

  app.use(
    cors({
      origin: [`${config.get('cors.origin')}`],
    })
  );
  app.use(morgan('dev', { stream }));
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(hpp());
  app.use(cookieParser());
  app.use(
    compression({
      level: 6,
      threshold: 10000, // 10kb = 10000B
    })
  );

  if (config.get('app.node_nev') !== 'prod') {
    app.use(responseTime());
  }

  app.get('/', (req: Request, res: Response) => {
    res.send('Typescript And Express');
  });

  return app;
}

export default createServer;
