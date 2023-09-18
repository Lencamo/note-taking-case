var http = require('http')
var url = require('url')

// 状态码封装
function codeStatus(pathN) {
  var arr = ['/home', '/owner', '/api/data']
  return arr.includes(pathN) ? 200 : 404
}

// 返回信息封装
function dataRender(pathN) {
  switch (pathN) {
    case '/home':
      // 1、返回页面
      return `<html><h3>首页</h3></html>`
    case '/api/data':
      // 2、返回数据
      return JSON.stringify({ user: 'lencamo', age: 21 })
    default:
      return `<html><p>404 not found</p></html>`
  }
}

http
  .createServer((req, res) => {
    const pathName = url.parse(req.url).pathname
    res.writeHead(codeStatus(pathName), { 'Content-Type': 'text/html;charset=utf-8' })
    res.write(dataRender(pathName))

    res.end()
  })
  .listen(5050, () => {
    console.log('Server running at http://localhost:5050')
  })
