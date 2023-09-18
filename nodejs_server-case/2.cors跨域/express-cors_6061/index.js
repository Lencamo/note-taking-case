const express = require('express')
const app = express()

// cors包解决跨域
const cors = require('cors')
app.use(cors())

app.get('/data', (req, res) => {
  const data = { name: 'lencamo', age: 18 }

  res.send(JSON.stringify(data))
})

app.listen(6061, () => {
  console.log('express服务器启动：http://localhost:6061')
})
