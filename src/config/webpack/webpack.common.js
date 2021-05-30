import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import cspHtmlWebpackPlugin from 'csp-html-webpack-plugin';
import { src, build, publicDir } from 'config/webpack/paths';

const cspConfigPolicy = {
  'img-src': "*",
};

export default {
  // Where webpack looks to start building the bundle
  entry: [src + "/client/index.jsx"],

  // Where webpack outputs the assets and bundles
  output: {
    path: build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicDir + "/assets",
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: "RBC Ventures assignment",
      favicon: publicDir + "/assets/favicon.ico",
      template: publicDir + "/index.html", // template file
      filename: "index.html", // output file
    }),
    // new cspHtmlWebpackPlugin(cspConfigPolicy),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};