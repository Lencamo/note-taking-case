const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// // 创建 HTTP 服务器并将其传递给 WebSocket 服务器
const server = http.createServer(express())
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:8081' // 跨域问题（使用cors包行不通）
  }
})

// 监听 WebSocket 连接
io.on('connection', socket => {
  // 自动处理（add）👀

  // 监听 WebSocket 消息
  socket.on('message', msg => {
    // 广播消息给所有连接的客户端
    io.emit('message', msg) // 简化🤔
  })

  // 监听断开连接事件
  socket.on('disconnect', () => {
    // 自动处理（delete）👀
  })
})

// 启动服务器
server.listen(3000, () => {
  console.log('服务器已启动')
})
