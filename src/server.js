import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';

import api from 'api';

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

app.use('/api', (req, res, next) => {
  if (req.method !== 'OPTIONS') {
    res.status(400).send('Invalid endpoint. Go to /');
  } else {
    next();
  }
});

app.use(express.static(resolve(process.cwd(), 'dist', 'client')));

app.use('*', (req, res) => {
  if (req.method !== 'OPTIONS') {
    res.status(400).send('Invalid endpoint. Go to /');
  }
});

export default app;