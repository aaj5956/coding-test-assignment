import { createServer } from 'http';
import {
  NODE_ENV,
  PORT,
} from 'config';

const root = async () => {
  try {
    const { default: server } = await import('./server');

    createServer(server).listen(PORT, () => {
      console.log(`Starting the ${NODE_ENV} server...`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

root();