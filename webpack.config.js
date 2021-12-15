const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

let mode = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;
console.log(`${mode} mode`);

module.exports = {
  mode: mode,
  entry: {
    scripts: path.resolve(__dirname, './src/index.js'),
    user: path.resolve(__dirname, './src/js/user.js'),
  },

  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },

  // Optimization
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },

  // Performance
  performance: {
    hints: false
  },

  // Source maps
  devtool: isDev ? 'source-map' : false,

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.pug"),
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: `./css/[contenthash].css`,
    }),
    new StylelintPlugin(),
  ],

  // Modules
  module: {
    rules: [

      // pug
      {
        test: /\.pug$/i,
        loader: "pug-loader",
      },

      // scss
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },

      // js
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }
      },

      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // Dev-Server
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    watchFiles: ['src/pug/**/*'],
    compress: true,
    port: 3000,
  },
};
