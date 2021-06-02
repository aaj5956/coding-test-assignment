/* eslint-disable no-console */
import { createServer } from 'http';
import {
  NODE_ENV,
  PORT,
} from 'config';
import server from './server';

const root = async () => {
  try {
    createServer(server).listen(PORT, () => {
      console.log(`The ${NODE_ENV} server has started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

root();