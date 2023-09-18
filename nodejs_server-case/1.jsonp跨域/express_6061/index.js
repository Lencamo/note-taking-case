const express = require('express')
// const data = require('../data.json')
const app = express()

app.get('/data', (req, res) => {
  const data = { name: 'lencamo', age: 18 }
  const callback = req.query.callback

  res.send(`${callback}(${JSON.stringify(data)})`)
})

app.listen(6061, () => {
  console.log('express服务器启动：http://localhost:6061')
})
