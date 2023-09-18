const http = require('http')
const url = require('url')

http
  .createServer((req, res) => {
    // 设置响应头解决跨域
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Content-Type', 'application/json')

    const data = { name: 'lencamo', age: 18 }

    if (url.parse(req.url, true).pathname === '/data') {
      res.end(JSON.stringify(data))
    }
  })
  .listen(6060, () => {
    console.log('原生node服务器启动：http://localhost:6060')
  })
