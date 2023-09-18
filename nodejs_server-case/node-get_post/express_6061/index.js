const express = require('express')
const app = express()

app.get('/get/data', (req, res) => {
  const data = { name: 'lencamo', age: 18 }

  res.send(JSON.stringify(data))
})

app.post('/post/data', (req, res) => {
  const data = { code: 1, message: 'Post请求成功!' }

  res.send(data)
})

app.listen(6061, () => {
  console.log('HTTP服务器启动：http://localhost:6061')
})
