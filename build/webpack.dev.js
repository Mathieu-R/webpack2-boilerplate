var config = require('./webpack.base')
var webpack = require("webpack")

config.devtool = 'cheap-module-eval-source-map'
config.entry.app.unshift("./build/dev-client.js");

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
])

module.exports = config
