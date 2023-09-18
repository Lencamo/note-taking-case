const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 一、项目启动配置
    open: true,
    host: 'localhost',
    port: 8081, // 默认为8080
    https: false,

    // 二、请求代理配置
    proxy: {
      '/ren': {
        target: 'http://localhost:6061',
        ws: true, // 支持webSocket
        changeOrigin: true,
        pathRewrite: {
          '^/ren': ''
        }
      }
    }
  }
})
