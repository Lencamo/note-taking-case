const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()

// 1、解决请求跨域问题
app.use(cors())

// 注意使用时机🤔
app.use((req, res, next) => {
  // console.log(req)
  console.log('5050代理服务器收到' + req.get('origin') + '发来的数据请求！该请求将发往' + req.get('host'))

  next()
})

// 2、将请求进行代理转发
// 将以/ren（ren这一类型的😄请求）开头的请求，代理到 http://localhost:6061
app.use(
  '/ren',
  createProxyMiddleware({
    target: 'http://localhost:6061',
    changeOrigin: true,
    // 将 http://localhost:8081/ren/data/ 代理到 http://localhost:6061/data/
    // 【去掉/ren这个接口标识】
    pathRewrite: {
      '^/ren': ''
    }
  })
)

app.listen(5050, () => {
  console.log('代理服务器启动：http://localhost:5050')
})
