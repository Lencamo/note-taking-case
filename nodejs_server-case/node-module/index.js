const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer()

// 监听是否有🤔浏览器请求
server.on('request', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081')

  // 1、parse方法✨
  const queryStr1 = 'name=lencamo&age=20'

  const queryObj1 = querystring.parse(queryStr1)
  console.log(queryObj1)

  // 2、stringify方法✨
  const queryObj2 = {
    name: 'lencamo',
    age: '20'
  }
  const queryStr2 = querystring.stringify(queryObj2)
  console.log(queryStr2)

  // 3、百分比编码（安全性角度）
  const queryStr = 'name=字母哥&age=26'

  const escaped = querystring.escape(queryStr)
  console.log(escaped)

  const unescaped = querystring.unescape(escaped)
  console.log(unescaped)

  res.end(JSON.stringify({ code: 1, message: 'success!' }))
})

server.listen(6061, () => {
  console.log('Server running at http://localhost:6061')
})
