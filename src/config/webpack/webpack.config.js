import { merge } from 'webpack-merge';

import devEnvConfig from 'config/webpack/webpack.config.dev';
import prodEnvConfig from 'config/webpack/webpack.config.prod';
import common from 'config/webpack/webpack.common';

const envs = {
  development: 'dev',
  production: 'prod',
};
/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development'];


export default merge(common, env === 'dev' ? devEnvConfig : prodEnvConfig);
