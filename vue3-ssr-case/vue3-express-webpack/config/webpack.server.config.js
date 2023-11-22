const path = require('path')

const nodeExternals = require('webpack-node-externals')

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')

module.exports = merge(commonConfig, {
  target: 'node', // 指定打包运行环境
  externals: [nodeExternals()], // 打包时忽略node_modules文件夹中的所有模块

  mode: 'development',
  entry: path.join(__dirname, '../index.js'),
  output: {
    path: path.join(__dirname, '../build/server'),
    filename: 'server_bundle.js'
  }
})
