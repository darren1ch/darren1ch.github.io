const common = require('./webpack.config')
const merge = require('webpack-merge')

module.exports = merge(common, {
  devtool: 'inline-source-map',
})