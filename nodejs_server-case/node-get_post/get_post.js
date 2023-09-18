const http = require('http')
const url = require('url')

const server = http.createServer()

// 监听是否有🤔浏览器请求
server.on('request', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'GET') {
    http.get('http://localhost:6061/get/data', (response) => {
      // 数据流方式返回数据（非阻塞式）
      let data = ''
      response.on('data', (chunk) => {
        data += chunk
      })

      response.on('end', () => {
        res.end(data)
      })
    })
  }

  if ((req.method = 'POST')) {
    // 1、option配置项
    let options = {
      hostname: 'localhost',
      port: 6061,
      path: '/post/data',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // 2、获取body数据（express中就简单的多，直接 😒req.body）
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk
    })
    req.on('end', () => {
      // 3、发起post请求
      let require = http.request(options, (response) => {
        let data = ''
        response.on('data', (chunk) => {
          data += chunk
        })
        response.on('end', () => {
          // 返回代理获取的数据
          res.end(data)
        })
      })
      require.write(postData)
      require.end()
    })
  }
})

server.listen(5050, () => {
  console.log('Server running at http://localhost:5050')
})
