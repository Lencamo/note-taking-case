const express = require('express')
const http = require('http')
const WebSocket = require('ws')

// 创建 HTTP 服务器并将其传递给 WebSocket 服务器
const server = http.createServer(express())
const wss = new WebSocket.Server({ server })

// 储存所有客户端的连接
const clients = new Set()

// 监听 WebSocket 连接
wss.on('connection', ws => {
  // 将新的连接加入到客户端集合中
  clients.add(ws)

  // 监听 WebSocket 消息
  ws.on('message', message => {
    // 将消息广播给所有客户端
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message, { binary: false }) // 不要使用二进制👀
      }
    })
  })

  // 监听 WebSocket 关闭事件
  ws.on('close', () => {
    // 将断开连接的客户端从集合中移除
    clients.delete(ws)
  })
})

// 启动服务器（注意这里所有server监听👀）
server.listen(3000, () => {
  console.log('服务器已启动')
})
