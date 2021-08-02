const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8081,
    contentBase: resolve('dist'),
    open: true,
    hot: true
  }
})