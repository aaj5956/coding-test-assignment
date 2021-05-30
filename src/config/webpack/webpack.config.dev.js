import webpack from 'webpack';
import { build } from 'config/webpack/paths';

export default {
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: build,
    open: true,
    compress: true,
    hot: true,
    port: 3001,
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
};
