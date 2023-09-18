const http = require('http')

// 实现路由合并
const Router = {}
function use(obj) {
  Object.assign(Router, obj)
}

function start() {
  http
    .createServer((req, res) => {
      const myURL = new URL(req.url, 'http://127.0.0.1')

      // 1、细节一
      // 使用try...catch达到类似switch中default🚩的效果
      try {
        Router[myURL.pathname](req, res)
      } catch (error) {
        Router['/404'](req, res)
      }

      // res.end()
    })
    .listen(3000, function () {
      console.log('Server running at http://localhost:3000')
    })
}

exports.start = start
exports.use = use
