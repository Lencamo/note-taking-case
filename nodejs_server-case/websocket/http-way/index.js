const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.urlencoded({ extended: false })) // JSON数据处理👀
app.use(express.json())
app.use(cors())

// 定义一个数组，用于保存所有的消息
let messages = []

// 定义一个路由，用于获取所有的消息
app.get('/messages', (req, res) => {
  res.send(messages)
})

// 定义一个路由，用于添加一条新的消息
app.post('/messages', (req, res) => {
  const message = req.body.message
  if (message) {
    messages.push(message)
    console.log(messages)
  }
  res.sendStatus(200)
})

// 监听端口
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
