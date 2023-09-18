const http = require('http')
const url = require('url')

// 创建web服务器
http
  .createServer((req, res) => {
    const data = { name: 'lencamo', age: 18 }
    const callback = url.parse(req.url, true).query.callback

    if (url.parse(req.url, true).pathname === '/data') {
      res.end(`${callback}(${JSON.stringify(data)})`)
    }
  })
  .listen(6060, () => {
    console.log('原生node服务器启动：http://localhost:6060')
  })
