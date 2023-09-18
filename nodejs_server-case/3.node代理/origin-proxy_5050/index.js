const http = require('http')
const url = require('url')
const https = require('https')

// 创建web服务器
http
  .createServer((req, res) => {
    const urlobj = url.parse(req.url, true)

    // res.writeHead(200, {
    //   'content-type': 'application',
    //   // 跨域问题解决方案：CORS头
    //   'Access-Control-Allow-Origin': '*'
    // })

    switch (urlobj.pathname) {
      case '/ren/data':
        // 方式1：传res对象
        // http_get(response)

        // 方式2：异步编程🍗（回调函数思想）
        // 作为客户端，去猫眼要数据
        http_get((data) => {
          res.end(data)
        })

        break
      default:
        res.end('404')
        break
    }
  })
  .listen(8081, () => {
    console.log('Server running at http://localhost:8081')
  })

// function http_get(response) {
function http_get(cb) {
  var data = ''
  // 使用node✨发起get请求（帮助前端跨域获取“猫眼”数据）
  https.get('http://localhost:6061/data', (res) => {
    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      // response.end(data)
      cb(data)
    })
  })
}
