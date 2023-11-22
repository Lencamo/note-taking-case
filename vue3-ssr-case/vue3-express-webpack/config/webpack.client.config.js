const path = require('path')

const nodeExternals = require('webpack-node-externals')
const { DefinePlugin } = require('webpack')

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')

module.exports = merge(commonConfig, {
  target: 'web', // 指定打包运行环境
  // externals: [nodeExternals()], // 打包时忽略node_modules文件夹中的所有模块

  mode: 'development',
  entry: path.join(__dirname, '../src/app/client/main.js'),
  output: {
    path: path.join(__dirname, '../build/client'),
    filename: 'client_bundle.js'
  },

  plugins: [
    // 控制台警告处理
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
})
