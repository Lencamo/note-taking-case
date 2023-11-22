import { createApp } from './src/app/server/app.js'
import { renderToString } from 'vue/server-renderer'

import createRouter from './src/router/index.js'
import { createMemoryHistory } from 'vue-router'

import { createPinia } from 'pinia'

const express = require('express')
const server = express()

// 静态资源（js/img……）
server.use(express.static('build'))

// express路由
server.get('/*', async (req, res, next) => {
  const app = createApp()

  // pinia注册
  const pinia = createPinia()
  app.use(pinia)

  // router注册
  const router = createRouter(createMemoryHistory())
  app.use(router)
  router.push(req.url || '/')
  await router.isReady()

  // 网页
  const html = await renderToString(app)
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
      <body>
        <div id="app">${html}</div>
        <script src="/client/client_bundle.js"></script>
      </body>
    </html>
    `)
})

server.listen(3000, () => {
  console.log('server is run on 3000 ~')
})
