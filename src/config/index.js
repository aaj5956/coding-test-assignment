const {
  NODE_ENV = 'development',
  PORT = 3000,
} = process.env;

const isDev = NODE_ENV !== 'production';

module.exports = {
  NODE_ENV,
  PORT,
  isDev,
};
