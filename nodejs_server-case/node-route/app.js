const server = require('./server')

const router = require('./router')
const api = require('./api')

// 提前注册（待合并）路由
server.use(router)
server.use(api)

server.start()
