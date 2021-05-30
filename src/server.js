import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import helmet from 'helmet';
import path, { resolve } from 'path';

import api from 'api';
// import { isDev } from 'config';
import { internalServerErrorMiddleware, resourceNotfoundMiddleware } from 'middlewares';

const app = express();

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  helmet(),
]);

// cors({ origin: true, credentials: false }),

// if (isDev) {
  //   const { webpackMiddleware } = require('./middlewares');
  
  //   app.use(webpackMiddleware());
  // }
  
app.use('/api', api);

app.use('/api', internalServerErrorMiddleware);

app.use('/api', resourceNotfoundMiddleware);

app.use(express.static(resolve(process.cwd(), 'dist')));
// app.get('/*', async (_req, res) => {
//   console.log(cwd);
//   return res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
// });

export default app;