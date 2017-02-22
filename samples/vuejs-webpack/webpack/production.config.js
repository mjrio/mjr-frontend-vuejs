/* eslint-disable */

const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackBase = require('./base.config')

module.exports = merge.smart(webpackBase, {
  // production ready source maps
  devtool: 'sourcemap',

  module: {
    rules: [
      // extract less to file
      // for all none .vue files
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader',
        }),
      },
      // override vue-loader to extract css
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: ExtractTextPlugin.extract({
              use: 'css-loader!less-loader',
              fallback: 'vue-style-loader',
            }),
          },
        },
      },
    ],
  },

  plugins: [
    // extract css to file
    new ExtractTextPlugin('styles.css'),

    // uglify JS (obscure & minimize)
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),

    // minimize other files (css, ...)
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
})
