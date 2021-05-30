import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';

import api from 'api';
import { internalServerErrorMiddleware, resourceNotfoundMiddleware } from 'middlewares';

const app = express();

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors({ origin: true, credentials: false }),
  helmet({
    contentSecurityPolicy: false,
  }),
]);
  
app.use('/api', api);

app.use('/api', internalServerErrorMiddleware);

app.use('/api', resourceNotfoundMiddleware);

app.use(express.static(resolve(process.cwd(), 'dist')));

export default app;