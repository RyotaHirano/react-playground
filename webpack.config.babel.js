const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
import { resolve } from 'path';
const rootResolve = pathname => resolve(__dirname, pathname);

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'assets/js/app.js'
  },
  externals: {
    //
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.scss', '.sass', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootResolve('src/index.html')}`,
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/style.[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: { configFile: '.eslintrc' }
          }
        ],
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  devServer: {
    contentBase: rootResolve('build'),
    publicPath: '/',
    hot: true,
    host: '0.0.0.0'
  }
};
