const fs = require('fs')

function render(res, data, type = '') {
  res.writeHead(200, {
    'Content-Type': `${type ? type : 'application/json'};charset=utf8`
  })
  res.write(data)
  res.end()
}

const apiRoute = {
  '/api/login_get': (req, res) => {
    // render(res, `{"ok":1}`)
    const myURL = new URL(req.url, 'http://127.0.0.1')

    // get🚩方法
    if (myURL.searchParams.get('username') === 'lencamo' && myURL.searchParams.get('password') === '123') {
      render(res, `{"ok":1}`)
    } else {
      render(res, `{"ok":0}`)
    }
  },

  '/api/login_post': (req, res) => {
    // 收集数据
    var post = ''
    req.on('data', (chunk) => {
      post += chunk
    })
    req.on('end', () => {
      console.log(post)
      // 将数据还原为json格式
      post = JSON.parse(post)
      if (post.username === 'lencamo' && post.password === '123') {
        render(res, `{"ok":1}`)
      } else {
        render(res, `{"ok":0}`)
      }
    })
  }
}

module.exports = apiRoute
