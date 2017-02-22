/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const env = process.env.NODE_ENV || 'development'

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../app/bundle'),
    publicPath: '/bundle/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
  ],
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',
}

console.log('Build Env: ', env)
