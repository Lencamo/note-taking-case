const express = require('express')
const app = express()

app.use((req, res, next) => {
  // console.log(req)
  console.log('6061-http服务器收到' + req.get('origin') + '发来的数据请求！该请求将发往' + req.get('host'))

  next()
})

app.get('/data', (req, res) => {
  const data = { name: 'lencamo', age: 18 }

  res.send(JSON.stringify(data))
})

app.listen(6061, () => {
  console.log('HTTP服务器启动：http://localhost:6061')
})
